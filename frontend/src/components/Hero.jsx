function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Gokulakannan</span>
            <br />
            B.E Cybersecurity Student
          </h1>

          <p className="hero-subtitle">
            Aspiring cybersecurity professional & full stack developer.
            I build secure, elegant digital experiences with modern technologies
            and a security-first mindset.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work →
            </a>
            <a href="/Portfolio/resume.pdf?v=2" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              📄 View Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">B.E</div>
              <div className="hero-stat-label">Cybersecurity</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">15+</div>
              <div className="hero-stat-label">Projects Built</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">6+</div>
              <div className="hero-stat-label">Certifications</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orb" />
          <div className="floating-card">
            <div className="card-icon">🛡️</div>
            <div className="card-label">Specialization</div>
            <div className="card-value">Cybersecurity</div>
          </div>
          <div className="floating-card">
            <div className="card-icon">💻</div>
            <div className="card-label">Development</div>
            <div className="card-value">Full Stack</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
