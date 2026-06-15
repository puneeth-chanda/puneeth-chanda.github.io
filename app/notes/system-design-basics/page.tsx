"use client"

import { useEffect } from "react"

export default function SystemDesignPage() {
  useEffect(() => {
    document.title = "System Design Basics - Puneeth Chanda"
  }, [])

  return (
    <div className="container page animate__animated animate__fadeIn" style={{ marginTop: 120 }}>
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/notes">Notes</a></li>
          <li className="breadcrumb-item active">System Design Fundamentals</li>
        </ol>
      </nav>

      <article>
        <h1>System Design Fundamentals for Modern Applications</h1>
        <p className="text-muted mb-4">
          Published: [PLACEHOLDER: add date]
        </p>

        <section className="mb-5">
          <h2>Core Principles</h2>
          <p>
            [PLACEHOLDER: Introduction to system design principles, scalability, availability, and performance considerations in modern distributed systems]
          </p>
        </section>

        <section className="mb-5">
          <h2>Scalability Patterns</h2>
          <p>
            [PLACEHOLDER: Discuss horizontal scaling, load balancing, caching strategies, and database sharding techniques I've implemented in production]
          </p>
        </section>

        <section className="mb-5">
          <h2>Real-World Examples</h2>
          <p>
            [PLACEHOLDER: Share examples from my experience at Chargebee, including designing systems for millions of users, handling high traffic during sales events, and implementing microservices architecture]
          </p>
        </section>

        <section className="mb-5">
          <h2>Best Practices</h2>
          <p>
            [PLACEHOLDER: Key best practices for system design, including designing for failure, monitoring and observability, and security considerations]
          </p>
        </section>
      </article>
    </div>
  )
}