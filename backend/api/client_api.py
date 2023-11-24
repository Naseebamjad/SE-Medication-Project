from fastapi import APIRouter

from .endpoints.user import authentication, doctors


api_router = APIRouter()
api_router.include_router(authentication.router, tags=["Auth"])
api_router.include_router(doctors.router, tags=["Doctors"])