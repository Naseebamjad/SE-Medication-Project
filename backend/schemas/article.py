from pydantic import BaseModel
from datetime import datetime

class ArticleCreate(BaseModel):
    title: str
    author_id: int
    content: str

class ArticleUpdate(BaseModel):
    title: str
    content: str

class ArticleRead(BaseModel):
    id: int
    title: str
    author_id: int
    author_name: str
    content: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True