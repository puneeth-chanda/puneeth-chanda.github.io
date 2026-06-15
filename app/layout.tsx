import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/context/ThemeContext"
import NavBar from "@/components/NavBar"

export const metadata: Metadata = {
  title: "Puneeth Chanda",
  description: "Puneeth Chanda — Software Engineer at Chargebee building AI-powered onboarding tools, automation platforms, and intelligent agent solutions.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("themeMode")||"light";document.documentElement.setAttribute("data-bs-theme",t)}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <NavBar />
          <main id="app" style={{ marginTop: 100 }}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
