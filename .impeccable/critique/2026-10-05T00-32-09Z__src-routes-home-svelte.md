---
target: critique (home + blog)
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\jquar\\projects\\joaoGabriel55.github.io\\src\\routes\\Home.svelte"
target_fingerprint: "sha256:f86610ca31ea0ede81b2ba9d994e83d7e661b20e841fe41e45ce362e236d4404"
target_path: "C:\\Users\\jquar\\projects\\joaoGabriel55.github.io\\src\\routes\\Home.svelte"
timestamp: 2026-10-05T00-32-09Z
slug: src-routes-home-svelte
---
Method: dual-agent (A: design review · B: detector). No live browser: dev server stopped for low memory; A used .impeccable/review screenshots, B ran static source scan only.

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | No home-section active state in nav while scrolling |
| 2 | Match System / Real World | 2 | Football jargon (2-1-2, 55, spell, POS); title mismatch Software Engineer vs Frontend Developer |
| 3 | User Control and Freedom | 2 | Ticker loops forever, hover-only pause (WCAG 2.2.2) |
| 4 | Consistency and Standards | 2 | "Teammates" vs classmates; 3-up card grid vs DESIGN.md; two "Highlights" landmarks |
| 5 | Error Prevention | 3 | Static; OSS API fallback |
| 6 | Recognition Rather Than Recall | 3 | Explicit labels, Gantt legend |
| 7 | Flexibility and Efficiency | n/a | Portfolio, no repeat workflows |
| 8 | Aesthetic and Minimalist Design | 3 | ~10 screens; ticker duplicates hero proof |
| 9 | Error Recovery | 3 | Little can fail |
| 10 | Help and Documentation | n/a | No tasks need help |
| Total | | 21/32 | Acceptable (66%) |

## Design Specificity
Half authored: hero board, ticker, league table, turf footer are his; Experience, Projects 3-up grid, and 7x-repeated SectionHead are template-shaped. Missing FM player-profile status panel.
Detector: 18 advisory design-system-font-size; 11 real drift (blog prose heading ramp +BlogPost.svelte:187-211; caps labels split 0.6875/0.75/0.8125/0.9375rem), 2 DESIGN.md token gaps, 5 false/partial (SVG user units, mobile steps).

## Priority Issues
- [P1] Title contradicts positioning (hero Full-stack vs Experience Frontend Developer) — /impeccable clarify
- [P1] Section order buries proof (Experience before Projects/Talk/OSS) — /impeccable layout
- [P1] Ticker unpausable by keyboard/touch and duplicates hero — /impeccable harden
- [P2] Metaphor costs clarity (spell, 2-1-2, 55) and misses status/"open to what" — /impeccable clarify
- [P2] Testimonials over-weighted, last proof before close, "Tmj" untranslated — /impeccable quieter

## Persona Red Flags
Jordan: jargon, two titles, vague footer. Riley: ticker, duplicate landmark labels, hand-maintained dates leave no current client. Casey: email/proof 1.5 screens down, board labels ~8px, post facts fill first screen. Hiring manager: biggest object restates stack; MineAtelier absent from hero; no level/availability. Deep-link reader: no byline on posts.

## Minor Observations
Notificare thumb breaks palette; Poker Estima/Invoice screenshots unreadable; 5+ years vs 2019 start; move board caption into board header; prose heading sizes off-ramp.

## Questions
Should the board carry proof instead of stack? Where is the FM status/transfer line? Would one current lead quote beat the classmate section?
