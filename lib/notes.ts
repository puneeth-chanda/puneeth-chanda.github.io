import fs from "fs"
import path from "path"
import matter from "gray-matter"

export type NoteMeta = {
  slug: string
  title: string
  date: string
  summary: string
}

const notesDir = path.join(process.cwd(), "content", "notes")

export function getAllNotes(): NoteMeta[] {
  const files = fs.readdirSync(notesDir).filter((f) => f.endsWith(".md"))
  const notes = files.map((f) => {
    const slug = f.replace(/\.md$/, "")
    const raw = fs.readFileSync(path.join(notesDir, f), "utf-8")
    const { data } = matter(raw)
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      summary: data.summary as string,
    }
  })
  notes.sort((a, b) => {
    if (a.date === "Coming soon" && b.date !== "Coming soon") return 1
    if (b.date === "Coming soon" && a.date !== "Coming soon") return -1
    return 0
  })
  return notes
}

export function getNote(slug: string): { meta: NoteMeta; content: string } | null {
  const filePath = path.join(notesDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  return {
    meta: {
      slug,
      title: data.title as string,
      date: data.date as string,
      summary: data.summary as string,
    },
    content,
  }
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(notesDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}
