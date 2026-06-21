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
          <p className="page-kicker">&gt; articles</p>
          <h1>Recent Articles</h1>
          <p className="page-subtitle">
            Technical notes and insights from my journey in software engineering, AI/ML, and system design.
            Hosted with <FiHeart style={{ color: "var(--color-signal)", verticalAlign: "middle" }} /> on{" "}
            <a href="https://dev.to/puneeth2001" target="_blank" rel="noopener noreferrer" className="contact-link">dev.to</a>
          </p>
        </div>

        {error && (
          <div className="card card-error animate-fade-in" style={{ padding: "var(--space-lg)", marginBottom: "var(--space-xl)" }}>
            <p style={{ fontWeight: 500, marginBottom: "var(--space-xs)" }}>
              Error loading articles
            </p>
            <p className="page-subtitle" style={{ fontSize: "0.9rem" }}>
              Click{" "}
              <a href="https://dev.to/puneeth2001" target="_blank" rel="noopener noreferrer" className="contact-link">here</a>{" "}
              to read them on dev.to instead.
            </p>
          </div>
        )}

        {loading && (
          <div style={{ display: "flex", justifyContent: "center", padding: "var(--space-2xl) 0" }}>
            <div className="loading-spinner" />
          </div>
        )}

        {blogs.length > 0 && (
          <div className="article-grid">
            {blogs.map((blog) => (
              <div key={blog.id} className="card animate-fade-up article-card">
                <img
                  src={blog.image}
                  alt={blog.imgAlt}
                  className="article-card-img"
                  loading="lazy"
                />
                <div className="article-card-body">
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
