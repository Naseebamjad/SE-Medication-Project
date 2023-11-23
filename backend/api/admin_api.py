from fastapi import APIRouter

from .endpoints.admin import user, authentication


api_router = APIRouter()
api_router.include_router(user.router)
api_router.include_router(authentication.router)
