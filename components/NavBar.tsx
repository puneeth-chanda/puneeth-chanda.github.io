"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useTheme } from "@/context/ThemeContext"
import { FiSun, FiMoon } from "react-icons/fi"

export default function NavBar() {
  const { theme, toggle } = useTheme()
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/articles", label: "Articles" },
    { href: "/notes", label: "Notes" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact Me" },
  ]

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand fw-bold">
          &gt; PC.
        </Link>

        <button
          className="navbar-toggler rounded-0"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="nav-collapse"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`} id="nav-collapse">
          <ul className="navbar-nav ms-lg-5">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? "active" : ""}`}
                  onClick={() => setExpanded(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <button
                className="nav-link nav-link-btn"
                onClick={toggle}
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? (
                  <FiSun size={20} className="text-warning" />
                ) : (
                  <FiMoon size={20} />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
