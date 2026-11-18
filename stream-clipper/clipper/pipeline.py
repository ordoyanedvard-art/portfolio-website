"""Главный цикл: какие стримы писать, чат -> детектор -> нарезка -> монтаж."""
from __future__ import annotations

import asyncio
import json
import logging
import re
import shutil
import subprocess
import time
from collections import deque
from dataclasses import asdict
from datetime import datetime, timedelta, timezone
from pathlib import Path

from .chat import TwitchChat
from .config import streamlink_bin
from .detector import AudioSpikeDetector, ChatSpikeDetector, Moment
from .editor import Transcriber, extract_wav, render
from .facecam import find_facecam
from .recorder import StreamRecorder
from .judge import available as judge_available
from .judge import judge
from .titles import ClipMeta, make_meta
from .twitch_api import TwitchAPI

log = logging.getLogger("pipeline")


def _slug(s: str) -> str:
    return re.sub(r"[^a-zA-Z0-9_-]+", "_", s)[:40]


def make_bot(cfg: dict, status=None):
    tg = cfg.get("telegram") or {}
    if not tg.get("token"):
        return None
    from .telegram import TelegramBot
    return TelegramBot(tg["token"], Path(cfg["output"]["dir"]), tg.get("chat_id", ""), status)


class ClipProcessor:
    """Тяжёлая часть (whisper + ffmpeg) — синхронно, в отдельном потоке."""

    def __init__(self, cfg: dict, notifier=None):
        self.cfg = cfg
        self.notifier = notifier
        self.transcriber = Transcriber(cfg["transcribe"]) if cfg["transcribe"]["enabled"] else None
        self.out_root = Path(cfg["output"]["dir"])
        self.face_cache_file = self.out_root / "facecams_auto_v3.json"  # v3: рамка вебки + лицо стримера
        try:
            self.face_cache: dict = json.loads(self.face_cache_file.read_text(encoding="utf-8"))
        except (OSError, ValueError):
            self.face_cache = {}

    def facecam_for(self, src: Path, offset: float, dur: float, channel: str) -> list[float] | None:
        r = self.cfg["render"]
        if r["layout"] != "split":
            return None
        if channel in r["facecams"]:          # вручную в config.yaml — главнее всего
            return r["facecams"][channel]
        if not r["auto_facecam"]:
            return None
        from .editor import split_top
        entry = self.face_cache.get(channel)
        if isinstance(entry, list):          # старый формат кэша: только кроп
            entry = {"crop": entry}
        entry = entry or {}
        info: dict = {}
        crop = find_facecam(src, offset, dur, r["width"] / split_top(r), r["face_zoom"],
                            hint=entry.get("face"), found=info)
        if crop:
            self.face_cache[channel] = {"crop": crop, "face": info.get("face")}
            self.out_root.mkdir(parents=True, exist_ok=True)
            self.face_cache_file.write_text(json.dumps(self.face_cache, indent=1), encoding="utf-8")
            log.info("[%s] лицо найдено: %s", channel, crop)
            return crop
        cached = entry.get("crop")
        log.info("[%s] лицо в клипе не найдено — %s", channel,
                 "беру прошлое положение" if cached else "делаю без крупного плана")
        return cached

    def process(self, src: Path, offset: float, dur: float, channel: str, extra: dict) -> Path | None:
        """Готовый клип (папка) или None, если редактор счёл момент скучным."""
        stamp = datetime.now().strftime("%Y-%m-%d/%H%M%S")
        out_dir = self.out_root / f"{stamp}_{_slug(channel)}"
        out_dir.mkdir(parents=True, exist_ok=True)
        words, transcript = [], ""
        if self.transcriber:
            wav = out_dir / "audio.wav"
            try:
                extract_wav(src, offset, dur, wav)
                words, transcript = self.transcriber.words(wav)
            except Exception as e:
                log.exception("расшифровка не удалась: %s", e)
            finally:
                wav.unlink(missing_ok=True)
        extra = dict(extra)
        chat_lines = extra.pop("chat_lines", [])
        kind = (extra.get("moment") or {}).get("kind", "chat")
        verdict = None
        if judge_available(self.cfg["judge"]):
            verdict = judge(self.cfg["judge"], self.cfg["titles"]["language"], channel, src, offset, dur,
                            transcript, chat_lines, kind)
            if verdict and verdict.score < self.cfg["judge"]["min_score"]:
                log.info("🗑 [%s] редактор отбросил момент (%d/10): %s", channel, verdict.score, verdict.reason)
                with (self.out_root / "rejected.jsonl").open("a", encoding="utf-8") as f:
                    f.write(json.dumps({"channel": channel, "kind": kind, "score": verdict.score,
                                        "reason": verdict.reason, "transcript": transcript[:500],
                                        "time": datetime.now().isoformat(timespec="seconds")},
                                       ensure_ascii=False) + "\n")
                shutil.rmtree(out_dir, ignore_errors=True)
                return None
        facecam = self.facecam_for(src, offset, dur, channel)
        render(src, offset, dur, out_dir, self.cfg["render"], words, facecam)
        if verdict:
            meta = ClipMeta(title=verdict.title, description=verdict.description, hashtags=verdict.hashtags)
        else:
            meta = make_meta(self.cfg["titles"], channel, transcript, extra.get("top_words", []))
        info = {"channel": channel, "duration": round(dur, 1), "transcript": transcript,
                "subtitle_words": len(words), "facecam": facecam, "chat_lines_seen": len(chat_lines),
                **meta.model_dump(), **extra}
        if verdict:
            info["judge"] = {"score": verdict.score, "reason": verdict.reason}
        (out_dir / "meta.json").write_text(json.dumps(info, ensure_ascii=False, indent=2), encoding="utf-8")
        (out_dir / "caption.txt").write_text(
            f"{meta.title}\n\n{meta.description}\n\n" + " ".join("#" + h for h in meta.hashtags) + "\n",
            encoding="utf-8")
        if self.cfg["output"]["keep_raw"]:
            shutil.copy(src, out_dir / "source.ts")
        log.info("✅ клип готов: %s — %s", out_dir, meta.title)
        if self.notifier:
            try:
                self.notifier.send_clip(out_dir)
            except Exception as e:  # Telegram не должен ронять монтаж
                log.warning("не удалось отправить клип в Telegram: %s", e)
        return out_dir


class Channel:
    def __init__(self, name: str, cfg: dict):
        self.name = name
        self.detector = ChatSpikeDetector(name, cfg["detector"], time.time())
        self.recorder = StreamRecorder(name, cfg["recorder"])
        self.audio = AudioSpikeDetector(name, cfg["audio"], time.time()) if cfg["audio"]["enabled"] else None
        if self.audio:
            self.recorder.on_levels = self.audio.add_levels
        self.user_id: str | None = None
        self.recent_chat: deque[tuple[float, str]] = deque(maxlen=6000)   # для редактора
        self.moments = 0
        self.by_kind = {"chat": 0, "audio": 0, "viewers": 0}
        self.moment_times: list[float] = []   # когда ловили моменты (против дублей с клипами зрителей)
        self.last_moment: float | None = None

    def chat_between(self, t0: float, t1: float, limit: int = 80) -> list[str]:
        lines = [txt for ts, txt in list(self.recent_chat) if t0 <= ts <= t1]
        if len(lines) > limit:   # равномерно по всему моменту, а не только начало
            step = len(lines) / limit
            lines = [lines[int(i * step)] for i in range(limit)]
        return lines

    def register(self, kind: str, t: float, now: float) -> None:
        self.moments += 1
        self.by_kind[kind] = self.by_kind.get(kind, 0) + 1
        self.last_moment = now
        self.moment_times = [x for x in self.moment_times if now - x < 3600] + [t]

    def status_line(self, now: float) -> str:
        chat = self.detector.recent_messages(now, 60)
        segs = list(self.recorder.index.segments)
        buffered = sum(sg.end - sg.start for sg in segs) / 60
        rec_age = now - self.recorder.index.anchor_wall if segs else None
        parts = [f"💬 {chat}/мин"]
        if rec_age is None:
            parts.append("🎥 запись запускается")
        elif rec_age > 60:
            parts.append(f"⚠️ запись стоит {rec_age / 60:.0f} мин")
        else:
            parts.append(f"🎥 {buffered:.1f} мин в буфере")
        if self.audio and self.audio.last_db is not None and self.audio.baseline_db is not None:
            parts.append(f"🔊 {self.audio.last_db:.0f} дБ (обычно {self.audio.baseline_db:.0f})")
        if self.last_moment:
            k = self.by_kind
            parts.append(f"🔥 {self.moments}: чат {k['chat']}, крик {k['audio']}, зрители {k['viewers']} "
                         f"(последний {(now - self.last_moment) / 60:.0f} мин назад)")
        else:
            parts.append("🔥 пока не было")
        warn = " ⚠️ чат молчит" if chat == 0 and now - self.detector.started_at > 120 else ""
        return f"• {self.name} — " + " · ".join(parts) + warn


class App:
    def __init__(self, cfg: dict):
        self.cfg = cfg
        tw = cfg["twitch"]
        self.api = TwitchAPI(tw["client_id"], tw["client_secret"]) if tw["client_id"] else None
        if tw["auto_discover"] and not self.api:
            raise RuntimeError("auto_discover требует TWITCH_CLIENT_ID/TWITCH_CLIENT_SECRET в .env")
        self.game_id = tw["game_id"]
        self.channels: dict[str, Channel] = {}
        self.chat = TwitchChat(self.on_chat)
        self.jobs: asyncio.Queue = asyncio.Queue(maxsize=50)
        self.clips_made = 0
        self.rejected = 0
        self.user_ids: dict[str, str] = {}
        self.seen_clips: set[str] = set()
        self.started = time.time()
        self.bot = make_bot(cfg, self.status_text)
        self.processor = ClipProcessor(cfg, self.bot)
        self.moments_log = Path(cfg["output"]["dir"]) / "moments.jsonl"
        self.moments_log.parent.mkdir(parents=True, exist_ok=True)

    # --- чат -> детектор ------------------------------------------------------
    def on_chat(self, channel: str, text: str, ts: float) -> None:
        ch = self.channels.get(channel)
        if ch:
            ch.detector.add_message(text, ts)
            ch.recent_chat.append((ts, text[:200]))

    async def ticker(self) -> None:
        cooldown = self.cfg["detector"]["cooldown_seconds"]
        while True:
            await asyncio.sleep(1)
            now = time.time()
            for ch in list(self.channels.values()):
                found = [ch.detector.tick(now)]
                if ch.audio:
                    found.append(ch.audio.tick(now, ch.detector.ratio_between))
                for m in found:
                    if not m:
                        continue
                    if ch.last_moment and now - ch.last_moment < cooldown:
                        log.info("[%s] момент (%s) совпал с недавним — пропускаю", ch.name, m.kind)
                        continue
                    ch.register(m.kind, m.peak, now)
                    if m.kind == "audio":
                        log.info("🔥 [%s] стример закричал/засмеялся: +%.0f дБ к обычному", m.channel, m.score)
                    else:
                        log.info("🔥 [%s] всплеск чата x%.1f (%.1f msg/s) %s",
                                 m.channel, m.score, m.peak_rate, " ".join(m.top_words))
                    with self.moments_log.open("a", encoding="utf-8") as f:
                        f.write(json.dumps(asdict(m), ensure_ascii=False) + "\n")
                    asyncio.create_task(self.cut_later(ch, m))

    async def cut_later(self, ch: Channel, m: Moment) -> None:
        c = self.cfg["clip"]
        roll = self.cfg["audio"] if m.kind == "audio" else c
        t0 = m.start - roll["pre_roll"]
        t1 = m.end + roll["post_roll"]
        if t1 - t0 > c["max_seconds"]:  # длинный всплеск — держимся ближе к пику
            t0 = max(t0, m.peak - c["max_seconds"] * 0.7)
            t1 = t0 + c["max_seconds"]
        if t1 - t0 < c["min_seconds"]:
            t0 = t1 - c["min_seconds"]
        # ждём, пока нужные куски допишутся на диск
        await asyncio.sleep(max(0, t1 - time.time()) + self.cfg["recorder"]["segment_seconds"] * 2 + 3)
        raw = Path(self.cfg["recorder"]["work_dir"]) / "_cuts" / f"{ch.name}_{int(m.start)}.ts"
        res = await asyncio.to_thread(ch.recorder.cut, t0, t1, raw)
        if not res:
            log.warning("[%s] нет записи для момента — пропускаю", ch.name)
            return
        try:
            md = asdict(m)
            self.jobs.put_nowait((*res, ch.name, {"moment": md, "top_words": md.get("top_words", []),
                                                  "source": f"https://twitch.tv/{ch.name}",
                                                  "chat_lines": ch.chat_between(m.start - 5, m.end + 15)}))
        except asyncio.QueueFull:
            log.warning("очередь монтажа переполнена — пропускаю момент")
            raw.unlink(missing_ok=True)

    async def worker(self) -> None:
        while True:
            src, offset, dur, channel, extra = await self.jobs.get()
            try:
                done = await asyncio.to_thread(self.processor.process, src, offset, dur, channel, extra)
                if done:
                    self.clips_made += 1  # считаем только готовые клипы
                else:
                    self.rejected += 1
            except Exception as e:
                log.error("[%s] монтаж не удался: %s", channel, e)
            finally:
                src.unlink(missing_ok=True)

    # --- какие стримы пишем ------------------------------------------------------
    async def desired_channels(self) -> set[str]:
        tw = self.cfg["twitch"]
        want: set[str] = set()
        if not self.api:
            return set(tw["channels"])
        if not self.game_id:
            self.game_id = await asyncio.to_thread(self.api.game_id, tw["game_name"])
            log.info("game_id для «%s»: %s", tw["game_name"], self.game_id)
        if tw["channels"]:
            live = await asyncio.to_thread(self.api.live_status, tw["channels"])
            want |= {s["user_login"].lower() for s in live}
            self.user_ids.update({s["user_login"].lower(): s["user_id"] for s in live})
        if tw["auto_discover"] and not tw["only_listed"]:
            streams = await asyncio.to_thread(self.api.top_streams, self.game_id, tw["languages"])
            streams.sort(key=lambda s: -s["viewer_count"])
            self.user_ids.update({s["user_login"].lower(): s["user_id"] for s in streams})
            picked = [s["user_login"].lower() for s in streams
                      if s["viewer_count"] >= tw["min_viewers"]
                      and s["user_login"].lower() not in tw["blacklist"]]
            for login in picked:
                if len(want) >= tw["top_n"] + len(tw["channels"]):
                    break
                want.add(login)
        return want

    async def manager(self) -> None:
        while True:
            try:
                want = await self.desired_channels()
                for name in want - self.channels.keys():
                    ch = Channel(name, self.cfg)
                    self.channels[name] = ch
                    ch.recorder.start()
                    await self.chat.join(name)
                for name in set(self.channels) - want:
                    ch = self.channels.pop(name)
                    await ch.recorder.stop()
                    await self.chat.part(name)
                    log.info("[%s] больше не в списке — остановлен", name)
                log.info("пишу %d стримов: %s", len(self.channels), ", ".join(sorted(self.channels)))
            except Exception as e:
                log.error("не удалось обновить список стримов: %s", e)
            await asyncio.sleep(self.cfg["twitch"]["refresh_seconds"])

    async def viewer_clips(self) -> None:
        """Клипы, которые зрители сами нарезали на Twitch у записываемых стримеров."""
        vc = self.cfg["viewer_clips"]
        if not (vc["enabled"] and self.api):
            return
        done_file = Path(self.cfg["output"]["dir"]) / "twitch_clips_done.txt"
        if done_file.exists():
            self.seen_clips |= set(done_file.read_text().split())
        tmp = Path(self.cfg["recorder"]["work_dir"]) / "_viewer_clips"
        tmp.mkdir(parents=True, exist_ok=True)
        while True:
            await asyncio.sleep(vc["poll_seconds"])
            since = datetime.now(timezone.utc) - timedelta(minutes=vc["max_age_minutes"])
            for name, ch in list(self.channels.items()):
                uid = self.user_ids.get(name)
                if not uid:
                    continue
                try:
                    clips = await asyncio.to_thread(self.api.channel_clips, uid,
                                                    since.strftime("%Y-%m-%dT%H:%M:%SZ"))
                except Exception as e:
                    log.warning("[%s] не удалось получить клипы зрителей: %s", name, e)
                    continue
                for c in sorted(clips, key=lambda c: c["created_at"]):
                    if c["id"] in self.seen_clips or float(c.get("duration", 0)) < vc["min_duration"]:
                        continue
                    self.seen_clips.add(c["id"])
                    with done_file.open("a") as f:
                        f.write(c["id"] + "\n")
                    created = datetime.fromisoformat(c["created_at"].replace("Z", "+00:00")).timestamp()
                    if created < self.started:
                        continue          # клип сделан до запуска программы
                    if any(created - 75 <= t <= created + 15 for t in ch.moment_times):
                        log.info("[%s] зрители нарезали клип того же момента, что поймали мы — пропускаю", name)
                        continue
                    src = tmp / f"{c['id']}.mp4"
                    r = await asyncio.to_thread(subprocess.run, [streamlink_bin(), "-f", "-o", str(src),
                                                                 c["url"], "best"], capture_output=True)
                    if r.returncode != 0 or not src.exists():
                        log.warning("[%s] не скачался клип зрителей %s", name, c["url"])
                        continue
                    ch.register("viewers", created, time.time())
                    log.info("🔥 [%s] зрители нарезали клип: «%s»", name, c["title"])
                    try:
                        self.jobs.put_nowait((src, 0.0, float(c["duration"]), name, {
                            "moment": {"kind": "viewers"}, "top_words": [], "source": c["url"],
                            "chat_lines": ch.chat_between(created - 40, created + 5),
                            "twitch_title": c["title"], "views": c.get("view_count")}))
                    except asyncio.QueueFull:
                        src.unlink(missing_ok=True)

    def status_text(self) -> str:
        hours = (time.time() - self.started) / 3600
        now = time.time()
        chans = list(self.channels.values())
        lines = "\n".join(ch.status_line(now) for ch in sorted(chans, key=lambda c: c.name))
        return (f"🟢 Работаю {hours:.1f} ч. Пишу {len(chans)} стримов:\n"
                f"{lines or 'сейчас нет подходящих стримов'}\n\n"
                f"Клипов за этот запуск: {self.clips_made} · отсеял редактор: {self.rejected} · "
                f"в очереди на монтаж: {self.jobs.qsize()}\n"
                f"💬 — сообщений чата за минуту, 🎥 — сколько записи хранится, 🔊 — громкость сейчас,\n"
                f"🔥 — пойманные моменты: взрыв чата, крик/смех стримера, клипы зрителей")

    async def run(self) -> None:
        tasks = [self.chat.run_forever(), self.manager(), self.ticker(), self.worker(), self.viewer_clips()]
        if self.bot:
            tasks.append(asyncio.to_thread(self.bot.poll_forever))
            if self.bot.chat_id:
                await asyncio.to_thread(self.bot.flush_pending)
        await asyncio.gather(*tasks)


# --- режим «популярные клипы Twitch» (без записи и анализа чата) -----------------
def run_twitch_clips(cfg: dict) -> None:
    tw, mode = cfg["twitch"], cfg["twitch_clips_mode"]
    api = TwitchAPI(tw["client_id"], tw["client_secret"])
    game_id = tw["game_id"] or api.game_id(tw["game_name"])
    since = (datetime.now(timezone.utc) - timedelta(hours=mode["period_hours"])).strftime("%Y-%m-%dT%H:%M:%SZ")
    done_file = Path(cfg["output"]["dir"]) / "twitch_clips_done.txt"
    done_file.parent.mkdir(parents=True, exist_ok=True)
    done = set(done_file.read_text().split()) if done_file.exists() else set()
    clips = [c for c in api.top_clips(game_id, since, 100)
             if c["view_count"] >= mode["min_views"] and c["id"] not in done
             and c["language"] in tw["languages"]
             and c["broadcaster_name"].lower() not in tw["blacklist"]]
    clips.sort(key=lambda c: -c["view_count"])
    proc = ClipProcessor(cfg, make_bot(cfg))
    tmp = Path(cfg["recorder"]["work_dir"]) / "_clips"
    tmp.mkdir(parents=True, exist_ok=True)
    for c in clips[: mode["max_per_run"]]:
        src = tmp / f"{c['id']}.mp4"
        r = subprocess.run([streamlink_bin(), "-f", "-o", str(src), c["url"], "best"], capture_output=True)
        if r.returncode != 0 or not src.exists():
            log.warning("не скачался клип %s", c["url"])
            continue
        try:
            proc.process(src, 0, float(c["duration"]), c["broadcaster_name"].lower(),
                         {"source": c["url"], "views": c["view_count"], "twitch_title": c["title"]})
            with done_file.open("a") as f:
                f.write(c["id"] + "\n")
        except Exception as e:
            log.error("монтаж клипа %s не удался: %s", c["url"], e)
        finally:
            src.unlink(missing_ok=True)
