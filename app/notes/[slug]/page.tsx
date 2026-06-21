import Link from "next/link"
import { notFound } from "next/navigation"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getNote, getAllSlugs } from "@/lib/notes"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params
  const note = getNote(slug)
  if (!note) notFound()

  return (
    <div className="page">
      <div className="page-container-narrow">
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <ol className="breadcrumb-list">
            <li><Link href="/notes" className="breadcrumb-link">notes</Link></li>
            <li className="breadcrumb-sep">/</li>
            <li className="breadcrumb-current">{note.meta.slug}</li>
          </ol>
        </nav>

        <article>
          <h1 style={{ marginBottom: "var(--space-md)" }}>{note.meta.title}</h1>

          <div className="markdown-content">
            <Markdown remarkPlugins={[remarkGfm]}>
              {note.content}
            </Markdown>
          </div>

          <div style={{ marginTop: "var(--space-2xl)" }}>
            <Link href="/notes" className="btn btn-outline-primary">
              Back to Notes
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
