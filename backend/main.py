from fastapi import FastAPI

from .core.config import settings
from .db import SessionLocal, _init_db


app = FastAPI(
    title=settings.PROJECT_NAME, openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

db = SessionLocal()
_init_db(db)