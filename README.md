# Portfolio

Personal site and blog for Prateek Kumar. Monorepo with a Next.js frontend and a FastAPI backend.

> Status: the site is being rebuilt in phases (see `v1-portfolio`). The frontend works today; the backend, admin panel and blog land in later phases.

## Target architecture

```text
Visitor --> Vercel (Next.js)  --reads-->  Cloud Run (FastAPI)  --SQL-->  Neon Postgres
              |  public pages are static/ISR, served from the CDN
              |  /admin is auth-gated (GitHub + Google OAuth, single admin)
              '-- /api/revalidate is called by the backend when content changes
```

## Repo layout

```text
frontend/   Next.js app (src/app, src/components, src/lib, tests/)
backend/    FastAPI service (placeholder until Phase 3)
infra/      docker-compose and deployment reference (Phase 3 onwards)
.github/    CI, CodeQL and Dependabot
Makefile    common tasks
```

## Getting started

Requirements: Node 22+, `make`. (Python 3.12 and `uv` are needed from Phase 3.)

```bash
make setup          # install dependencies and git hooks
cp frontend/.env.example frontend/.env.local
make dev            # http://localhost:3000
```

## Common commands

| Command          | What it does                       |
| ---------------- | ---------------------------------- |
| `make check`     | lint, typecheck and unit tests     |
| `make test`      | unit tests                         |
| `make e2e`       | build, then Playwright and axe     |
| `make build`     | production build                   |
| `make lint`      | ESLint                             |
| `make typecheck` | TypeScript                         |

## Contributing workflow

One phase per branch (`v1/phase-N-...`), one Conventional Commit per task, and a pull request that passes the `ci` checks before merging to `main`.
