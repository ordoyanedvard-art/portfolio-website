"""Главный цикл: какие стримы писать, чат -> детектор -> нарезка -> монтаж."""
from __future__ import annotations

import asyncio
import json
import logging
import re
import shutil
import subprocess
import time
from dataclasses import asdict
from datetime import datetime, timedelta, timezone
from pathlib import Path

from .chat import TwitchChat
from .config import streamlink_bin
from .detector import ChatSpikeDetector, Moment
from .editor import Transcriber, extract_wav, render
from .facecam import find_facecam
from .recorder import StreamRecorder
from .titles import make_meta
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
        self.face_cache_file = self.out_root / "facecams_auto.json"
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
        found = find_facecam(src, offset, dur, r["width"] / split_top(r), r["face_zoom"])
        if found:
            self.face_cache[channel] = found
            self.out_root.mkdir(parents=True, exist_ok=True)
            self.face_cache_file.write_text(json.dumps(self.face_cache, indent=1), encoding="utf-8")
            log.info("[%s] лицо найдено: %s", channel, found)
            return found
        cached = self.face_cache.get(channel)
        log.info("[%s] лицо в клипе не найдено — %s", channel,
                 "беру прошлое положение" if cached else "делаю без крупного плана")
        return cached

    def process(self, src: Path, offset: float, dur: float, channel: str, extra: dict) -> Path:
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
        facecam = self.facecam_for(src, offset, dur, channel)
        render(src, offset, dur, out_dir, self.cfg["render"], words, facecam)
        meta = make_meta(self.cfg["titles"], channel, transcript, extra.get("top_words", []))
        info = {"channel": channel, "duration": round(dur, 1), "transcript": transcript,
                "subtitle_words": len(words), "facecam": facecam,
                **meta.model_dump(), **extra}
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

    async def ticker(self) -> None:
        while True:
            await asyncio.sleep(1)
            now = time.time()
            for ch in list(self.channels.values()):
                m = ch.detector.tick(now)
                if m:
                    log.info("🔥 [%s] всплеск чата x%.1f (%.1f msg/s) %s",
                             m.channel, m.score, m.peak_rate, " ".join(m.top_words))
                    with self.moments_log.open("a", encoding="utf-8") as f:
                        f.write(json.dumps(asdict(m), ensure_ascii=False) + "\n")
                    asyncio.create_task(self.cut_later(ch, m))

    async def cut_later(self, ch: Channel, m: Moment) -> None:
        c = self.cfg["clip"]
        t0 = m.start - c["pre_roll"]
        t1 = m.end + c["post_roll"]
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
            self.jobs.put_nowait((res, ch.name, asdict(m)))
        except asyncio.QueueFull:
            log.warning("очередь монтажа переполнена — пропускаю момент")
            raw.unlink(missing_ok=True)

    async def worker(self) -> None:
        while True:
            (src, offset, dur), channel, moment = await self.jobs.get()
            try:
                self.clips_made += 1
                await asyncio.to_thread(self.processor.process, src, offset, dur, channel,
                                        {"moment": moment, "top_words": moment.get("top_words", []),
                                         "source": f"https://twitch.tv/{channel}"})
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
        if tw["auto_discover"] and not tw["only_listed"]:
            streams = await asyncio.to_thread(self.api.top_streams, self.game_id, tw["languages"])
            streams.sort(key=lambda s: -s["viewer_count"])
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

    def status_text(self) -> str:
        hours = (time.time() - self.started) / 3600
        names = ", ".join(sorted(self.channels)) or "никого (нет подходящих стримов)"
        return (f"🟢 Работаю {hours:.1f} ч.\nПишу {len(self.channels)} стримов: {names}\n"
                f"Клипов за этот запуск: {self.clips_made}\nВ очереди на монтаж: {self.jobs.qsize()}")

    async def run(self) -> None:
        tasks = [self.chat.run_forever(), self.manager(), self.ticker(), self.worker()]
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
