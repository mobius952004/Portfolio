# app/dependencies.py

from app.services.embedding import EmbeddingService
from app.services.vectorstore import VectorStoreService
from app.services.retriever import RetrieverService

embeddings = EmbeddingService().get_embeddings()
vector_store = VectorStoreService(embeddings)
retriever_service = RetrieverService(vector_store)