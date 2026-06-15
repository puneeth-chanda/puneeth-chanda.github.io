"use client"

import { useEffect, useState } from "react"

export default function ContactPage() {
  const [showAlert, setShowAlert] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  useEffect(() => {
    document.title = "Contact — Puneeth Chanda"
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)

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
        setShowAlert(true)
        setFormData({ name: "", email: "", message: "" })
      } else {
        alert("Sending message failed. Please try again later or contact me directly.")
      }
    } catch {
      alert("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page">
      <div className="page-container" style={{ maxWidth: "640px" }}>
        {/* Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <p
            className="text-mono"
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--color-text-muted)",
              marginBottom: "var(--space-sm)",
            }}
          >
            &gt; contact
          </p>
          <h1>Get in Touch</h1>
          <p style={{ color: "var(--color-text-muted)", marginTop: "var(--space-sm)" }}>
            Have a question or want to work together? I&apos;ll try my best to get back to you.
          </p>
        </div>

        {showAlert && (
          <div
            className="card"
            style={{
              padding: "var(--space-lg)",
              marginBottom: "var(--space-xl)",
              borderLeft: "3px solid var(--color-teal)",
            }}
          >
            <p style={{ fontWeight: 500, marginBottom: "var(--space-xs)" }}>
              Message sent.
            </p>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
              Thanks for reaching out, {formData.name}. I&apos;ll reply as soon as I can.
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
          <p
            className="text-mono"
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--color-text-muted)",
              marginBottom: "var(--space-md)",
            }}
          >
            Or reach me directly
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
            <a
              href="mailto:chandapuneeth@gmail.com"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--color-signal)",
                textDecoration: "none",
              }}
            >
              chandapuneeth@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/puneeth-chanda-2001/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--color-signal)",
                textDecoration: "none",
              }}
            >
              linkedin.com/in/puneeth-chanda-2001
            </a>
            <a
              href="https://github.com/puneeth2001"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--color-signal)",
                textDecoration: "none",
              }}
            >
              github.com/puneeth2001
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
