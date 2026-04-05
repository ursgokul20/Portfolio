function About() {
  const highlights = [
    { icon: '🛡️', text: 'Cybersecurity' },
    { icon: '💻', text: 'Full Stack Dev' },
    { icon: '🔐', text: 'Ethical Hacking' },
    { icon: '☁️', text: 'Cloud Security' },
  ]

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-image-wrapper fade-in">
          <div className="about-image">
            <img
              src="/photo.jpg"
              alt="Gokulakannan"
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="about-image-glow" />
        </div>

        <div className="about-content fade-in">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Securing the <span className="gradient-text">Digital World</span>
          </h2>

          <p className="about-text">
            I'm <strong>Gokulakannan</strong>, a B.E Cybersecurity student with
            a deep passion for both protecting digital systems and building them.
            I specialize in network security, and full stack
            web development using React.js and Python.
          </p>

          <p className="about-text">
            My academic journey in cybersecurity has given me hands-on experience
            with penetration testing, vulnerability assessment, secure coding
            practices, and cloud security. I combine my security knowledge with
            development skills to build applications that are both beautiful
            and secure.
          </p>

          <h3>Qualifications</h3>
          <div className="qualifications-list">
            <div className="glass-card qual-item">
              <div className="qual-marker" />
              <div className="qual-content">
                <div className="qual-title">B.E in Cybersecurity</div>
                <div className="qual-institution">PAAVAI ENGINEERING COLLEGE</div>
                <div className="qual-period">Currently Pursuing</div>
              </div>
            </div>
            <div className="glass-card qual-item">
              <div className="qual-marker" />
              <div className="qual-content">
                <div className="qual-title">Diploma in Computer Engineering</div>
                <div className="qual-institution">PAAVAI POLYTECHNIC COLLEGE</div>
                <div className="qual-period">Completed</div>
              </div>
            </div>
          </div>

          <div className="about-highlights" style={{ marginTop: '30px' }}>
            {highlights.map((item, index) => (
              <div key={index} className="about-highlight">
                <span className="about-highlight-icon">{item.icon}</span>
                <span className="about-highlight-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
