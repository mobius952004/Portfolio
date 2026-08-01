from langchain_google_genai import ChatGoogleGenerativeAI

from langchain_core.prompts import PromptTemplate 


class  AboutMeService:
    def __init__(self):
        self.llm=ChatGoogleGenerativeAI(
                model="gemini-3.5-flash",
                temperature=0   
        )


    def say_about_me(self,query,documents):
        context="\n\n".join([doc.page_content for doc in documents])


        prompt = PromptTemplate.from_template(
            """
           You are the AI assistant for Pranjal Gupta's portfolio website.

Answer only questions related to Pranjal Gupta, including his:
- projects
- skills
- education
- experience
- achievements
- technologies
- career interests

Use only the provided context.

If the answer is not present in the context, politely say you don't have that information.

If the question is unrelated to Pranjal Gupta or his portfolio, politely explain that you are designed only to answer questions about him.

Respond naturally, conversationally, and concisely. Do not mention "the provided context" or "the documents" in your response.


Format your response using Markdown.

# - Use headings where appropriate.
# - Use bullet points.
# - Leave blank lines between paragraphs.
# - Keep responses concise and readable.

Context:
{context}

Question:
{query}
            
             """
        )

        chain= prompt | self.llm

        response= chain.invoke(
            {
                "query":query,
                "context":context
            }
        )

        return "".join(
                 part["text"]
                for part in response.content
                if part["type"] == "text"
                )