"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function SystemDesignPage() {
  useEffect(() => {
    document.title = "System Design Basics — Puneeth Chanda"
  }, [])

  return (
    <div className="page">
      <div className="page-container-narrow">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <ol className="breadcrumb-list">
            <li><Link href="/notes" className="breadcrumb-link">notes</Link></li>
            <li className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current">system-design-basics</li>
          </ol>
        </nav>

        <article>
          <h1 style={{ marginBottom: "var(--space-md)" }}>System Design Fundamentals</h1>
          <p className="page-subtitle" style={{ marginBottom: "var(--space-2xl)" }}>
            Coming soon — notes on scalability patterns, distributed systems, and real-world architecture.
          </p>

          <div className="card card-wip">
            <p className="page-subtitle" style={{ marginBottom: "var(--space-lg)", marginTop: 0 }}>
              This note is a work in progress. Check back soon for detailed content on system design principles, scalability patterns, and real-world examples.
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
