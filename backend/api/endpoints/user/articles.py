from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from .... import crud, models, schemas
from ...deps import get_db, get_current_user

router = APIRouter()

@router.get("/articles/{article_id}", response_model=schemas.ArticleRead)
def read_article(article_id: int, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_user)):
    db_article = crud.get_article(db, article_id=article_id)
    if db_article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    return db_article

@router.get("/articles/", response_model=list[schemas.ArticleRead])
def read_articles(skip: int = 0, limit: int = 10, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_user)):
    articles = crud.get_articles(db, skip=skip, limit=limit)
    return articles