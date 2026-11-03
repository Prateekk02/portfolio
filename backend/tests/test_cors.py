import httpx

from tests.conftest import ORIGIN


async def test_a_listed_origin_is_allowed(client: httpx.AsyncClient) -> None:
    response = await client.get("/healthz", headers={"Origin": ORIGIN})
    assert response.headers["access-control-allow-origin"] == ORIGIN


async def test_an_unknown_origin_gets_no_cors_headers(
    client: httpx.AsyncClient,
) -> None:
    response = await client.get("/healthz", headers={"Origin": "https://evil.example"})
    assert "access-control-allow-origin" not in response.headers


async def test_preflight_from_an_unknown_origin_is_rejected(
    client: httpx.AsyncClient,
) -> None:
    response = await client.options(
        "/healthz",
        headers={
            "Origin": "https://evil.example",
            "Access-Control-Request-Method": "GET",
        },
    )
    assert response.status_code == 400
