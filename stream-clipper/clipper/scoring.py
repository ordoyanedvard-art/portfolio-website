"""Бесплатная оценка «интересности» момента (0–100) по чату и звуку — без нейросетей.

Составляющие:
  интенсивность  (до 35) — во сколько раз чат быстрее обычного;
  охват          (до 20) — сколько РАЗНЫХ людей написали, по сравнению с обычным;
  реакции        (до 25) — смех и шок весят больше, чем «+» и «?»;
  голос          (до 20) — стример закричал/засмеялся в тот же момент.
Клипы, которые нарезали сами зрители, получают высокий балл сразу.
"""
from __future__ import annotations

import math
import re
import statistics

# сильные реакции: смех, шок, просьба «клипни»
_STRONG = re.compile(
    r"kekw|omegalul|lul|lmao|icant|pepelaugh|ахах|хаха|азаз|ору|орнул|кек|"
    r"wtf|omg|monkas|pog|жесть|капец|пипец|вау|wow|ебат|ебан|пизд|ахуе|охуе|нихуя|"
    r"clip|клип|чтоо|шта|\?{3,}|!{3,}", re.IGNORECASE)
# слабые: «+», одиночные «?», «лол»
_WEAK = re.compile(r"^\s*[+?]+\s*$|\blol\b|\bлол\b|\bxd\b", re.IGNORECASE)

Line = tuple[float, str, str]  # (время, текст, ник)


def reaction_weight(text: str) -> float:
    if _STRONG.search(text):
        return 1.0
    if _WEAK.search(text):
        return 0.3
    return 0.0


def _clamp(x: float) -> float:
    return max(0.0, min(1.0, x))


def _uniq(lines: list[Line]) -> int:
    return len({nick or txt for _, txt, nick in lines})


def chat_features(history: list[Line], t0: float, t1: float) -> dict:
    """Чат в окне [t0, t1] по сравнению с такими же окнами за прошлые 5 минут."""
    span = max(5.0, t1 - t0)
    window = [ln for ln in history if t0 <= ln[0] <= t1]
    before = [ln for ln in history if t0 - 300 <= ln[0] < t0]
    # обычное число разных авторов за окно такой же длины
    usual = []
    k = int(300 // span)
    for i in range(k):
        a = t0 - (i + 1) * span
        usual.append(_uniq([ln for ln in before if a <= ln[0] < a + span]))
    usual_uniq = statistics.median(usual) if usual else 0
    w_react = sum(reaction_weight(txt) for _, txt, _ in window) / len(window) if window else 0.0
    b_react = sum(reaction_weight(txt) for _, txt, _ in before) / len(before) if before else 0.0
    return {"uniq": _uniq(window), "usual_uniq": usual_uniq,
            "react": w_react, "usual_react": b_react, "messages": len(window)}


def score_moment(kind: str, chat_ratio: float, feats: dict, audio_excess: float) -> tuple[int, dict]:
    """-> (балл 0–100, разбивка по частям)."""
    if kind == "viewers":
        return 80, {"viewers": 80}
    intensity = 35 * _clamp(math.log2(max(chat_ratio, 1.0)) / 3)            # x8 -> максимум
    reach = 20 * _clamp((feats["uniq"] / max(feats["usual_uniq"], 3) - 1) / 3)   # в 4 раза больше людей
    react = 25 * _clamp((feats["react"] - feats["usual_react"]) / 0.4 + (0.25 if feats["react"] > 0.5 else 0))
    voice = 20 * _clamp((audio_excess - 4) / 12)                              # +16 дБ -> максимум
    parts = {"интенсивность": round(intensity), "охват": round(reach),
             "реакции": round(react), "голос": round(voice)}
    return round(intensity + reach + react + voice), parts
