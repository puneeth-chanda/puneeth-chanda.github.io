"use client"

import { useEffect } from "react"

export default function ResumePage() {
  useEffect(() => {
    document.title = "Resume — Puneeth Chanda"
  }, [])

  return (
    <div className="page">
      <div className="page-container" style={{ maxWidth: "720px" }}>
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
            &gt; resume
          </p>
          <h1>Resume</h1>
          <p style={{ color: "var(--color-text-muted)", marginTop: "var(--space-sm)" }}>
            Professional background and experience.
          </p>
        </div>

        {/* Experience */}
        <div className="card" style={{ padding: "var(--space-xl)", marginBottom: "var(--space-lg)" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "var(--space-lg)" }}>Experience</h2>

          <div style={{ marginBottom: "var(--space-lg)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "var(--space-sm)" }}>
              <h3 style={{ fontSize: "1rem", marginBottom: 0 }}>Chargebee</h3>
              <span className="text-mono" style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                2022 — Present
              </span>
            </div>
            <p className="text-mono" style={{ fontSize: "0.75rem", color: "var(--color-signal)", marginBottom: "var(--space-sm)" }}>
              Software Engineer
            </p>
            <ul style={{ paddingLeft: "1.2rem", marginTop: "var(--space-sm)" }}>
              <li>Building AI-powered onboarding agent tools and sandboxing platforms</li>
              <li>Developing performance testing frameworks and CI/CD automation</li>
              <li>Implementing OAuth-based email integrations and intelligent automation solutions</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="card" style={{ padding: "var(--space-xl)", marginBottom: "var(--space-lg)" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "var(--space-lg)" }}>Education</h2>
          <div>
            <h3 style={{ fontSize: "1rem", marginBottom: "var(--space-xs)" }}>Bachelor of Technology</h3>
            <span className="text-mono" style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
              Engineering | 2018 — 2022
            </span>
          </div>
        </div>

        {/* Skills */}
        <div className="card" style={{ padding: "var(--space-xl)", marginBottom: "var(--space-lg)" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "var(--space-lg)" }}>Skills</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-lg)" }}>
            <div>
              <div className="skill-category">Languages</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {["Java", "Python", "TypeScript", "SQL"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="skill-category">Backend</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {["Spring Boot", "Node.js", "Vue.js", "AWS"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="skill-category">DevOps</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {["Kubernetes", "Docker", "CI/CD", "ELK"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="skill-category">AI/LLM</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {["[PLACEHOLDER: tools]"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Download */}
        <div style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
          <a
            href="/assets/resume.pdf"
            download
            className="btn btn-primary"
            onClick={(e) => {
              if (!document.getElementById("resume-pdf")) {
                e.preventDefault()
                alert("Resume PDF not found. Please add it to public/assets/resume.pdf")
              }
            }}
          >
            Download PDF
          </a>
          <p className="text-mono" style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", marginTop: "var(--space-sm)" }}>
            public/assets/resume.pdf
          </p>
        </div>
      </div>
    </div>
  )
}
