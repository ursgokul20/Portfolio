import { useState, useEffect } from 'react'

const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with real-time inventory management, payment integration, and admin dashboard.',
    tags: ['React', 'Python', 'Supabase', 'Stripe'],
    image: null,
    live_url: '#',
    github_url: '#',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'An intelligent chatbot powered by machine learning with real-time messaging and conversation history.',
    tags: ['React', 'FastAPI', 'WebSocket', 'OpenAI'],
    image: null,
    live_url: '#',
    github_url: '#',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 3,
    title: 'Task Management Dashboard',
    description: 'A collaborative project management tool with drag-and-drop boards, real-time updates, and team analytics.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    image: null,
    live_url: '#',
    github_url: '#',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'A data visualization platform for tracking social media metrics with interactive charts and automated reports.',
    tags: ['React', 'Python', 'D3.js', 'REST API'],
    image: null,
    live_url: '#',
    github_url: '#',
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
]

const API_URL = import.meta.env.VITE_API_URL || ''

function Projects() {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS)

  useEffect(() => {
    if (API_URL) {
      fetch(`${API_URL}/api/projects`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.length > 0) setProjects(data)
        })
        .catch(() => {
          // Use fallback data
        })
    }
  }, [])

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="fade-in">
          <span className="section-label">My Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-description">
            A selection of projects that showcase my skills in building
            modern, full-stack web applications.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              className="glass-card project-card fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: project.color || 'var(--gradient-hero)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3rem',
                      opacity: 0.85,
                    }}
                  >
                    🚀
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-overlay-links">
                    {project.live_url && (
                      <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="project-overlay-link">
                        Live Demo ↗
                      </a>
                    )}
                    {project.github_url && (
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="project-overlay-link">
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
