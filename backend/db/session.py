from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from ..core.config import settings


engine = create_engine(settings.DATA_BASE_URL, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)