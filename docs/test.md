# Test plan

Status: written 2026-11-04. Audit of what exists, what is missing, and the order in which the gaps get closed.
Every layer runs in CI and rolls up into the single required check `ci-gate`.

## 1. Pyramid and tools

| Layer | Tool | Scope | Runs when |
|---|---|---|---|
| Static | ESLint, `tsc --noEmit`, ruff, mypy | Whole repo | Every PR |
| Unit (frontend) | Vitest + Testing Library | Components, data, utils | Every PR |
| Unit (backend) | pytest | Services, schemas, config, errors | Every PR |
| Integration (backend) | pytest + real Postgres service container + httpx `AsyncClient` | Routes, DB, migrations | Every PR |
| End to end | Playwright (desktop Chrome, Pixel 7) | Routes, navigation, theme, mobile layout | Every PR |
| Cross-browser sanity | Selenium (Python, pytest, headless Chrome and Firefox) | Smoke of the core journeys in a second engine | Every PR, small and fast |
| Accessibility | axe via Playwright, light and dark | Every route | Every PR |
| Performance | Lighthouse CI | Perf >= 0.9, others >= 0.95 | Every PR |
| Security | npm audit, gitleaks, CodeQL, pip-audit | Dependencies and code | Every PR, weekly |
| Sanity / smoke | `scripts/smoke.sh` (HTTP checks) | A deployed URL | After every deploy (staging, candidate, production) |

Selenium note: Playwright already covers these journeys, so Selenium is deliberately a small cross-browser sanity suite (Firefox engine, WebDriver protocol), not a second copy of the full e2e suite.

## 2. Audit: what exists today (frontend)

| Area | Unit | E2E | Gap |
|---|---|---|---|
| AnimatedRecommendations, BackgroundBeams, NavLinks, ProjectList, Reveal, SiteHeader, TextLink, ThemeToggle | yes | partly | none |
| Data files (profile, projects, recommendations, ...) | yes (`data.test.ts`) | n/a | none |
| Icons / favicon | yes | yes | none |
| Pages (home, projects, case study, experience, resources, blog, contact, not-found, sitemap) | yes (`pages.test.tsx`) | smoke + a11y | no behavioural tests for contact form (page is a stub until Phase 6) |
| **MotionProvider, Section, PageHeader, SiteFooter, WritingList** | **no direct test** | indirect | add unit tests |
| `app/error.tsx` | no | no | add unit test |
| `robots.ts` | no | no | add unit test |
| `lib/utils.ts` | indirect | n/a | add unit test |
| Mobile layout (no overflow, tap targets, header inside tile) | no | no | add Playwright test at 320/360/390 px |
| Cross-browser | no | Chrome only | add Selenium suite |
| Deployed sanity | no | no | add `scripts/smoke.sh` |
| Backend (Phase 3 scope) | yes, 25 tests, 100% coverage | n/a | grows with each phase (section 4) |

Coverage today: Vitest statements 93.65%, branches 95.91% (thresholds 75%). Coverage only measures `src/lib` and `src/components`, so pages and `app/*.ts` files are excluded and are covered by the page tests above.

## 3. Work added in Phase 3 (frontend)

Status 2026-11-04: items 1, 2 and 4 are done and verified locally. Item 3 (Selenium) is written and wired into CI; it could not be run locally (driver mismatch in the dev container), so its first real run is the CI `selenium` job.

1. **Unit** `tests/unit/`:
   - `MotionProvider.test.tsx`: renders children, wraps in LazyMotion strict and reduced motion config.
   - `Section.test.tsx`: heading, id, children rendered.
   - `PageHeader.test.tsx`: title and description.
   - `SiteFooter.test.tsx`: links and current year.
   - `WritingList.test.tsx`: items, links, empty state.
   - `error.test.tsx`: renders message and the reset button calls `reset`.
   - `robots.test.ts`: allows crawling and points to the sitemap.
   - `utils.test.ts`: `cn` merges and de-duplicates tailwind classes.
   - Raise coverage `include` to `src/app/**` and keep thresholds at 85%.
2. **E2E (Playwright)** `tests/e2e/mobile.spec.ts`: at 320, 360 and 390 px on every route, no horizontal scroll, header children inside `[data-testid="site-header-tile"]`, interactive targets >= 44 px.
3. **Selenium sanity** `tests/selenium/` (Python, pytest, selenium 4):
   - Home loads with the headline; navigation links reach each route; 404 page for an unknown route; theme toggle switches `html.dark`; project case study opens.
   - Runs headless Chrome and Firefox against `http://localhost:3100`.
4. **Smoke** `scripts/smoke.sh BASE_URL`: home 200, `/blog` 200, `/robots.txt`, `/sitemap.xml`, plus backend `/healthz` and `/readyz` when an API URL is given. Retries with backoff for cold starts.

## 4. Backend plan (starts with Phase 3, grows each phase)

- Phase 3: config, health routes, error envelope, request id, logging, database session, Alembic upgrade/downgrade test. Target >= 85% coverage.
- Phase 5 to 8: per-route integration tests, authorization tests (admin only), validation tests, rate limit tests, email sending behind a fake.
- Migration test: upgrade to head on an empty database, downgrade to base, upgrade again.
- Contract test: the OpenAPI schema is exported and diffed in CI so accidental breaking changes fail the build.

## 5. CI wiring

`ci.yml` jobs: `frontend` (lint, types, unit with coverage), `backend` (ruff, mypy, pytest with Postgres service), `e2e` (Playwright desktop and mobile), `selenium` (Chrome and Firefox against the production build), `lighthouse`, `security`, then `ci-gate` that needs all of them and fails on failure, cancelled or skipped. The ruleset requires only `ci-gate`. Deploy workflows run `scripts/smoke.sh` against the deployed URL.

## 6. Definition of done for a change

A pull request is mergeable when: new behaviour has a unit test, a user-visible flow has an e2e or Selenium test, `ci-gate` is green, coverage did not drop below the thresholds, and for release changes the smoke test passes on staging.
