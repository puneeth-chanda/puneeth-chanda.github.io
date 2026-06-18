# Puneeth Chanda — Personal Portfolio

A minimal, fast personal portfolio built with **Next.js**, **TypeScript**, and **Bootstrap**. Deployed to GitHub Pages.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Bootstrap 5 + Custom CSS
- **Icons**: React Icons
- **Deployment**: GitHub Pages (static export)

## Project Structure

```
app/
  ├── page.tsx           # Home page with hero + pipeline
  ├── about/             # About page + skills
  ├── projects/          # Projects showcase
  ├── resume/            # Resume timeline + download
  ├── contact/           # Contact form
  ├── articles/          # Dev.to articles (hidden from nav)
  ├── notes/             # Technical notes (hidden from nav)
  └── layout.tsx         # Root layout + metadata

components/
  ├── NavBar.tsx         # Navigation + dark mode toggle
  └── SocialLink.tsx     # Social media link component

context/
  └── ThemeContext.tsx   # Dark/light mode context

public/
  ├── resume.pdf         # Downloadable resume
  └── assets/            # Images and other assets
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Deployment

The site auto-deploys to GitHub Pages via GitHub Actions on every push to `master`.

## License

MIT
