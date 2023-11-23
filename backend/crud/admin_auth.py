from sqlalchemy.orm import Session
from sqlalchemy.sql import func

from ..core.config import settings
from ..core.security import create_access_token


def authenticate_admin(email: str, password: str):
    if email != settings.ADMIN_EMAIL or password != settings.ADMIN_PASSWORD:
        return False
    return True

def login_admin(db: Session, email: str, password: str):
    user = authenticate_admin(email, password)
    if not user:
        return None
    access_token = create_access_token(subject=email)
    return access_token