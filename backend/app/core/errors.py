from typing import cast

import structlog
from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException


def error_body(code: str, message: str) -> dict[str, dict[str, str]]:
    return {"error": {"code": code, "message": message}}


async def _http_error(_: Request, exc: Exception) -> JSONResponse:
    exc = cast(StarletteHTTPException, exc)
    code = "not_found" if exc.status_code == 404 else "http_error"
    return JSONResponse(error_body(code, str(exc.detail)), status_code=exc.status_code)


async def _validation_error(_: Request, exc: Exception) -> JSONResponse:
    exc = cast(RequestValidationError, exc)
    first = exc.errors()[0] if exc.errors() else {}
    where = ".".join(str(p) for p in first.get("loc", ()) if p != "body")
    message = f"{where}: {first.get('msg', 'invalid request')}".strip(": ")
    return JSONResponse(error_body("validation_error", message), status_code=422)


async def _unhandled(_: Request, exc: Exception) -> JSONResponse:
    structlog.get_logger("errors").error("unhandled", exc_info=exc)
    return JSONResponse(
        error_body("internal_error", "Something went wrong."), status_code=500
    )


def register_error_handlers(app: FastAPI) -> None:
    app.add_exception_handler(StarletteHTTPException, _http_error)
    app.add_exception_handler(RequestValidationError, _validation_error)
    app.add_exception_handler(Exception, _unhandled)
