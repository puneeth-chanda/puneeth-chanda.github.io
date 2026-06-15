"use client"

import { useEffect } from "react"

export default function NotesPage() {
  useEffect(() => {
    document.title = "Notes - Puneeth Chanda"
  }, [])

  return (
    <div className="container page animate__animated animate__fadeIn" style={{ marginTop: 120 }}>
      <h1>Technical Notes & Writing</h1>
      <p className="lead mb-5">
        Short technical posts covering DSA prep journey, system design notes, and other insights from my software engineering journey.
      </p>

      <div className="row">
        <div className="col-lg-8">
          <article className="mb-5">
            <h2 className="h3 mb-3">
              <a href="/notes/dsa-prep-journey" className="text-decoration-none">
                DSA Prep Journey: My Path to Technical Interviews
              </a>
            </h2>
            <p className="text-muted mb-2">
              <small>Published: [PLACEHOLDER: add date]</small>
            </p>
            <p className="mb-3">
              [PLACEHOLDER: brief summary of DSA prep journey, key algorithms learned, resources used, interview experiences]
            </p>
            <a href="/notes/dsa-prep-journey" className="btn btn-outline-primary btn-sm">
              Read More...
            </a>
          </article>

          <hr className="my-5" />

          <article className="mb-5">
            <h2 className="h3 mb-3">
              <a href="/notes/system-design-basics" className="text-decoration-none">
                System Design Fundamentals for Modern Applications
              </a>
            </h2>
            <p className="text-muted mb-2">
              <small>Published: [PLACEHOLDER: add date]</small>
            </p>
            <p className="mb-3">
              [PLACEHOLDER: overview of system design principles, scalability patterns, and real-world examples from my experience]
            </p>
            <a href="/notes/system-design-basics" className="btn btn-outline-primary btn-sm">
              Read More...
            </a>
          </article>

          <hr className="my-5" />

          <article className="mb-5">
            <h2 className="h3 mb-3">
              <a href="/notes/ai-agent-patterns" className="text-decoration-none">
                Building Production-Ready AI Agent Patterns
              </a>
            </h2>
            <p className="text-muted mb-2">
              <small>Published: [PLACEHOLDER: add date]</small>
            </p>
            <p className="mb-3">
              [PLACEHOLDER: insights on designing scalable AI agents, orchestration patterns, and best practices]
            </p>
            <a href="/notes/ai-agent-patterns" className="btn btn-outline-primary btn-sm">
              Read More...
            </a>
          </article>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h3 className="h5 mb-3">About These Notes</h3>
              <p className="small">
                These are technical notes and reflections from my software engineering journey.
                Topics include algorithm preparation, system design, AI/ML engineering, and career insights.
              </p>
              <p className="small">
                New notes will be added as I continue learning and solving real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}