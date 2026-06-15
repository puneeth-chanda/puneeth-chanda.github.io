import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects — Puneeth Chanda",
  description: "View Puneeth Chanda's projects including AI/GenAI agents, developer tools, and automation platforms.",
}

const featuredProjects = [
  {
    title: "Klaro",
    description: "AI-powered educational platform that analyzes incorrect student responses, identifies underlying conceptual gaps, and generates personalized learning paths.",
    highlights: [
      "Built concept dependency graph for prerequisite analysis and root-cause identification of learning deficiencies",
      "Integrated LLM-based feedback generation, adaptive assessments, and mastery tracking",
      "Delivers personalized remediation paths based on individual learning patterns",
    ],
    tech: ["AI/ML", "LLM Integration", "Adaptive Assessments"],
    link: "[PLACEHOLDER: add GitHub repo or demo link]",
  },
  {
    title: "AI Onboarding Agent",
    description: "Intelligent agent that maps a user's pricing structure into Chargebee, automating the onboarding workflow.",
    highlights: [
      "Cut onboarding friction time by 80%",
      "Maps pricing structures automatically from user input",
      "Reduced support dependency through self-service capabilities",
    ],
    tech: ["AI Agents", "MCP Tooling", "SaaS Integration"],
    link: "[PLACEHOLDER: add link if shareable]",
  },
  {
    title: "MCP Configuration Tooling",
    description: "MCP-based tooling enabling AI agents to perform self-service customer configuration workflows.",
    highlights: [
      "Reduced support dependency by 50%",
      "Enabled AI-driven configuration workflows",
      "Self-service customer setup without human intervention",
    ],
    tech: ["MCP", "AI Agents", "Configuration Systems"],
    link: "[PLACEHOLDER: add link if shareable]",
  },
]

const workProjects = [
  {
    title: "On-Demand Sandboxing Platform",
    description: "Full lifecycle development of a sandboxing platform enabling scalable deployments and flexible pricing.",
    highlights: [
      "Servicing 500+ unique users monthly",
      "Scalable deployment architecture",
      "Flexible pricing model support",
    ],
    tech: ["Cloud-Native", "SaaS", "Platform Engineering"],
    link: "[PLACEHOLDER: add link if shareable]",
  },
  {
    title: "Performance Testing Framework",
    description: "Automated performance testing framework that eliminated manual QA bottlenecks.",
    highlights: [
      "Lowered manual QA effort by 75%",
      "Cut test cycle times by 40%",
      "Integrated into CI/CD pipelines for continuous validation",
    ],
    tech: ["AWS Lambda", "Python", "Vue.js", "CI/CD"],
    link: "[PLACEHOLDER: add link if shareable]",
  },
  {
    title: "Dynamic Email Blacklist",
    description: "Jurisdiction-specific email delivery feature for regulated markets.",
    highlights: [
      "Supports jurisdiction-specific compliance requirements",
      "Reduced policy breaches",
      "Dynamic rule engine for regulatory adaptation",
    ],
    tech: ["Compliance", "Rule Engine", "Email Systems"],
    link: "[PLACEHOLDER: add link if shareable]",
  },
]

function ProjectLink({ link }: { link: string }) {
  if (link.includes("PLACEHOLDER")) {
    return (
      <span
        className="text-mono"
        style={{
          fontSize: "0.75rem",
          color: "var(--color-text-muted)",
          opacity: 0.6,
        }}
      >
        {link}
      </span>
    )
  }
  return (
    <a
      href={link}
      className="text-mono"
      style={{
        fontSize: "0.75rem",
        color: "var(--color-signal)",
        textDecoration: "none",
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link} &rarr;
    </a>
  )
}

export default function ProjectsPage() {
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
            &gt; projects
          </p>
          <h1>Projects</h1>
        </div>

        {/* Featured: AI/Agent Projects */}
        <div className="pipeline-divider">
          <span className="pipeline-divider-label">Featured</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginBottom: "var(--space-2xl)" }}>
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="card card-featured"
              style={{ padding: "var(--space-lg)" }}
            >
              <div className="card-badge" style={{ marginBottom: "var(--space-sm)" }}>
                AI / Agent
              </div>
              <h3 style={{ marginBottom: "var(--space-sm)" }}>{project.title}</h3>
              <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-md)" }}>
                {project.description}
              </p>
              <ul style={{ paddingLeft: "1.2rem", marginBottom: "var(--space-md)" }}>
                {project.highlights.map((h, i) => (
                  <li key={i} style={{ color: "var(--color-text)", marginBottom: "var(--space-xs)" }}>
                    {h}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "var(--space-md)" }}>
                {project.tech.map((t) => (
                  <span className="skill-tag" key={t}>{t}</span>
                ))}
              </div>
              <ProjectLink link={project.link} />
            </div>
          ))}
        </div>

        {/* Work Projects */}
        <div className="pipeline-divider">
          <span className="pipeline-divider-label">Work</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          {workProjects.map((project) => (
            <div
              key={project.title}
              className="card card-pipeline"
              style={{ padding: "var(--space-lg)" }}
            >
              <h3 style={{ marginBottom: "var(--space-sm)" }}>{project.title}</h3>
              <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-md)" }}>
                {project.description}
              </p>
              <ul style={{ paddingLeft: "1.2rem", marginBottom: "var(--space-md)" }}>
                {project.highlights.map((h, i) => (
                  <li key={i} style={{ color: "var(--color-text)", marginBottom: "var(--space-xs)" }}>
                    {h}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "var(--space-md)" }}>
                {project.tech.map((t) => (
                  <span className="skill-tag" key={t}>{t}</span>
                ))}
              </div>
              <ProjectLink link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
