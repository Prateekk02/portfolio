# Backend

FastAPI service for the portfolio (content, blog, contact, admin).

```bash
cp .env.example .env          # then point DATABASE_URL at a Postgres
uv sync
uv run alembic upgrade head
uv run uvicorn app.main:app_factory --factory --reload --port 8080
```

- `GET /healthz`: process is up (no database).
- `GET /readyz`: database answers `SELECT 1`, otherwise 503.
- Errors always look like `{"error": {"code": "...", "message": "..."}}`.
- All tables live in the `app` schema and are migrated only by Alembic.
- Tests: `uv run pytest` (needs Postgres; set `TEST_DATABASE_URL`). Coverage must stay at 85% or higher.
