from fastapi import FastAPI
import uvicorn

from .core.config import settings
from .db import SessionLocal, _init_db
from .api.client_api import api_router


app = FastAPI(
    title=settings.PROJECT_NAME, openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

db = SessionLocal()
_init_db(db)

app.include_router(api_router)

if __name__ == "__main__":
    uvicorn.run(app=app, port=8000)