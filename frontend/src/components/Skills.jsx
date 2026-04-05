function Skills() {
  const skills = [
    {
      icon: '🛡️',
      name: 'Cybersecurity',
      description: 'Expertise in ethical hacking, penetration testing, vulnerability assessment, and security auditing.',
      tags: ['Kali Linux', 'Wireshark', 'Burp Suite', 'Nmap', 'Metasploit'],
    },
    {
      icon: '⚛️',
      name: 'Frontend Development',
      description: 'Building responsive, interactive user interfaces with modern frameworks and libraries.',
      tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    },
    {
      icon: '🐍',
      name: 'Backend Development',
      description: 'Creating robust APIs and server-side applications with Python and modern frameworks.',
      tags: ['Python', 'FastAPI', 'Flask', 'REST APIs', 'PostgreSQL'],
    },
    {
      icon: '☁️',
      name: 'Cloud & DevOps',
      description: 'Deploying and managing applications on modern cloud platforms with CI/CD pipelines.',
      tags: ['AWS', 'Vercel', 'Netlify', 'Docker', 'GitHub Actions'],
    },
    {
      icon: '🔐',
      name: 'Network Security',
      description: 'Analyzing and securing network infrastructure, monitoring traffic, and implementing firewalls.',
      tags: ['TCP/IP', 'Firewall', 'IDS/IPS', 'VPN', 'SIEM'],
    },
    {
      icon: '🗄️',
      name: 'Database & Storage',
      description: 'Designing efficient database schemas and managing data with modern tools.',
      tags: ['Supabase', 'PostgreSQL', 'MongoDB', 'Firebase', 'SQL'],
    },
  ]

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="fade-in">
          <span className="section-label">My Skills</span>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="section-description">
            A versatile toolkit spanning cybersecurity, frontend, backend,
            cloud infrastructure, and everything in between.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card skill-card fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-tags">
                {skill.tags.map((tag, i) => (
                  <span key={i} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
