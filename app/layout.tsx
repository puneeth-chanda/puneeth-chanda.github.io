import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/context/ThemeContext"
import NavBar from "@/components/NavBar"

export const metadata: Metadata = {
  title: "Puneeth Chanda",
  description: "Software Engineer at Chargebee building AI agents, developer tooling, and automation infrastructure. 3+ years building scalable SaaS products and distributed systems.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("themeMode")||"light";document.documentElement.setAttribute("data-bs-theme",t)}catch(e){}})();`,
          }}
        />
        {/* Cloudflare Web Analytics */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "94263fc1042644829242c013f3c62b5b"}'
        />
        {/* End Cloudflare Web Analytics */}
      </head>
      <body>
        <ThemeProvider>
          <NavBar />
          <main id="app">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
