---
name: Puneeth Chanda Portfolio
description: Minimal, technical, craft-focused personal portfolio
colors:
  primary: "#2563EB"
  primary-hover: "#1D4ED8"
  secondary: "#0D9488"
  tertiary: "#1A7F4E"
  warm-paper: "#FAFAF7"
  deep-ink: "#111111"
  warm-steel: "#E6E3DA"
  warm-sage: "#6B6B6B"
  clean-white: "#FFFFFF"
  ink-dark: "#ECECEC"
  signal-dark: "#60A5FA"
  surface-dark: "#111113"
  card-dark: "#15151A"
  border-dark: "#262629"
  muted-dark: "#9CA3AF"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5.5rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.06em"
    textTransform: "uppercase"
rounded:
  sm: "3px"
  md: "4px"
  lg: "6px"
  xl: "14px"
  full: "999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  "2xl": "4rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "0.6rem 1.4rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "0.6rem 1.4rem"
  button-pill:
    backgroundColor: "{colors.deep-ink}"
    textColor: "{colors.warm-paper}"
    rounded: "{rounded.full}"
    padding: "12px 22px"
  currently-card:
    backgroundColor: "{colors.clean-white}"
    rounded: "{rounded.xl}"
    padding: "24px"
  input:
    backgroundColor: "{colors.warm-paper}"
    rounded: "{rounded.md}"
    padding: "0.65rem 0.9rem"
  nav-link:
    textColor: "{colors.warm-sage}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
---

# Design System: Puneeth Chanda Portfolio

## 1. Overview

**Creative North Star: "The Quiet Studio"**

A restrained, intentional workspace where design serves its owner and nothing is decorative for its own sake. The Quiet Studio doesn't shout — it presents. Every spacing decision, type choice, and color assignment earns its place through utility and proportion.

This system explicitly rejects generic SaaS portfolio clichés: no gradient text, no glassmorphism panels, no hero-metric counters, no aggressive roundness. It favors warm-paper backgrounds, precise mono labels, and tonal layering over shadows. The personality is technical but not cold, minimal but not sparse — the kind of interface an engineer would design for themselves after ten years of looking at bad ones.

**Key Characteristics:**
- Warm, paper-toned backgrounds with cool blue signal color for interactivity
- Tonal layering for depth (borders and background shifts, never shadows at rest)
- Monospaced labels and uppercase section headers as a recurring texture
- Refined but restrained interactions — measured spacing, no decorative motion
- Dark mode as a first-class environment, not an afterthought

## 2. Colors

A warm-technical palette: paper-toned neutrals provide a soft, readable ground; a measured blue signal adds directionality without competing; teal and pine expand the palette for semantic states without introducing noise.

### Primary
- **Calm Blue** (#2563EB / oklch(0.55 0.23 265)): The sole interactive accent. Used for links, focus rings, primary buttons, active pipeline dots. Never decorative.

### Secondary
- **Faded Teal** (#0D9488 / oklch(0.56 0.12 190)): A quieter secondary accent. Used on featured card borders, as an alternative pipeline state. Secondary to the blue, never equal.

### Tertiary
- **Pine** (#1A7F4E / oklch(0.52 0.14 155)): Semantic green. Reserved for availability dot, active indicators, success states. Not a general accent.

### Neutral
- **Warm Paper** (#FAFAF7 / oklch(0.96 0.005 80)): The body background. A barely-tinted near-white with a trace of warmth. One step above pure white.
- **Deep Ink** (#111111 / oklch(0.12 0.005 250)): Body text. Close to true black with a slight cool lean.
- **Warm Steel** (#E6E3DA / oklch(0.88 0.008 80)): Borders, dividers, and structural lines.
- **Warm Sage** (#6B6B6B / oklch(0.48 0.015 95)): Muted body text, secondary labels, placeholders.
- **Clean White** (#FFFFFF): Card surfaces in light mode.

**The Singular Accent Rule.** Calm Blue is the only interactive accent. It appears on ≤5% of any given screen. Its rarity is the point — when the user sees blue, they know it's actionable.

## 3. Typography

**Display Font:** Space Grotesk (sans-serif)
**Body Font:** Inter (sans-serif)
**Label/Mono Font:** JetBrains Mono (monospace)

**Character:** A rational pairing of two geometric-leaning sans-serifs with a monospace for texture. Space Grotesk brings personality with its slightly condensed proportions and squared curves; Inter provides unobtrusive readability at body sizes. JetBrains Mono adds technical texture at small sizes — labels, buttons, section headers, skill tags.

### Hierarchy
- **Display** (500, clamp(2.5rem, 6vw, 5.5rem), 1, -0.035em letter-spacing): Hero headline only. Long-form name on the home page. The largest type in the system and the only use of this scale.
- **Headline** (700, clamp(1.5rem, 3vw, 2rem), 1.15, -0.02em letter-spacing): Page titles (About, Projects, Resume). Section-level headings.
- **Title** (700, clamp(1.25rem, 2.5vw, 1.5rem), 1.15, -0.02em letter-spacing): Card titles, article headings, resume section headers.
- **Body** (400, 1rem / 16px, 1.7): Paragraphs, descriptions, long-form content. Max line length 65–75ch.
- **Label** (500, 0.75–0.9rem, 1, 0.06–0.12em letter-spacing, uppercase): Navigation links, button text, section eyebrows, form labels, skill tags, timeline entries.

**The Mono Texture Rule.** JetBrains Mono at uppercase with tracking is the system's texture layer — used on labels, section dividers, pipeline steps, skill tags, and form labels. This is not an aesthetic choice; it creates a rhythm of technical precision that runs through every page.

## 4. Elevation

The system uses **tonal layering** exclusively. Depth is conveyed through background color shifts and borders, not through drop shadows.

- Cards sit on Clean White (#FFFFFF) against Warm Paper (#FAFAF7); the slight value shift is enough separation.
- In dark mode, cards use card-dark (#15151A) against surface-dark (#111113).
- Borders (Warm Steel, 1px) define container edges when background shift alone isn't enough.
- Hover states raise the border to Deep Ink or shift to the interactive border treatment — never a shadow.

**The Flat-By-Default Rule.** No shadows at rest. Zero. Hover states use border transitions or background shifts, never `box-shadow`. A shadow on a resting surface is the system's way of saying "something is wrong."

## 5. Components

### Buttons
Two vocabularies with distinct roles:
- **Standard buttons** (4px radius): Monospaced, uppercase, small. Used for form actions and secondary CTAs.
  - Primary: Calm Blue background, white text. Hover shifts color-mix(85%).
  - Outline: Calm Blue stroke, transparent fill. Hover fills with Calm Blue.
- **Pill buttons** (999px radius): Inter, sentence-case, comfortable padding. Used only on the hero and primary content CTAs.
  - Solid: Deep Ink background, Warm Paper text.
  - Outline: 1px border (Warm Steel), transparent fill. Hover border → Deep Ink.

### Cards
- **Corner Style:** 6px radius for standard cards (project cards, resume cards).
- **Currently Cards:** 14px radius for the home-page "Currently" grid — distinctive, not default.
- **Background:** Clean White in light mode, card-dark in dark mode. 1px Warm Steel border.
- **Shadow Strategy:** None at rest. Hover shifts border to Deep Ink.
- **Internal Padding:** 16–24px depending on content density.

### Inputs / Fields
- **Style:** 1px Warm Steel border, 4px radius, Warm Paper background.
- **Focus:** 3px Calm Blue ring at 15% opacity, border shifts to Calm Blue.
- **Typography:** Body font at 0.95rem.

### Navigation
- **Structure:** Bootstrap navbar, fixed-top, 64px height. Bottom 1px Warm Steel border.
- **Typography:** Inter 0.9rem, sentence case, Warm Sage color. Active/hover → Deep Ink.
- **Brand:** "puneeth chanda" in Inter 600 weight, with a Pine dot as the left anchor.
- **Mobile:** Bootstrap collapse with toggler icon.

### Pipeline (Signature Component)
A horizontal step indicator used on the home page. Steps rendered as 10px dots along a 2px steel line. Active steps use Calm Blue fill; completed steps use Faded Teal. Each step carries a JetBrains Mono label (0.7rem, uppercase, tracked). Steps animate in with staggered `.animate-dot` on page load.

## 6. Do's and Don'ts

### Do:
- **Do** use Calm Blue sparingly — it signals interactivity. If more than 5% of a screen is blue, find a neutral alternative.
- **Do** prefer tonal layering over shadows. Card on background is enough separation.
- **Do** use JetBrains Mono uppercase labels as texture on every page — section dividers, pipeline steps, skill tags, form labels.
- **Do** keep body text at Deep Ink (#111111) or Warm Sage (#6B6B6B) — never light gray that fails contrast.
- **Do** use `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs.
- **Do** respect reduced motion — every animation needs an alternative that preserves content visibility.
- **Do** cap display type at 5.5rem (88px) and letter-spacing at ≥ -0.035em so letters don't touch.

### Don't:
- **Don't** use gradient text (`background-clip: text` with gradients). Emphasis through weight or size only.
- **Don't** apply glassmorphism (frosted glass, backdrop blur as decorative effect).
- **Don't** use hero-metric templates (big number, small label, supporting stats, gradient accent).
- **Don't** use the eyebrow-above-every-section pattern (small uppercase "ABOUT" / "PROCESS" / "PRICING" above each heading). At most one named kicker per page.
- **Don't** apply border-left/right as colored accent stripes on cards.
- **Don't** add shadows to resting surfaces.
- **Don't** use border-radius >16px on cards or sections. (14px for currently cards is the maximum; pills are the exception.)
- **Don't** animate layout properties. Use transform and opacity only.
- **Don't** gate content visibility behind animations. Content must be visible without JS or motion.
- **Don't** pair fonts that are similar but not identical (two geometric sans-serifs). The Space Grotesk + Inter + JetBrains Mono trio is intentional and locked.
