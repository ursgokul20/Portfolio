function Certificates() {
  const certificates = [
    {
      icon: '🌐',
      name: 'Introduction to Internet of Things',
      issuer: 'NPTEL',
      date: 'Completed',
      badge: '75%',
    },
    {
      icon: '🐘',
      name: 'PHP and MySQL Training',
      issuer: 'IIT Bombay (Spoken Tutorial Project)',
      date: 'Jan 2026',
      badge: '76.39%',
    },
  ]

  return (
    <section className="section" id="certificates">
      <div className="container">
        <div className="fade-in">
          <span className="section-label">Certifications</span>
          <h2 className="section-title">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <p className="section-description">
            Professional certifications that validate my expertise in
            cybersecurity, cloud computing, and software development.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="glass-card cert-card fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-info">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </div>
              {cert.badge && (
                <span className="cert-badge">{cert.badge}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
