from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routers import contact, projects

app = FastAPI(
    title="Portfolio API",
    description="Backend API for Gokul's Portfolio Website",
    version="1.0.0",
)

# CORS configuration - allow the frontend origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        # Add your Netlify domain here after deployment:
        # "https://your-portfolio.netlify.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router, prefix="/api")
app.include_router(projects.router, prefix="/api")


@app.get("/api")
async def root():
    return {"message": "Portfolio API is running", "status": "ok"}


# Vercel serverless handler
handler = app
