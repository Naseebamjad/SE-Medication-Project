from pydantic import BaseModel, EmailStr
from typing import Optional
from fastapi import UploadFile, File
from datetime import datetime

class DoctorCreate(BaseModel):
    name: str
    category: str
    email: EmailStr

class DoctorRead(BaseModel):
    id: int
    name: str
    category: str
    email: EmailStr
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class DoctorUpdate(BaseModel):
    name: Optional[str] = None
    category: Optional[str] = None
    email: Optional[EmailStr] = None
