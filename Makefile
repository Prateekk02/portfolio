.PHONY: setup dev lint typecheck test e2e check build db-migrate db-revision seed

FRONTEND := frontend
BACKEND := backend

setup: ## install dependencies and git hooks
	cd $(FRONTEND) && npm ci
	@command -v pre-commit >/dev/null 2>&1 && pre-commit install || echo "pre-commit not found, skipping git hooks"

dev: ## run the frontend dev server (compose stack arrives in Phase 3)
	cd $(FRONTEND) && npm run dev

lint: ## eslint
	cd $(FRONTEND) && npm run lint

typecheck: ## tsc
	cd $(FRONTEND) && npx tsc --noEmit

test: ## unit tests (backend tests arrive in Phase 3)
	cd $(FRONTEND) && npm test

e2e: ## end-to-end and accessibility tests against a production build
	cd $(FRONTEND) && npm run build && npm run test:e2e

check: lint typecheck test ## what CI runs

build: ## production build
	cd $(FRONTEND) && npm run build

db-migrate: ## Phase 3
	@echo "db-migrate arrives in Phase 3"

db-revision: ## Phase 3, usage: make db-revision m="message"
	@echo "db-revision arrives in Phase 3"

seed: ## Phase 5
	@echo "seed arrives in Phase 5"
