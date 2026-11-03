import pytest
from pydantic import ValidationError

from app.core.config import Settings, get_settings


def test_plain_postgres_urls_use_the_asyncpg_driver() -> None:
    s = Settings.model_validate(
        {"DATABASE_URL": "postgresql://u:p@h/db?sslmode=require"}
    )
    assert s.database_url == "postgresql+asyncpg://u:p@h/db?ssl=require"


def test_postgres_scheme_alias_is_accepted() -> None:
    s = Settings.model_validate({"DATABASE_URL": "postgres://u:p@h/db"})
    assert s.database_url.startswith("postgresql+asyncpg://")


def test_database_url_is_required() -> None:
    with pytest.raises(ValidationError):
        Settings.model_validate({})


def test_wildcard_cors_is_rejected() -> None:
    with pytest.raises(ValidationError):
        Settings.model_validate(
            {"DATABASE_URL": "postgresql://u:p@h/db", "CORS_ORIGINS": ["*"]}
        )


def test_unknown_environment_is_rejected() -> None:
    with pytest.raises(ValidationError):
        Settings.model_validate({"DATABASE_URL": "postgresql://u:p@h/db", "ENV": "dev"})


def test_get_settings_reads_the_environment(monkeypatch: pytest.MonkeyPatch) -> None:
    get_settings.cache_clear()
    monkeypatch.setenv("DATABASE_URL", "postgresql://u:p@h/db")
    monkeypatch.setenv("ENV", "staging")
    assert get_settings().env == "staging"
    get_settings.cache_clear()
