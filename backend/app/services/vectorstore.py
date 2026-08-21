from langchain_chroma import Chroma


class VectorStoreService:

    def __init__(self, embeddings):
        print(embeddings)
        self.vector_store = Chroma(
            collection_name="about_me_ai",
            embedding_function=embeddings,
            persist_directory="chroma_db"
        )

    def add_documents(self, chunks):
        self.vector_store.add_documents(chunks)

    def get_retriever(self):
        return self.vector_store.as_retriever(
            search_kwargs={"k":4}
        )

    
    def delete_collection(self):
        client = PersistentClient(path="chroma_db")
        client.delete_collection("about_me_ai")
