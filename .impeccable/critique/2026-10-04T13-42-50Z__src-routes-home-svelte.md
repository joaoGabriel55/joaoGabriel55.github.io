---
target: homepage
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
target_identity: "file:C:\\Users\\jquar\\projects\\joaoGabriel55.github.io\\src\\routes\\Home.svelte"
target_fingerprint: "sha256:f59d98abfc1aff8c8f475751f09e311578b1797d36264532857953e4ac03074f"
target_path: "C:\\Users\\jquar\\projects\\joaoGabriel55.github.io\\src\\routes\\Home.svelte"
timestamp: 2026-10-04T13-42-50Z
slug: src-routes-home-svelte
---
# Critique: Homepage (src/routes/Home.svelte)
Method: two separate reviews ran in parallel (A: design review · B: design checker plus browser measurements)

## Design Health Score: 23/32 (Good, 72%). Heuristics 7 and 10 are n/a for a portfolio.
H1 3 · H2 3 · H3 3 · H4 3 · H5 3 · H6 2 · H7 n/a · H8 3 · H9 3 · H10 n/a

## Is the design specific to you?
The visual system is clearly yours (hairlines, thin type, photos that color on hover, the Talk Player). The hero is the standard developer-portfolio layout (round photo, name, role, "N+ years / skilled in", soft-skills paragraph, contact link, social icons), and none of the distinguishing proof appears above the fold: speaking at RubyConf 2026, the Notificare gem, merged PRs in rails/rails.
Checker: 0 problems in the code scan; 6 advisory font-size notes, all in +BlogPost.svelte, which isn't on the homepage.
Browser overlay: 12 flags on desktop, 10 on mobile.
- 4x label above a section heading: a design choice under DESIGN.md's Eyebrow Rule, not counted.
- 4x image zooms on hover: not a real problem.
- 2x all-caps text: not a real problem.
- 2x long lines on desktop (+Overview second paragraph, about 107 characters; talk summary, about 100): real.

## Priority Issues
- [P0] The email is never shown, and "Get in touch" is the weakest element in the hero (14px gray, bare mailto:). The header and footer have no contact. Fix: show the address as text with a Copy button, add a LinkedIn text link, add an Email link to the header, and replace "Crafted with care" with a contact line. (clarify + layout)
- [P1] The hero makes claims instead of showing proof. The intro is 51 words, its second paragraph is generic, and its lines are too long. Fix: cut the second paragraph and lead with one line naming linked work. Copy changes need the owner's approval. (clarify)
- [P1] The hero fills the whole first screen with no work visible. On mobile the social icons end exactly at the bottom edge, BRAZIL wraps, and there's no scroll hint. Fix: drop the full-screen height, tighten spacing, and add a row of credentials. (layout)
- [P2] Talks, the strongest proof, sits fourth. The Open Source grid has a leftover row of 2, and its cards show the repos' stars, not the owner's contribution. Fix: move Talks after the hero and add a contribution line to each card. (layout)
- [P2] The LinkedIn and Instagram icons are colored, and LinkedIn is nearly invisible in dark mode. Fix: single-color icons that follow the text color, with text labels. (polish)

## Persona Red Flags
- Renata (recruiter on desktop): no address to copy; the mailto does nothing on webmail; LinkedIn is invisible in dark mode; the talk is 3+ screens down; the thumbnail's "flipmine.com" vs the hero's "@Codeminer42" is unexplained.
- Casey (phone): photo plus paragraphs fill the first screen, social icons end at the bottom edge, no scroll hint, and the footer has no contact.
- Jordan (first-timer): the header names only Blog; repo stars could read as the owner's stars; the icons have no labels.
- Ruby peer from the talk: the hero leads with React and TypeScript; the talk is fourth; Notificare's description is dense; no Ruby-world profile to follow.

## Minor Observations
- The centered dash link sits visibly off-center.
- Poker Estima's description is ungrammatical; The Invoice reads like marketing copy.
- The section blurbs are filler.
- Project images look washed out on mobile because there's no hover to reveal color.
- The project-title hover underline looks heavier than the rest of the type.

## Questions to Consider
- Which 12 words under the name get you hired?
- Why is the RubyConf thumbnail fourth?
- What if contact stayed at full dark-ink weight everywhere?
