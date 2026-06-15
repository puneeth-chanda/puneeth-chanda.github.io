import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <img
        src="/assets/404.png"
        alt="404 error page with sad character sitting and saying page not found"
        className="img-fluid"
        style={{ width: "50%", height: "50%" }}
      />
      <h1 className="text-warning mt-4">Oops! Page not found</h1>
      <p>We couldn&apos;t find the page you were looking for.</p>
      <p>Something went wrong. Please try again later or go to the homepage.</p>
      <Link href="/" className="btn btn-primary">
        Home
      </Link>
    </div>
  )
}
