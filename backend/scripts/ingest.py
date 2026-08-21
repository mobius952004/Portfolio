from app.services.loader import DocumentLoaderService
from app.services.splitter import TextSplitter
from app.services.embedding import EmbeddingService
from app.services.vectorstore import VectorStoreService


def ingest():

    print("Loading documents...")

    loader = DocumentLoaderService()
    documents = loader.load_documents()

    print(f"Loaded {len(documents)} pages.")

    splitter = TextSplitter()
    chunks = splitter.split_documents(documents)

    print(f"Created {len(chunks)} chunks.")

    embeddings = EmbeddingService().get_embeddings()


    vector_store = VectorStoreService(embeddings)
    # vector_store.delete_collection()

    vector_store = VectorStoreService(embeddings)

    vector_store.add_documents(chunks)

    print("Embedding complete.")
    print("Vector database saved successfully.")


if __name__ == "__main__":
    ingest()