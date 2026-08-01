from fastapi import APIRouter
from app.services.embedding import EmbeddingService
from app.services.vectorstore import VectorStoreService
from app.services.aboutme import AboutMeService
from app.services.retriever import RetrieverService
from app.model.me import AskingAboutMe

router=APIRouter()

@router.post("/reply")
def generate_reply(request:AskingAboutMe):
    embeddings= EmbeddingService().get_embeddings()
    vectore_store=VectorStoreService(embeddings)

    retrieve_service =RetrieverService(vectore_store)
    documents= retrieve_service.retrieve(request.query)
    generator= AboutMeService()
    reply=generator.say_about_me(request.query,documents);


    return {
        "Reply":reply,
    }