from fastapi import FastAPI
from app.api.aboutme import router as ask_ai
from dotenv import load_dotenv
from app import config
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(
    ask_ai,
    prefix="/AI",
    tags=["AI Reply"]
)

@app.get("/")
def Home():
    return {"Backend for my personal AI "}