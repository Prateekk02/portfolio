from collections.abc import AsyncIterator

from fastapi import Request
from sqlalchemy import MetaData
from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)
from sqlalchemy.orm import DeclarativeBase

# Every table lives in the `app` schema, which only Alembic migrates.
metadata = MetaData(schema="app")


class Base(DeclarativeBase):
    metadata = metadata


def create_engine(database_url: str) -> AsyncEngine:
    # Neon's pooler does the pooling, so keep this pool small and fixed.
    return create_async_engine(
        database_url, pool_pre_ping=True, pool_size=5, max_overflow=0
    )


def create_session_factory(engine: AsyncEngine) -> async_sessionmaker[AsyncSession]:
    return async_sessionmaker(engine, expire_on_commit=False)


async def get_session(request: Request) -> AsyncIterator[AsyncSession]:
    """FastAPI dependency: one session per request."""
    async with request.app.state.session_factory() as session:
        yield session
