import json

import httpx
import pytest

from app.core.logging import SENSITIVE_PREFIXES


async def test_access_log_has_method_path_status_and_no_body(
    client: httpx.AsyncClient, capsys: pytest.CaptureFixture[str]
) -> None:
    await client.post(
        "/api/v1/contact",
        json={"message": "private words"},
        headers={"Authorization": "Bearer top-secret"},
    )
    out = capsys.readouterr().out
    lines = [json.loads(x) for x in out.splitlines() if x.startswith("{")]
    entry = next(x for x in lines if x.get("event") == "request")
    assert entry["method"] == "POST"
    assert entry["path"] == "/api/v1/contact"
    assert entry["status"] == 404
    assert entry["request_id"]
    assert "private words" not in out and "top-secret" not in out


def test_sensitive_prefixes_cover_contact_and_admin() -> None:
    assert "/api/v1/contact" in SENSITIVE_PREFIXES
    assert "/api/v1/admin" in SENSITIVE_PREFIXES
