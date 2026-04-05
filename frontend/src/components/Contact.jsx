import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || ''

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      if (!API_URL) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        const response = await fetch(`${API_URL}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
          setFormData({ name: '', email: '', subject: '', message: '' })
        } else {
          throw new Error('Failed to send message')
        }
      }
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-info fade-in">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="section-description">
            Have a project in mind or want to collaborate on cybersecurity
            initiatives? I'd love to hear from you.
          </p>

          <div className="contact-cards">
            <div className="glass-card contact-card">
              <div className="contact-card-icon">📧</div>
              <div>
                <div className="contact-card-label">Email</div>
                <div className="contact-card-value">gokulakannan@example.com</div>
              </div>
            </div>

            <div className="glass-card contact-card">
              <div className="contact-card-icon">📍</div>
              <div>
                <div className="contact-card-label">Location</div>
                <div className="contact-card-value">India</div>
              </div>
            </div>

            <div className="glass-card contact-card">
              <div className="contact-card-icon">🎓</div>
              <div>
                <div className="contact-card-label">Currently</div>
                <div className="contact-card-value" style={{ color: '#34d399' }}>
                  B.E Cybersecurity Student
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper fade-in">
          <h3 className="contact-form-title">Send me a message</h3>
          <form onSubmit={handleSubmit} id="contact-form">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={loading}
              id="contact-submit"
            >
              {loading ? 'Sending...' : 'Send Message →'}
            </button>

            {status && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
