from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from .... import crud, models, schemas
from ...deps import get_db, get_current_user


router = APIRouter()

@router.post("/signup/", response_model=schemas.UserRead)
def signup(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db, user)

@router.post("/login/")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = crud.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    access_token = crud.create_access_token(subject=user.email)
    crud.record_last_login(db= db, user_id=user.id)
    return {"access_token": access_token, "token_type": "bearer"}

@router.put("/users/me", response_model=schemas.UserRead)
def update_user(user: schemas.UserUpdate, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_user)):
    db_user = crud.update_user(db, current_user.id, user)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@router.get("/users/me", response_model=schemas.UserRead)
def update_user(db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_user)):
    if current_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return current_user

@router.put("/users/me/password", response_model=schemas.UserRead)
def update_user(passwords: schemas.PasswordUpdate, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_user)):
    if not crud.login_user(db= db, email= current_user.email, password= passwords.currentpassword):
        raise HTTPException(status_code=403, detail="Incorrect Password")
    if passwords.newpassword != passwords.confirmPassword:
        raise HTTPException(status_code=403, detail="Passwords not match")
    updated = schemas.UserUpdate(password=passwords.newpassword)
    db_user = crud.update_user(db, current_user.id, updated)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user