"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function AIAgentPatternsPage() {
  useEffect(() => {
    document.title = "AI Agent Patterns — Puneeth Chanda"
  }, [])

  return (
    <div className="page">
      <div className="page-container" style={{ maxWidth: "720px" }}>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" style={{ marginBottom: "var(--space-xl)" }}>
          <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "var(--space-sm)", alignItems: "center" }}>
            <li>
              <Link
                href="/notes"
                className="text-mono"
                style={{ fontSize: "0.8rem", color: "var(--color-signal)", textDecoration: "none" }}
              >
                notes
              </Link>
            </li>
            <li className="text-mono" style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>/</li>
            <li className="text-mono" style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>ai-agent-patterns</li>
          </ol>
        </nav>

        <article>
          <h1 style={{ marginBottom: "var(--space-md)" }}>Building Production-Ready AI Agent Patterns</h1>
          <p className="text-mono" style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginBottom: "var(--space-2xl)" }}>
            Coming soon — notes on agent architectures, tool integration, and deployment patterns.
          </p>

          <div
            className="card"
            style={{
              padding: "var(--space-xl)",
              textAlign: "center",
              borderColor: "var(--color-border)",
            }}
          >
            <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-lg)" }}>
              This note is a work in progress. Check back soon for detailed content on AI agent architectures, tool integration, memory management, and production considerations.
            </p>
            <Link href="/notes" className="btn btn-outline-primary">
              Back to Notes
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
