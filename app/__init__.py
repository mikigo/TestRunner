from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI
from tortoise import Tortoise
import fastapi_cdn_host

from app.core.exceptions import SettingNotFound
from app.core.init_app import (
    init_data,
    make_middlewares,
    register_exceptions,
    register_routers,
)

try:
    from app.settings.config import settings
except ImportError:
    raise SettingNotFound("Can not import settings")


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_data()
    yield
    await Tortoise.close_connections()



app = FastAPI(
    title=settings.APP_TITLE,
    description=settings.APP_DESCRIPTION,
    version=settings.VERSION,
    middleware=make_middlewares(),
    lifespan=lifespan,
    redoc_url=None,
)

fastapi_cdn_host.patch_docs(app, Path(__file__).parent.joinpath('static'))

register_exceptions(app)
register_routers(app, prefix="/api")

