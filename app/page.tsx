import Link from "next/link"

const currentlyItems = [
  {
    label: "Building",
    title: "Dev tooling for AI agents",
    body: "A graph-based memory layer for long-running coding sessions.",
  },
  {
    label: "Writing",
    title: "Notes on quiet interfaces",
    body: "A small newsletter about restraint, typography, and product craft.",
  },
  {
    label: "Reading",
    title: "Learning from Thinking",
    body: "How to extract knowledge from model reasoning traces — a guide.",
    href: "/notes/thinking-for-learning",
  },
]

export default function HomePage() {
  return (
    <div className="page">
      <div className="page-container" style={{ paddingTop: "var(--space-2xl)", paddingBottom: "var(--space-2xl)" }}>
        {/* Hero */}
        <section className="hero">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dash" aria-hidden="true" />
            Portfolio · 2026
          </div>

          <h1 className="hero-title">
            Engineer, designer, builder of useful things.
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
        <section className="currently">
          <div className="currently-eyebrow">
            <span className="currently-eyebrow-label">Currently</span>
            <span className="currently-eyebrow-rule" aria-hidden="true" />
          </div>

          <div className="currently-grid">
            {currentlyItems.map((item) => {
              const card = (
                <article className="currently-card" key={item.label}>
                  <span className="currently-card-label">{item.label}</span>
                  <span className="currently-card-title">{item.title}</span>
                  <span className="currently-card-body">{item.body}</span>
                </article>
              )
              return item.href ? (
                <Link href={item.href} key={item.label} style={{ textDecoration: "none", color: "inherit" }}>
                  {card}
                </Link>
              ) : (
                card
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
