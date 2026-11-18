"""Заголовок/описание/хэштеги к клипу через Claude API — один короткий запрос на клип.

Включается, только если задан ANTHROPIC_API_KEY. Без ключа клип всё равно
делается, просто с шаблонным заголовком.
"""
from __future__ import annotations

import logging
import os

from pydantic import BaseModel

log = logging.getLogger("titles")


class ClipMeta(BaseModel):
    title: str
    description: str
    hashtags: list[str]


SYSTEM = (
    "Ты редактор коротких вертикальных видео (TikTok, Reels, Shorts) по стримам GTA 6. "
    "По расшифровке речи стримера и самым частым словам из чата в момент реакции придумай "
    "цепляющий, но честный заголовок до 70 символов (без кликбейта, которого нет в клипе), "
    "описание в 1–2 предложения и 5–8 хэштегов без символа #. Пиши на языке: {lang}."
)


def fallback(channel: str) -> ClipMeta:
    return ClipMeta(title=f"{channel} в GTA 6 😱", description=f"Момент со стрима {channel}.",
                    hashtags=["gta6", "gtavi", channel, "стрим", "twitch"])


def make_meta(cfg: dict, channel: str, transcript: str, chat_words: list[str]) -> ClipMeta:
    if not cfg["enabled"] or not os.environ.get("ANTHROPIC_API_KEY"):
        return fallback(channel)
    try:
        import anthropic

        client = anthropic.Anthropic()
        resp = client.messages.parse(
            model=cfg["model"],
            max_tokens=2000,
            output_config={"effort": cfg["effort"]},
            system=SYSTEM.format(lang=cfg["language"]),
            messages=[{"role": "user", "content": (
                f"Стример: {channel}\n"
                f"Частые слова в чате в момент реакции: {', '.join(chat_words) or '—'}\n"
                f"Расшифровка клипа:\n{transcript[:3000] or '(речи нет)'}"
            )}],
            output_format=ClipMeta,
        )
        if resp.stop_reason == "refusal" or resp.parsed_output is None:
            return fallback(channel)
        meta = resp.parsed_output
        meta.hashtags = [h.lstrip("#").replace(" ", "") for h in meta.hashtags][:8]
        return meta
    except Exception as e:  # заголовок не должен ронять конвейер
        log.warning("не удалось получить заголовок: %s", e)
        return fallback(channel)
