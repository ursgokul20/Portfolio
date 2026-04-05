import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="#" className="navbar-logo">
          &lt;Gokulakannan /&gt;
        </a>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
          <a href="#certificates" onClick={(e) => handleNavClick(e, 'certificates')}>Certificates</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary navbar-cta" onClick={(e) => handleNavClick(e, 'contact')}>
            Let's Talk
          </a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
