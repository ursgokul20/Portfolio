from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from api.database import supabase
from datetime import datetime

router = APIRouter()


class ContactMessage(BaseModel):
    name: str
    email: str
    subject: str
    message: str


@router.post("/contact")
async def send_message(data: ContactMessage):
    """
    Receives a contact form submission and stores it in Supabase.
    """
    try:
        message_data = {
            "name": data.name,
            "email": data.email,
            "subject": data.subject,
            "message": data.message,
            "created_at": datetime.utcnow().isoformat(),
            "is_read": False,
        }

        if supabase:
            result = supabase.table("messages").insert(message_data).execute()
            if not result.data:
                raise HTTPException(status_code=500, detail="Failed to save message")

        return {"success": True, "message": "Message sent successfully!"}

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
