"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function DSAJourneyPage() {
  useEffect(() => {
    document.title = "DSA Prep Journey — Puneeth Chanda"
  }, [])

  return (
    <div className="page">
      <div className="page-container-narrow">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <ol className="breadcrumb-list">
            <li><Link href="/notes" className="breadcrumb-link">notes</Link></li>
            <li className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current">dsa-journey</li>
          </ol>
        </nav>

        <article>
          <h1 style={{ marginBottom: "var(--space-md)" }}>DSA Prep Journey</h1>
          <p className="page-subtitle" style={{ marginBottom: "var(--space-2xl)" }}>
            Coming soon — notes on algorithms, data structures, and interview prep.
          </p>

          <div className="card card-wip">
            <p className="page-subtitle" style={{ marginBottom: "var(--space-lg)", marginTop: 0 }}>
              This note is a work in progress. Check back soon for detailed content on DSA preparation, key algorithms, and interview experiences.
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
