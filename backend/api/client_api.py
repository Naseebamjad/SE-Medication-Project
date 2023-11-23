from fastapi import APIRouter

from .endpoints.user import authentication


api_router = APIRouter()
api_router.include_router(authentication.router, tags=["client"])