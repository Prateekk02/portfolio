#!/usr/bin/env bash
# Sanity check of a deployed site and (optionally) its API.
# Usage: scripts/smoke.sh https://www.prateekkumar.dev [https://api.prateekkumar.dev]
set -euo pipefail

SITE="${1:?usage: smoke.sh SITE_URL [API_URL]}"
API="${2:-}"
SITE="${SITE%/}"; API="${API%/}"

# Cloud Run cold starts and a sleeping Neon database need patience on the first call.
check() { # check URL EXPECTED_STATUS [GREP]
  local url="$1" want="$2" pattern="${3:-}" body status
  for attempt in 1 2 3 4 5 6; do
    body="$(mktemp)"
    status="$(curl -s -o "$body" -w '%{http_code}' --max-time 20 "$url" || echo 000)"
    if [ "$status" = "$want" ] && { [ -z "$pattern" ] || grep -q "$pattern" "$body"; }; then
      echo "ok   $url ($status)"; rm -f "$body"; return 0
    fi
    rm -f "$body"; sleep $((attempt * 3))
  done
  echo "FAIL $url (wanted $want, got $status)"; return 1
}

check "$SITE/" 200 "language models into software"
check "$SITE/projects" 200
check "$SITE/blog" 200
check "$SITE/robots.txt" 200 "Sitemap"
check "$SITE/sitemap.xml" 200 "<urlset"
check "$SITE/definitely-not-a-page" 404

if [ -n "$API" ]; then
  check "$API/healthz" 200 '"ok"'
  check "$API/readyz" 200 '"ok"'
  check "$API/no-such-route" 404 '"not_found"'
fi
echo "smoke passed"
