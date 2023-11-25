from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from .... import crud, models, schemas
from ...deps import get_db, get_current_admin

router = APIRouter()

@router.post("/articles/", response_model=schemas.ArticleRead)
def create_article_endpoint(article: schemas.ArticleCreate, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_admin)):
    db_doctor = crud.get_doctor(db, article.author_id)
    if db_doctor is None:
        raise HTTPException(status_code=404, detail="Doctor not found")
    return crud.create_article(db=db, article=article)

@router.get("/articles/{article_id}", response_model=schemas.ArticleRead)
def read_article(article_id: int, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_admin)):
    db_article = crud.get_article(db, article_id=article_id)
    if db_article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    return db_article

@router.get("/articles/", response_model=list[schemas.ArticleRead])
def read_articles(skip: int = 0, limit: int = 10, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_admin)):
    articles = crud.get_articles(db, skip=skip, limit=limit)
    return articles

@router.put("/articles/{article_id}", response_model=schemas.ArticleRead)
def update_article_endpoint(article_id: int, article: schemas.ArticleUpdate, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_admin)):
    db_article = crud.update_article(db, article_id, article)
    if db_article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    return db_article

@router.delete("/articles/{article_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_article(article_id: int, db: Session = Depends(get_db), current_user: schemas.UserRead = Depends(get_current_admin)):
    crud.delete_article(db, article_id)
    return {"detail": "Article deleted"}
