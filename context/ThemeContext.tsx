"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextValue {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({ theme: "light", toggle: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const attr = document.documentElement.getAttribute("data-bs-theme")
    const saved =
      (attr === "dark" || attr === "light" ? attr : null) ||
      (localStorage.getItem("themeMode") as Theme) ||
      "light"
    setTheme(saved)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.setAttribute("data-bs-theme", theme)
    localStorage.setItem("themeMode", theme)
  }, [theme, mounted])

  const toggle = () => setTheme((prev) => (prev === "light" ? "dark" : "light"))

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
