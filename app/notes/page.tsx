"use client"

import { useEffect } from "react"

const notes = [
  {
    title: "DSA Prep Journey: My Path to Technical Interviews",
    href: "/notes/dsa-journey",
    date: "[PLACEHOLDER: add date]",
    summary: "[PLACEHOLDER: brief summary of DSA prep journey, key algorithms learned, resources used, interview experiences]",
  },
  {
    title: "System Design Fundamentals for Modern Applications",
    href: "/notes/system-design-basics",
    date: "[PLACEHOLDER: add date]",
    summary: "[PLACEHOLDER: overview of system design principles, scalability patterns, and real-world examples]",
  },
  {
    title: "Building Production-Ready AI Agent Patterns",
    href: "/notes/ai-agent-patterns",
    date: "[PLACEHOLDER: add date]",
    summary: "[PLACEHOLDER: insights on designing scalable AI agents, orchestration patterns, and best practices]",
  },
]

export default function NotesPage() {
  useEffect(() => {
    document.title = "Notes — Puneeth Chanda"
  }, [])

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
            &gt; notes
          </p>
          <h1>Notes</h1>
          <p style={{ color: "var(--color-text-muted)", marginTop: "var(--space-sm)" }}>
            Technical notes on DSA prep, system design, AI/ML engineering, and software craft.
          </p>
        </div>

        {/* Notes list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          {notes.map((note) => (
            <a
              key={note.href}
              href={note.href}
              className="card card-pipeline"
              style={{
                padding: "var(--space-lg)",
                textDecoration: "none",
                display: "block",
              }}
            >
              <p className="text-mono" style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", marginBottom: "var(--space-xs)" }}>
                {note.date}
              </p>
              <h2 style={{ fontSize: "1.15rem", marginBottom: "var(--space-sm)" }}>{note.title}</h2>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", marginBottom: 0 }}>
                {note.summary}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
