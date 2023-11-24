from pydantic_settings import BaseSettings
import secrets
from pathlib import Path


class Settings(BaseSettings):
    API_V1_STR: str = ""
    PROJECT_NAME: str = "Medication System"
    DATA_BASE_URL: str = "postgresql://ahmed:528082@localhost:5432/medication"
    SECRET_KEY: str = secrets.token_urlsafe(32)
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 1  # 60 minutes * 24 hours * 1 days = 1 days
    ADMIN_EMAIL: str = "a@b.c"
    ADMIN_PASSWORD: str = "123"
    IMAGES_PATH: str = str(Path(__file__).parent.parent)+"/utils/doctors_images/"
    IMAGE_EXTENSIONS: list = ['jpg', 'jpeg', 'png']

settings = Settings()