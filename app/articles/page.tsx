"use client"

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

const variants = ["primary", "success", "warning", "info", "dark", "danger"]

function randomBadgeClass(): string {
  return `bg-${variants[Math.floor(Math.random() * variants.length)]}`
}

export default function ArticlesPage() {
  const [blogs, setBlogs] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    document.title = "Articles - Puneeth Chanda"
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
            imgAlt: `${article.title} - Puneeth Chanda`,
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
      <div className="container page animate__animated animate__fadeIn" style={{ marginTop: 120 }}>
        <h1>Recent Articles</h1>
        <p>
          Technical notes and insights from my journey in software engineering, AI/ML, and system design.
          Hosted with <FiHeart className="text-danger" /> on{" "}
          <em>
            <a href="https://dev.to/puneeth2001" target="_blank" rel="noopener noreferrer">
              dev.to
            </a>
          </em>
        </p>

      {error && (
        <div className="alert alert-danger d-inline-block">
          Error loading articles, click{" "}
          <a href="https://dev.to/puneeth2001" target="_blank" rel="noopener noreferrer">
            here
          </a>{" "}
          to read them instead.
        </div>
      )}

      {loading && (
        <div className="spinner-border text-primary mt-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {blogs.length > 0 && (
        <div className="row mt-4">
          {blogs.map((blog) => (
            <div className="col-md-6 mb-4" key={blog.id}>
              <div className="card h-100 text-start">
                <img src={blog.image} alt={blog.imgAlt} className="card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">{blog.title}</h4>
                  <div className="mb-2">
                    {blog.tags.map((tag) => (
                      <span key={tag} className={`badge me-1 ${randomBadgeClass()}`}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <hr />
                  <p className="card-text flex-grow-1">{blog.desc}</p>
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary align-self-start"
                  >
                    Read More...
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
