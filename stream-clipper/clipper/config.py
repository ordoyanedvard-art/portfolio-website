"""Загрузка конфига: config.yaml поверх значений по умолчанию + секреты из .env."""
from __future__ import annotations

import copy
import os
import shutil
import sys
from pathlib import Path

import yaml

DEFAULTS: dict = {
    "twitch": {
        # Название игры в каталоге Twitch. Если Twitch назовёт её иначе —
        # поправьте здесь (или укажите game_id напрямую).
        "game_name": "Grand Theft Auto VI",
        "game_id": None,
        "auto_discover": True,      # сам находить топ-стримы по игре
        "top_n": 6,                 # сколько стримов писать одновременно
        "languages": ["ru"],        # только русскоязычные стримы
        "min_viewers": 5000,        # только крупные стримеры
        "only_listed": False,       # True = писать только стримеров из channels
        "refresh_seconds": 300,     # как часто обновлять список топ-стримов
        "channels": [],             # стримеры, которых пишем всегда
        "blacklist": [],            # стримеры, которых не трогаем
    },
    "recorder": {
        "quality": "1080p60,1080p,best",  # 1080p: вебка в кадре крупнее и чётче
        "segment_seconds": 6,
        "buffer_seconds": 300,      # сколько последних секунд держать на диске
        "work_dir": "data/buffer",
    },
    "detector": {
        "window_seconds": 12,       # окно, в котором ищем всплеск
        "baseline_seconds": 600,    # окно «обычного» темпа чата
        "warmup_seconds": 90,       # не стрелять сразу после подключения
        "min_baseline_rate": 0.5,   # сообщений/сек — защита от деления на ~0
        "trigger_ratio": 3.0,       # во сколько раз темп выше обычного
        "release_ratio": 1.8,       # ниже этого — всплеск закончился
        "min_window_messages": 25,  # минимум сообщений в окне
        "min_reaction_share": 0.15, # доля «реакций» (KEKW, ахах, WTF…) в окне
        "reaction_share_gain": 0.10,  # и на столько больше обычной доли реакций в этом чате
        "max_hot_seconds": 40,
        "cooldown_seconds": 90,     # пауза между клипами одного стримера
        "reactions": [
            "kekw", "lul", "lol", "omegalul", "lmao", "icant", "pog", "poggers",
            "pogchamp", "wtf", "omg", "monkas", "pepelaugh", "kappa", "clip",
            "клип", "ахах", "хаха", "жесть", "капец", "кринж", "имба", "вау",
            "ору", "лол", "кек", "+", "?????", "!!!",
        ],
    },
    "audio": {                      # стример закричал / засмеялся
        "enabled": True,
        "delta_db": 10.0,           # на сколько дБ громче обычного
        "min_db": -30.0,            # и не тише этого (иначе это не крик)
        "window_seconds": 1.5,
        "baseline_seconds": 600,
        "warmup_seconds": 120,
        "require_chat": True,       # засчитывать, только если оживился и чат
        "confirm_seconds": 15,
        "confirm_ratio": 1.5,       # чат хотя бы в 1.5 раза быстрее обычного
        "cooldown_seconds": 90,
        "pre_roll": 15,             # секунд до крика (что его вызвало)
        "post_roll": 8,
    },
    "viewer_clips": {               # клипы, которые нарезали сами зрители на Twitch
        "enabled": True,
        "poll_seconds": 120,
        "max_age_minutes": 20,      # брать клипы, созданные не раньше этого
        "min_duration": 8,
    },
    "clip": {
        "pre_roll": 25,             # секунд до начала всплеска
        "post_roll": 6,             # секунд после конца всплеска
        "min_seconds": 15,
        "max_seconds": 59,
    },
    "render": {
        "width": 1080,
        "height": 1920,
        "fps": 30,
        "layout": "split",          # split | blur | crop
        "split_top_ratio": 0.42,    # доля высоты под крупный план стримера
        "split_gap_ratio": 0.12,    # полоса под субтитры между стримером и игрой
        "auto_facecam": True,       # сам находить лицо стримера в кадре
        "face_zoom": 4.0,           # крупность: высота кадра = высота лица × это число (в пределах вебки)
        "crf": 21,
        "preset": "veryfast",
        "font": "DejaVu Sans",
        "font_size": 78,
        "highlight_color": "&H0000FFFF",  # ASS BGR: жёлтый
        "words_per_line": 3,
        "subtitles": False,         # вшивать субтитры в видео (False — чистое видео + файл subtitles.srt)
        "hide_stream_subtitles": True,  # размыть субтитры, которые уже есть на стриме (диалоги GTA, автосубтитры стримера)
        "stream_subtitles_area": [0.2, 0.84, 0.6, 0.14],  # где они в кадре игры: x, y, ширина, высота (доли)
        "watermark": "",            # например "@my_clips"
        # Где вебка у конкретного стримера (доли кадра: x, y, w, h) — для layout=split
        "facecams": {},
    },
    "transcribe": {
        "enabled": True,
        "model": "small",           # tiny/base/small/medium/large-v3
        "device": "auto",           # auto/cpu/cuda
        "compute_type": "int8",
        "language": "ru",           # язык стримеров; None = автоопределение
        "redo_model": "large-v3",   # модель для кнопки «Переделать субтитры» (точнее, но медленнее)
        "drop_foreign_speech": True,  # выкидывать фразы на другом языке (английская речь персонажей игры)
    },
    "scoring": {                    # бесплатная оценка момента по чату и звуку (0–100)
        "enabled": True,
        "min_score": 45,            # слабее — не монтировать
        "max_per_hour": 4,          # не больше стольких клипов в час на стримера (клипы зрителей не в счёт)
        "min_speech_words": 8,      # меньше слов за клип — стример молчит, клип не нужен
    },
    "judge": {                      # нейросеть-редактор: отсеивает скучные моменты до монтажа
        "enabled": True,            # работает, только если задан ANTHROPIC_API_KEY
        "model": "claude-opus-5-5",
        "effort": "low",
        "min_score": 6,             # монтировать моменты с оценкой от этой (1–10)
        "frames": 3,                # сколько кадров показать редактору
    },
    "titles": {
        "enabled": True,            # работает, только если задан ANTHROPIC_API_KEY
        "model": "claude-opus-5-5",
        "effort": "low",
        "language": "ru",
    },
    "output": {
        "dir": "data/clips",
        "keep_raw": False,          # хранить исходники всегда
        "keep_source_days": 2,      # сколько дней хранить исходник для «Переделать субтитры» (0 — не хранить)
    },
    "twitch_clips_mode": {
        "period_hours": 6,
        "min_views": 500,
        "max_per_run": 20,
    },
}


def _merge(base: dict, override: dict) -> dict:
    out = copy.deepcopy(base)
    for k, v in (override or {}).items():
        if v is None and isinstance(out.get(k), (list, dict)):
            continue  # пустой раздел в YAML (только комментарии) — берём значение по умолчанию
        if isinstance(v, dict) and isinstance(out.get(k), dict):
            out[k] = _merge(out[k], v)
        else:
            out[k] = v
    return out


def load_dotenv(path: Path) -> None:
    if not path.exists():
        return
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, val = line.split("=", 1)
        os.environ.setdefault(key.strip(), val.strip().strip('"').strip("'"))


def load_config(path: str | Path = "config.yaml") -> dict:
    path = Path(path)
    load_dotenv(path.parent / ".env")
    user = yaml.safe_load(path.read_text(encoding="utf-8")) if path.exists() else {}
    cfg = _merge(DEFAULTS, user or {})
    cfg["twitch"]["client_id"] = os.environ.get("TWITCH_CLIENT_ID", "")
    cfg["twitch"]["client_secret"] = os.environ.get("TWITCH_CLIENT_SECRET", "")
    cfg["telegram"] = {
        "token": os.environ.get("TELEGRAM_BOT_TOKEN", "").strip(),
        "chat_id": os.environ.get("TELEGRAM_CHAT_ID", "").strip(),
    }
    cfg["twitch"]["channels"] = [c.lower().lstrip("#") for c in cfg["twitch"]["channels"]]
    cfg["twitch"]["blacklist"] = [c.lower().lstrip("#") for c in cfg["twitch"]["blacklist"]]
    return cfg


def streamlink_bin() -> str:
    """streamlink из PATH или из того же venv, что и python (если venv не активирован)."""
    local = Path(sys.executable).parent / "streamlink"
    return shutil.which("streamlink") or (str(local) if local.exists() else "streamlink")
