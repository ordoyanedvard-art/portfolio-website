"""Анонимное чтение чата Twitch через IRC (без токена, бесплатно)."""
from __future__ import annotations

import asyncio
import logging
import random
import ssl
import time
from typing import Callable

log = logging.getLogger("chat")

HOST, PORT = "irc.chat.twitch.tv", 6697


class TwitchChat:
    def __init__(self, on_message: Callable[[str, str, float], None]):
        self.on_message = on_message
        self.channels: set[str] = set()
        self._writer: asyncio.StreamWriter | None = None

    async def join(self, channel: str) -> None:
        channel = channel.lower()
        if channel in self.channels:
            return
        self.channels.add(channel)
        await self._send(f"JOIN #{channel}")

    async def part(self, channel: str) -> None:
        channel = channel.lower()
        if channel not in self.channels:
            return
        self.channels.discard(channel)
        await self._send(f"PART #{channel}")

    async def _send(self, line: str) -> None:
        if self._writer is not None:
            try:
                self._writer.write((line + "\r\n").encode())
                await self._writer.drain()
            except Exception as e:  # соединение упало — переподключимся
                log.debug("send failed: %s", e)

    async def run_forever(self) -> None:
        backoff = 1
        while True:
            try:
                await self._session()
                backoff = 1
            except Exception as e:
                log.warning("chat disconnected: %s; retry in %ss", e, backoff)
            self._writer = None
            await asyncio.sleep(backoff)
            backoff = min(backoff * 2, 60)

    async def _session(self) -> None:
        reader, writer = await asyncio.open_connection(HOST, PORT, ssl=ssl.create_default_context())
        self._writer = writer
        nick = f"justinfan{random.randint(10000, 99999)}"
        writer.write(f"NICK {nick}\r\n".encode())
        await writer.drain()
        # Twitch разрешает ~20 JOIN за 10 сек — джойним пачками
        for i, ch in enumerate(sorted(self.channels)):
            await self._send(f"JOIN #{ch}")
            if i % 15 == 14:
                await asyncio.sleep(10)
        log.info("chat connected as %s, channels: %s", nick, ", ".join(sorted(self.channels)))
        while True:
            raw = await asyncio.wait_for(reader.readline(), timeout=360)
            if not raw:
                raise ConnectionError("EOF")
            line = raw.decode("utf-8", "ignore").rstrip("\r\n")
            if line.startswith("PING"):
                await self._send("PONG" + line[4:])
                continue
            parsed = parse_privmsg(line)
            if parsed:
                self.on_message(parsed[0], parsed[1], time.time())


def parse_privmsg(line: str) -> tuple[str, str] | None:
    """':nick!nick@nick.tmi.twitch.tv PRIVMSG #channel :text' -> (channel, text)"""
    if line.startswith("@"):  # теги, если когда-нибудь включим CAP
        line = line.split(" ", 1)[1] if " " in line else ""
    parts = line.split(" ", 3)
    if len(parts) < 4 or parts[1] != "PRIVMSG":
        return None
    channel = parts[2].lstrip("#").lower()
    text = parts[3][1:] if parts[3].startswith(":") else parts[3]
    return channel, text
