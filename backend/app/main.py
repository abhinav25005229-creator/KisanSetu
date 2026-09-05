from fastapi import FastAPI
from sqlalchemy import text

from .database import engine

app = FastAPI(
    title="KisanSetu API",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "KisanSetu Backend is running 🚜"
    }


@app.get("/health")
def health():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "status": "healthy",
            "database": "connected"
        }

    except Exception as e:
        return {
            "status": "unhealthy",
            "database": "disconnected",
            "error": str(e)
        }