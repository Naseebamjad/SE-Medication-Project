from typing import Generator
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from pydantic import ValidationError
from sqlalchemy.orm import Session

from ..db.session import SessionLocal
from ..core.config import settings
from ..core.security import ALGORITHM
from .. import schemas, models, crud

reusable_oauth2 = OAuth2PasswordBearer(
    tokenUrl="/login"
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_current_user_id(
    db: Session = Depends(get_db), token: str = Depends(reusable_oauth2)
) -> int:
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[ALGORITHM]
        )
        token_data = schemas.TokenPayload(**payload)
    except (JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials",
        )
    return token_data.sub

def get_current_user(
    db: Session = Depends(get_db), 
    data : str = Depends(get_current_user_id)
) -> models.User:
    user = crud.get_user(db, id=data)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

def get_current_admin(
    db: Session = Depends(get_db), 
    data : str = Depends(get_current_user_id)
):
    if data != settings.ADMIN_EMAIL:
        raise HTTPException(status_code=404, detail="User not found")
    return data