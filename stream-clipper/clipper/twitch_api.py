"""Минимальный клиент Twitch Helix API (app access token, без зависимостей)."""
from __future__ import annotations

import json
import time
import urllib.parse
import urllib.request

API = "https://api.twitch.tv/helix"


class TwitchAPI:
    def __init__(self, client_id: str, client_secret: str):
        if not client_id or not client_secret:
            raise RuntimeError(
                "Нужны TWITCH_CLIENT_ID и TWITCH_CLIENT_SECRET в .env "
                "(создайте приложение на dev.twitch.tv/console)")
        self.client_id = client_id
        self.client_secret = client_secret
        self._token = ""
        self._token_exp = 0.0

    def _auth(self) -> str:
        if time.time() < self._token_exp - 60:
            return self._token
        data = urllib.parse.urlencode({
            "client_id": self.client_id,
            "client_secret": self.client_secret,
            "grant_type": "client_credentials",
        }).encode()
        with urllib.request.urlopen("https://id.twitch.tv/oauth2/token", data=data, timeout=20) as r:
            body = json.load(r)
        self._token = body["access_token"]
        self._token_exp = time.time() + body.get("expires_in", 3600)
        return self._token

    def get(self, path: str, params: list[tuple[str, str]]) -> dict:
        url = f"{API}/{path}?{urllib.parse.urlencode(params)}"
        req = urllib.request.Request(url, headers={
            "Client-Id": self.client_id,
            "Authorization": f"Bearer {self._auth()}",
        })
        with urllib.request.urlopen(req, timeout=20) as r:
            return json.load(r)

    def game_id(self, name: str) -> str:
        data = self.get("games", [("name", name)])["data"]
        if not data:
            raise RuntimeError(f"Игра «{name}» не найдена в Twitch. Проверьте twitch.game_name в config.yaml")
        return data[0]["id"]

    def top_streams(self, game_id: str, languages: list[str], first: int = 50) -> list[dict]:
        params = [("game_id", game_id), ("first", str(min(first, 100)))]
        params += [("language", lang) for lang in languages]
        return self.get("streams", params)["data"]

    def live_status(self, logins: list[str]) -> list[dict]:
        if not logins:
            return []
        return self.get("streams", [("user_login", l) for l in logins[:100]])["data"]

    def channel_clips(self, broadcaster_id: str, since_iso: str) -> list[dict]:
        params = [("broadcaster_id", broadcaster_id), ("started_at", since_iso), ("first", "20")]
        return self.get("clips", params)["data"]

    def top_clips(self, game_id: str, since_iso: str, first: int = 50) -> list[dict]:
        params = [("game_id", game_id), ("started_at", since_iso), ("first", str(min(first, 100)))]
        return self.get("clips", params)["data"]
