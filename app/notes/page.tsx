import Link from "next/link"
import { getAllNotes } from "@/lib/notes"

export const metadata = { title: "Notes — Puneeth Chanda" }

export default function NotesPage() {
  const notes = getAllNotes()

  return (
    <div className="page">
      <div className="page-container">
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <p className="page-kicker">&gt; notes</p>
          <h1>Notes</h1>
          <p className="page-subtitle">
            Technical notes on DSA prep, system design, AI/ML engineering, and software craft.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="card card-pipeline note-card"
            >
              <p className="note-date">{note.date}</p>
              <h2 className="note-title">{note.title}</h2>
              <p className="page-subtitle" style={{ fontSize: "0.9rem", marginBottom: 0 }}>
                {note.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
