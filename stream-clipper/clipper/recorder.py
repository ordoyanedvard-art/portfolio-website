"""Запись стрима в кольцевой буфер: streamlink -> ffmpeg -> куски по N секунд.

ffmpeg ведёт список кусков (list.csv) со временем начала/конца каждого куска
во «времени потока». Когда в списке появляется новая строка, кусок только что
закрылся — значит его конец ≈ текущее реальное время. По этой «якорной» точке
переводим реальное время момента из чата во время потока и находим куски.
Имена по номеру, а не по часам: при старте streamlink выдаёт пачку видео
за секунду, и куски с именами по часам затирали бы друг друга.
"""
from __future__ import annotations

import asyncio
import logging
import os
import shlex
import shutil
import signal
import subprocess
import time
from dataclasses import dataclass
from pathlib import Path

from .config import streamlink_bin

log = logging.getLogger("recorder")


@dataclass
class Segment:
    path: Path
    start: float  # время потока, сек
    end: float


class SegmentIndex:
    """Читает list.csv и переводит реальное время во время потока."""

    def __init__(self, directory: Path):
        self.dir = directory
        self.segments: list[Segment] = []
        self._lines_seen = 0
        self.anchor_wall = 0.0    # реальное время, когда закрылся последний кусок
        self.anchor_stream = 0.0  # его конец во времени потока

    def reset(self) -> None:
        self.segments, self._lines_seen = [], 0
        self.anchor_wall = self.anchor_stream = 0.0

    def poll(self, now: float | None = None) -> None:
        lst = self.dir / "list.csv"
        if not lst.exists():
            return
        lines = lst.read_text(encoding="utf-8", errors="ignore").splitlines()
        new = lines[self._lines_seen:]
        for line in new:
            parts = line.strip().split(",")
            if len(parts) < 3:
                continue
            try:
                seg = Segment(self.dir / parts[0], float(parts[1]), float(parts[2]))
            except ValueError:
                continue
            self.segments.append(seg)
        if new and self.segments:
            self._lines_seen = len(lines)
            # конец последнего куска ≈ момент, когда ffmpeg дописал строку в список
            self.anchor_wall = now if now is not None else lst.stat().st_mtime
            self.anchor_stream = self.segments[-1].end

    def to_stream(self, wall: float) -> float:
        return self.anchor_stream - (self.anchor_wall - wall)

    def to_wall(self, stream_t: float) -> float:
        return self.anchor_wall - (self.anchor_stream - stream_t)


class StreamRecorder:
    def __init__(self, channel: str, cfg: dict):
        self.channel = channel
        self.cfg = cfg
        self.dir = Path(cfg["work_dir"]) / channel
        self.index = SegmentIndex(self.dir)
        self.proc: asyncio.subprocess.Process | None = None
        self._task: asyncio.Task | None = None
        self._stopping = False

    # --- жизненный цикл -------------------------------------------------------
    def start(self) -> None:
        self._stopping = False
        self._task = asyncio.create_task(self._loop(), name=f"rec-{self.channel}")

    async def stop(self) -> None:
        self._stopping = True
        self._kill()
        if self._task:
            self._task.cancel()
        shutil.rmtree(self.dir, ignore_errors=True)

    def _kill(self) -> None:
        if self.proc and self.proc.returncode is None:
            try:
                os.killpg(self.proc.pid, signal.SIGTERM)
            except ProcessLookupError:
                pass

    def _fresh_dir(self) -> None:
        shutil.rmtree(self.dir, ignore_errors=True)
        self.dir.mkdir(parents=True, exist_ok=True)
        self.index.reset()

    async def _loop(self) -> None:
        backoff = 5
        while not self._stopping:
            self._fresh_dir()  # новый процесс = новое время потока
            seg = int(self.cfg["segment_seconds"])
            url = f"https://twitch.tv/{self.channel}"
            cmd = (
                f"{shlex.quote(streamlink_bin())} --twitch-disable-ads --twitch-low-latency --stdout "
                f"--retry-open 3 {shlex.quote(url)} {shlex.quote(self.cfg['quality'])} "
                f"| ffmpeg -hide_banner -loglevel error -i pipe:0 -map 0:v:0? -map 0:a:0? -c copy "
                f"-f segment -segment_time {seg} -reset_timestamps 1 "
                f"-segment_list {shlex.quote(str(self.dir / 'list.csv'))} "
                f"-segment_list_type csv -segment_list_flags +live "
                f"{shlex.quote(str(self.dir / '%010d.ts'))}"
            )
            log.info("[%s] запись начата", self.channel)
            started = time.time()
            self.proc = await asyncio.create_subprocess_shell(
                cmd, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE, start_new_session=True)
            janitor = asyncio.create_task(self._janitor())
            _, err = await self.proc.communicate()
            janitor.cancel()
            if self._stopping:
                break
            if time.time() - started > 600:
                backoff = 5
            log.warning("[%s] запись остановилась (код %s): %s", self.channel,
                        self.proc.returncode, (err or b"").decode(errors="ignore")[-300:])
            await asyncio.sleep(backoff)
            backoff = min(backoff * 2, 120)

    async def _janitor(self) -> None:
        while True:
            await asyncio.sleep(2)
            self.index.poll()
            if not self.index.segments:
                continue
            horizon = self.index.to_stream(time.time() - self.cfg["buffer_seconds"])
            keep = []
            for s in self.index.segments:
                if s.end < horizon:
                    s.path.unlink(missing_ok=True)
                else:
                    keep.append(s)
            self.index.segments = keep

    # --- нарезка ----------------------------------------------------------------
    def cut(self, t0: float, t1: float, dest: Path) -> tuple[Path, float, float] | None:
        """Склеивает куски, покрывающие реальное время [t0, t1], без перекодирования.
        Возвращает (файл, смещение_начала_в_файле, длительность)."""
        self.index.poll()
        s0, s1 = self.index.to_stream(t0), self.index.to_stream(t1)
        segs = [s for s in self.index.segments if s.end > s0 and s.start < s1 and s.path.exists()]
        if not segs:
            return None
        dest.parent.mkdir(parents=True, exist_ok=True)
        lst = dest.with_suffix(".txt")
        lst.write_text("".join(f"file '{s.path.resolve()}'\n" for s in segs), encoding="utf-8")
        r = subprocess.run(
            ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-f", "concat", "-safe", "0",
             "-i", str(lst), "-c", "copy", str(dest)], capture_output=True)
        lst.unlink(missing_ok=True)
        if r.returncode != 0:
            log.error("[%s] склейка не удалась: %s", self.channel, r.stderr.decode()[-300:])
            return None
        offset = max(0.0, s0 - segs[0].start)
        dur = min(s1, segs[-1].end) - max(s0, segs[0].start)
        return dest, offset, dur
