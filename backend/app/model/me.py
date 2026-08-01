from pydantic import BaseModel


class AskingAboutMe(BaseModel):
    query: str