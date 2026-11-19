import json
import subprocess
import time
from pathlib import Path

import pytest

from clipper.chat import parse_privmsg
from clipper.config import DEFAULTS, load_config
from clipper.detector import ChatSpikeDetector
from clipper.editor import Word, build_ass, chunk_words, render


def simulate(det, t0, seconds, per_sec, text="привет"):
    moments = []
    for s in range(seconds):
        now = t0 + s
        for i in range(per_sec):
            det.add_message(text, now + i / max(per_sec, 1) * 0.9)
        m = det.tick(now + 0.95)
        if m:
            moments.append(m)
    return moments


def test_detects_spike_and_cooldown():
    cfg = DEFAULTS["detector"]
    t0 = 1_700_000_000.0
    det = ChatSpikeDetector("streamer", cfg, t0)
    assert simulate(det, t0, 300, 3) == []                       # спокойный чат
    spike = simulate(det, t0 + 300, 20, 30, "KEKW KEKW ахахах")   # взрыв
    calm = simulate(det, t0 + 320, 40, 3)
    moments = spike + calm
    assert len(moments) == 1
    m = moments[0]
    assert m.score >= cfg["trigger_ratio"]
    assert t0 + 290 <= m.start <= t0 + 320
    assert "kekw" in m.top_words
    # повторный всплеск во время cooldown игнорируется
    assert simulate(det, t0 + 360, 15, 30, "KEKW") == []


def test_ignores_fast_but_neutral_chat():
    cfg = DEFAULTS["detector"]
    t0 = 1_700_000_000.0
    det = ChatSpikeDetector("big", cfg, t0)
    simulate(det, t0, 300, 3)
    # темп вырос (например, рейд/розыгрыш), но реакций нет
    assert simulate(det, t0 + 300, 20, 30, "!giveaway enter") == []


def test_big_streamer_baseline():
    cfg = DEFAULTS["detector"]
    t0 = 1_700_000_000.0
    det = ChatSpikeDetector("huge", cfg, t0)
    simulate(det, t0, 300, 40, "LUL")   # у большого стримера 40/с — это норма
    assert simulate(det, t0 + 300, 30, 50, "LUL") == []


def test_parse_privmsg():
    line = ":nick!nick@nick.tmi.twitch.tv PRIVMSG #SomeOne :KEKW what"
    assert parse_privmsg(line) == ("someone", "KEKW what")
    assert parse_privmsg(":tmi.twitch.tv 001 justinfan1 :Welcome") is None


def test_chunk_and_ass():
    words = [Word(0.0, 0.3, "вот"), Word(0.3, 0.6, "это"), Word(0.6, 0.9, "да"),
             Word(0.9, 1.2, "{жесть}"), Word(3.0, 3.4, "wow")]
    chunks = chunk_words(words, 3)
    assert [len(c) for c in chunks] == [3, 1, 1]
    ass = build_ass(words, DEFAULTS["render"])
    assert ass.count("Dialogue:") == 5
    assert "{ЖЕСТЬ}" not in ass and "(ЖЕСТЬ)" in ass
    ass2 = build_ass(words, DEFAULTS["render"], pos=(540, 691))
    assert "\\pos(540,691)" in ass2


def test_load_config(tmp_path):
    (tmp_path / "config.yaml").write_text("twitch:\n  channels: ['#Foo']\nclip:\n  pre_roll: 10\n")
    cfg = load_config(tmp_path / "config.yaml")
    assert cfg["twitch"]["channels"] == ["foo"]
    assert cfg["clip"]["pre_roll"] == 10 and cfg["clip"]["post_roll"] == 6


@pytest.fixture(scope="module")
def sample_video(tmp_path_factory):
    p = tmp_path_factory.mktemp("v") / "src.ts"
    subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
                    "-f", "lavfi", "-i", "testsrc2=size=1280x720:rate=30",
                    "-f", "lavfi", "-i", "sine=frequency=440:sample_rate=48000",
                    "-t", "8", "-c:v", "libx264", "-c:a", "aac", str(p)], check=True)
    return p


@pytest.mark.parametrize("layout,facecam", [("blur", None), ("crop", None),
                                            ("split", [0.0, 0.0, 0.3, 0.3])])
def test_render_layouts(sample_video, tmp_path, layout, facecam):
    r = dict(DEFAULTS["render"], layout=layout, watermark="@my_clips")
    words = [Word(0.5, 1.0, "привет"), Word(1.0, 1.5, "чат"), Word(1.5, 2.0, "это"), Word(2.5, 3.0, "GTA")]
    out = render(sample_video, 1.0, 4.0, tmp_path, r, words, facecam)
    probe = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "stream=codec_type,width,height:format=duration", "-of", "json", str(out)],
                           capture_output=True, text=True, check=True)
    info = json.loads(probe.stdout)
    v = [s for s in info["streams"] if s["codec_type"] == "video"][0]
    assert (v["width"], v["height"]) == (1080, 1920)
    assert any(s["codec_type"] == "audio" for s in info["streams"])
    assert 3.5 <= float(info["format"]["duration"]) <= 4.5


def test_recorder_cut_and_process(sample_video, tmp_path):
    from clipper.pipeline import ClipProcessor
    from clipper.recorder import StreamRecorder

    rec_cfg = dict(DEFAULTS["recorder"], work_dir=str(tmp_path / "buf"), segment_seconds=8)
    rec = StreamRecorder("streamer", rec_cfg)
    rec.dir.mkdir(parents=True)
    lines = []
    for i in range(3):  # три куска по 8 секунд подряд (время потока 100..124)
        (rec.dir / f"{i:010d}.ts").write_bytes(sample_video.read_bytes())
        lines.append(f"{i:010d}.ts,{100 + i * 8}.0,{108 + i * 8}.0")
    (rec.dir / "list.csv").write_text("\n".join(lines) + "\n")
    now = 1_700_000_000.0
    rec.index.poll(now=now)          # конец потока (124) == сейчас
    res = rec.cut(now - 14, now - 4, tmp_path / "cut.ts")  # поток 110..120
    assert res is not None
    src, offset, dur = res
    assert offset == 2 and dur == 10   # начиная со второго куска (108)
    cfg = load_config(tmp_path / "none.yaml")
    cfg["transcribe"]["enabled"] = False
    cfg["output"]["dir"] = str(tmp_path / "clips")
    out = ClipProcessor(cfg).process(src, offset, 5, "streamer", {"top_words": ["kekw"]})
    meta = json.loads((out / "meta.json").read_text(encoding="utf-8"))
    assert meta["channel"] == "streamer" and meta["title"]
    assert (out / "clip.mp4").stat().st_size > 0 and (out / "caption.txt").exists()


def test_example_config_loads():
    cfg = load_config(Path(__file__).parent.parent / "config.example.yaml")
    assert cfg["twitch"]["languages"] == ["ru"]
    assert cfg["twitch"]["channels"] == [] and cfg["render"]["facecams"] == {}


def test_stable_face_ignores_moving_faces():
    from clipper.facecam import face_crop, stable_face
    cam = (0.05, 0.6, 0.08, 0.14)
    frames = [[cam, (0.1 * i, 0.2, 0.05, 0.09)] for i in range(8)]  # вебка + бегающий NPC
    face = stable_face(frames)
    assert face is not None and abs(face[0] - 0.05) < 1e-6
    crop = face_crop(face, 16 / 9, 1080 / 806, 2.6)
    x, y, w, h = crop
    assert 0 <= x and 0 <= y and x + w <= 1 and y + h <= 1
    assert abs((w * 16 / 9) / h - 1080 / 806) < 0.01        # пропорции панели
    assert stable_face([[(0.1 * i, 0.2, 0.05, 0.09)] for i in range(8)]) is None


def test_find_facecam_no_face(sample_video):
    from clipper.facecam import find_facecam
    assert find_facecam(sample_video, 0, 6, 1080 / 806) is None


def test_wav_loader_bypasses_pyav(sample_video, tmp_path):
    from clipper.editor import Transcriber, extract_wav
    wav = tmp_path / "a.wav"
    extract_wav(sample_video, 1, 3, wav)
    audio = Transcriber._load_wav(wav)
    assert audio.dtype.name == "float32" and 2.9 * 16000 <= len(audio) <= 3.1 * 16000
    assert 0 < abs(audio).max() <= 1.0


class FakeTG:
    def __init__(self):
        self.calls = []

    def __call__(self, method, params=None, files=None, timeout=60):
        self.calls.append((method, params or {}, files))
        return {"ok": True, "result": {"message_id": 42, "username": "test_bot"}}


def _clip_dir(tmp_path, name="c1"):
    d = tmp_path / "clips" / name
    d.mkdir(parents=True)
    (d / "clip.mp4").write_bytes(b"x" * 100)
    (d / "meta.json").write_text(json.dumps({"channel": "evelone2004", "title": "Ограбление!",
                                             "description": "d", "hashtags": ["gta6"], "duration": 30,
                                             "moment": {"score": 4.6}}), encoding="utf-8")
    return d


def test_telegram_pending_then_start(tmp_path):
    from clipper.telegram import TelegramBot
    bot = TelegramBot("T", tmp_path)
    bot.api = fake = FakeTG()
    d = _clip_dir(tmp_path)
    assert bot.send_clip(d) is None and fake.calls == []        # ещё не привязан — в очередь
    bot.handle({"message": {"chat": {"id": 777}, "text": "/start"}})
    sent = [c for c in fake.calls if c[0] == "sendVideo"]
    assert len(sent) == 1 and sent[0][1]["chat_id"] == "777"
    assert "Ограбление!" in sent[0][1]["caption"] and "#gta6" in sent[0][1]["caption"]
    # чужой пользователь не может перепривязать бота
    bot.handle({"message": {"chat": {"id": 999}, "text": "/start"}})
    assert bot.chat_id == "777"
    # состояние переживает перезапуск
    assert TelegramBot("T", tmp_path).chat_id == "777"


def test_telegram_buttons(tmp_path):
    from clipper.telegram import TelegramBot
    bot = TelegramBot("T", tmp_path, chat_id="777")
    bot.api = fake = FakeTG()
    d = _clip_dir(tmp_path)
    sid = bot.send_clip(d)
    msg = {"message_id": 42, "chat": {"id": 777}}
    bot.handle({"callback_query": {"id": "q1", "data": f"pub:{sid}", "message": msg}})
    assert json.loads((d / "meta.json").read_text(encoding="utf-8"))["telegram"]["status"] == "published"
    # чужие нажатия игнорируются
    bot.handle({"callback_query": {"id": "q2", "data": f"del:{sid}",
                                   "message": {"message_id": 42, "chat": {"id": 1}}}})
    assert d.exists()
    bot.handle({"callback_query": {"id": "q3", "data": f"del:{sid}", "message": msg}})
    assert not d.exists()
    assert any(c[0] == "deleteMessage" for c in fake.calls)


def test_multipart_builds(tmp_path):
    from clipper.telegram import _multipart
    f = tmp_path / "clip.mp4"
    f.write_bytes(b"VIDEO")
    body, ctype = _multipart({"chat_id": "1", "caption": "Привет"}, {"video": f})
    assert ctype.startswith("multipart/form-data; boundary=")
    assert b"VIDEO" in body and "Привет".encode() in body and b'filename="clip.mp4"' in body


def test_status_lines(tmp_path):
    from clipper.pipeline import Channel
    cfg = load_config(tmp_path / "none.yaml")
    cfg["recorder"]["work_dir"] = str(tmp_path / "buf")
    ch = Channel("evelone2004", cfg)
    now = time.time()
    for i in range(30):
        ch.detector.add_message("KEKW", now - 30 + i)
    line = ch.status_line(now)
    assert "evelone2004" in line and "💬 30/мин" in line and "запись запускается" in line
    assert "пока не было" in line


def test_telegram_resends_unsent_after_restart(tmp_path):
    from clipper.telegram import TelegramBot
    root = tmp_path / "clips"
    old = _clip_dir(tmp_path, "2026-11-18/old")          # до привязки бота — не трогаем
    bot = TelegramBot("T", root, chat_id="777")
    bot.state["bound_at"] = time.time() + 1
    bot._save()
    time.sleep(1.1)
    new = _clip_dir(tmp_path, "2026-11-19/new")          # готов, но не отправлен
    bot2 = TelegramBot("T", root)                         # «перезапуск»
    bot2.api = fake = FakeTG()
    bot2.flush_pending()
    sent = [c for c in fake.calls if c[0] == "sendVideo"]
    assert len(sent) == 1
    assert "telegram" in json.loads((new / "meta.json").read_text(encoding="utf-8"))
    assert "telegram" not in json.loads((old / "meta.json").read_text(encoding="utf-8"))
    bot2.flush_pending()                                  # второй раз не дублирует
    assert len([c for c in fake.calls if c[0] == "sendVideo"]) == 1


def test_cut_keeps_audio_in_sync(tmp_path):
    """Щелчок звучит ровно в начале каждой секунды потока. После записи кусками,
    склейки и вырезки щелчок должен оказаться ровно там, где его ждут субтитры."""
    import numpy as np
    from clipper.editor import Transcriber, extract_wav
    from clipper.recorder import StreamRecorder

    rec = StreamRecorder("sync", dict(DEFAULTS["recorder"], work_dir=str(tmp_path / "buf"), segment_seconds=4))
    rec.dir.mkdir(parents=True)
    subprocess.run(
        f"ffmpeg -hide_banner -loglevel error -f lavfi -i testsrc2=size=320x180:rate=30 "
        f"-f lavfi -i \"sine=frequency=1000:sample_rate=48000,volume='if(lt(mod(t,1),0.03),1,0)':eval=frame\" "
        f"-t 30 -c:v libx264 -preset ultrafast -g 30 -c:a aac -f mpegts - | "
        f"ffmpeg -hide_banner -loglevel error -i pipe:0 -map 0:v:0 -map 0:a:0 -c copy -f segment "
        f"-segment_time 4 -segment_list {rec.dir / 'list.csv'} -segment_list_type csv {rec.dir / '%010d.ts'}",
        shell=True, check=True)
    rec.index.poll(now=1_000_000.0)
    s0, s1 = 10.3, 20.3                                  # окно во времени потока
    res = rec.cut(rec.index.to_wall(s0), rec.index.to_wall(s1), tmp_path / "cut.ts")
    assert res is not None
    src, offset, dur = res
    wav = tmp_path / "a.wav"
    extract_wav(src, offset, dur, wav)
    audio = Transcriber._load_wav(wav)
    loud = np.flatnonzero(np.abs(audio) > 0.04)
    first = loud[0] / 16000
    assert abs(first - 0.7) < 0.06, first               # щелчок на 11.0 с потока
    onsets = [loud[0]] + [b for a, b in zip(loud, loud[1:]) if b - a > 8000]
    assert all(abs((o / 16000 - 0.7) - round(o / 16000 - 0.7)) < 0.06 for o in onsets)


def test_hallucination_filter_and_timings():
    from clipper.editor import fix_timings, is_hallucination
    assert is_hallucination("Субтитры сделал DimaTorzok", -0.3, 0.1, 1.2)
    assert is_hallucination("Продолжение следует...", -0.2, 0.1, 1.1)
    assert is_hallucination("да да да да да да да да да да", -0.3, 0.1, 3.0)
    assert not is_hallucination("Чат, смотрите, я угнал копскую тачку", -0.3, 0.1, 1.3)
    ws = fix_timings([Word(0.0, 0.9, "а"), Word(0.5, 0.8, "б"), Word(5.0, 9.0, "в")])
    assert ws[1].start >= ws[0].end                       # без наложений
    assert ws[2].end - ws[2].start <= 1.2 + 1e-9          # не висит на экране вечно


def test_webcam_rect_stops_at_moving_gameplay():
    import numpy as np
    from clipper.facecam import face_crop, webcam_rect
    rng = np.random.default_rng(0)
    frames = []
    for _ in range(8):                                  # «игра» меняется каждый кадр
        blocks = rng.integers(0, 255, (54, 96, 3), dtype=np.uint8)   # крупные пятна, как в игре
        f = np.repeat(np.repeat(blocks, 10, axis=0), 10, axis=1)
        f[300:480, 20:260] = 90                         # неподвижная вебка
        f[330:390, 110:160] = 200                       # «лицо» в ней
        frames.append(f)
    face = (110 / 960, 330 / 540, 50 / 960, 60 / 540)
    x, y, w, h = webcam_rect(frames, face)
    assert abs(x - 20 / 960) < 0.01 and abs(y - 300 / 540) < 0.015
    assert abs(x + w - 260 / 960) < 0.01 and abs(y + h - 480 / 540) < 0.015
    cx, cy, cw, ch = face_crop(face, 16 / 9, 1080 / 806, 2.6, (x, y, w, h))
    assert cx >= x - 1e-6 and cy >= y - 1e-6 and cx + cw <= x + w + 1e-6 and cy + ch <= y + h + 1e-6


def _audio_feed(det, t0, seconds, db):
    det.add_levels([(t0 + i * 0.5, db) for i in range(int(seconds * 2))])


def test_audio_spike_needs_chat_confirmation():
    from clipper.detector import AudioSpikeDetector
    cfg = DEFAULTS["audio"]
    t0 = 1_700_000_000.0
    for chat_ratio, expect in ((2.0, True), (1.0, False)):
        det = AudioSpikeDetector("streamer", cfg, t0)
        _audio_feed(det, t0, 300, -34.0)                 # обычная болтовня
        _audio_feed(det, t0 + 300, 2, -18.0)             # крик: +16 дБ
        _audio_feed(det, t0 + 302, 30, -34.0)
        assert det.tick(t0 + 305, lambda a, b: chat_ratio) is None      # ждём реакцию чата
        m = det.tick(t0 + 320, lambda a, b: chat_ratio)
        assert (m is not None) == expect
        if m:
            assert m.kind == "audio" and m.score >= 10 and abs(m.peak - (t0 + 301)) < 2


def test_audio_quiet_or_steady_loud_is_not_a_spike():
    from clipper.detector import AudioSpikeDetector
    t0 = 1_700_000_000.0
    det = AudioSpikeDetector("s", DEFAULTS["audio"], t0)
    _audio_feed(det, t0, 300, -20.0)                     # всегда громко — это норма
    _audio_feed(det, t0 + 300, 10, -18.0)
    assert det.tick(t0 + 330, lambda a, b: 5.0) is None
    det2 = AudioSpikeDetector("s", DEFAULTS["audio"], t0)
    _audio_feed(det2, t0, 300, -60.0)                    # почти тишина: скачок до -45 — не крик
    _audio_feed(det2, t0 + 300, 2, -45.0)
    assert det2.tick(t0 + 330, lambda a, b: 5.0) is None


def test_segment_levels(tmp_path):
    from clipper.recorder import segment_levels
    p = tmp_path / "s.ts"
    subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-f", "lavfi", "-i",
                    "sine=frequency=440:sample_rate=48000,volume='if(between(t,2,3),8,0.25)':eval=frame",
                    "-t", "4", "-c:a", "aac", "-f", "mpegts", str(p)], check=True)
    lv = segment_levels(p)
    assert len(lv) == 8
    quiet = [db for off, db in lv if off < 1.5]
    loud = [db for off, db in lv if 2.0 <= off < 3.0]
    assert min(loud) - max(quiet) > 15


def test_chat_ratio_between():
    t0 = 1_700_000_000.0
    det = ChatSpikeDetector("s", DEFAULTS["detector"], t0)
    simulate(det, t0, 120, 2)
    simulate(det, t0 + 120, 10, 8)
    assert det.ratio_between(t0 + 120, t0 + 129) > 3
    assert det.ratio_between(t0 + 60, t0 + 69) < 1.5


def test_viewer_clips_are_downloaded_and_queued(tmp_path, monkeypatch):
    import asyncio
    from datetime import datetime, timezone

    import clipper.pipeline as pl

    cfg = load_config(tmp_path / "none.yaml")
    cfg["twitch"].update(auto_discover=False, client_id="")
    cfg["recorder"]["work_dir"] = str(tmp_path / "buf")
    cfg["output"]["dir"] = str(tmp_path / "out")
    cfg["viewer_clips"]["poll_seconds"] = 0.05
    app = pl.App(cfg)
    app.started -= 600
    now_iso = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

    class FakeAPI:
        def channel_clips(self, uid, since):
            return [{"id": "c1", "url": "https://clips.twitch.tv/c1", "title": "АХАХА", "duration": 25.0,
                     "created_at": now_iso, "view_count": 12},
                    {"id": "c2", "url": "https://clips.twitch.tv/c2", "title": "коротко", "duration": 3.0,
                     "created_at": now_iso, "view_count": 1}]

    app.api = FakeAPI()
    app.channels["evelone2004"] = pl.Channel("evelone2004", cfg)
    app.user_ids["evelone2004"] = "123"

    def fake_run(cmd, **kw):
        Path(cmd[cmd.index("-o") + 1]).write_bytes(b"clip")
        return subprocess.CompletedProcess(cmd, 0, b"", b"")

    monkeypatch.setattr(pl.subprocess, "run", fake_run)

    async def go():
        task = asyncio.create_task(app.viewer_clips())
        await asyncio.sleep(0.3)
        task.cancel()

    asyncio.run(go())
    assert app.jobs.qsize() == 1                          # короткий клип отброшен, дубль не взят
    src, off, dur, name, extra = app.jobs.get_nowait()
    assert name == "evelone2004" and dur == 25.0 and extra["moment"]["kind"] == "viewers"
    assert app.channels["evelone2004"].by_kind["viewers"] == 1


def test_stable_face_prefers_largest_or_hint():
    from clipper.facecam import stable_face
    streamer = (0.05, 0.60, 0.09, 0.16)
    guest = (0.20, 0.62, 0.05, 0.09)
    frames = [[streamer, guest] for _ in range(8)]
    assert abs(stable_face(frames)[0] - 0.05) < 1e-6              # крупнее — это стример
    assert abs(stable_face(frames, hint=guest)[0] - 0.20) < 1e-6  # но подсказка из прошлых клипов главнее


def test_reaction_share_relative_to_usual():
    cfg = DEFAULTS["detector"]
    t0 = 1_700_000_000.0
    det2 = ChatSpikeDetector("s", cfg, t0)
    for s in range(300):  # обычный чат: 40% сообщений — «реакции»
        for i in range(5):
            det2.add_message("KEKW" if i < 2 else "привет", t0 + s + i * 0.15)
        det2.tick(t0 + s + 0.95)
    mixed = []
    for s in range(20):   # 30/с, реакций 43% — как обычно
        for i in range(30):
            det2.add_message("LUL" if i % 7 < 3 else "ну", t0 + 300 + s + i * 0.03)
        m = det2.tick(t0 + 300 + s + 0.95)
        if m:
            mixed.append(m)
    assert mixed == []
    assert det2.base_share > 0.3
    hot = simulate(det2, t0 + 400, 20, 30, "KEKW ахахах") + simulate(det2, t0 + 420, 40, 5)
    assert len(hot) == 1


def _process_with_verdict(tmp_path, monkeypatch, score):
    import clipper.pipeline as pl
    from clipper.judge import Verdict
    monkeypatch.setattr(pl, "judge_available", lambda cfg: True)
    seen = {}

    def fake_judge(cfg, lang, channel, src, offset, dur, transcript, chat_lines, kind):
        seen.update(chat=chat_lines, kind=kind)
        return Verdict(score=score, reason="стример угнал полицейскую машину", title="Угнал копов!",
                       description="d", hashtags=["gta6"])

    monkeypatch.setattr(pl, "judge", fake_judge)
    cfg = load_config(tmp_path / "none.yaml")
    cfg["transcribe"]["enabled"] = False
    cfg["output"]["dir"] = str(tmp_path / "clips")
    out = pl.ClipProcessor(cfg).process(tmp_path / "src.ts", 0, 3, "evelone2004",
                                        {"moment": {"kind": "audio"}, "chat_lines": ["KEKW", "ахах"]})
    return out, seen, cfg


def test_judge_rejects_boring(sample_video, tmp_path, monkeypatch):
    (tmp_path / "src.ts").write_bytes(sample_video.read_bytes())
    out, seen, cfg = _process_with_verdict(tmp_path, monkeypatch, 3)
    assert out is None and seen == {"chat": ["KEKW", "ахах"], "kind": "audio"}
    rej = (tmp_path / "clips" / "rejected.jsonl").read_text(encoding="utf-8")
    assert '"score": 3' in rej
    assert not list((tmp_path / "clips").glob("*/*/clip.mp4"))


def test_judge_keeps_good(sample_video, tmp_path, monkeypatch):
    (tmp_path / "src.ts").write_bytes(sample_video.read_bytes())
    out, _, _ = _process_with_verdict(tmp_path, monkeypatch, 8)
    meta = json.loads((out / "meta.json").read_text(encoding="utf-8"))
    assert meta["title"] == "Угнал копов!" and meta["judge"]["score"] == 8
    assert "chat_lines" not in meta and (out / "clip.mp4").exists()
    from clipper.telegram import build_caption
    assert "🧠 8/10" in build_caption(meta)


def test_judge_request_through_real_sdk(sample_video, tmp_path, monkeypatch):
    """Настоящий SDK anthropic против локального поддельного сервера."""
    import http.server
    import threading

    from clipper.judge import judge
    captured = {}
    answer = {"score": 8, "reason": "смешно", "title": "Т", "description": "Д", "hashtags": ["#gta6"]}

    class H(http.server.BaseHTTPRequestHandler):
        def do_POST(self):
            captured["path"] = self.path
            captured["body"] = json.loads(self.rfile.read(int(self.headers["Content-Length"])))
            body = json.dumps({"id": "msg_1", "type": "message", "role": "assistant",
                               "model": "claude-opus-5-5", "stop_reason": "end_turn", "stop_sequence": None,
                               "content": [{"type": "text", "text": json.dumps(answer, ensure_ascii=False)}],
                               "usage": {"input_tokens": 10, "output_tokens": 10}}).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def log_message(self, *a):
            pass

    srv = http.server.HTTPServer(("127.0.0.1", 0), H)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    monkeypatch.setenv("ANTHROPIC_API_KEY", "test")
    monkeypatch.setenv("ANTHROPIC_BASE_URL", f"http://127.0.0.1:{srv.server_port}")
    v = judge(DEFAULTS["judge"], "ru", "evelone2004", sample_video, 0, 6, "чат смотрите",
              ["KEKW", "ахах"], "chat")
    srv.shutdown()
    assert v is not None and v.score == 8 and v.hashtags == ["gta6"]
    body = captured["body"]
    assert captured["path"].startswith("/v1/messages")
    assert body["model"] == "claude-opus-5-5" and body["output_config"]["effort"] == "low"
    assert body["output_config"]["format"]["type"] == "json_schema"
    content = body["messages"][0]["content"]
    assert sum(1 for b in content if b["type"] == "image") == 3
    assert "KEKW" in content[-1]["text"] and "чат смотрите" in content[-1]["text"]


def _history(t0, seconds, per_sec, users, texts):
    out = []
    for s_ in range(seconds):
        for i in range(per_sec):
            k = s_ * per_sec + i
            out.append((t0 + s_ + i / per_sec, texts[k % len(texts)], f"user{k % users}"))
    return out


def test_scoring_strong_vs_weak():
    from clipper.scoring import chat_features, reaction_weight, score_moment
    assert reaction_weight("KEKW KEKW") == 1.0 and reaction_weight("ахахахах") == 1.0
    assert reaction_weight("ЧТО???") == 1.0 and reaction_weight("+") == 0.3
    assert reaction_weight("привет всем") == 0.0
    t0 = 1_700_000_000.0
    calm = _history(t0, 300, 3, 40, ["привет", "+", "го в тачку", "KEKW", "норм"])
    # настоящий момент: 60 разных людей смеются, стример орёт
    strong = calm + _history(t0 + 300, 15, 18, 200, ["KEKW", "ахахах", "WTF???", "ору", "клип"])
    f = chat_features(strong, t0 + 300, t0 + 315)
    total, parts = score_moment("chat", 6.0, f, 13.0)
    assert total >= 70, parts
    # чат быстрее, но это те же 5 человек спамят «+» — слабо
    weak = calm + _history(t0 + 300, 15, 10, 5, ["+", "+", "го"])
    f2 = chat_features(weak, t0 + 300, t0 + 315)
    total2, parts2 = score_moment("chat", 3.2, f2, 0.0)
    assert total2 < 45, parts2
    assert score_moment("viewers", 0, f2, 0)[0] == 80


def test_app_scores_and_caps_per_hour(tmp_path):
    import clipper.pipeline as pl
    from clipper.detector import Moment
    cfg = load_config(tmp_path / "none.yaml")
    cfg["twitch"].update(auto_discover=False, client_id="")
    cfg["recorder"]["work_dir"] = str(tmp_path / "buf")
    cfg["output"]["dir"] = str(tmp_path / "out")
    app = pl.App(cfg)
    ch = pl.Channel("evelone2004", cfg)
    t0 = time.time() - 400
    ch.recent_chat.extend(_history(t0, 300, 3, 40, ["привет", "+", "норм"]))
    ch.recent_chat.extend(_history(t0 + 300, 15, 18, 200, ["KEKW", "ахахах", "WTF???"]))
    m = Moment("evelone2004", t0 + 300, t0 + 307, t0 + 315, 6.0, 18.0, ["kekw"])
    results = [app.score(ch, m) for _ in range(6)]
    assert sum(r is not None for r in results) == cfg["scoring"]["max_per_hour"]
    assert results[0]["total"] >= 45 and app.weak == 6 - cfg["scoring"]["max_per_hour"]


def test_parse_privmsg_full_keeps_nick():
    from clipper.chat import parse_privmsg_full
    assert parse_privmsg_full(":Vasya!vasya@vasya.tmi.twitch.tv PRIVMSG #evelone2004 :KEKW") == \
        ("evelone2004", "vasya", "KEKW")


def _processor_with_words(tmp_path, monkeypatch, n_words):
    import clipper.pipeline as pl
    cfg = load_config(tmp_path / "none.yaml")
    cfg["output"]["dir"] = str(tmp_path / "clips")
    proc = pl.ClipProcessor(cfg)

    class FakeTranscriber:
        def words(self, wav):
            ws = [Word(i * 0.4, i * 0.4 + 0.3, f"слово{i}") for i in range(n_words)]
            return ws, " ".join(w.text for w in ws)

    proc.transcriber = FakeTranscriber()
    return proc


def test_silent_streamer_rejected(sample_video, tmp_path, monkeypatch):
    proc = _processor_with_words(tmp_path, monkeypatch, 3)
    out = proc.process(sample_video, 0, 4, "evelone2004", {"moment": {"kind": "chat"}})
    assert out is None
    assert "молчит" in (tmp_path / "clips" / "rejected.jsonl").read_text(encoding="utf-8")
    proc2 = _processor_with_words(tmp_path, monkeypatch, 3)          # клипы зрителей не трогаем
    assert proc2.process(sample_video, 0, 4, "s", {"moment": {"kind": "viewers"}}) is not None


def test_talking_streamer_kept(sample_video, tmp_path, monkeypatch):
    proc = _processor_with_words(tmp_path, monkeypatch, 12)
    out = proc.process(sample_video, 0, 4, "evelone2004", {"moment": {"kind": "chat"}})
    assert out is not None
    assert json.loads((out / "meta.json").read_text(encoding="utf-8"))["subtitle_words"] == 12


def test_game_face_in_center_loses_to_webcam_at_edge():
    from clipper.facecam import stable_face
    webcam = (0.03, 0.70, 0.06, 0.11)      # маленькое лицо в углу
    game = (0.42, 0.35, 0.12, 0.21)        # крупный персонаж в центре
    frames = [[webcam, game] for _ in range(8)]
    assert abs(stable_face(frames)[0] - 0.03) < 1e-6


def test_trusted_webcam_beats_new_face(tmp_path, monkeypatch):
    import clipper.pipeline as pl
    cfg = load_config(tmp_path / "none.yaml")
    cfg["output"]["dir"] = str(tmp_path / "clips")
    proc = pl.ClipProcessor(cfg)
    cam_face, cam_crop = [0.03, 0.70, 0.06, 0.11], [0.0, 0.6, 0.2, 0.3]

    def fake(face, crop):
        def f(src, offset, dur, aspect, zoom, hint=None, found=None):
            found["face"] = face
            return crop
        return f

    monkeypatch.setattr(pl, "find_facecam", fake(cam_face, cam_crop))
    for _ in range(2):
        assert proc.facecam_for(Path("x"), 0, 1, "evelone2004") == cam_crop
    assert proc.face_cache["evelone2004"]["hits"] == 2
    monkeypatch.setattr(pl, "find_facecam", fake([0.45, 0.4, 0.1, 0.18], [0.3, 0.3, 0.3, 0.3]))
    assert proc.facecam_for(Path("x"), 0, 1, "evelone2004") == cam_crop   # лицо из игры не принято


def test_noisy_but_real_speech_is_kept():
    from clipper.editor import is_hallucination
    assert not is_hallucination("ну давай погнали, копы едут", -1.1, 0.6, 1.3)
    assert is_hallucination("", -1.5, 0.95, 1.0)
