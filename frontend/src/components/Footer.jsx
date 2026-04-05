function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">&lt;Gokulakannan /&gt;</div>
            <p className="footer-tagline">
              B.E Cybersecurity Student & Full Stack Developer —
              building secure, beautiful web experiences.
            </p>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="GitHub"
              id="footer-github"
            >
              GH
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="LinkedIn"
              id="footer-linkedin"
            >
              LI
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="Twitter"
              id="footer-twitter"
            >
              X
            </a>
            <a
              href="mailto:gokulakannan@example.com"
              className="footer-social"
              aria-label="Email"
              id="footer-email"
            >
              ✉
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} Gokulakannan. All rights reserved.</span>
          <span>Built with React & Python</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
