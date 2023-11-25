from fastapi import APIRouter

from .endpoints.admin import user, authentication, doctors, articles


api_router = APIRouter()
api_router.include_router(authentication.router, tags=["Auth"])
api_router.include_router(user.router, tags=["Users"])
api_router.include_router(doctors.router, tags=["Doctors"])
api_router.include_router(articles.router, tags=["Articles"])