from sqlalchemy.orm import Session
from .. import models, schemas, crud


def create_article(db: Session, article: schemas.ArticleCreate):
    db_article = models.Article(title=article.title, author_id=article.author_id, content=article.content)
    db_article.author_name = crud.get_doctor(db= db, doctor_id= article.author_id).name
    db.add(db_article)
    db.commit()
    db.refresh(db_article)
    return db_article

def get_article(db: Session, article_id: int):
    return db.query(models.Article).filter(models.Article.id == article_id).first()

def get_articles_by_author(db: Session, author_id: int):
    return db.query(models.Article).filter(models.Article.author_id == author_id).all()

def get_articles(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Article).offset(skip).limit(limit).all()

def update_article(db: Session, article_id: int, article: schemas.ArticleUpdate):
    db_article = get_article(db, article_id)
    if db_article:
        db_article.title = article.title
        db_article.content = article.content
        db.commit()
        db.refresh(db_article)
    return db_article

def delete_article(db: Session, article_id: int):
    db_article = get_article(db, article_id)
    if db_article:
        db.delete(db_article)
        db.commit()
