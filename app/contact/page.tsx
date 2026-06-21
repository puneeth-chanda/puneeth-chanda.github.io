"use client"

import { useEffect, useState } from "react"

export default function ContactPage() {
  const [showAlert, setShowAlert] = useState(false)
  const [submittedName, setSubmittedName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  useEffect(() => {
    document.title = "Contact — Puneeth Chanda"
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    setErrorMessage("")
  }

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    const data = new FormData()
    data.append("Name", formData.name)
    data.append("Email", formData.email)
    data.append("Message", formData.message)

    try {
      const response = await fetch("https://formspree.io/f/mvodbwva", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setSubmittedName(formData.name)
        setShowAlert(true)
        setFormData({ name: "", email: "", message: "" })
      } else {
        setErrorMessage("Sending message failed. Please try again later or contact me directly.")
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page">
      <div className="page-container-narrow">
        {/* Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <p className="page-kicker">&gt; contact</p>
          <h1>Get in Touch</h1>
          <p className="page-subtitle">
            Have a question or want to work together? I&apos;ll try my best to get back to you.
          </p>
        </div>

        {showAlert && (
          <div className="card card-success animate-fade-in" style={{ padding: "var(--space-lg)", marginBottom: "var(--space-xl)" }}>
            <p style={{ fontWeight: 500, marginBottom: "var(--space-xs)" }}>
              Message sent.
            </p>
            <p className="page-subtitle" style={{ fontSize: "0.9rem" }}>
              Thanks for reaching out{submittedName ? `, ${submittedName}` : ""}. I&apos;ll reply as soon as I can.
            </p>
          </div>
        )}

        {errorMessage && (
          <div className="card card-error animate-fade-in" style={{ padding: "var(--space-lg)", marginBottom: "var(--space-xl)" }}>
            <p style={{ color: "var(--color-text)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>
              Something went wrong
            </p>
            <p className="page-subtitle" style={{ fontSize: "0.9rem" }}>
              {errorMessage}
            </p>
          </div>
        )}

        <form onSubmit={sendMessage}>
          <div style={{ marginBottom: "var(--space-lg)" }}>
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div style={{ marginBottom: "var(--space-lg)" }}>
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div style={{ marginBottom: "var(--space-lg)" }}>
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              className="form-control"
              rows={4}
              placeholder="Hi Puneeth, I'd like to discuss..."
              required
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              style={{ resize: "vertical" }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Alt contact */}
        <div style={{ marginTop: "var(--space-2xl)" }}>
          <p className="section-label">Or reach me directly</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
            <a href="mailto:chandapuneeth@gmail.com" className="contact-link">chandapuneeth@gmail.com</a>
            <a href="https://www.linkedin.com/in/puneeth-chanda-2001/" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/puneeth-chanda-2001</a>
            <a href="https://github.com/puneeth-chanda" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/puneeth-chanda</a>
          </div>
        </div>
      </div>
    </div>
  )
}
