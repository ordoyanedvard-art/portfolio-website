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
