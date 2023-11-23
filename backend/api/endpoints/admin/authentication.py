from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from .... import crud, models, schemas
from ...deps import get_db


router = APIRouter()

@router.post("/login/")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    access_token = crud.login_admin(db, form_data.username, form_data.password)
    if not access_token:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    return {"access_token": access_token, "token_type": "bearer"}