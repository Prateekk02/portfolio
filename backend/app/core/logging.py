import logging
import sys
from collections.abc import Awaitable, Callable
from uuid import uuid4

import structlog
from fastapi import Request, Response
from structlog.contextvars import bind_contextvars, clear_contextvars

REQUEST_ID_HEADER = "X-Request-ID"
# Paths whose bodies and headers are never logged.
SENSITIVE_PREFIXES = ("/api/v1/contact", "/api/v1/admin", "/api/auth")


def configure_logging(level: str = "INFO") -> None:
    logging.basicConfig(format="%(message)s", stream=sys.stdout, level=level.upper())
    structlog.configure(
        processors=[
            structlog.contextvars.merge_contextvars,
            structlog.processors.add_log_level,
            structlog.processors.TimeStamper(fmt="iso"),
            structlog.processors.format_exc_info,
            structlog.processors.JSONRenderer(),
        ],
        wrapper_class=structlog.make_filtering_bound_logger(
            logging.getLevelNamesMapping()[level.upper()]
        ),
        cache_logger_on_first_use=False,
    )


async def request_id_middleware(
    request: Request, call_next: Callable[[Request], Awaitable[Response]]
) -> Response:
    request_id = request.headers.get(REQUEST_ID_HEADER) or uuid4().hex
    clear_contextvars()
    bind_contextvars(request_id=request_id)
    log = structlog.get_logger("access")
    response = await call_next(request)
    response.headers[REQUEST_ID_HEADER] = request_id
    # Only method, path and status are logged: never bodies or Authorization.
    log.info(
        "request",
        method=request.method,
        path=request.url.path,
        status=response.status_code,
    )
    return response
