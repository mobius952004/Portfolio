from fastapi import APIRouter
from app.dependencies import retriever_service

from app.services.aboutme import AboutMeService
from app.model.me import AskingAboutMe

router=APIRouter()

generator= AboutMeService()
@router.post("/reply")
def generate_reply(request:AskingAboutMe):
   
    documents= retrieve_service.retrieve(request.query)
    reply=generator.say_about_me(request.query,documents);


    return {
        "Reply":reply,
    }