"""Автопоиск вебки стримера: находим лицо, которое стоит на месте весь клип.

Лица персонажей в игре двигаются и мелькают, а лицо стримера в вебке почти
неподвижно. Берём ~8 кадров из клипа, ищем лица (Haar-каскад из OpenCV, без
скачиваний), и выбираем то, что повторяется в одном месте в большинстве кадров.
Вокруг лица вырезаем крупный план под пропорции верхней панели ролика.
"""
from __future__ import annotations

import logging
import subprocess
import tempfile
from pathlib import Path

log = logging.getLogger("facecam")

Box = tuple[float, float, float, float]  # x, y, w, h в долях кадра


def _frames(src: Path, offset: float, dur: float, n: int, tmp: Path) -> list[Path]:
    fps = n / max(dur, 1.0)
    subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(src),
                    "-ss", f"{offset:.2f}", "-t", f"{dur:.2f}", "-vf", f"fps={fps:.4f},scale=1280:-2",
                    str(tmp / "f_%02d.png")], check=True)
    return sorted(tmp.glob("f_*.png"))


def detect_faces(images: list) -> list[list[Box]]:
    import cv2

    cascades = [cv2.CascadeClassifier(cv2.data.haarcascades + name) for name in
                ("haarcascade_frontalface_default.xml", "haarcascade_frontalface_alt2.xml")]
    out = []
    for img in images:
        h, w = img.shape[:2]
        gray = cv2.equalizeHist(cv2.cvtColor(img, cv2.COLOR_BGR2GRAY))
        m = int(h * 0.04)
        boxes: list[Box] = []
        for cascade in cascades:
            found = cascade.detectMultiScale(gray, scaleFactor=1.08, minNeighbors=5, minSize=(m, m))
            boxes += [(x / w, y / h, bw / w, bh / h) for x, y, bw, bh in found]
        out.append(boxes)
    return out


def stable_face(per_frame: list[list[Box]], min_share: float = 0.4,
                hint: Box | None = None) -> Box | None:
    """Лицо стримера: стоит на одном месте в большинстве кадров.

    Если таких лиц несколько (в вебке гости, в кадре ещё чья-то камера),
    берём то, что ближе к прошлому положению стримера (hint), а без подсказки —
    самое крупное: стример обычно ближе всех к камере."""
    frames = list(per_frame)
    if not frames:
        return None
    need = max(2, round(len(frames) * min_share))
    clusters: list[list[Box]] = []
    for cand in (b for f in frames for b in f):
        cx, cy = cand[0] + cand[2] / 2, cand[1] + cand[3] / 2
        group = []
        for f in frames:
            for b in f:
                bx, by = b[0] + b[2] / 2, b[1] + b[3] / 2
                if abs(bx - cx) < 0.05 and abs(by - cy) < 0.05 and 0.6 < b[3] / cand[3] < 1.6:
                    group.append(b)
                    break  # не больше одного совпадения на кадр
        if len(group) >= need:
            clusters.append(group)
    if not clusters:
        return None
    avg = [tuple(sum(b[i] for b in g) / len(g) for i in range(4)) for g in clusters]
    # одинаковые лица из разных кандидатов схлопываем
    uniq: list[tuple[Box, int]] = []
    for box, g in zip(avg, clusters):
        cx, cy = box[0] + box[2] / 2, box[1] + box[3] / 2
        for i, (u, n) in enumerate(uniq):
            if abs(u[0] + u[2] / 2 - cx) < 0.05 and abs(u[1] + u[3] / 2 - cy) < 0.05:
                if len(g) > n:
                    uniq[i] = (box, len(g))
                break
        else:
            uniq.append((box, len(g)))
    if hint is not None:
        hx, hy = hint[0] + hint[2] / 2, hint[1] + hint[3] / 2
        near = [(u, n) for u, n in uniq
                if abs(u[0] + u[2] / 2 - hx) < 0.08 and abs(u[1] + u[3] / 2 - hy) < 0.08]
        if near:
            return max(near, key=lambda un: un[1])[0]  # type: ignore[return-value]
    return max(uniq, key=lambda un: un[0][2] * un[0][3] * (0.5 + un[1] / len(frames)))[0]  # type: ignore[return-value]


def webcam_rect(images: list, face: Box) -> Box:
    """Где кончается вебка вокруг лица (доли кадра).

    Внутри вебки картинка почти неподвижна (двигается только стример), а игра
    вокруг постоянно меняется. Идём от лица в каждую сторону, пока не начнётся
    «движущаяся» зона, — это край вебки. Если игра в этот момент стоит,
    ищем неподвижную прямую линию (рамку). Если не нашли ничего — не отходим
    от лица дальше разумного, чтобы не захватить лишнего."""
    import cv2
    import numpy as np

    h0, w0 = images[0].shape[:2]
    W = 480
    H = int(h0 * W / w0)
    grays = [cv2.GaussianBlur(cv2.cvtColor(cv2.resize(im, (W, H)), cv2.COLOR_BGR2GRAY), (5, 5), 0)
             for im in images]
    stack = np.stack(grays).astype(np.float32)
    moving = stack.std(axis=0) > 6                        # меняется от кадра к кадру
    edges = np.mean([cv2.Canny(g, 40, 120) > 0 for g in grays], axis=0) >= 0.75  # неподвижные линии
    fx, fy, fw, fh = face[0] * W, face[1] * H, face[2] * W, face[3] * H
    cols = slice(int(max(0, fx - fw)), int(min(W, fx + 2 * fw)))   # полоса вокруг лица
    rows = slice(int(max(0, fy - fh)), int(min(H, fy + 2 * fh)))

    def scan(seq, line_moving, line_edge):
        """Первая позиция, где начинается движение (5 линий подряд) или стоит рамка."""
        seq = list(seq)
        for i, p in enumerate(seq):
            ahead = seq[i:i + 5]
            if len(ahead) == 5 and all(line_moving(q) >= 0.5 for q in ahead):
                return p
        for p in seq:
            if line_edge(p) >= 0.6:
                return p
        return None

    row_mov = lambda y: moving[y, cols].mean()   # noqa: E731
    row_edge = lambda y: max(edges[max(0, y - 1):y + 2, cols].mean(axis=1))  # noqa: E731
    col_mov = lambda x: moving[rows, x].mean()   # noqa: E731
    col_edge = lambda x: max(edges[rows, max(0, x - 1):x + 2].mean(axis=0))  # noqa: E731

    gap = 0.25
    bottom = scan(range(int(fy + fh * (1 + gap)), H), row_mov, row_edge)
    top = scan(range(int(fy - fh * gap), -1, -1), row_mov, row_edge)
    right = scan(range(int(fx + fw * (1 + gap)), W), col_mov, col_edge)
    left = scan(range(int(fx - fw * gap), -1, -1), col_mov, col_edge)
    # не нашли край — не уходим от лица дальше разумного
    bottom = bottom if bottom is not None else min(H, int(fy + fh * 2.2))
    top = top + 1 if top is not None else max(0, int(fy - fh * 0.9))
    right = right if right is not None else min(W, int(fx + fw * 2.5))
    left = left + 1 if left is not None else max(0, int(fx - fw * 1.5))
    return (left / W, top / H, (right - left) / W, (bottom - top) / H)


def face_crop(face: Box, src_aspect: float, panel_aspect: float, zoom: float,
              bounds: Box = (0.0, 0.0, 1.0, 1.0)) -> list[float]:
    """Прямоугольник вокруг лица (доли кадра) с пропорциями панели, не выходящий
    за bounds (рамку вебки). src_aspect = ширина/высота исходника,
    panel_aspect = ширина/высота панели."""
    fx, fy, fw, fh = face
    bx, by, bw, bh = bounds
    k = panel_aspect / src_aspect                # cw = ch * k (в долях кадра)
    ch = min(fh * zoom, bh)
    cw = ch * k
    if cw > bw:                                  # не влезает по ширине — уменьшаем
        cw = bw
        ch = cw / k
    cx = fx + fw / 2
    cy = fy + fh / 2 + ch * 0.08                 # лицо чуть выше центра — видно плечи
    x = min(max(cx - cw / 2, bx), bx + bw - cw)
    y = min(max(cy - ch / 2, by), by + bh - ch)
    return [round(float(v), 4) for v in (x, y, cw, ch)]


def find_facecam(src: Path, offset: float, dur: float, panel_aspect: float,
                 zoom: float = 4.0, samples: int = 8, hint: Box | None = None,
                 found: dict | None = None) -> list[float] | None:
    """Кроп крупного плана. В found (если передан) кладётся найденное лицо —
    по нему в следующий раз узнаём того же стримера среди нескольких людей."""
    try:
        import cv2
    except ImportError:
        log.warning("opencv не установлен — автопоиск вебки выключен")
        return None
    with tempfile.TemporaryDirectory() as td:
        try:
            paths = _frames(src, offset, dur, samples, Path(td))
        except subprocess.CalledProcessError:
            return None
        images = [img for img in (cv2.imread(str(p)) for p in paths) if img is not None]
        if not images:
            return None
        h, w = images[0].shape[:2]
        face = stable_face(detect_faces(images), hint=hint)
        if face is None:
            return None
        rect = webcam_rect(images, face)
    log.info("вебка: %s, лицо: %s", [round(v, 3) for v in rect], [round(v, 3) for v in face])
    if found is not None:
        found["face"] = [round(float(v), 4) for v in face]
    return face_crop(face, w / h, panel_aspect, zoom, rect)
