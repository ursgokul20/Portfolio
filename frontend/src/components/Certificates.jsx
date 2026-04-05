function Certificates() {
  const certificates = [
    {
      icon: '🌐',
      name: 'Introduction to Internet of Things',
      issuer: 'NPTEL',
      date: 'Completed',
      badge: '75%',
      pdfLink: '/Portfolio/nptel-certificate.pdf',
    },
    {
      icon: '🐘',
      name: 'PHP and MySQL Training',
      issuer: 'IIT Bombay (Spoken Tutorial Project)',
      date: 'Jan 2026',
      badge: '76.39%',
      pdfLink: '/Portfolio/php-certificate.pdf',
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
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                {cert.badge && (
                  <span className="cert-badge">{cert.badge}</span>
                )}
                {cert.pdfLink && (
                  <a href={cert.pdfLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: '#818cf8', textDecoration: 'none', fontWeight: '500' }}>
                    View PDF ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
