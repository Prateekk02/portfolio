import httpx
from fastapi import FastAPI
from pydantic import BaseModel

from app.main import create_app
from tests.conftest import make_settings


class Payload(BaseModel):
    name: str


def build() -> FastAPI:
    app = create_app(make_settings())

    @app.post("/echo")
    async def echo(body: Payload) -> Payload:
        return body

    @app.get("/boom")
    async def boom() -> None:
        raise RuntimeError("secret internal detail")

    return app


async def request(method: str, path: str, **kw: object) -> httpx.Response:
    app = build()
    transport = httpx.ASGITransport(app=app, raise_app_exceptions=False)
    async with httpx.AsyncClient(transport=transport, base_url="http://t") as c:
        return await c.request(method, path, **kw)  # type: ignore[arg-type]


async def test_unknown_route_uses_the_error_envelope() -> None:
    response = await request("GET", "/nope")
    assert response.status_code == 404
    assert response.json()["error"]["code"] == "not_found"


async def test_validation_errors_are_422_with_a_readable_message() -> None:
    response = await request("POST", "/echo", json={"name": 5})
    assert response.status_code == 422
    body = response.json()["error"]
    assert body["code"] == "validation_error"
    assert body["message"].startswith("name")


async def test_empty_body_is_a_validation_error() -> None:
    response = await request("POST", "/echo")
    assert response.status_code == 422


async def test_unhandled_errors_do_not_leak_details() -> None:
    response = await request("GET", "/boom")
    assert response.status_code == 500
    assert response.json() == {
        "error": {"code": "internal_error", "message": "Something went wrong."}
    }
    assert "secret" not in response.text


async def test_wrong_method_is_an_http_error_envelope() -> None:
    response = await request("DELETE", "/healthz")
    assert response.status_code == 405
    assert response.json()["error"]["code"] == "http_error"
