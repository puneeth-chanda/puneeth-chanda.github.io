import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects — Puneeth Chanda",
  description: "View Puneeth Chanda's projects including AI/GenAI agents, developer tools, and automation platforms.",
}

const aiProjects = [
  {
    title: "[PLACEHOLDER: AI Agent for Code Review]",
    problem: "Automate code quality analysis and provide intelligent feedback",
    tech: ["[PLACEHOLDER: Python]", "[PLACEHOLDER: OpenAI/Anthropic APIs]", "[PLACEHOLDER: LangChain]"],
    outcome: "Reduce manual review time by 70% and improve code consistency",
    link: "[PLACEHOLDER: add GitHub repo link]",
  },
  {
    title: "[PLACEHOLDER: GenAI Content Generator]",
    problem: "Create personalized documentation and technical guides automatically",
    tech: ["[PLACEHOLDER: React]", "[PLACEHOLDER: GPT-4]", "[PLACEHOLDER: Vector DBs]"],
    outcome: "Generate 50+ documentation pages in minutes vs. hours",
    link: "[PLACEHOLDER: add demo link]",
  },
  {
    title: "[PLACEHOLDER: Intelligent Knowledge Base Chatbot]",
    problem: "Enable employees to quickly find answers from company documentation",
    tech: ["[PLACEHOLDER: Node.js]", "[PLACEHOLDER: Claude API]", "[PLACEHOLDER: Elasticsearch]"],
    outcome: "Reduce support ticket volume by 30% through self-service",
    link: "[PLACEHOLDER: add GitHub repo link]",
  },
]

const otherProjects = [
  {
    title: "rmvAds",
    description: "Avoid Spotify ads for non-premium users by detecting ad breaks and auto-skipping via the Spotify API.",
    tech: ["Python", "Spotify API"],
    link: "[PLACEHOLDER: add GitHub repo link]",
  },
  {
    title: "OCR Scanner",
    description: "Real-time optical character recognition that scans video/image streams and alerts when target text is detected.",
    tech: ["Python", "Google Cloud Vision"],
    link: "[PLACEHOLDER: add demo link]",
  },
  {
    title: "Schedule Bot",
    description: "Telegram bot that fetches daily schedules from a database and sends them to users on demand.",
    tech: ["Python", "GraphQL", "Telegram API"],
    link: "[PLACEHOLDER: add GitHub repo link]",
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

        {/* Featured: AI/GenAI Projects */}
        <div className="pipeline-divider">
          <span className="pipeline-divider-label">Featured</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginBottom: "var(--space-2xl)" }}>
          {aiProjects.map((project, index) => (
            <div
              key={`ai-${index}`}
              className="card card-featured"
              style={{ padding: "var(--space-lg)" }}
            >
              <div className="card-badge" style={{ marginBottom: "var(--space-sm)" }}>
                AI / GenAI
              </div>
              <h3 style={{ marginBottom: "var(--space-sm)" }}>{project.title}</h3>
              <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-md)" }}>
                {project.problem}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "var(--space-md)" }}>
                {project.tech.map((t) => (
                  <span className="skill-tag" key={t}>{t}</span>
                ))}
              </div>
              <p style={{ fontSize: "0.9rem", marginBottom: "var(--space-md)" }}>
                <span style={{ color: "var(--color-text-muted)" }}>Impact:</span>{" "}
                {project.outcome}
              </p>
              <ProjectLink link={project.link} />
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="pipeline-divider">
          <span className="pipeline-divider-label">Other</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          {otherProjects.map((project, index) => (
            <div
              key={`other-${index}`}
              className="card card-pipeline"
              style={{ padding: "var(--space-lg)" }}
            >
              <h3 style={{ marginBottom: "var(--space-sm)" }}>{project.title}</h3>
              <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-md)" }}>
                {project.description}
              </p>
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
