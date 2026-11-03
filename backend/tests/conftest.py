import os
from collections.abc import AsyncIterator

import httpx
import pytest
from fastapi import FastAPI

from app.core.config import Settings
from app.main import create_app

TEST_DB = os.environ.get(
    "TEST_DATABASE_URL",
    "postgresql://portfolio:portfolio@localhost:5432/portfolio_test",
)
ORIGIN = "http://localhost:3000"


def make_settings(**overrides: object) -> Settings:
    values: dict[str, object] = {
        "ENV": "test",
        "DATABASE_URL": TEST_DB,
        "CORS_ORIGINS": [ORIGIN],
        "LOG_LEVEL": "INFO",
    }
    values.update(overrides)
    return Settings.model_validate(values)


@pytest.fixture
def app() -> FastAPI:
    return create_app(make_settings())


@pytest.fixture
async def client(app: FastAPI) -> AsyncIterator[httpx.AsyncClient]:
    transport = httpx.ASGITransport(app=app, raise_app_exceptions=False)
    async with httpx.AsyncClient(transport=transport, base_url="http://test") as c:
        yield c
    await app.state.engine.dispose()
