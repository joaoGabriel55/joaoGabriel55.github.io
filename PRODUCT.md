# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Hiring managers and recruiters** looking at Gabriel as a candidate for a role or contract. They skim fast and want to know who he is, what he has built, and how to reach him.
- **The Ruby and wider dev community**: readers of his posts, OSS peers, and conference audiences who arrive from a link to an article, a gem, or a talk.
- **Gabriel himself.** The site is his personal home base, where his writing, projects, and contributions live.

## Product Purpose

The personal site of Gabriel Quaresma, a software engineer at Codeminer42 based in Brazil. It collects his work (projects, open-source contributions, writing) in one place he owns.

A visit counts as a success when the visitor:
1. **gets in touch** (email, LinkedIn) about work,
2. **tries his projects and gems** (Notificare on RubyGems, the Poker Estima and The Invoice demos, the repos), or
3. **follows him** (GitHub, LinkedIn, Instagram).

Blog readership matters because it is part of the home base, but it is not the main success metric.

## Positioning

A **full-stack generalist** (React, TypeScript, Node.js, Ruby on Rails, coding since 2021) who backs the claim with real artifacts: a published Rails engine, working apps, merged contributions to major OSS projects, and technical writing. The ML/LLM-in-Ruby blog topics are current interests, not the site's identity.

He is also a person, not just a CV. Brazilian Jiu-Jitsu, Football Manager, and drawing (@drawquaresma) are real parts of who he is, and the site may show them.

## Operating Context

- Visitors usually arrive from a shared link (a LinkedIn profile, a blog post, a gem or repo page, a talk) and often go straight to a deep link such as `/blog/:slug`.
- Recruiters scan the page in seconds. Community readers stay for long-form technical articles that include code.
- New content is added by committing markdown posts and editing component data, then redeploying.

## Capabilities and Constraints

- **Hosting:** stays a static site on GitHub Pages (`npm run deploy`, gh-pages). There is no server; everything runs client-side.
- **Stack:** Svelte 4, Vite, Tailwind 3, TypeScript, `svelte-spa-router`. Blog posts are markdown files in `src/content/blog/` with front matter (title, date, description, tags), rendered with `marked`.
- **Open-source section:** fetches live repo metadata from the public GitHub API with a one-hour in-memory cache. Unauthenticated rate limits apply, so the section needs a graceful fallback.
- **Themes:** light and dark both stay supported. The site respects `prefers-color-scheme` and also offers a manual toggle that is saved to localStorage.
- **Talks:** a place for conference talks will be added. *Open:* the talk content (titles, events, dates, slides, video) is not in the repo yet and must come from Gabriel.
- **Language:** all current content is in English. No commitment was made either way.

## Brand Commitments

- Name: **Gabriel Quaresma**. Title line: "Software Engineer @Codeminer42 · Brazil".
- Voice, based on the existing copy: first-person, direct, conversational, with a little playful provocation in post titles ("Python Who?", "…Destroys LLMs…").
- Contact: `j.quaresmasantos98@gmail.com`. Social: github.com/joaoGabriel55, linkedin.com/in/gabriel-quaresma-dev, instagram.com/drawquaresma.

## Evidence on Hand

- **Profile photo:** `src/lib/assets/profile.png`.
- **Projects** (`src/components/Projects/+Projects.svelte`, previews in `src/lib/assets/projects/`):
  - Notificare, a Rails engine on ActiveJob::Continuation, published on RubyGems
  - Poker Estima, a live app on fly.dev
  - The Invoice, a live app on Netlify
- **Open-source contributions:** rails/rails, axios/axios, grommet/grommet, forem/forem, marcoroth/herb.
- **Blog posts** in `src/content/blog/`:
  - LLMs + MCPs for database queries (2026-02)
  - Random Forest vs LLM for house prices (2026-03)
  - Rumale and Ruby's ML ecosystem (2026-05)
- **Absent:** testimonials, talk details, a drawing portfolio, metrics such as stars, downloads, or readership. Future work must not invent any of these.

## Product Principles

1. **Show, don't claim.** Every skill is backed by something a visitor can open: a gem, a demo, a merged PR, a post.
2. **Contact is never more than a glance away.** Getting in touch, trying a project, and following are the actions that matter.
3. **A person, not a résumé.** Personal traits (BJJ, Football Manager, drawing) are part of the identity, not trivia to hide.
4. **Built to grow by commit.** New posts, projects, and talks should drop in as data or markdown, with no redesign needed.
5. **Static and dependable.** It works on GitHub Pages with no backend and degrades gracefully when third-party APIs fail.
