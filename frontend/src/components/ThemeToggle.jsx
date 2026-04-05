import { useState, useEffect } from 'react'

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      id="theme-toggle"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle
