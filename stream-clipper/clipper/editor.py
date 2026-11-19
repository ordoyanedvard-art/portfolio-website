"""Монтаж: расшифровка речи, субтитры в стиле TikTok, вертикальный кадр 9:16."""
from __future__ import annotations

import logging
import re
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
        words = self._run(wav, vad=True)
        if len(words) < 8:
            # фильтр тишины мог принять речь под громкий звук игры за шум — пробуем без него
            alt = self._run(wav, vad=False)
            if len(alt) > len(words):
                words = alt
        log.info("расшифровка: %d слов", len(words))
        return words, " ".join(w.text for w in words)

    @staticmethod
    def _load_wav(wav: Path):
        """16 кГц моно WAV (его готовит extract_wav) -> numpy float32.
        Читаем сами, а не через faster-whisper: его чтение звука идёт через PyAV,
        а свежие версии PyAV несовместимы с ним (TypeError: metadata_errors)."""
        import wave

        import numpy as np
        with wave.open(str(wav), "rb") as f:
            if f.getsampwidth() != 2 or f.getnchannels() != 1 or f.getframerate() != 16000:
                raise ValueError("ожидается WAV 16 кГц моно 16 бит")
            raw = f.readframes(f.getnframes())
        return np.frombuffer(raw, dtype=np.int16).astype(np.float32) / 32768.0

    def _run(self, wav: Path, vad: bool) -> list[Word]:
        segments, _info = self._load().transcribe(
            self._load_wav(wav), word_timestamps=True, language=self.cfg["language"],
            condition_on_previous_text=False, beam_size=5, temperature=[0.0, 0.2, 0.4],
            vad_filter=vad,
            # мягче стандартного: речь под громкий звук игры не выкидывается
            vad_parameters={"threshold": 0.35, "min_silence_duration_ms": 600, "speech_pad_ms": 300},
        )
        words: list[Word] = []
        total = dropped = weak = 0
        for seg in segments:
            total += 1
            if is_hallucination(seg.text, seg.avg_logprob, seg.no_speech_prob, seg.compression_ratio):
                dropped += 1
                log.info("отброшено как выдуманное: %r (уверенность %.2f, тишина %.2f)",
                         seg.text[:60], seg.avg_logprob, seg.no_speech_prob)
                continue
            for w in seg.words or []:
                t = w.word.strip()
                if not t:
                    continue
                if w.probability < 0.05:
                    weak += 1
                    continue
                words.append(Word(w.start, w.end, t))
        log.info("распознавание (%s): фраз %d, отброшено %d, слов %d, неразборчивых %d",
                 "с фильтром тишины" if vad else "без фильтра тишины", total, dropped, len(words), weak)
        return fix_timings(words)


# Фразы, которые whisper «придумывает» на шуме и музыке (наследие обучающих субтитров)
_HALLUCINATIONS = re.compile(
    r"субтитр|dimatorzok|торжок|продолжение следует|спасибо за просмотр|подписывайтесь|"
    r"ставьте лайк|редактор|корректор|amara\.org|до новых встреч|thanks for watching",
    re.IGNORECASE)


def is_hallucination(text: str, avg_logprob: float, no_speech_prob: float, compression_ratio: float) -> bool:
    if _HALLUCINATIONS.search(text):
        return True
    if compression_ratio > 2.4:            # одно и то же слово по кругу
        return True
    # Речь под громкий звук игры часто «неуверенная» — выкидываем только явный шум.
    return no_speech_prob > 0.9 and avg_logprob < -1.0


def fix_timings(words: list[Word]) -> list[Word]:
    """Слова не налезают друг на друга и не висят на экране дольше 1.2 с."""
    out: list[Word] = []
    for i, w in enumerate(words):
        start = max(w.start, out[-1].end if out else 0.0)
        nxt = words[i + 1].start if i + 1 < len(words) else w.end + 0.6
        end = min(max(w.end, start + 0.15), nxt, start + 1.2)
        out.append(Word(start, max(end, start + 0.1), w.text))
    return out


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


def split_top(r: dict) -> int:
    """Высота верхней панели (крупный план стримера) в раскладке split."""
    return _even(r["height"] * r.get("split_top_ratio", 0.42))


def split_gap(r: dict) -> int:
    """Полоса под субтитры между стримером и игрой."""
    return _even(r["height"] * r.get("split_gap_ratio", 0.12))


def video_filter(r: dict, facecam: list[float] | None, layout: str, has_subs: bool) -> str:
    W, H = r["width"], r["height"]
    if layout == "split" and facecam:
        fx, fy, fw, fh = facecam
        top_h = split_top(r)
        game_y = top_h + split_gap(r)
        # сверху стример крупно, ниже полоса субтитров, ниже игра целиком (16:9, без обрезки),
        # всё остальное — размытый кадр игры
        g = (f"[0:v]split=3[a][b][c];"
             f"[a]crop=iw*{fw}:ih*{fh}:iw*{fx}:ih*{fy},"
             f"scale={W}:{top_h}:force_original_aspect_ratio=increase:flags=lanczos,"
             f"crop={W}:{top_h},unsharp=5:5:0.7:5:5:0.0,setsar=1[top];"
             f"[b]scale={W // 4}:{H // 4}:force_original_aspect_ratio=increase,crop={W // 4}:{H // 4},"
             f"boxblur=10:2,scale={W}:{H},eq=brightness=-0.15,setsar=1[bg];"
             f"[c]scale={W}:-2:flags=lanczos,setsar=1[game];"
             f"[bg][top]overlay=0:0[t1];[t1][game]overlay=0:{game_y}[v0]")
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


def measure_loudness(src: Path, offset: float, dur: float) -> float | None:
    """Общая громкость отрезка (LUFS) — один быстрый проход по звуку."""
    r = subprocess.run(["ffmpeg", "-hide_banner", "-nostats", "-i", str(src), "-ss", f"{offset:.2f}",
                        "-t", f"{dur:.2f}", "-vn", "-af", "ebur128=framelog=quiet", "-f", "null", "-"],
                       capture_output=True, text=True)
    m = re.findall(r"I:\s+(-?[\d.]+) LUFS", r.stderr)
    return float(m[-1]) if m else None


def audio_filter(src: Path, offset: float, dur: float, target: float = -14.0) -> str:
    """Ровное усиление до громкости соцсетей + ограничитель против хрипа.
    Динамический loudnorm «на лету» приглушал всё после крика стримера."""
    lufs = measure_loudness(src, offset, dur)
    if lufs is None or lufs < -70:
        return "anull"
    gain = max(-20.0, min(20.0, target - lufs))
    return f"volume={gain:.1f}dB,alimiter=limit=0.89:level=disabled"


def extract_wav(src: Path, offset: float, dur: float, wav: Path) -> None:
    subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
                    "-i", str(src), "-ss", f"{offset:.2f}", "-t", f"{dur:.2f}", "-vn", "-ac", "1", "-ar", "16000", "-c:a", "pcm_s16le", str(wav)],
                   check=True)


def render(src: Path, offset: float, dur: float, out_dir: Path, r: dict,
           words: list[Word] | None, facecam: list[float] | None) -> Path:
    out_dir.mkdir(parents=True, exist_ok=True)
    layout = r["layout"] if (r["layout"] != "split" or facecam) else "blur"
    has_subs = bool(words)
    if has_subs:
        # в split субтитры стоят на стыке вебки и геймплея, иначе — снизу
        pos = (r["width"] // 2, split_top(r) + split_gap(r) // 2) if layout == "split" else None
        (out_dir / "subs.ass").write_text(build_ass(words, r, pos), encoding="utf-8")
    out = out_dir / "clip.mp4"
    # -ss после -i: точная и надёжная перемотка (исходники короткие, это быстро)
    cmd = ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
           "-i", str(src.resolve()), "-ss", f"{offset:.2f}", "-t", f"{dur:.2f}",
           "-filter_complex", video_filter(r, facecam, layout, has_subs),
           "-map", "[vout]", "-map", "0:a:0?",
           "-af", audio_filter(src, offset, dur),
           "-c:v", "libx264", "-preset", r["preset"], "-crf", str(r["crf"]),
           "-c:a", "aac", "-b:a", "160k", "-ar", "48000", "-movflags", "+faststart", "clip.mp4"]
    res = subprocess.run(cmd, cwd=out_dir, capture_output=True)
    if res.returncode != 0:
        raise RuntimeError("ffmpeg render failed: " + res.stderr.decode(errors="ignore")[-800:])
    return out

