import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Me - Puneeth Chanda",
  description: "Hey there! My name is Puneeth Chanda, I'm a developer at Chargebee.",
}

export default function AboutPage() {
  const startYear = 2022
  const currYear = new Date().getFullYear()
  const experience = currYear - startYear

  return (
    <div className="container animate__animated animate__fadeIn" style={{ marginTop: 140 }}>
      <div className="row">
        <div className="col-md-6 text-start">
          <h1 className="line-after">About Me</h1>
          <h4 className="mt-4">Hey &#x1F44B;</h4>
          <p>
            I'm Puneeth Chanda, a Software Engineer at Chargebee building AI-powered onboarding agent tools, sandboxing platforms, and OAuth-based integrations. I specialize in crafting intelligent automation solutions that streamline workflows and enhance user experiences.
          </p>
          <p>
            With <b>{experience}+ years of experience</b>, I focus on developing performance testing frameworks, CI/CD automation, and GenAI/LLM-powered applications. I'm passionate about creating tools that make complex systems more accessible and efficient.
          </p>
          <h4 className="mt-5">Tech Stacks</h4>
          <p>Below are the technologies I work with daily:</p>
          <div className="row animate__animated animate__fadeInUp">
            <div className="col">
              <h5>Languages</h5>
              <ul style={{ listStyleType: "circle" }}>
                <li>Java</li>
                <li>Python</li>
                <li>JavaScript / TypeScript</li>
                <li>SQL (MySQL, PostgreSQL)</li>
              </ul>
            </div>
            <div className="col">
              <h5>Backend & Frameworks</h5>
              <ul style={{ listStyleType: "circle" }}>
                <li>Spring Boot</li>
                <li>Node.js</li>
                <li>Vue.js</li>
                <li>AWS Services (Lambda, S3)</li>
              </ul>
            </div>
          </div>
          <div className="row animate__animated animate__fadeInUp mt-3">
            <div className="col">
              <h5>Cloud & DevOps</h5>
              <ul style={{ listStyleType: "circle" }}>
                <li>Kubernetes</li>
                <li>Docker</li>
                <li>CI/CD Pipelines</li>
                <li>ELK Stack</li>
                <li>Splunk</li>
              </ul>
            </div>
            <div className="col">
              <h5>Databases & Observability</h5>
              <ul style={{ listStyleType: "circle" }}>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>Monitoring & Logging</li>
              </ul>
            </div>
          </div>
          <div className="row animate__animated animate__fadeInUp mt-3">
            <div className="col">
              <h5>AI/LLM & Agent Tooling</h5>
              <ul style={{ listStyleType: "circle" }}>
                <li>[PLACEHOLDER: list specific LLM/agent tools or frameworks you've used or are learning, e.g. LangChain, OpenAI/Anthropic APIs, vector DBs]</li>
                <li>GenAI-powered onboarding agents</li>
                <li>Intelligent automation platforms</li>
                <li>Natural language processing</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <Link href="/resume" className="btn btn-primary btn-lg">
              View Full Resume
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="/assets/working.png"
            alt="Puneeth Chanda working at a desk with laptop"
            className="abt-img"
          />
        </div>
      </div>
    </div>
  )
}
