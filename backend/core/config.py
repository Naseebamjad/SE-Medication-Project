from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    API_V1_STR: str = ""
    PROJECT_NAME: str = "Medication System"
    DATA_BASE_URL: str = "postgresql://ahmed:528082@localhost:5432/medication"

settings = Settings()