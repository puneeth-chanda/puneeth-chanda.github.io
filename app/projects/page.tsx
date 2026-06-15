import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Recent Projects - Puneeth Chanda",
  description: "View Puneeth Chanda's recent open-source projects including rmvAds, OCR, and Schedule Bot.",
}

const projects = [
  {
    title: "rmvAds",
    description: "A simple way to avoid listening to Spotify ads for non-premium users using Spotify API.",
    image: "/assets/speak.jpg",
    imageAlt: "Speaker icon representing audio streaming",
    link: "[PLACEHOLDER: add GitHub repo link]",
    tech: "Python, Spotify API",
  },
  {
    title: "OCR",
    description: "Scans the video or image in real-time in front of a camera and checks if what is needed is present, then sends a message.",
    image: "/assets/illustration.jpg",
    imageAlt: "Abstract illustration representing optical character recognition",
    link: "[PLACEHOLDER: add demo link]",
    tech: "Python, google-cloud-vision",
  },
  {
    title: "Schedule Bot",
    description: "Telegram bot that sends the respective schedule for the day fetched from the database.",
    image: "/assets/qr-1.png",
    imageAlt: "QR code graphic for the Schedule Bot Telegram project",
    link: "[PLACEHOLDER: add GitHub repo link]",
    tech: "Python, GraphQL, Telegram API",
  },
]

export default function ProjectsPage() {
  const aiProjects = [
    {
      title: "[PLACEHOLDER: AI Agent for Code Review",
      problem: "Automate code quality analysis and provide intelligent feedback",
      tech: "[PLACEHOLDER: Python, OpenAI/Anthropic APIs, LangChain]",
      outcome: "Reduce manual review time by 70% and improve code consistency",
      link: "[PLACEHOLDER: add GitHub repo link]",
    },
    {
      title: "[PLACEHOLDER: GenAI Content Generator",
      problem: "Create personalized documentation and technical guides automatically",
      tech: "[PLACEHOLDER: React, OpenAI GPT-4, vector DBs]",
      outcome: "Generate 50+ documentation pages in minutes vs. hours",
      link: "[PLACEHOLDER: add demo link]",
    },
    {
      title: "[PLACEHOLDER: Intelligent Chatbot for Internal Knowledge Base",
      problem: "Enable employees to quickly find answers from company documentation",
      tech: "[PLACEHOLDER: Node.js, Anthropic Claude, Elasticsearch]",
      outcome: "Reduce support ticket volume by 30% through self-service",
      link: "[PLACEHOLDER: add GitHub repo link]",
    },
  ]

  return (
    <div className="page animate__animated animate__fadeIn">
      <h1>Recent Projects</h1>
      
      <h2 className="mt-5 mb-4">AI/GenAI Projects</h2>
      <div className="container">
        {aiProjects.map((project, index) => (
          <div className="row projects-row mb-5" key={`ai-${index}`}>            <div className="col-md-5">
              <img
                src="/assets/illustration.jpg"
                alt="AI/GenAI project illustration"
                className="project-cover"
                style={{ width: "inherit", borderRadius: 3 }}
              />
            </div>
            <div className="col-md-5">
              <h2 className="mt-3 text-start">
                {project.title}
                <hr className="dope" />
              </h2>
              <div className="card mt-3 mb-3 text-start">
                <div className="card-body">
                  <p><strong>Problem:</strong> {project.problem}</p>
                  <p><strong>Approach:</strong> Built using {project.tech}</p>
                  <p><strong>Impact:</strong> {project.outcome}</p>
                  {project.link && project.link.includes("PLACEHOLDER") ? (
                    <span className="btn btn-outline-primary mt-2 disabled">
                      {project.link}
                    </span>
                  ) : project.link ? (
                    <a
                      href={project.link}
                      className="btn btn-primary mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  ) : (
                    <span className="btn btn-primary mt-2 disabled">[PLACEHOLDER: add link]</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className="mt-5 mb-4">Other Projects</h2>
      <div className="container">
        {projects.map((project, index) => (
          <div className="row projects-row" key={`regular-${index}`}>            <div className="col-md-5">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="project-cover"
                style={{ width: "inherit", borderRadius: 3 }}
              />
            </div>
            <div className="col-md-5">
              <h2 className="mt-3 text-start">
                {project.title}
                <hr className="dope" />
              </h2>
              <div className="card mt-3 mb-3 text-start">
                <div className="card-body">
                  <p><strong>Problem:</strong> {project.description}</p>
                  <p><strong>Approach:</strong> Implemented using {project.tech}</p>
                  <p><strong>Result:</strong> Delivered a functional solution that addresses the core requirements and improves user experience.</p>
                  {project.link && project.link.includes("PLACEHOLDER") ? (
                    <span className="btn btn-outline-primary mt-2 disabled">
                      {project.link}
                    </span>
                  ) : project.link ? (
                    <a
                      href={project.link}
                      className="btn btn-primary mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  ) : (
                    <span className="btn btn-primary mt-2 disabled">[PLACEHOLDER: add link]</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
