"use client"

import { useEffect } from "react"
import Link from "next/link"

const sections = [
  {
    title: "What the Thinking Trace Contains",
    items: [
      ["Decomposition", "How a complex task gets broken into subproblems"],
      ["Search strategy", "What alternatives were considered and discarded, and why"],
      ["Tool selection", "Why one command or API was chosen over another"],
      ["Error recovery", "What the model did when its first approach failed"],
      ["State tracking", "How the model keeps track of context across a long session"],
    ],
    note: "The thinking content is effectively a reasoning case study written by an expert in real time.",
  },
  {
    title: "1. Reverse-Engineer Debugging Sessions",
    body: "When the model debugs a failure, the thinking trace shows the diagnostic process:",
    items: [
      "What information is gathered first",
      "How hypotheses are formed and tested",
      "When to abandon a line of inquiry",
      "How multiple error signals are correlated",
    ],
    exercise:
      "After a successful debug session, re-read just the thinking content. Write down the diagnostic steps as a reusable checklist for that class of problem.",
  },
  {
    title: "2. Study Tool-Chaining Patterns",
    body: "The thinking content reveals how tools compose:",
    items: [
      "Why grep is used before read (narrow scope first)",
      "When glob vs grep is preferred",
      "How results from one tool feed into the next",
    ],
    exercise:
      "Identify three recurring tool sequences in the thinking trace. Generalize them into recipes.",
  },
  {
    title: "3. Learn API and Library Idioms",
    body: "The model often writes code it wasn't explicitly trained on. The thinking trace shows which docs it recalls or references, how it adapts known patterns to an unfamiliar API, and where it checks for conventions before writing code.",
    note: "This is especially valuable for new frameworks — you see the model's mental model of the framework forming in real time.",
  },
  {
    title: "4. Understand Trade-off Reasoning",
    body: "When the model chooses between approaches, the thinking content lays out the pros and cons considered, which constraints drove the final decision, and what was sacrificed.",
    note: "This is the equivalent of a senior engineer verbalizing their design thinking.",
  },
  {
    title: "5. Harvest System Prompts and Heuristics",
    body: "The model's thinking often internalizes patterns from system prompts. By watching what the model prioritizes in its reasoning, you can infer what safety checks are being applied, what coding conventions are being followed, and how output formatting rules are interpreted.",
  },
]

export default function ThinkingForLearningPage() {
  useEffect(() => {
    document.title = "Learning from Thinking — Puneeth Chanda"
  }, [])

  return (
    <div className="page">
      <div className="page-container-narrow">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <ol className="breadcrumb-list">
            <li>
              <Link href="/notes" className="breadcrumb-link">
                notes
              </Link>
            </li>
            <li className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current">thinking-for-learning</li>
          </ol>
        </nav>

        <article>
          <h1 style={{ marginBottom: "var(--space-md)" }}>
            Learning from Thinking: How to Extract Knowledge from Model Reasoning
          </h1>

          <p className="page-subtitle" style={{ marginBottom: "var(--space-2xl)" }}>
            Agent harnesses like Cursor, Claude Code, and opencode increasingly expose the
            model&apos;s internal reasoning. This trace is a rich but underused learning resource — it
            shows <em>how</em> the model arrives at conclusions, not just the conclusions themselves.
          </p>

          {sections.map((section, i) => (
            <div key={i} style={{ marginBottom: "var(--space-2xl)" }}>
              <h2>{section.title}</h2>
              {section.body && <p>{section.body}</p>}
              {section.items && Array.isArray(section.items[0]) ? (
                <ul>
                  {(section.items as string[][]).map(([term, desc], j) => (
                    <li key={j}>
                      <strong>{term}:</strong> {desc}
                    </li>
                  ))}
                </ul>
              ) : section.items ? (
                <ul>
                  {(section.items as string[]).map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.exercise && (
                <div
                  className="card"
                  style={{
                    marginTop: "var(--space-md)",
                    borderLeft: "3px solid var(--accent)",
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>Exercise:</strong> {section.exercise}
                  </p>
                </div>
              )}
              {section.note && (
                <p
                  style={{
                    marginTop: "var(--space-md)",
                    fontStyle: "italic",
                    color: "var(--text-secondary)",
                  }}
                >
                  {section.note}
                </p>
              )}
            </div>
          ))}

          {/* Meta-Learning Section */}
          <div style={{ marginBottom: "var(--space-2xl)" }}>
            <h2>Meta-Learning: Train Your Own Thinking</h2>
            <p>
              The format of the model&apos;s thinking can be adopted as a{" "}
              <strong>personal reasoning discipline</strong>:
            </p>
            <ol>
              <li>
                Before starting a task, write down 1-3 sentences about your approach (the model does
                this implicitly)
              </li>
              <li>When stuck, explicitly enumerate alternatives you&apos;re considering</li>
              <li>
                After a mistake, write a one-line postmortem — the model often does this in
                subsequent thinking traces
              </li>
            </ol>
            <p>
              This mirrors the &ldquo;rubber duck debugging&rdquo; concept but formalizes the
              metacognition.
            </p>
          </div>

          {/* Caveats Section */}
          <div style={{ marginBottom: "var(--space-2xl)" }}>
            <h2>Caveats</h2>
            <ul>
              <li>
                <strong>Not all thinking is correct:</strong> The model can reason itself into wrong
                conclusions. The trace shows process, not truth.
              </li>
              <li>
                <strong>Hindsight bias:</strong> The thinking trace is written before the answer, but
                the model may rationalize choices post-hoc.
              </li>
              <li>
                <strong>Only as good as the model:</strong> A weak model produces weak reasoning.
                Focus on traces from capable models (Claude 3.5+, GPT-4o, o1, etc.).
              </li>
              <li>
                <strong>Verbosity &#8800; quality:</strong> Long thinking traces can indicate
                uncertainty, not thoroughness. Short, crisp reasoning often beats long meandering
                traces.
              </li>
            </ul>
          </div>

          {/* Quick Reference Table */}
          <div style={{ marginBottom: "var(--space-2xl)" }}>
            <h2>Quick Reference: What to Look For</h2>
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.9rem",
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: "2px solid var(--border)",
                      textAlign: "left",
                    }}
                  >
                    <th style={{ padding: "var(--space-sm) var(--space-md)", fontWeight: 600 }}>
                      Signal
                    </th>
                    <th style={{ padding: "var(--space-sm) var(--space-md)", fontWeight: 600 }}>
                      What It Teaches You
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["First tool used", "Default diagnostic entry point"],
                    ["Abandoned approaches", "Signs that rule out a path"],
                    ["Repeated tool calls", "Patterns of iteration/refinement"],
                    ["Explicit constraints remembered", "What context the model prioritizes"],
                    ["Self-corrections", "Recovery patterns"],
                    ['"Let me check" moments', "Verification habits"],
                  ].map(([signal, lesson], i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      <td
                        style={{
                          padding: "var(--space-sm) var(--space-md)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.85rem",
                        }}
                      >
                        {signal}
                      </td>
                      <td style={{ padding: "var(--space-sm) var(--space-md)" }}>{lesson}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Link href="/notes" className="btn btn-outline-primary">
            Back to Notes
          </Link>
        </article>
      </div>
    </div>
  )
}
