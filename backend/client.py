from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
import uvicorn

from .core.config import settings
from .db import SessionLocal, _init_db
from .api.client_api import api_router


app = FastAPI(
    title=settings.PROJECT_NAME, openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db = SessionLocal()
_init_db(db)

app.include_router(api_router)

if __name__ == "__main__":
    uvicorn.run(app=app, port=8000)