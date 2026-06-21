"use client"

import { useEffect } from "react"

const notes = [
  {
    title: "DSA Prep Journey: My Path to Technical Interviews",
    href: "/notes/dsa-journey",
    date: "Coming soon",
    summary: "Notes on algorithms, data structures, and interview preparation — arrays and hash maps to graph traversals and dynamic programming.",
  },
  {
    title: "System Design Fundamentals for Modern Applications",
    href: "/notes/system-design-basics",
    date: "Coming soon",
    summary: "Scalability patterns, distributed system trade-offs, and real-world architecture decisions drawn from production experience.",
  },
  {
    title: "Building Production-Ready AI Agent Patterns",
    href: "/notes/ai-agent-patterns",
    date: "Coming soon",
    summary: "Agent architectures, MCP tool integration, memory management, and deployment patterns for LLM-powered workflows.",
  },
  {
    title: "Learning from Thinking: How to Extract Knowledge from Model Reasoning",
    href: "/notes/thinking-for-learning",
    date: "Jun 21, 2026",
    summary: "Using AI thinking traces to learn debugging, tool-chaining, API idioms, trade-off reasoning, and meta-cognitive techniques.",
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
          <p className="page-kicker">&gt; notes</p>
          <h1>Notes</h1>
          <p className="page-subtitle">
            Technical notes on DSA prep, system design, AI/ML engineering, and software craft.
          </p>
        </div>

        {/* Notes list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          {notes.map((note) => (
            <a
              key={note.href}
              href={note.href}
              className="card card-pipeline note-card"
            >
              <p className="note-date">{note.date}</p>
              <h2 className="note-title">{note.title}</h2>
              <p className="page-subtitle" style={{ fontSize: "0.9rem", marginBottom: 0 }}>
                {note.summary}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
