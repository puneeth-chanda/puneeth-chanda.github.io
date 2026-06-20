"use client"

import Link from "next/link"

const currentlyItems = [
  {
    num: "01 — Building",
    title: "Dev tooling for AI agents",
    body: "A graph-based memory layer for long-running coding sessions.",
  },
  {
    num: "02 — Writing",
    title: "Notes on quiet interfaces",
    body: "A small newsletter about restraint, typography, and product craft.",
  },
  {
    num: "03 — Reading",
    title: "The Design of Everyday Things",
    body: "Re-reading Don Norman. Affordances, signifiers, and feedback loops.",
  },
]

export default function HomePage() {
  return (
    <div className="page">
      <div className="page-container" style={{ paddingTop: "8vh", paddingBottom: "8vh" }}>
        {/* Hero */}
        <section className="hero animate-fade-up">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dash" aria-hidden="true" />
            Portfolio · 2026
          </div>

          <h1 className="hero-title">
            Engineer, designer, builder of small useful things.
          </h1>

          <p className="hero-sub">
            I design and build software at the intersection of product, systems, and craft.
            Currently exploring AI tooling, developer experience, and quiet interfaces.
          </p>

          <div className="hero-ctas">
            <Link href="/projects" className="btn-pill">
              View selected work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/resume" className="btn-pill-outline">
              Read résumé
            </Link>
          </div>
        </section>

        {/* Currently */}
        <section className="currently animate-fade-up delay-3">
          <div className="currently-eyebrow">
            <span className="currently-eyebrow-label">Currently</span>
            <span className="currently-eyebrow-rule" aria-hidden="true" />
          </div>

          <div className="currently-grid">
            {currentlyItems.map((item) => (
              <article className="currently-card" key={item.num}>
                <span className="currently-card-num">{item.num}</span>
                <span className="currently-card-title">{item.title}</span>
                <span className="currently-card-body">{item.body}</span>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
