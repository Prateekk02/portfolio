import asyncio

from sqlalchemy import pool, text
from sqlalchemy.engine import Connection
from sqlalchemy.ext.asyncio import async_engine_from_config

from alembic import context
from app.core.config import get_settings
from app.core.db import Base

target_metadata = Base.metadata
SCHEMA = "app"


def _configure(connection: Connection | None, url: str | None = None) -> None:
    context.configure(
        connection=connection,
        url=url,
        target_metadata=target_metadata,
        version_table_schema=SCHEMA,
        include_schemas=True,
        literal_binds=connection is None,
    )


def run_migrations_offline() -> None:
    _configure(None, url=get_settings().database_url)
    with context.begin_transaction():
        context.run_migrations()


def _run(connection: Connection) -> None:
    # The version table lives in `app`, so the schema must exist first.
    connection.execute(text(f"CREATE SCHEMA IF NOT EXISTS {SCHEMA}"))
    connection.commit()
    _configure(connection)
    with context.begin_transaction():
        context.run_migrations()


async def run_migrations_online() -> None:
    section = context.config.get_section(context.config.config_ini_section) or {}
    section["sqlalchemy.url"] = get_settings().database_url
    engine = async_engine_from_config(
        section, prefix="sqlalchemy.", poolclass=pool.NullPool
    )
    async with engine.connect() as connection:
        await connection.run_sync(_run)
    await engine.dispose()


if context.is_offline_mode():
    run_migrations_offline()
else:
    asyncio.run(run_migrations_online())
