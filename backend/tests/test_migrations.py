import os

import pytest
from alembic.config import Config
from sqlalchemy import text
from sqlalchemy.ext.asyncio import create_async_engine

from alembic import command
from app.core.config import get_settings
from tests.conftest import TEST_DB


@pytest.fixture
def migration_env(monkeypatch: pytest.MonkeyPatch) -> Config:
    monkeypatch.setenv("DATABASE_URL", TEST_DB)
    get_settings.cache_clear()
    cfg = Config(os.path.join(os.path.dirname(__file__), "..", "alembic.ini"))
    cfg.set_main_option(
        "script_location", os.path.join(os.path.dirname(__file__), "..", "alembic")
    )
    yield cfg
    get_settings.cache_clear()


async def _schema_exists() -> bool:
    engine = create_async_engine(get_settings().database_url)
    async with engine.connect() as conn:
        result = await conn.execute(
            text("SELECT 1 FROM information_schema.schemata WHERE schema_name='app'")
        )
        found = result.scalar() is not None
    await engine.dispose()
    return found


async def test_upgrade_downgrade_upgrade(migration_env: Config) -> None:
    import asyncio

    loop = asyncio.get_running_loop()
    await loop.run_in_executor(None, command.upgrade, migration_env, "head")
    assert await _schema_exists()
    await loop.run_in_executor(None, command.downgrade, migration_env, "base")
    await loop.run_in_executor(None, command.upgrade, migration_env, "head")
    assert await _schema_exists()
