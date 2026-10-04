---
target: homepage
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\jquar\\projects\\joaoGabriel55.github.io\\src\\routes\\Home.svelte"
target_fingerprint: "sha256:4a0b9fc6cbfa9ccca162660c52f1d9f50371d8904ab46d311aa24c2bb2bb5215"
target_path: "C:\\Users\\jquar\\projects\\joaoGabriel55.github.io\\src\\routes\\Home.svelte"
timestamp: 2026-10-04T13-58-40Z
slug: src-routes-home-svelte
---
# Critique: Homepage (src/routes/Home.svelte), second run
Method: two separate reviews ran in parallel (A: design review, blind to the last run · B: design checker plus browser measurements)

## Design Health Score: 22/32 (Good, 69%). Heuristics 7 and 10 are n/a.
H1 3 · H2 3 · H3 3 · H4 2 · H5 3 · H6 2 · H7 n/a · H8 3 · H9 3 · H10 n/a
The previous run scored 23/32 with a different blind reviewer. Last run's P0 (contact) is now rated excellent. Points were lost to new consistency and affordance issues.

## Is the design specific to you?
The content is authored (credentials row, on-stage RubyConf photo, MineAtelier), but the skeleton is the standard developer-portfolio shape.
Checker: 0 problems in the code scan; 6 advisories, all in +BlogPost.svelte (not on the homepage).
Browser: 7 kinds of issue on desktop, 6 on mobile.
- Real: the Talks summary runs about 100 characters per line at 1440.
- 4x label above a section heading: deliberate under DESIGN.md's Eyebrow Rule.
- 5x image zooms on hover: low severity.
- All-caps role line: a label, not body text.
Measurements: all hero elements are on the first screen at 1440 and 375; #talks starts 11px above the fold on desktop and 3px below on mobile; no horizontal overflow; lowest light-theme contrast is 7.8:1.

## Priority Issues
- [P1] Live demos are hidden behind "View Source Code" (Projects). Fix: two text links per project, live app or RubyGems first, then Source.
- [P1] The credentials row is 14px, shows no link affordance at rest, and mixes in-page jumps with an external link. Fix: body size, a faint gray underline at rest, and an external marker or consistent behavior.
- [P2] The OSS cards show counts, not contributions; Forem (11) is buried; the mobile stack is long. Fix: sort by contributions, name one real PR per repo, use a compact list on mobile.
- [P2] Filler section blurbs (OSS, Blog), and the Talks summary is about 100 characters per line. Fix: factual blurbs in first person; narrow the Talks text column to about 65 characters.
- [P3] The talk is duplicated as a blog card with nothing linking them, and blog cards have no descriptions. Fix: front-matter descriptions and a "Companion to my RubyConf talk" tag.

## Persona Red Flags
- Renata (recruiter): the credentials look like plain text; Projects starts about 1.9 screens down; no demo link.
- Casey (phone): the credentials don't look tappable; the page is 7,137px; the OSS stack repeats.
- Jordan (first-timer): "@Codeminer42" and "SAAS" are jargon; nothing says what Gabriel is open to until the footer.
- Ruby peer: Notificare's visible link is the source, not RubyGems; contributions are reduced to counts.

## Minor Observations
- Header Contact overshoots the hero email.
- Projects has no blurb.
- Star counts aren't visibly labelled as repo stars.
- The MineAtelier mockup looks like a stock image.
- "View all posts" is centered.
- DESIGN.md still mentions the removed scroll hint.

## Questions to Consider
- Is the positioning really "Ruby speaker and builder"?
- Should Gabriel's own work be the one thing in color at rest?
- Should a drawing from @drawquaresma appear on the site?
