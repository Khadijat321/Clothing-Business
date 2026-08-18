import os
from typing import Optional

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

try:
    from openai import OpenAI
except Exception:
    OpenAI = None


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=2000)
    customer_id: Optional[str] = Field(default=None, max_length=100)


class ChatResponse(BaseModel):
    reply: str
    provider: str


app = FastAPI(title="Lady T Collection AI Service", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("AI_CORS_ORIGINS", "*").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def fallback_reply(user_message: str) -> str:
    return (
        "Thanks for reaching out to Lady T Collection. "
        "Our styling assistant is temporarily offline, but we can still help with sizing, "
        "order updates, and product recommendations. "
        f"You asked: \"{user_message[:160]}\". Please contact support@ladytcollection.com for urgent help."
    )


@app.get("/health")
def health():
    return {"ok": True}


@app.post("/ai/chat", response_model=ChatResponse)
def chat(payload: ChatRequest):
    api_key = os.getenv("OPENAI_API_KEY", "").strip()
    model = os.getenv("AI_MODEL", "gpt-4o-mini")

    if not api_key or OpenAI is None:
        return ChatResponse(reply=fallback_reply(payload.message), provider="fallback")

    try:
        client = OpenAI(api_key=api_key)
        completion = client.chat.completions.create(
            model=model,
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are a premium fashion shopping assistant for Lady T Collection. "
                        "Be concise, polite, and helpful. Never ask for or store card details."
                    ),
                },
                {"role": "user", "content": payload.message},
            ],
            temperature=0.6,
        )
        text = completion.choices[0].message.content or fallback_reply(payload.message)
        return ChatResponse(reply=text.strip(), provider="openai")
    except Exception:
        return ChatResponse(reply=fallback_reply(payload.message), provider="fallback")
