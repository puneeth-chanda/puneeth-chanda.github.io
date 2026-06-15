"use client"

import { useEffect, useState } from "react"

export default function ContactPage() {
  const [showAlert, setShowAlert] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  useEffect(() => {
    document.title = "Contact - Puneeth Chanda"
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
        headers: { 
          Accept: "application/json",
        },
      })
      
      if (response.ok) {
        setShowAlert(true)
        setFormData({ name: "", email: "", message: "" })
      } else {
        const errorData = await response.json()
        console.error("Form submission error:", errorData)
        alert("Sending message failed. Please try again later or contact me directly.")
      }
    } catch (error) {
      console.error("Network error:", error)
      alert("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container page animate__animated animate__fadeIn" style={{ marginTop: 120 }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Get in touch &#x1F48C;</h1>
          <p className="text-start">
            If you have any question or just want to say hi, I&apos;ll try my best to get back to
            you.
          </p>

          {showAlert && (
            <div className="alert alert-success">
              <strong>All done &#x1F389;</strong>
              <br />
              Thanks for reaching out {formData.name}, I&apos;ll reply as soon as I can.
            </div>
          )}

          <form className="mb-5 text-start" onSubmit={sendMessage}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name:
              </label>
              <input 
                id="name" 
                type="text" 
                className="form-control" 
                required 
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email:
              </label>
              <input 
                id="email" 
                type="email" 
                className="form-control" 
                required 
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Your Message:
              </label>
              <textarea
                id="message"
                className="form-control"
                rows={3}
                placeholder="Hi Puneeth, I'd like to discuss a project opportunity..."
                required
                onChange={handleChange}
                disabled={isSubmitting}
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
          
          <div className="mt-4 p-3 bg-light rounded">
            <p className="mb-2"><strong>Alternative ways to reach me:</strong></p>
            <p className="mb-1">• Email: <a href="mailto:chandapuneeth@gmail.com">chandapuneeth@gmail.com</a></p>
            <p className="mb-1">• LinkedIn: <a href="https://www.linkedin.com/in/puneeth-chanda-2001/" target="_blank" rel="noopener noreferrer">linkedin.com/in/puneeth-chanda-2001</a></p>
            <p className="mb-0">• GitHub: <a href="https://github.com/puneeth2001" target="_blank" rel="noopener noreferrer">github.com/puneeth2001</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
