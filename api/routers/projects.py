from fastapi import APIRouter, HTTPException
from api.database import supabase

router = APIRouter()

FALLBACK_PROJECTS = [
    {
        "id": 1,
        "title": "E-Commerce Platform",
        "description": "A full-stack e-commerce application with real-time inventory management, payment integration, and admin dashboard.",
        "tags": ["React", "Python", "Supabase", "Stripe"],
        "image": None,
        "live_url": "#",
        "github_url": "#",
        "color": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
        "id": 2,
        "title": "AI Chat Application",
        "description": "An intelligent chatbot powered by machine learning with real-time messaging and conversation history.",
        "tags": ["React", "FastAPI", "WebSocket", "OpenAI"],
        "image": None,
        "live_url": "#",
        "github_url": "#",
        "color": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
        "id": 3,
        "title": "Task Management Dashboard",
        "description": "A collaborative project management tool with drag-and-drop boards, real-time updates, and team analytics.",
        "tags": ["React", "Node.js", "PostgreSQL", "Socket.io"],
        "image": None,
        "live_url": "#",
        "github_url": "#",
        "color": "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
        "id": 4,
        "title": "Social Media Analytics",
        "description": "A data visualization platform for tracking social media metrics with interactive charts and automated reports.",
        "tags": ["React", "Python", "D3.js", "REST API"],
        "image": None,
        "live_url": "#",
        "github_url": "#",
        "color": "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
]


@router.get("/projects")
async def get_projects():
    """
    Fetches projects from Supabase, falls back to static data
    if Supabase is not configured.
    """
    try:
        if supabase:
            result = supabase.table("projects").select("*").order("id").execute()
            if result.data:
                return result.data

        return FALLBACK_PROJECTS

    except Exception as e:
        # Return fallback data on any error
        return FALLBACK_PROJECTS
