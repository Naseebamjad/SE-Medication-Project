from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserCreate(BaseModel):
    firstname: str
    lastname: str
    email: EmailStr
    password: str
    phone_number: Optional[str] = None
    address: Optional[str] = None

class UserRead(BaseModel):
    id: int
    firstname: str
    lastname: str
    email: EmailStr
    phone_number: Optional[str] = None
    address: Optional[str] = None
    created_at: datetime
    updated_at: datetime
    last_login: Optional[datetime] = None

    class Config:
        from_attributes = True

class UserUpdate(BaseModel):
    firstname: Optional[str] = None
    lastname: Optional[str] = None
    email: Optional[EmailStr] = None
    phone_number: Optional[str] = None
    password: Optional[str] = None
    address: Optional[str] = None
    last_login: Optional[datetime] = None

class PasswordUpdate(BaseModel):
    currentpassword: str
    newpassword: str
    confirmPassword: str