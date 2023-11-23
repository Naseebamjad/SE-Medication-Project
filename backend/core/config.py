from pydantic_settings import BaseSettings
import secrets


class Settings(BaseSettings):
    API_V1_STR: str = ""
    PROJECT_NAME: str = "Medication System"
    DATA_BASE_URL: str = "postgresql://ahmed:528082@localhost:5432/medication"
    SECRET_KEY: str = secrets.token_urlsafe(32)
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 1  # 60 minutes * 24 hours * 1 days = 1 days
    ADMIN_EMAIL: str = "a@b.c"
    ADMIN_PASSWORD: str = "123"

settings = Settings()