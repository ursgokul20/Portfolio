# Gokul's Portfolio Website

A stunning, full-stack portfolio website built with modern technologies.

## Tech Stack

| Layer      | Technology       |
|------------|-----------------|
| Frontend   | React.js (Vite) |
| Backend    | Python (FastAPI) |
| Database   | Supabase         |
| Frontend Hosting | Netlify    |
| Backend Hosting  | Vercel     |

## Project Structure

```
Portfolio/
├── frontend/          # React frontend (deploy to Netlify)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── netlify.toml
│   └── package.json
├── api/               # Python backend (deploy to Vercel)
│   ├── routers/
│   │   ├── contact.py
│   │   └── projects.py
│   ├── database.py
│   ├── index.py
│   └── requirements.txt
├── vercel.json
└── README.md
```

## Getting Started

### Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at `http://localhost:5173`

### Backend (Python)

```bash
pip install -r api/requirements.txt
uvicorn api.index:app --reload
```

The API will run at `http://localhost:8000`

## Environment Variables

### Frontend (`frontend/.env`)
```
VITE_API_URL=http://localhost:8000
```

### Backend (`.env` or Vercel Environment Variables)
```
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
```

## Supabase Setup

Create the following tables in your Supabase project:

### `projects` table
| Column      | Type    | Notes          |
|-------------|---------|----------------|
| id          | int8    | Primary Key    |
| title       | text    |                |
| description | text    |                |
| tags        | jsonb   | Array of strings |
| image       | text    | URL (nullable) |
| live_url    | text    |                |
| github_url  | text    |                |
| color       | text    | CSS gradient   |

### `messages` table
| Column     | Type      | Notes        |
|------------|-----------|--------------|
| id         | int8      | Primary Key  |
| name       | text      |              |
| email      | text      |              |
| subject    | text      |              |
| message    | text      |              |
| created_at | timestamp |              |
| is_read    | boolean   | Default: false |

## Deployment

### Deploy Frontend to Netlify
1. Push your code to GitHub
2. Connect the `frontend/` directory to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add env variable: `VITE_API_URL=https://your-vercel-api.vercel.app`

### Deploy Backend to Vercel
1. Push your code to GitHub
2. Connect the root directory to Vercel
3. Add environment variables: `SUPABASE_URL` and `SUPABASE_KEY`
4. Vercel will auto-detect the Python backend from `vercel.json`
