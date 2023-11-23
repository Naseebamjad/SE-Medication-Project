from sqlalchemy.orm import Session

from .session import engine
from ..db.base_class import Base
from ..models import User


def _init_db(db: Session) -> None:
    Base.metadata.create_all(bind=engine)