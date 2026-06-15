"use client"

import Link from "next/link"
import SocialLink from "@/components/SocialLink"
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi"

const pipelineSteps = [
  { label: "Agents", color: "active" },
  { label: "Platforms", color: "teal" },
  { label: "Automation", color: "active" },
  { label: "Infra", color: "" },
]

export default function HomePage() {
  return (
    <div className="page">
      <div className="page-container" style={{ paddingTop: "12vh", paddingBottom: "8vh" }}>
        {/* Hero */}
        <div>
          <p
            className="text-mono animate-fade-up delay-1"
            style={{
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--color-text-muted)",
              marginBottom: "var(--space-md)",
            }}
          >
            Software Engineer at Chargebee
          </p>

          <h1
            className="animate-fade-up delay-2"
            style={{ marginBottom: "var(--space-lg)" }}
          >
            Puneeth
            <br />
            Chanda<span style={{ color: "var(--color-signal)" }}>.</span>
          </h1>

          <p
            className="animate-fade-up delay-3"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              maxWidth: "560px",
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
            }}
          >
            Building AI agents, developer tooling, and automation
            infrastructure that makes systems faster and teams more effective.
          </p>
        </div>

        {/* Pipeline */}
        <div className="pipeline animate-fade-up delay-4">
          <div className="pipeline-step">
            <div className="pipeline-dot active animate-dot delay-2" />
            <span className="pipeline-label">Agents</span>
          </div>
          <div className="pipeline-line" />
          <div className="pipeline-step">
            <div className="pipeline-dot teal animate-dot delay-3" />
            <span className="pipeline-label">Platforms</span>
          </div>
          <div className="pipeline-line" />
          <div className="pipeline-step">
            <div className="pipeline-dot active animate-dot delay-4" />
            <span className="pipeline-label">Automation</span>
          </div>
          <div className="pipeline-line" />
          <div className="pipeline-step">
            <div className="pipeline-dot animate-dot delay-5" />
            <span className="pipeline-label">Infra</span>
          </div>
        </div>

        {/* CTAs */}
        <div
          className="animate-fade-up delay-5"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-md)",
            marginTop: "var(--space-xl)",
          }}
        >
          <Link href="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <Link href="/contact" className="btn btn-outline-primary">
            Get in Touch
          </Link>
          <Link href="/resume" className="btn btn-outline-primary">
            Download Resume
          </Link>
        </div>

        {/* Social */}
        <div className="social-icons animate-fade-up delay-6">
          <SocialLink to="https://github.com/puneeth2001" label="GitHub">
            <FiGithub />
          </SocialLink>
          <SocialLink to="https://www.linkedin.com/in/puneeth-chanda-2001/" label="LinkedIn">
            <FiLinkedin />
          </SocialLink>
          <SocialLink to="https://twitter.com/ChandaPuneeth" label="Twitter">
            <FiTwitter />
          </SocialLink>
          <SocialLink to="mailto:chandapuneeth@gmail.com" label="Email">
            <FiMail />
          </SocialLink>
        </div>
      </div>
    </div>
  )
}
