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
            Software Engineer with 3+ years building scalable SaaS products, distributed systems, and AI-powered workflows.
          </p>
        </div>

        {/* Software Engineer — Chargebee */}
        <div className="card" style={{ padding: "var(--space-xl)", marginBottom: "var(--space-lg)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "var(--space-sm)" }}>
            <h2 style={{ fontSize: "1.1rem", marginBottom: 0 }}>Chargebee</h2>
            <span className="text-mono" style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
              Nov 2024 — Present
            </span>
          </div>
          <p className="text-mono" style={{ fontSize: "0.75rem", color: "var(--color-signal)", marginBottom: "var(--space-md)" }}>
            Software Engineer
          </p>
          <ul style={{ paddingLeft: "1.2rem" }}>
            <li style={{ marginBottom: "var(--space-sm)" }}>Built an onboarding agent that maps a user&apos;s pricing structure into Chargebee, cutting onboarding friction time by 80%.</li>
            <li style={{ marginBottom: "var(--space-sm)" }}>Developed MCP-based tooling enabling AI agents to perform self-service customer configuration workflows, reducing support dependency by 50%.</li>
            <li style={{ marginBottom: "var(--space-sm)" }}>Led migration of a legacy configuration platform to a unified framework supporting audits, criteria evaluation, and resolver chains with zero data discrepancies.</li>
            <li style={{ marginBottom: "var(--space-sm)" }}>Led full lifecycle development of an on-demand sandboxing platform, servicing 500+ unique users monthly.</li>
            <li>Built a dynamic blacklist feature for regulated email delivery, supporting jurisdiction-specific requirements and reducing policy breaches.</li>
          </ul>
        </div>

        {/* SDET — Chargebee */}
        <div className="card" style={{ padding: "var(--space-xl)", marginBottom: "var(--space-lg)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "var(--space-sm)" }}>
            <h2 style={{ fontSize: "1.1rem", marginBottom: 0 }}>Chargebee</h2>
            <span className="text-mono" style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
              Aug 2022 — Oct 2024
            </span>
          </div>
          <p className="text-mono" style={{ fontSize: "0.75rem", color: "var(--color-signal)", marginBottom: "var(--space-md)" }}>
            SDET
          </p>
          <ul style={{ paddingLeft: "1.2rem" }}>
            <li style={{ marginBottom: "var(--space-sm)" }}>Pioneered automated performance testing framework using AWS Lambda, Python, and Vue.js, lowering manual QA effort by 75% and cutting test cycle times by 40%.</li>
            <li style={{ marginBottom: "var(--space-sm)" }}>Integrated automated performance validation into CI/CD pipelines, raising release velocity from monthly to biweekly cycles.</li>
            <li>Orchestrated on-demand, data-driven performance dashboards, accelerating debugging and incident response by 60%.</li>
          </ul>
        </div>

        {/* Education */}
        <div className="card" style={{ padding: "var(--space-xl)", marginBottom: "var(--space-lg)" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "var(--space-md)" }}>Education</h2>
          <div>
            <h3 style={{ fontSize: "1rem", marginBottom: "var(--space-xs)" }}>B.Tech Computer Science Engineering</h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", marginBottom: "var(--space-xs)" }}>
              Amrita School of Engineering, Amritapuri, Kerala
            </p>
            <span className="text-mono" style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
              2018 — 2022 · CGPA 8.63/10
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
                {["Java", "Python", "TypeScript", "SQL", "Bash"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="skill-category">Frameworks</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {["Spring Boot", "JPA", "Hibernate", "Vue.js", "REST APIs", "Microservices"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="skill-category">AI / ML</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {["LLM Integration", "OpenAI API", "AI Agents", "RAG", "Prompt Engineering"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="skill-category">Cloud & DevOps</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {["AWS (ECS, Lambda, S3, RDS)", "Docker", "Kubernetes", "Terraform", "GitHub Actions"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="skill-category">Databases</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {["MySQL", "PostgreSQL", "Redis"].map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="skill-category">Observability</div>
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
            onClick={(e) => {
              if (!document.getElementById("resume-pdf")) {
                e.preventDefault()
                alert("Resume PDF not found. Please add it to public/resume.pdf")
              }
            }}
          >
            Download PDF
          </a>
          <p className="text-mono" style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", marginTop: "var(--space-sm)" }}>
            public/resume.pdf
          </p>
        </div>
      </div>
    </div>
  )
}
