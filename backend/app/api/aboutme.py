from fastapi import APIRouter
from app.dependencies import get_retriever
from app.services.aboutme import AboutMeService
from app.model.me import AskingAboutMe

router=APIRouter()

@router.post("/reply")
def generate_reply(request:AskingAboutMe):

    retriever = get_retriever()
   
    documents= retrieve_service.retrieve(request.query)
    generator= AboutMeService()
    reply=generator.say_about_me(request.query,documents);


    return {
        "Reply":reply,
    }