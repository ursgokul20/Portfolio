import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const observeElements = () => {
      document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    }

    observeElements()
    // Re-observe after a short delay to catch dynamically rendered elements
    const timer = setTimeout(observeElements, 500)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div className="bg-grid" />
      <div className="bg-glow" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
