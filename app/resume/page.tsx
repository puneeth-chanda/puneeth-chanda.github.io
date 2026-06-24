"use client"

import { useEffect } from "react"

export default function ResumePage() {
  useEffect(() => {
    document.title = "Resume — Puneeth Chanda"
  }, [])

  return (
    <div className="page">
      <div className="page-container-narrow">
        {/* Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <p className="page-kicker">&gt; resume</p>
          <h1>Resume</h1>
          <p className="page-subtitle">
            Software Engineer with 3+ years building scalable SaaS products, distributed systems, and AI-powered workflows.
          </p>
        </div>

        {/* Software Engineer — Chargebee */}
        <div className="card resume-card">
          <div className="resume-header-row">
            <h2>Chargebee</h2>
            <span className="resume-date">Nov 2024 — Present</span>
          </div>
          <p className="resume-role">Software Engineer</p>
          <ul className="resume-list">
            <li>Built an onboarding agent that maps a user&apos;s pricing structure into Chargebee, cutting onboarding friction time by 80%.</li>
            <li>Developed MCP-based tooling enabling AI agents to perform self-service customer configuration workflows, reducing support dependency by 50%.</li>
            <li>Led migration of a legacy configuration platform to a unified framework supporting audits, criteria evaluation, and resolver chains with zero data discrepancies.</li>
            <li>Led full lifecycle development of an on-demand sandboxing platform, servicing 500+ unique users monthly.</li>
            <li>Built a dynamic blacklist feature for regulated email delivery, supporting jurisdiction-specific requirements and reducing policy breaches.</li>
          </ul>
        </div>

        {/* SDET — Chargebee */}
        <div className="card resume-card">
          <div className="resume-header-row">
            <h2>Chargebee</h2>
            <span className="resume-date">Aug 2022 — Oct 2024</span>
          </div>
          <p className="resume-role">SDET</p>
          <ul className="resume-list">
            <li>Pioneered automated performance testing framework using AWS Lambda, Python, and Vue.js, lowering manual QA effort by 75% and cutting test cycle times by 40%.</li>
            <li>Integrated automated performance validation into CI/CD pipelines, raising release velocity from monthly to biweekly cycles.</li>
            <li>Orchestrated on-demand, data-driven performance dashboards, accelerating debugging and incident response by 60%.</li>
          </ul>
        </div>

        {/* Education */}
        <div className="card resume-card">
          <h2 style={{ fontSize: "1.1rem", marginBottom: "var(--space-md)" }}>Education</h2>
          <div>
            <h3 style={{ fontSize: "1rem", marginBottom: "var(--space-xs)" }}>B.Tech Computer Science Engineering</h3>
            <p className="page-subtitle" style={{ fontSize: "0.9rem", marginBottom: "var(--space-xs)" }}>
              Amrita School of Engineering, Amritapuri, Kerala
            </p>
            <span className="resume-date" style={{ fontSize: "0.75rem" }}>
              2018 — 2022 · CGPA 8.63/10
            </span>
          </div>
        </div>

        {/* Skills */}
        <div className="card resume-card">
          <h2 style={{ fontSize: "1.1rem", marginBottom: "var(--space-lg)" }}>Skills</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-lg)" }}>
            <div>
              <h3 className="skill-category">Languages</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {["Java", "Python", "TypeScript", "SQL", "Bash"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="skill-category">Frameworks</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {["Spring Boot", "JPA", "Hibernate", "Vue.js", "REST APIs", "Microservices"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="skill-category">AI / ML</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {["LLM Integration", "OpenAI API", "AI Agents", "RAG", "Prompt Engineering"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="skill-category">Cloud & DevOps</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {["AWS (ECS, Lambda, S3, RDS)", "Docker", "Kubernetes", "Terraform", "GitHub Actions"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="skill-category">Databases</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {["MySQL", "PostgreSQL"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="skill-category">Observability</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {["ELK Stack", "Splunk", "Grafana"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Download */}
        <div style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
          <a
            href="/resume.pdf"
            download
            className="btn btn-primary"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  )
}
