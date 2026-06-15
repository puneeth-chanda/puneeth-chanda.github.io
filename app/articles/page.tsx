"use client"

import type { Metadata } from "next"
import { useEffect, useState } from "react"
import { FiHeart } from "react-icons/fi"

interface Article {
  id: number
  title: string
  desc: string
  image: string
  url: string
  tags: string[]
  imgAlt: string
}

export default function ArticlesPage() {
  const [blogs, setBlogs] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    document.title = "Articles — Puneeth Chanda"
  }, [])

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch("https://dev.to/api/articles?username=puneeth2001")
        const data = await res.json()
        setBlogs(
          data.map((article: any) => ({
            id: article.id,
            title: article.title,
            desc: article.description,
            image: /(hcti.io)/.test(article.image)
              ? "https://picsum.photos/600/400"
              : article.social_image,
            url: article.url,
            tags: article.tag_list,
            imgAlt: `${article.title} — Puneeth Chanda`,
          }))
        )
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, [])

  return (
    <div className="page">
      <div className="page-container">
        {/* Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <p
            className="text-mono"
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--color-text-muted)",
              marginBottom: "var(--space-sm)",
            }}
          >
            &gt; articles
          </p>
          <h1>Recent Articles</h1>
          <p style={{ color: "var(--color-text-muted)", marginTop: "var(--space-sm)" }}>
            Technical notes and insights from my journey in software engineering, AI/ML, and system design.
            Hosted with <FiHeart style={{ color: "var(--color-signal)", verticalAlign: "middle" }} /> on{" "}
            <a
              href="https://dev.to/puneeth2001"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-signal)", textDecoration: "none" }}
            >
              dev.to
            </a>
          </p>
        </div>

        {error && (
          <div
            className="card animate-fade-in"
            style={{
              padding: "var(--space-lg)",
              marginBottom: "var(--space-xl)",
              borderColor: "#DC2626",
            }}
          >
            <p style={{ fontWeight: 500, marginBottom: "var(--space-xs)" }}>
              Error loading articles
            </p>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
              Click{" "}
              <a
                href="https://dev.to/puneeth2001"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-signal)" }}
              >
                here
              </a>{" "}
              to read them on dev.to instead.
            </p>
          </div>
        )}

        {loading && (
          <div style={{ display: "flex", justifyContent: "center", padding: "var(--space-2xl) 0" }}>
            <div
              style={{
                width: 24,
                height: 24,
                border: "2px solid var(--color-border)",
                borderTopColor: "var(--color-signal)",
                borderRadius: "50%",
                animation: "spin 0.6s linear infinite",
              }}
            />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {blogs.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
              gap: "var(--space-lg)",
            }}
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="card animate-fade-up"
                style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                <img
                  src={blog.image}
                  alt={blog.imgAlt}
                  style={{ width: "100%", height: 180, objectFit: "cover" }}
                />
                <div style={{ padding: "var(--space-lg)", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "var(--space-sm)" }}>{blog.title}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "var(--space-md)" }}>
                    {blog.tags.map((tag) => (
                      <span className="skill-tag" key={tag}>#{tag}</span>
                    ))}
                  </div>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", flex: 1, marginBottom: "var(--space-md)" }}>
                    {blog.desc}
                  </p>
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                    style={{ alignSelf: "flex-start" }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
