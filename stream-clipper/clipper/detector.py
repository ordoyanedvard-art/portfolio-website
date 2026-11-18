"""Детектор «взрыва» чата. Чистая логика без сети — легко тестировать.

Идея: у каждого стримера свой обычный темп чата (baseline = медиана сообщений
в секунду за последние ~10 минут). Если за последние N секунд темп в K раз выше
обычного и заметная доля сообщений — реакции (KEKW, ахах, WTF…), значит на
стриме что-то произошло. Ждём, пока всплеск утихнет, и отдаём «момент».
"""
from __future__ import annotations

import re
import statistics
from collections import deque
from dataclasses import dataclass, field

_EMOTE_RE = re.compile(r"[a-zA-Zа-яА-ЯёЁ+?!]+")


@dataclass
class Moment:
    channel: str
    start: float          # unix-время начала всплеска
    peak: float           # секунда с максимальным темпом
    end: float            # когда всплеск утих
    score: float          # макс. отношение темпа к обычному
    peak_rate: float      # сообщений/сек в пике
    top_words: list[str] = field(default_factory=list)


class ChatSpikeDetector:
    def __init__(self, channel: str, cfg: dict, started_at: float):
        self.channel = channel
        self.cfg = cfg
        self.started_at = started_at
        self.reactions = [r.lower() for r in cfg["reactions"]]
        self.buckets: deque[tuple[int, int, int]] = deque()  # (sec, msgs, reactions)
        self._cur_sec: int | None = None
        self._cur_msgs = 0
        self._cur_react = 0
        self._words: dict[str, int] = {}
        self.hot_since: float | None = None
        self.hot_peak_t = 0.0
        self.hot_peak_rate = 0.0
        self.hot_score = 0.0
        self.cooldown_until = 0.0

    # --- ввод ---------------------------------------------------------------
    def is_reaction(self, text: str) -> bool:
        low = text.lower()
        if any(r in low for r in self.reactions):
            return True
        letters = [c for c in text if c.isalpha()]
        if len(letters) >= 4 and sum(c.isupper() for c in letters) / len(letters) > 0.8:
            return True  # КАПС
        return False

    def add_message(self, text: str, ts: float) -> None:
        sec = int(ts)
        if self._cur_sec is None:
            self._cur_sec = sec
        if sec != self._cur_sec:
            self._flush(sec)
        self._cur_msgs += 1
        if self.is_reaction(text):
            self._cur_react += 1
        if self.hot_since is not None:
            for w in _EMOTE_RE.findall(text)[:3]:
                w = w.lower()
                if len(w) >= 2:
                    self._words[w] = self._words.get(w, 0) + 1

    def _flush(self, new_sec: int) -> None:
        assert self._cur_sec is not None
        self.buckets.append((self._cur_sec, self._cur_msgs, self._cur_react))
        # пустые секунды тоже важны для baseline
        for s in range(self._cur_sec + 1, min(new_sec, self._cur_sec + 3600)):
            self.buckets.append((s, 0, 0))
        self._cur_sec, self._cur_msgs, self._cur_react = new_sec, 0, 0
        horizon = new_sec - self.cfg["baseline_seconds"]
        while self.buckets and self.buckets[0][0] < horizon:
            self.buckets.popleft()

    def recent_messages(self, now: float, seconds: int = 60) -> int:
        """Сколько сообщений пришло за последние seconds секунд (для /status)."""
        horizon = int(now) - seconds
        total = sum(m for sec, m, _ in list(self.buckets) if sec >= horizon)
        if self._cur_sec is not None and self._cur_sec >= horizon:
            total += self._cur_msgs
        return total

    # --- оценка ---------------------------------------------------------------
    def stats(self, now: float) -> tuple[float, float, int, float]:
        """-> (ratio, window_rate, window_msgs, reaction_share)"""
        sec = int(now)
        if self._cur_sec is not None and sec > self._cur_sec:
            self._flush(sec)
        win = self.cfg["window_seconds"]
        window = [b for b in self.buckets if b[0] >= sec - win]
        older = [b[1] for b in self.buckets if b[0] < sec - win]
        w_msgs = sum(b[1] for b in window)
        w_react = sum(b[2] for b in window)
        rate = w_msgs / win
        baseline = statistics.median(older) if len(older) >= 30 else 0.0
        baseline = max(baseline, self.cfg["min_baseline_rate"])
        share = (w_react / w_msgs) if w_msgs else 0.0
        return rate / baseline, rate, w_msgs, share

    def tick(self, now: float) -> Moment | None:
        """Вызывать раз в секунду. Возвращает Moment, когда всплеск закончился."""
        ratio, rate, w_msgs, share = self.stats(now)
        c = self.cfg
        if now - self.started_at < c["warmup_seconds"]:
            return None

        if self.hot_since is None:
            if now < self.cooldown_until:
                return None
            if (ratio >= c["trigger_ratio"] and w_msgs >= c["min_window_messages"]
                    and share >= c["min_reaction_share"]):
                self.hot_since = now - c["window_seconds"] / 2
                self.hot_peak_t, self.hot_peak_rate, self.hot_score = now, rate, ratio
                self._words = {}
            return None

        if rate > self.hot_peak_rate:
            self.hot_peak_t, self.hot_peak_rate = now, rate
        self.hot_score = max(self.hot_score, ratio)
        too_long = now - self.hot_since >= c["max_hot_seconds"]
        if ratio < c["release_ratio"] or too_long:
            top = sorted(self._words.items(), key=lambda kv: -kv[1])[:5]
            m = Moment(self.channel, self.hot_since, self.hot_peak_t, now,
                       round(self.hot_score, 2), round(self.hot_peak_rate, 2),
                       [w for w, _ in top])
            self.hot_since = None
            self.cooldown_until = now + c["cooldown_seconds"]
            return m
        return None
