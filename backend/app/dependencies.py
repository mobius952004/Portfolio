# # app/dependencies.py

# # from app.services.embedding import EmbeddingService
# # from app.services.vectorstore import VectorStoreService
# # from app.services.retriever import RetrieverService

# # embeddings = EmbeddingService().get_embeddings()
# # vector_store = VectorStoreService(embeddings)
# # retriever_service = RetrieverService(vector_store)

# from app.services.embedding import EmbeddingService
# from app.services.vectorstore import VectorStoreService
# from app.services.retriever import RetrieverService


# _embeddings = None
# _vector_store = None
# _retriever = None


# def get_retriever():

#     global _embeddings
#     global _vector_store
#     global _retriever

#     if _retriever is None:

#         print("Creating dependencies...")

#         _embeddings = EmbeddingService().get_embeddings()

#         _vector_store = VectorStoreService(
#             _embeddings
#         )

#         _retriever = RetrieverService(
#             _vector_store
#         )

#     return _retriever