"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function DSAJourneyPage() {
  useEffect(() => {
    document.title = "DSA Prep Journey — Puneeth Chanda"
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
            <li className="text-mono" style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>dsa-journey</li>
          </ol>
        </nav>

        <article>
          <h1 style={{ marginBottom: "var(--space-md)" }}>DSA Prep Journey</h1>
          <p className="text-mono" style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginBottom: "var(--space-2xl)" }}>
            Coming soon — notes on algorithms, data structures, and interview prep.
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
