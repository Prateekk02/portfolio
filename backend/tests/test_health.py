import httpx
import pytest
from fastapi import FastAPI, Request

from app.core.config import get_settings
from app.main import app_factory, create_app
from tests.conftest import make_settings


async def test_healthz_does_not_need_the_database() -> None:
    app = create_app(make_settings(DATABASE_URL="postgresql://x:y@127.0.0.1:1/none"))
    transport = httpx.ASGITransport(app=app)
    async with httpx.AsyncClient(transport=transport, base_url="http://t") as c:
        response = await c.get("/healthz")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


async def test_readyz_is_ok_when_the_database_answers(
    client: httpx.AsyncClient,
) -> None:
    response = await client.get("/readyz")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


async def test_readyz_is_503_when_the_database_is_down() -> None:
    app = create_app(make_settings(DATABASE_URL="postgresql://x:y@127.0.0.1:1/none"))
    transport = httpx.ASGITransport(app=app)
    async with httpx.AsyncClient(transport=transport, base_url="http://t") as c:
        response = await c.get("/readyz")
    assert response.status_code == 503
    assert response.json()["db"] == "down"


async def test_responses_carry_a_request_id(client: httpx.AsyncClient) -> None:
    response = await client.get("/healthz")
    assert len(response.headers["x-request-id"]) >= 16


async def test_an_incoming_request_id_is_kept(client: httpx.AsyncClient) -> None:
    response = await client.get("/healthz", headers={"X-Request-ID": "abc-123"})
    assert response.headers["x-request-id"] == "abc-123"


def test_docs_are_hidden_in_production() -> None:
    app: FastAPI = create_app(make_settings(ENV="production"))
    assert app.docs_url is None and app.openapi_url is None


async def test_lifespan_disposes_the_engine_and_factory_builds_an_app(
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    app = create_app(make_settings())
    async with app.router.lifespan_context(app):
        pass
    monkeypatch.setenv("DATABASE_URL", "postgresql://u:p@h/db")
    get_settings.cache_clear()
    assert app_factory().title == "Portfolio API"
    get_settings.cache_clear()


async def test_get_session_yields_a_working_session(app: FastAPI) -> None:
    from sqlalchemy import text

    from app.core.db import get_session

    request = Request({"type": "http", "app": app, "headers": []})
    gen = get_session(request)
    session = await anext(gen)
    assert (await session.execute(text("SELECT 1"))).scalar() == 1
    await gen.aclose()
    await app.state.engine.dispose()
