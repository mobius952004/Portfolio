from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_huggingface import HuggingFaceEmbeddings
from app import config  
import os


class EmbeddingService:

    def __init__(self):
        # api_key = os.getenv("GOOGLE_API_KEY")
        # if not api_key:
        #     raise ValueError("GOOGLE_API_KEY is not set. Check your .env file.")
        # self.embeddings = GoogleGenerativeAIEmbeddings(
        #     model="models/gemini-embedding-001"
        # )
        self.embeddings = HuggingFaceEmbeddings(
            model_name="sentence-transformers/all-MiniLM-L6-v2"
        )

    def get_embeddings(self):
        return self.embeddings