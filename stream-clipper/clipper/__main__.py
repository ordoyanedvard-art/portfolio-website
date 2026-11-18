"""CLI: python -m clipper <команда>

  run            — основной режим 24/7: топ-стримы GTA 6 -> чат -> клипы
  chat-test CH   — только слушать чат канала и печатать темп/всплески (настройка порогов)
  render FILE    — смонтировать клип из локального видео (проверка монтажа)
  twitch-clips   — взять самые просматриваемые клипы Twitch по игре и смонтировать
  top            — кто из русских стримеров сейчас играет в GTA 6 (для составления списка)
  check          — проверить, что всё установлено и ключи работают
"""
from __future__ import annotations

import argparse
import asyncio
import logging
import os
import shutil
import sys
import time

from .config import load_config, streamlink_bin


def _setup_logging(verbose: bool) -> None:
    logging.basicConfig(level=logging.DEBUG if verbose else logging.INFO,
                        format="%(asctime)s %(levelname)-7s %(name)s: %(message)s", datefmt="%H:%M:%S")


async def _chat_test(cfg: dict, channel: str, seconds: int) -> None:
    from .chat import TwitchChat
    from .detector import ChatSpikeDetector

    det = ChatSpikeDetector(channel, cfg["detector"], time.time())
    chat = TwitchChat(lambda ch, text, ts: det.add_message(text, ts))
    await chat.join(channel)
    task = asyncio.create_task(chat.run_forever())
    end = time.time() + seconds if seconds else float("inf")
    while time.time() < end:
        await asyncio.sleep(1)
        now = time.time()
        m = det.tick(now)
        ratio, rate, w_msgs, share = det.stats(now)
        hot = "🔥" if det.hot_since else "  "
        print(f"{time.strftime('%H:%M:%S')} {hot} темп {rate:5.1f}/с  x{ratio:4.1f}  "
              f"реакций {share:4.0%}  в окне {w_msgs}", flush=True)
        if m:
            print(f"   >>> МОМЕНТ: x{m.score} пик {m.peak_rate}/с, слова: {' '.join(m.top_words)}", flush=True)
    task.cancel()


def _check(cfg: dict) -> int:
    ok = True
    for tool, found in (("ffmpeg", shutil.which("ffmpeg")), ("streamlink", shutil.which(streamlink_bin()))):
        print(f"{'✅' if found else '❌'} {tool}: {found or 'не найден'}")
        ok &= bool(found)
    try:
        import faster_whisper  # noqa: F401
        print("✅ faster-whisper установлен")
    except ImportError:
        print("⚠️  faster-whisper не установлен — клипы будут без субтитров")
    print(("✅" if os.environ.get("ANTHROPIC_API_KEY") else "⚠️ ") +
          " ANTHROPIC_API_KEY " + ("задан" if os.environ.get("ANTHROPIC_API_KEY") else "не задан — шаблонные заголовки"))
    tw = cfg["twitch"]
    if tw["client_id"]:
        try:
            from .twitch_api import TwitchAPI
            api = TwitchAPI(tw["client_id"], tw["client_secret"])
            gid = tw["game_id"] or api.game_id(tw["game_name"])
            streams = api.top_streams(gid, tw["languages"], 5)
            print(f"✅ Twitch API работает, игра id={gid}, сейчас в топе: "
                  + ", ".join(f"{s['user_login']} ({s['viewer_count']})" for s in streams))
        except Exception as e:
            print(f"❌ Twitch API: {e}")
            ok = False
    else:
        print("⚠️  TWITCH_CLIENT_ID не задан — авто-поиск стримов выключен")
    return 0 if ok else 1


def _top(cfg: dict) -> None:
    from .twitch_api import TwitchAPI
    tw = cfg["twitch"]
    api = TwitchAPI(tw["client_id"], tw["client_secret"])
    gid = tw["game_id"] or api.game_id(tw["game_name"])
    streams = sorted(api.top_streams(gid, tw["languages"], 100), key=lambda s: -s["viewer_count"])
    print(f"Сейчас в GTA 6 (языки: {', '.join(tw['languages'])}):")
    for s in streams[:30]:
        mark = "✅" if s["viewer_count"] >= tw["min_viewers"] else "  "
        listed = "★" if s["user_login"].lower() in tw["channels"] else " "
        print(f"{mark}{listed} {s['viewer_count']:>7}  {s['user_login']:<22} {s['title'][:60]}")
    print(f"\n✅ — проходит порог min_viewers={tw['min_viewers']}, ★ — уже в вашем списке channels")


def main() -> None:
    p = argparse.ArgumentParser(prog="clipper", description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("-c", "--config", default="config.yaml")
    p.add_argument("-v", "--verbose", action="store_true")
    sub = p.add_subparsers(dest="cmd", required=True)
    sub.add_parser("run")
    sub.add_parser("check")
    sub.add_parser("twitch-clips")
    sub.add_parser("top")
    ct = sub.add_parser("chat-test")
    ct.add_argument("channel")
    ct.add_argument("--seconds", type=int, default=0)
    rd = sub.add_parser("render")
    rd.add_argument("file")
    rd.add_argument("--start", type=float, default=0)
    rd.add_argument("--duration", type=float, default=30)
    rd.add_argument("--channel", default="test")
    rd.add_argument("--layout", choices=["blur", "split", "crop"])
    a = p.parse_args()

    _setup_logging(a.verbose)
    cfg = load_config(a.config)

    if a.cmd == "check":
        sys.exit(_check(cfg))
    if a.cmd == "top":
        _top(cfg)
    elif a.cmd == "chat-test":
        asyncio.run(_chat_test(cfg, a.channel.lower(), a.seconds))
    elif a.cmd == "render":
        from pathlib import Path

        from .pipeline import ClipProcessor
        if a.layout:
            cfg["render"]["layout"] = a.layout
        ClipProcessor(cfg).process(Path(a.file), a.start, a.duration, a.channel, {"source": a.file})
    elif a.cmd == "twitch-clips":
        from .pipeline import run_twitch_clips
        run_twitch_clips(cfg)
    elif a.cmd == "run":
        from .pipeline import App
        try:
            asyncio.run(App(cfg).run())
        except KeyboardInterrupt:
            pass


if __name__ == "__main__":
    main()
