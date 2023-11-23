from pydantic import BaseModel, EmailStr
from typing import Optional

class User(BaseModel):
    firstname: str
    lastname: str
    email: EmailStr
    phone_number: Optional[str] = None
    password: str
    address: Optional[str] = None