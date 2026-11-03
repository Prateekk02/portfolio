.PHONY: setup dev lint typecheck test e2e check build db-migrate db-revision seed

FRONTEND := frontend
BACKEND := backend

setup: ## install dependencies and git hooks
	cd $(FRONTEND) && npm ci
	@command -v pre-commit >/dev/null 2>&1 && pre-commit install || echo "pre-commit not found, skipping git hooks"

dev: ## run db + api + web with docker compose
	docker compose -f infra/docker-compose.yml up --build

lint: ## eslint, ruff
	cd $(FRONTEND) && npm run lint
	cd $(BACKEND) && uv run ruff check . && uv run ruff format --check .

typecheck: ## tsc, mypy
	cd $(FRONTEND) && npx tsc --noEmit
	cd $(BACKEND) && uv run mypy app

test: ## frontend unit tests, backend tests (needs Postgres on :5432)
	cd $(FRONTEND) && npm test
	cd $(BACKEND) && uv run pytest

e2e: ## end-to-end and accessibility tests against a production build
	cd $(FRONTEND) && npm run build && npm run test:e2e

check: lint typecheck test ## what CI runs

build: ## production build
	cd $(FRONTEND) && npm run build

db-migrate: ## apply migrations
	cd $(BACKEND) && uv run alembic upgrade head

db-revision: ## usage: make db-revision m="message"
	cd $(BACKEND) && uv run alembic revision -m "$(m)"

seed: ## Phase 5
	@echo "seed arrives in Phase 5"
