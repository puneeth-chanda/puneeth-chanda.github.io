import Link from "next/link"

export default function NotFound() {
  return (
    <div className="page">
      <div className="page-container" style={{ textAlign: "center", paddingTop: "12vh", paddingBottom: "8vh" }}>
        <p
          className="text-mono"
          style={{
            fontSize: "clamp(4rem, 10vw, 8rem)",
            fontWeight: 700,
            color: "var(--color-border)",
            lineHeight: 1,
            marginBottom: "var(--space-md)",
          }}
        >
          404
        </p>
        <h1 style={{ marginBottom: "var(--space-md)" }}>Page not found</h1>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-xl)", maxWidth: 420, marginInline: "auto" }}>
          The page you&apos;re looking for doesn&apos; exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
