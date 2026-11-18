"""Монтаж: расшифровка речи, субтитры в стиле TikTok, вертикальный кадр 9:16."""
from __future__ import annotations

import logging
import subprocess
from dataclasses import dataclass
from pathlib import Path

log = logging.getLogger("editor")


@dataclass
class Word:
    start: float
    end: float
    text: str


# --- расшифровка ---------------------------------------------------------------
class Transcriber:
    def __init__(self, cfg: dict):
        self.cfg = cfg
        self._model = None

    def _load(self):
        if self._model is None:
            from faster_whisper import WhisperModel  # тяжёлый импорт — лениво
            device = self.cfg["device"]
            if device == "auto":
                try:
                    import ctranslate2
                    device = "cuda" if ctranslate2.get_cuda_device_count() > 0 else "cpu"
                except Exception:
                    device = "cpu"
            compute = self.cfg["compute_type"] if device == "cpu" else "float16"
            log.info("загружаю whisper %s на %s", self.cfg["model"], device)
            self._model = WhisperModel(self.cfg["model"], device=device, compute_type=compute)
        return self._model

    def words(self, wav: Path) -> tuple[list[Word], str]:
        segments, _info = self._load().transcribe(
            str(wav), word_timestamps=True, vad_filter=True, language=self.cfg["language"])
        words: list[Word] = []
        for seg in segments:
            for w in seg.words or []:
                t = w.word.strip()
                if t:
                    words.append(Word(w.start, w.end, t))
        return words, " ".join(w.text for w in words)


# --- субтитры (ASS) ------------------------------------------------------------
def _ts(t: float) -> str:
    t = max(0.0, t)
    h, rem = divmod(t, 3600)
    m, s = divmod(rem, 60)
    return f"{int(h)}:{int(m):02d}:{s:05.2f}"


def _esc(text: str) -> str:
    return text.replace("\\", "").replace("{", "(").replace("}", ")")


def chunk_words(words: list[Word], per_line: int, max_gap: float = 0.6) -> list[list[Word]]:
    chunks: list[list[Word]] = []
    cur: list[Word] = []
    for w in words:
        if cur and (len(cur) >= per_line or w.start - cur[-1].end > max_gap):
            chunks.append(cur)
            cur = []
        cur.append(w)
    if cur:
        chunks.append(cur)
    return chunks


def build_ass(words: list[Word], r: dict, pos: tuple[int, int] | None = None) -> str:
    """pos=None — субтитры снизу (над интерфейсом соцсетей); pos=(x, y) — центр строки в точке."""
    W, H = r["width"], r["height"]
    margin_v = int(H * 0.27)
    align = 5 if pos else 2
    anchor = f"\\pos({pos[0]},{pos[1]})" if pos else ""
    head = (
        "[Script Info]\nScriptType: v4.00+\n"
        f"PlayResX: {W}\nPlayResY: {H}\nWrapStyle: 0\n\n"
        "[V4+ Styles]\n"
        "Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, "
        "Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, "
        "Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\n"
        f"Style: Default,{r['font']},{r['font_size']},&H00FFFFFF,&H00FFFFFF,&H00000000,&H64000000,"
        f"-1,0,0,0,100,100,0,0,1,6,2,{align},60,60,{margin_v},1\n\n"
        "[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\n"
    )
    lines = []
    hl = r["highlight_color"]
    for chunk in chunk_words(words, int(r["words_per_line"])):
        for i, w in enumerate(chunk):
            end = chunk[i + 1].start if i + 1 < len(chunk) else max(w.end, w.start + 0.25)
            parts = []
            for j, x in enumerate(chunk):
                t = _esc(x.text.upper())
                parts.append(f"{{\\c{hl}}}{t}{{\\c&H00FFFFFF&}}" if j == i else t)
            pop = "\\fscx108\\fscy108\\t(0,90,\\fscx100\\fscy100)" if i == 0 else ""
            pre = f"{{{anchor}{pop}}}" if (anchor or pop) else ""
            lines.append(f"Dialogue: 0,{_ts(w.start)},{_ts(end)},Default,,0,0,0,,{pre}{' '.join(parts)}")
    return head + "\n".join(lines) + "\n"


# --- рендер -------------------------------------------------------------------
def _even(x: float) -> int:
    return int(x) // 2 * 2


def video_filter(r: dict, facecam: list[float] | None, layout: str, has_subs: bool) -> str:
    W, H = r["width"], r["height"]
    if layout == "split" and facecam:
        fx, fy, fw, fh = facecam
        top_h = _even(H * 0.36)
        bot_h = H - top_h
        g = (f"[0:v]split=2[a][b];"
             f"[a]crop=iw*{fw}:ih*{fh}:iw*{fx}:ih*{fy},scale={W}:{top_h}:force_original_aspect_ratio=increase,"
             f"crop={W}:{top_h},setsar=1[top];"
             f"[b]scale=-2:{bot_h},crop={W}:{bot_h},setsar=1[bot];[top][bot]vstack[v0]")
    elif layout == "crop":
        g = f"[0:v]scale=-2:{H},crop={W}:{H},setsar=1[v0]"
    else:  # blur
        g = (f"[0:v]split=2[a][b];"
             f"[a]scale={W // 4}:{H // 4}:force_original_aspect_ratio=increase,crop={W // 4}:{H // 4},"
             f"boxblur=10:2,scale={W}:{H},eq=brightness=-0.08[bg];"
             f"[b]scale={W}:-2[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2-{H // 12},setsar=1[v0]")
    last = "v0"
    if has_subs:
        g += f";[{last}]ass=subs.ass[v1]"
        last = "v1"
    if r.get("watermark"):
        wm = r["watermark"].replace(":", r"\:").replace("'", "")
        g += (f";[{last}]drawtext=text='{wm}':font='{r['font']}':fontsize=42:fontcolor=white@0.75:"
              f"x=(w-text_w)/2:y=h*0.06[v2]")
        last = "v2"
    g += f";[{last}]fps={r['fps']},format=yuv420p[vout]"
    return g


def extract_wav(src: Path, offset: float, dur: float, wav: Path) -> None:
    subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
                    "-i", str(src), "-ss", f"{offset:.2f}", "-t", f"{dur:.2f}", "-vn", "-ac", "1", "-ar", "16000", str(wav)],
                   check=True)


def render(src: Path, offset: float, dur: float, out_dir: Path, r: dict,
           words: list[Word] | None, facecam: list[float] | None) -> Path:
    out_dir.mkdir(parents=True, exist_ok=True)
    layout = r["layout"] if (r["layout"] != "split" or facecam) else "blur"
    has_subs = bool(words)
    if has_subs:
        # в split субтитры стоят на стыке вебки и геймплея, иначе — снизу
        pos = (r["width"] // 2, int(r["height"] * 0.36)) if layout == "split" else None
        (out_dir / "subs.ass").write_text(build_ass(words, r, pos), encoding="utf-8")
    out = out_dir / "clip.mp4"
    # -ss после -i: точная и надёжная перемотка (исходники короткие, это быстро)
    cmd = ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
           "-i", str(src.resolve()), "-ss", f"{offset:.2f}", "-t", f"{dur:.2f}",
           "-filter_complex", video_filter(r, facecam, layout, has_subs),
           "-map", "[vout]", "-map", "0:a:0?",
           "-af", "loudnorm=I=-14:TP=-1.5:LRA=11",
           "-c:v", "libx264", "-preset", r["preset"], "-crf", str(r["crf"]),
           "-c:a", "aac", "-b:a", "160k", "-ar", "48000", "-movflags", "+faststart", "clip.mp4"]
    res = subprocess.run(cmd, cwd=out_dir, capture_output=True)
    if res.returncode != 0:
        raise RuntimeError("ffmpeg render failed: " + res.stderr.decode(errors="ignore")[-800:])
    return out

