import type { ReactNode } from "react"

export default function SocialLink({
  to,
  label,
  children,
}: {
  to: string
  label: string
  children: ReactNode
}) {
  if (!to) return null
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {children}
    </a>
  )
}
