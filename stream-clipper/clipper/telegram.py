"""Отправка готовых клипов в Telegram-бота с кнопками «Опубликовал» / «Удалить».

Бот привязывается к первому, кто напишет ему /start (или к TELEGRAM_CHAT_ID).
Остальным он не отвечает и ничего не шлёт. Работает через обычный Bot API,
без дополнительных библиотек.
"""
from __future__ import annotations

import json
import logging
import secrets
import shutil
import subprocess
import threading
import time
import urllib.error
import urllib.request
import uuid
from pathlib import Path
from typing import Callable

log = logging.getLogger("telegram")

MAX_UPLOAD = 49 * 1024 * 1024  # лимит Bot API на отправку файла — 50 МБ
MAX_PENDING = 20


def _multipart(fields: dict, files: dict) -> tuple[bytes, str]:
    boundary = uuid.uuid4().hex
    parts: list[bytes] = []
    for k, v in fields.items():
        parts.append(f'--{boundary}\r\nContent-Disposition: form-data; name="{k}"\r\n\r\n{v}\r\n'.encode())
    for k, path in files.items():
        p = Path(path)
        parts.append((f'--{boundary}\r\nContent-Disposition: form-data; name="{k}"; filename="{p.name}"\r\n'
                      f"Content-Type: video/mp4\r\n\r\n").encode())
        parts.append(p.read_bytes())
        parts.append(b"\r\n")
    parts.append(f"--{boundary}--\r\n".encode())
    return b"".join(parts), f"multipart/form-data; boundary={boundary}"


def build_caption(meta: dict) -> str:
    tags = " ".join("#" + h for h in meta.get("hashtags", []))
    extra = [f"🎮 {meta.get('channel', '')}"]
    moment = meta.get("moment") or {}
    kind, score = moment.get("kind", "chat"), moment.get("score")
    if kind == "viewers":
        extra.append("✂️ клип зрителей")
    elif kind == "audio" and score:
        extra.append(f"🎤 крик/смех +{score} дБ")
    elif score:
        extra.append(f"🔥 чат x{score}")
    if meta.get("views"):
        extra.append(f"👁 {meta['views']}")
    if (meta.get("score") or {}).get("total") is not None:
        extra.append(f"⭐ {meta['score']['total']}/100")
    if meta.get("judge"):
        extra.append(f"🧠 {meta['judge']['score']}/10")
    text = f"{meta.get('title', '')}\n\n{meta.get('description', '')}\n\n{tags}\n\n{' · '.join(extra)}"
    if meta.get("judge", {}).get("reason"):
        text += f"\n🧠 {meta['judge']['reason']}"
    if meta.get("source"):
        text += f"\n{meta['source']}"
    return text[:1024]  # лимит подписи в Telegram


KEYBOARD = lambda sid: json.dumps({"inline_keyboard": [  # noqa: E731
    [{"text": "✅ Опубликовал", "callback_data": f"pub:{sid}"},
     {"text": "🗑 Удалить", "callback_data": f"del:{sid}"}],
    [{"text": "📝 Переделать субтитры", "callback_data": f"subs:{sid}"}],
]})


class TelegramBot:
    def __init__(self, token: str, data_dir: Path, chat_id: str = "",
                 status: Callable[[], str] | None = None):
        self.token = token
        self.state_file = Path(data_dir) / "telegram.json"
        self.status = status or (lambda: "Программа работает.")
        self.on_resubtitle: Callable[[Path], Path] | None = None   # пересборка субтитров (ставит программа)
        self.redo_lock = threading.Lock()                          # по одному клипу за раз
        self.lock = threading.Lock()
        try:
            self.state = json.loads(self.state_file.read_text(encoding="utf-8"))
        except (OSError, ValueError):
            self.state = {}
        self.state.setdefault("clips", {})
        self.state.setdefault("pending", [])
        self.state.setdefault("offset", 0)
        if chat_id:
            self.state["chat_id"] = str(chat_id)
        if self.state.get("chat_id") and "bound_at" not in self.state:
            self.state["bound_at"] = time.time()
        self.clips_root = Path(data_dir)

    # --- низкий уровень -----------------------------------------------------------
    def api(self, method: str, params: dict | None = None, files: dict | None = None,
            timeout: float = 60) -> dict:
        url = f"https://api.telegram.org/bot{self.token}/{method}"
        params = {k: v for k, v in (params or {}).items() if v is not None}
        if files:
            body, ctype = _multipart(params, files)
        else:
            body, ctype = json.dumps(params).encode(), "application/json"
        req = urllib.request.Request(url, data=body, headers={"Content-Type": ctype})
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            detail = e.read().decode(errors="ignore")[:300]
            raise RuntimeError(f"Telegram {method}: HTTP {e.code} {detail}") from None

    def _save(self) -> None:
        self.state_file.parent.mkdir(parents=True, exist_ok=True)
        tmp = self.state_file.with_suffix(".tmp")
        tmp.write_text(json.dumps(self.state, ensure_ascii=False, indent=1), encoding="utf-8")
        tmp.replace(self.state_file)

    @property
    def chat_id(self) -> str | None:
        return self.state.get("chat_id")

    def _say(self, text: str) -> None:
        if self.chat_id:
            self.api("sendMessage", {"chat_id": self.chat_id, "text": text})

    # --- отправка клипа -------------------------------------------------------------
    def send_clip(self, out_dir: Path) -> str | None:
        out_dir = Path(out_dir)
        with self.lock:
            if not self.chat_id:
                pend = [p for p in self.state["pending"] if p != str(out_dir)] + [str(out_dir)]
                self.state["pending"] = pend[-MAX_PENDING:]
                self._save()
                log.warning("клип ждёт отправки: напишите вашему боту /start в Telegram")
                return None
        meta_file = out_dir / "meta.json"
        meta = json.loads(meta_file.read_text(encoding="utf-8"))
        video = out_dir / "clip.mp4"
        small = None
        if video.stat().st_size > MAX_UPLOAD:
            small = out_dir / "clip_tg.mp4"  # только для Telegram, оригинал не трогаем
            subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(video),
                            "-vf", "scale=720:-2", "-c:v", "libx264", "-crf", "28", "-preset", "veryfast",
                            "-c:a", "aac", "-b:a", "128k", str(small)], check=True)
            video = small
        sid = secrets.token_hex(4)
        try:
            res = self.api("sendVideo", {
                "chat_id": self.chat_id, "caption": build_caption(meta), "supports_streaming": "true",
                "width": "1080", "height": "1920", "duration": str(int(meta.get("duration", 0))),
                "reply_markup": KEYBOARD(sid),
            }, files={"video": video}, timeout=300)
        finally:
            if small:
                small.unlink(missing_ok=True)
        msg_id = res["result"]["message_id"]
        with self.lock:
            self.state["clips"][sid] = {"dir": str(out_dir), "msg": msg_id}
            self._save()
        meta["telegram"] = {"id": sid, "status": "sent"}
        meta_file.write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")
        log.info("📨 клип отправлен в Telegram")
        return sid

    def unsent_clips(self) -> list[Path]:
        """Готовые клипы после привязки бота, которые так и не ушли в Telegram
        (например, программу перезапустили, пока шла отправка)."""
        since = self.state.get("bound_at", time.time())
        out = []
        for meta in self.clips_root.glob("*/*/meta.json"):
            d = meta.parent
            try:
                if (d / "clip.mp4").exists() and meta.stat().st_mtime >= since \
                        and "telegram" not in json.loads(meta.read_text(encoding="utf-8")):
                    out.append(d)
            except (OSError, ValueError):
                continue
        return sorted(out, key=lambda d: (d / "meta.json").stat().st_mtime)[-MAX_PENDING:]

    def flush_pending(self) -> None:
        with self.lock:
            pending, self.state["pending"] = list(self.state["pending"]), []
            self._save()
        pending = list(dict.fromkeys(pending + [str(d) for d in self.unsent_clips()]))
        if pending:
            log.info("досылаю в Telegram клипов: %d", len(pending))
        for d in pending:
            if Path(d, "clip.mp4").exists():
                try:
                    self.send_clip(Path(d))
                except Exception as e:
                    log.warning("не удалось отправить %s: %s", d, e)

    # --- входящие: /start, кнопки -----------------------------------------------------
    def handle(self, upd: dict) -> None:
        if "message" in upd:
            msg = upd["message"]
            chat = str(msg["chat"]["id"])
            text = (msg.get("text") or "").strip()
            if self.chat_id and chat != self.chat_id:
                self.api("sendMessage", {"chat_id": chat, "text": "Этот бот личный."})
                return
            if text.startswith("/start"):
                fresh = not self.chat_id
                with self.lock:
                    self.state["chat_id"] = chat
                    self.state.setdefault("bound_at", time.time())
                    self._save()
                self._say("✅ Готово! Сюда будут приходить новые клипы.\n"
                          "Под каждым — кнопки «Опубликовал» и «Удалить».\n/status — что сейчас пишется.")
                if fresh:
                    self.flush_pending()
            elif text.startswith("/status"):
                self._say(self.status())
            return

        cb = upd.get("callback_query")
        if not cb:
            return
        msg = cb.get("message") or {}
        if str(msg.get("chat", {}).get("id")) != self.chat_id:
            return
        action, _, sid = (cb.get("data") or "").partition(":")
        clip = self.state["clips"].get(sid)
        answer = "Клип не найден"
        if clip:
            d = Path(clip["dir"])
            if action == "pub":
                self._set_status(d, "published")
                self.api("editMessageReplyMarkup", {"chat_id": self.chat_id, "message_id": msg["message_id"],
                                                    "reply_markup": json.dumps({"inline_keyboard": [[
                                                        {"text": "✅ Опубликовано", "callback_data": "noop:"},
                                                        {"text": "🗑 Удалить", "callback_data": f"del:{sid}"}]]})})
                answer = "Отмечено как опубликованное"
            elif action == "subs":
                answer = self._start_redo(sid, d, msg["message_id"])
            elif action == "del":
                shutil.rmtree(d, ignore_errors=True)
                with self.lock:
                    self.state["clips"].pop(sid, None)
                    self._save()
                try:
                    self.api("deleteMessage", {"chat_id": self.chat_id, "message_id": msg["message_id"]})
                except RuntimeError:  # старше 48 часов Telegram удалить не даст
                    self.api("editMessageReplyMarkup", {"chat_id": self.chat_id, "message_id": msg["message_id"],
                                                        "reply_markup": json.dumps({"inline_keyboard": []})})
                answer = "Клип удалён"
        self.api("answerCallbackQuery", {"callback_query_id": cb["id"], "text": answer})

    def _start_redo(self, sid: str, d: Path, message_id: int) -> str:
        if not self.on_resubtitle:
            return "Сейчас недоступно"
        if not self.redo_lock.acquire(blocking=False):
            return "Уже переделываю другой клип — нажмите позже"

        def work() -> None:
            try:
                self._say("⏳ Переделываю субтитры точной моделью — это займёт несколько минут…")
                self.on_resubtitle(d)
                new_sid = self.send_clip(d)
                if new_sid:
                    with self.lock:
                        self.state["clips"].pop(sid, None)
                        self._save()
                    try:
                        self.api("deleteMessage", {"chat_id": self.chat_id, "message_id": message_id})
                    except RuntimeError:
                        pass
            except FileNotFoundError:
                self._say("Исходник этого клипа уже удалён (хранится 2 дня) — переделать нельзя.")
            except Exception as e:
                log.warning("не удалось переделать субтитры: %s", e)
                self._say(f"Не получилось переделать субтитры: {e}")
            finally:
                self.redo_lock.release()

        threading.Thread(target=work, name=f"redo-{sid}", daemon=True).start()
        return "Переделываю субтитры…"

    def _set_status(self, d: Path, status: str) -> None:
        f = d / "meta.json"
        try:
            meta = json.loads(f.read_text(encoding="utf-8"))
            meta.setdefault("telegram", {})["status"] = status
            f.write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")
        except (OSError, ValueError):
            pass

    def poll_forever(self) -> None:
        backoff = 2
        while True:
            try:
                res = self.api("getUpdates", {"offset": self.state["offset"], "timeout": 50,
                                              "allowed_updates": ["message", "callback_query"]}, timeout=70)
                for upd in res.get("result", []):
                    with self.lock:
                        self.state["offset"] = upd["update_id"] + 1
                        self._save()
                    try:
                        self.handle(upd)
                    except Exception as e:
                        log.warning("ошибка обработки сообщения Telegram: %s", e)
                backoff = 2
            except Exception as e:
                log.warning("Telegram недоступен: %s; повтор через %sс", e, backoff)
                time.sleep(backoff)
                backoff = min(backoff * 2, 300)
