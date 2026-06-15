import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About — Puneeth Chanda",
  description: "Software Engineer at Chargebee building AI-powered onboarding tools, automation platforms, and intelligent agent solutions.",
}

const skillCategories = [
  {
    name: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    name: "Backend & Frameworks",
    skills: ["Spring Boot", "Node.js", "Vue.js", "AWS Lambda", "AWS S3"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["Kubernetes", "Docker", "CI/CD", "ELK Stack", "Splunk"],
  },
  {
    name: "AI/LLM & Agent Tooling",
    skills: ["[PLACEHOLDER: LangChain, OpenAI/Anthropic APIs, vector DBs]", "GenAI Agents", "NLP", "Automation"],
  },
  {
    name: "Databases & Observability",
    skills: ["MySQL", "PostgreSQL", "Redis", "Monitoring", "Logging"],
  },
]

export default function AboutPage() {
  const startYear = 2022
  const currYear = new Date().getFullYear()
  const experience = currYear - startYear

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
              I&apos;m Puneeth Chanda, a Software Engineer at Chargebee building
              AI-powered onboarding agent tools, sandboxing platforms, and
              OAuth-based integrations.
            </p>
            <p style={{ marginBottom: "var(--space-lg)" }}>
              With <strong>{experience}+ years of experience</strong>, I focus
              on developing performance testing frameworks, CI/CD automation,
              and GenAI/LLM-powered applications. I&apos;m passionate about
              creating tools that make complex systems more accessible and
              efficient.
            </p>
            <p style={{ marginBottom: "var(--space-xl)" }}>
              My work sits at the intersection of developer tooling and
              intelligent automation — building the systems that help other
              engineers ship faster and with more confidence.
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
