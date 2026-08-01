from pathlib import Path

from langchain_community.document_loaders import (
    PyPDFLoader,
    TextLoader,
    UnstructuredMarkdownLoader,
)


class DocumentLoaderService:

    def __init__(self):
        self.data_dir = (
            Path(__file__).resolve().parent.parent.parent / "data"
        )

    def load_documents(self):

        documents = []

        for file_path in self.data_dir.iterdir():

            if not file_path.is_file():
                continue

            suffix = file_path.suffix.lower()

            if suffix == ".pdf":
                loader = PyPDFLoader(str(file_path))

            elif suffix == ".md":
                loader = UnstructuredMarkdownLoader(str(file_path))

            elif suffix == ".txt":
                loader = TextLoader(str(file_path), encoding="utf-8")

            else:
                print(f"Skipping unsupported file: {file_path.name}")
                continue

            docs = loader.load()

            # Add the filename as metadata
            for doc in docs:
                doc.metadata["source"] = file_path.name

            documents.extend(docs)

        return documents