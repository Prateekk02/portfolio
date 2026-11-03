from functools import lru_cache
from typing import Literal

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Runtime configuration. Missing required values stop the app at start-up."""

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    env: Literal["local", "test", "staging", "production"] = Field(
        default="local", validation_alias="ENV"
    )
    database_url: str = Field(validation_alias="DATABASE_URL")
    cors_origins: list[str] = Field(
        default_factory=list, validation_alias="CORS_ORIGINS"
    )
    log_level: str = Field(default="INFO", validation_alias="LOG_LEVEL")

    @field_validator("database_url")
    @classmethod
    def _async_driver(cls, value: str) -> str:
        """Accept the plain Neon/Postgres URL and switch it to the asyncpg driver."""
        for prefix in ("postgresql://", "postgres://"):
            if value.startswith(prefix):
                value = "postgresql+asyncpg://" + value[len(prefix) :]
        # asyncpg takes `ssl=require`, not libpq's `sslmode=require`.
        return value.replace("sslmode=", "ssl=")

    @field_validator("cors_origins")
    @classmethod
    def _exact_origins(cls, value: list[str]) -> list[str]:
        if "*" in value:
            raise ValueError("CORS_ORIGINS must list exact origins, not '*'")
        return value


@lru_cache
def get_settings() -> Settings:
    return Settings()
