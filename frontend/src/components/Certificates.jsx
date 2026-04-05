function Certificates() {
  const certificates = [
    {
      icon: '🛡️',
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      date: '2025',
      badge: 'Verified',
    },
    {
      icon: '🔒',
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: '2025',
      badge: 'Active',
    },
    {
      icon: '☁️',
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      badge: 'Verified',
    },
    {
      icon: '🐍',
      name: 'Python for Cybersecurity',
      issuer: 'Coursera',
      date: '2024',
      badge: 'Completed',
    },
    {
      icon: '🌐',
      name: 'Network Security Fundamentals',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      badge: 'Verified',
    },
    {
      icon: '⚛️',
      name: 'Meta Front-End Developer',
      issuer: 'Meta (via Coursera)',
      date: '2024',
      badge: 'Completed',
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
