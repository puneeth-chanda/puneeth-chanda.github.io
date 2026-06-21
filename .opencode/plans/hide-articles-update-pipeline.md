# Plan: Hide Articles/Notes + Update Pipeline

## Problem Statement
User wants to:
1. Hide "Articles" and "Notes" from the navigation bar (but keep the pages accessible if visited directly)
2. Update the home page pipeline to reflect: Automation → Platform Engineering → AI Engineering
3. Fix the resume timeline based on their resume PDF (PDF unreadable, need user input)

## Proposed Changes

### 1. `components/NavBar.tsx`
- Remove the `Articles` and `Notes` entries from the `navLinks` array.
- Retain: Home, About, Projects, Resume, Contact.

### 2. `app/page.tsx`
- Replace the 4-step pipeline (`Agents → Platforms → Automation → Infra`) with a 3-step pipeline.
- New pipeline: `Automation → Platform Engineering → AI Engineering`.
- Update both the `pipelineSteps` constant and the rendered JSX to match.

### 3. `app/resume/page.tsx`
- **Blocked**: I cannot read PDFs, and no PDF text was provided.
- Current timeline:
  - SWE @ Chargebee — Nov 2024 – Present
  - SDET @ Chargebee — Aug 2022 – Oct 2024
- **Action needed from user**: Provide the correct dates/roles from the resume so I can update this file.

## Verification
- Run `npm run build` (or `next build`) to ensure the app compiles without errors after edits.
- Visually confirm the nav bar no longer shows Articles/Notes.
- Visually confirm the home page pipeline shows the new 3-step flow.
