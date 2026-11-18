"""Нейросеть-редактор: решает, стоит ли момент клипа, и пишет к нему текст.

Один запрос к Claude на момент: 3 маленьких кадра, расшифровка речи стримера
и реальные сообщения чата в этот момент. Ответ — оценка 1–10, короткое
объяснение и заголовок/описание/хэштеги. Скучные моменты отбрасываются
ещё до монтажа (экономит и время компьютера).

Без ANTHROPIC_API_KEY редактор выключен: монтируется всё, как раньше.
"""
from __future__ import annotations

import base64
import logging
import os
import subprocess
import tempfile
from pathlib import Path

from pydantic import BaseModel

log = logging.getLogger("judge")


class Verdict(BaseModel):
    score: int
    reason: str
    title: str
    description: str
    hashtags: list[str]


SYSTEM = """Ты строгий редактор коротких вертикальных видео (TikTok, Reels, Shorts) \
по стримам GTA 6 русскоязычных стримеров. Тебе показывают кандидата в клип: несколько \
кадров, расшифровку речи стримера и сообщения чата в этот момент.

Оцени по шкале 1–10, захочет ли случайный зритель досмотреть этот клип и поделиться им.
9–10: очевидно смешно, неожиданно, эпичный провал/успех, сильная эмоция стримера, понятно без контекста.
6–8: интересно, есть ясная завязка и реакция.
1–5: ничего не происходит, просто разговор, меню/загрузка, реклама, донаты без реакции,
непонятно без контекста, реакция чата на что-то вне кадра.
Будь строгим: большинство кандидатов — 3–5.

Затем напиши честный цепляющий заголовок до 70 символов (без кликбейта, которого нет в клипе), \
описание 1–2 предложения и 5–8 хэштегов без #. Пиши на языке: {lang}. \
В reason — одно короткое предложение, что происходит в клипе."""


def available(cfg: dict) -> bool:
    return bool(cfg.get("enabled")) and bool(os.environ.get("ANTHROPIC_API_KEY"))


def _frames(src: Path, offset: float, dur: float, n: int) -> list[str]:
    out = []
    with tempfile.TemporaryDirectory() as td:
        for i in range(n):
            t = offset + dur * (i + 1) / (n + 1)
            p = Path(td) / f"{i}.jpg"
            subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(src),
                            "-ss", f"{t:.2f}", "-frames:v", "1", "-vf", "scale=640:-2", "-q:v", "5", str(p)],
                           capture_output=True)
            if p.exists():
                out.append(base64.b64encode(p.read_bytes()).decode())
    return out


def judge(cfg: dict, lang: str, channel: str, src: Path, offset: float, dur: float,
          transcript: str, chat_lines: list[str], kind: str) -> Verdict | None:
    """Вердикт редактора или None, если спросить не удалось (тогда клип не отбрасываем)."""
    try:
        import anthropic

        content: list[dict] = [
            {"type": "image", "source": {"type": "base64", "media_type": "image/jpeg", "data": b64}}
            for b64 in _frames(src, offset, dur, int(cfg["frames"]))
        ]
        source = {"chat": "чат резко ускорился", "audio": "стример резко закричал или засмеялся",
                  "viewers": "зрители сами нарезали этот клип на Twitch"}.get(kind, kind)
        chat = "\n".join(chat_lines[-80:]) or "(сообщений нет)"
        content.append({"type": "text", "text": (
            f"Стример: {channel}\nПочему выбран момент: {source}\nДлина: {dur:.0f} с\n\n"
            f"Расшифровка речи стримера:\n{transcript[:3000] or '(речи не слышно)'}\n\n"
            f"Сообщения чата в этот момент:\n{chat[:4000]}")})
        client = anthropic.Anthropic()
        resp = client.messages.parse(
            model=cfg["model"],
            max_tokens=4000,
            output_config={"effort": cfg["effort"]},
            system=SYSTEM.format(lang=lang),
            messages=[{"role": "user", "content": content}],
            output_format=Verdict,
        )
        if resp.stop_reason == "refusal" or resp.parsed_output is None:
            return None
        v = resp.parsed_output
        v.score = max(1, min(10, v.score))
        v.hashtags = [h.lstrip("#").replace(" ", "") for h in v.hashtags][:8]
        return v
    except Exception as e:  # редактор не должен ронять конвейер
        log.warning("редактор недоступен: %s", e)
        return None
