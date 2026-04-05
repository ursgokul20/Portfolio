from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routers import contact, projects

app = FastAPI(
    title="Portfolio API",
    description="Backend API for Gokul's Portfolio Website",
    version="1.0.0",
)

# CORS configuration - allow all origins for easy development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allowing all for now to avoid CORS errors when Netlify connects
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router, prefix="/api")
app.include_router(projects.router, prefix="/api")


@app.get("/")
async def vercel_root():
    return {"message": "✅ Vercel Backend is successfully running!", "docs": "/docs"}

@app.get("/api")
async def api_root():
    return {"message": "Portfolio API is running", "status": "ok"}


# Vercel serverless handler
handler = app
