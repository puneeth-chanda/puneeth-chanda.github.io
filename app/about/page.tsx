import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About — Puneeth Chanda",
  description: "Software Engineer at Chargebee building AI-powered onboarding tools, automation platforms, and intelligent agent solutions.",
}

const skillCategories = [
  {
    name: "Languages",
    skills: ["Java", "Python", "TypeScript", "SQL", "Bash"],
  },
  {
    name: "Backend & Frameworks",
    skills: ["Spring Boot", "Spring Framework", "JPA", "Hibernate", "Vue.js", "REST APIs", "Microservices"],
  },
  {
    name: "AI/ML & Agent Tooling",
    skills: ["LLM Integration", "OpenAI API", "AI Agents", "RAG", "Prompt Engineering"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS (ECS, Lambda, S3, RDS, CloudWatch)", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    name: "Databases",
    skills: ["MySQL", "PostgreSQL", "Redis"],
  },
  {
    name: "Observability",
    skills: ["ELK Stack", "Splunk", "Grafana"],
  },
]

export default function AboutPage() {
  return (
    <div className="page">
      <div className="page-container">
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
            &gt; about
          </p>
          <h1>About Me</h1>
        </div>

        {/* Two-column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "var(--space-2xl)",
          alignItems: "start",
        }}>
          {/* Left: Bio */}
          <div>
            <p style={{ fontSize: "1.1rem", marginBottom: "var(--space-lg)" }}>
              Software Engineer with 3+ years of experience building scalable
              SaaS products, distributed systems, AI-powered workflows,
              cloud-native platforms, and developer tooling.
            </p>
            <p style={{ marginBottom: "var(--space-lg)" }}>
              Currently at <strong>Chargebee</strong>, where I build
              AI-powered onboarding agents, MCP-based tooling for
              self-service configuration, and sandboxing platforms servicing
              500+ users monthly.
            </p>
            <p style={{ marginBottom: "var(--space-lg)" }}>
              Previously an <strong>SDET</strong> at Chargebee, where I
              pioneered automated performance testing frameworks that cut
              manual QA effort by 75% and accelerated release cycles from
              monthly to biweekly.
            </p>
            <p style={{ marginBottom: "var(--space-xl)" }}>
              I own products end-to-end — from architecture and implementation
              to deployment and monitoring. My focus is on building tools that
              make engineering teams faster and more effective.
            </p>
            <Link href="/resume" className="btn btn-primary">
              View Full Resume
            </Link>
          </div>

          {/* Right: Skills */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
              {skillCategories.map((category) => (
                <div key={category.name}>
                  <div className="skill-category">{category.name}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                    {category.skills.map((skill) => (
                      <span className="skill-tag" key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
