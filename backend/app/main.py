from collections.abc import AsyncIterator
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware

from app.api.v1 import health
from app.core.config import Settings, get_settings
from app.core.db import create_engine, create_session_factory
from app.core.errors import register_error_handlers
from app.core.logging import configure_logging, request_id_middleware


def create_app(settings: Settings | None = None) -> FastAPI:
    settings = settings or get_settings()
    configure_logging(settings.log_level)
    engine = create_engine(settings.database_url)

    @asynccontextmanager
    async def lifespan(_: FastAPI) -> AsyncIterator[None]:
        yield
        await engine.dispose()

    app = FastAPI(
        title="Portfolio API",
        lifespan=lifespan,
        docs_url=None if settings.env == "production" else "/docs",
        redoc_url=None,
        openapi_url=None if settings.env == "production" else "/openapi.json",
    )
    app.state.settings = settings
    app.state.engine = engine
    app.state.session_factory = create_session_factory(engine)

    app.add_middleware(GZipMiddleware, minimum_size=1024)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE"],
        allow_headers=["Authorization", "Content-Type", "X-Request-ID"],
        max_age=600,
    )
    app.middleware("http")(request_id_middleware)
    register_error_handlers(app)
    app.include_router(health.router)
    return app


def app_factory() -> FastAPI:
    """Entry point for uvicorn: `uvicorn app.main:app_factory --factory`."""
    return create_app()
