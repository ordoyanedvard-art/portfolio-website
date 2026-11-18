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
                    "-ss", f"{offset:.2f}", "-t", f"{dur:.2f}", "-vf", f"fps={fps:.4f},scale=960:-2",
                    str(tmp / "f_%02d.png")], check=True)
    return sorted(tmp.glob("f_*.png"))


def detect_faces(images: list) -> list[list[Box]]:
    import cv2

    cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
    out = []
    for img in images:
        h, w = img.shape[:2]
        gray = cv2.equalizeHist(cv2.cvtColor(img, cv2.COLOR_BGR2GRAY))
        m = int(h * 0.06)
        found = cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=6, minSize=(m, m))
        out.append([(x / w, y / h, bw / w, bh / h) for x, y, bw, bh in found])
    return out


def stable_face(per_frame: list[list[Box]], min_share: float = 0.4) -> Box | None:
    """Лицо, которое в большинстве кадров стоит примерно на одном месте."""
    frames = [f for f in per_frame]
    if not frames:
        return None
    best: list[Box] = []
    for cand in (b for f in frames for b in f):
        cx, cy = cand[0] + cand[2] / 2, cand[1] + cand[3] / 2
        group = []
        for f in frames:
            for b in f:
                bx, by = b[0] + b[2] / 2, b[1] + b[3] / 2
                if abs(bx - cx) < 0.05 and abs(by - cy) < 0.05 and 0.6 < b[3] / cand[3] < 1.6:
                    group.append(b)
                    break  # не больше одного совпадения на кадр
        if len(group) > len(best):
            best = group
    if len(best) < max(2, round(len(frames) * min_share)):
        return None
    n = len(best)
    return tuple(sum(b[i] for b in best) / n for i in range(4))  # type: ignore[return-value]


def face_crop(face: Box, src_aspect: float, panel_aspect: float, zoom: float) -> list[float]:
    """Прямоугольник вокруг лица (доли кадра) с пропорциями панели.
    src_aspect = ширина/высота исходника, panel_aspect = ширина/высота панели."""
    fx, fy, fw, fh = face
    ch = min(1.0, fh * zoom)                    # высота кропа в долях высоты
    cw = ch * panel_aspect / src_aspect         # ширина в долях ширины
    if cw > 1.0:
        cw, ch = 1.0, src_aspect / panel_aspect
    cx = fx + fw / 2
    cy = fy + fh / 2 + ch * 0.08                # лицо чуть выше центра — видно плечи
    x = min(max(cx - cw / 2, 0.0), 1.0 - cw)
    y = min(max(cy - ch / 2, 0.0), 1.0 - ch)
    return [round(float(v), 4) for v in (x, y, cw, ch)]


def find_facecam(src: Path, offset: float, dur: float, panel_aspect: float,
                 zoom: float = 2.6, samples: int = 8) -> list[float] | None:
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
        face = stable_face(detect_faces(images))
    if face is None:
        return None
    return face_crop(face, w / h, panel_aspect, zoom)
