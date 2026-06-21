import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects — Puneeth Chanda",
  description: "View Puneeth Chanda's projects including AI/GenAI agents, developer tools, and automation platforms.",
}

const heroProject = {
  title: "Klaro",
  description: "AI-powered educational platform that analyzes incorrect student responses, identifies underlying conceptual gaps, and generates personalized learning paths.",
  highlights: [
    "Built concept dependency graph for prerequisite analysis and root-cause identification of learning deficiencies",
    "Integrated LLM-based feedback generation, adaptive assessments, and mastery tracking",
    "Delivers personalized remediation paths based on individual learning patterns",
  ],
  tech: ["AI/ML", "LLM Integration", "Adaptive Assessments"],
}

const otherProjects = [
  {
    title: "AI Onboarding Agent",
    description: "Intelligent agent that maps a user's pricing structure into Chargebee, automating the onboarding workflow.",
    highlights: [
      "Cut onboarding friction time by 80%",
      "Maps pricing structures automatically from user input",
      "Reduced support dependency through self-service capabilities",
    ],
    tech: ["AI Agents", "MCP Tooling", "SaaS Integration"],
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
  },
  {
    title: "On-Demand Sandboxing Platform",
    description: "Full lifecycle development of a sandboxing platform enabling scalable deployments and flexible pricing.",
    highlights: [
      "Servicing 500+ unique users monthly",
      "Scalable deployment architecture",
      "Flexible pricing model support",
    ],
    tech: ["Cloud-Native", "SaaS", "Platform Engineering"],
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
  },
]

function ProjectCard({ project, hero }: { project: typeof heroProject; hero?: boolean }) {
  if (hero) {
    return (
      <article className="card project-hero">
        <span className="project-tag">Featured</span>
        <h2>{project.title}</h2>
        <p className="project-desc">{project.description}</p>
        <ul className="project-highlights">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span className="skill-tag" key={t}>{t}</span>
          ))}
        </div>
      </article>
    )
  }

  return (
    <article className="card project-card">
      <h3>{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <ul className="project-highlights">
        {project.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
      <div className="project-tech">
        {project.tech.map((t) => (
          <span className="skill-tag" key={t}>{t}</span>
        ))}
      </div>
    </article>
  )
}

export default function ProjectsPage() {
  return (
    <div className="page">
      <div className="page-container">
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <p className="page-kicker">&gt; projects</p>
          <h1>Projects</h1>
        </div>

        <ProjectCard project={heroProject} hero />

        <div className="project-grid">
          {otherProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </div>
  )
}
