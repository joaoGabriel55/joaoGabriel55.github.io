---
name: Gabriel Quaresma
description: A coach's tactics board. Chalk-white ground, one deep turf green, condensed heavy kit lettering, chalk lines that draw themselves.
colors:
  page: "#f3f5f1"
  page-dark: "#0b110e"
  raised: "#eaeee7"
  raised-dark: "#121a16"
  lifted: "#e0e6dd"
  lifted-dark: "#18231d"
  ink: "#0f1a14"
  ink-dark: "#eef3ec"
  text: "#2b3630"
  text-dark: "#c6d0c9"
  quiet: "#55625a"
  quiet-dark: "#8f9c94"
  line: "#cfd7cd"
  line-dark: "#223029"
  line-strong: "#93a198"
  line-strong-dark: "#3e4e45"
  turf: "#0e5a3c"
  turf-dark: "#134a33"
  turf-deep: "#0a4630"
  turf-deep-dark: "#0f3d2a"
  turf-ink: "#0e5a3c"
  turf-ink-dark: "#6fcb9b"
  chalk: "#f2f6ef"
  chalk-dark: "#eef3ec"
  chalk-quiet: "#c9dccf"
  chalk-quiet-dark: "#b9cfc1"
  focus: "#0e5a3c"
  focus-dark: "#6fcb9b"
  pre-bg: "#fafbf9"
  pre-bg-dark: "#101814"
  code-bg: "#e3e9e0"
  code-bg-dark: "#1b2621"
  code-text: "#1f2a24"
  code-text-dark: "#e1e8e3"
  code-keyword: "#8b2f6b"
  code-keyword-dark: "#d49ac4"
  code-string: "#2f6b3a"
  code-string-dark: "#9ccc8c"
  code-number: "#a14b12"
  code-number-dark: "#e3a46c"
  code-title: "#1f5f9e"
  code-title-dark: "#8fb8e6"
  code-type: "#7a5300"
  code-type-dark: "#d9b86a"
  code-symbol: "#0f6b6b"
  code-symbol-dark: "#7cc7c0"
  code-comment: "#5f6b64"
  code-comment-dark: "#8f9c94"
typography:
  display:
    fontFamily: "'Archivo Variable', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 9vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 70"
  headline:
    fontFamily: "'Archivo Variable', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 70"
  title:
    fontFamily: "'Archivo Variable', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 5.2vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 78"
  title-row:
    fontFamily: "'Archivo Variable', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 85"
  lede:
    fontFamily: "'Archivo Variable', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "'Archivo Variable', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.75
    fontFeature: "'ss01'"
  label:
    fontFamily: "'Archivo Variable', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 80"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.875rem"
    lineHeight: 1.65
rounded:
  sm: "2px"
  code: "3px"
  md: "6px"
  full: "9999px"
spacing:
  gutter: "20px"
  gutter-md: "40px"
  header: "64px"
  hit: "44px"
  head-gap: "40px"
  head-gap-md: "56px"
  section: "96px"
  section-md: "128px"
components:
  button-turf:
    backgroundColor: "{colors.turf}"
    textColor: "{colors.chalk}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "44px"
  button-turf-hover:
    backgroundColor: "{colors.turf-deep}"
    textColor: "{colors.chalk}"
  cta-link:
    textColor: "{colors.ink}"
  cta-quiet:
    textColor: "{colors.quiet}"
  cta-quiet-hover:
    textColor: "{colors.ink}"
  copy-chip:
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "32px"
  nav-link:
    textColor: "{colors.quiet}"
    typography: "{typography.label}"
    padding: "0 12px"
    height: "44px"
  nav-link-active:
    textColor: "{colors.ink}"
  crest:
    backgroundColor: "{colors.turf}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.full}"
    size: "36px"
  tactics-board:
    backgroundColor: "{colors.turf}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.md}"
  perimeter-band:
    backgroundColor: "{colors.turf}"
    textColor: "{colors.chalk}"
    typography: "{typography.headline}"
    padding: "16px 0"
  turf-field:
    backgroundColor: "{colors.turf}"
    textColor: "{colors.chalk}"
    padding: "128px 40px"
  media-frame:
    backgroundColor: "{colors.raised}"
    rounded: "{rounded.md}"
  code-block:
    backgroundColor: "{colors.pre-bg}"
    textColor: "{colors.code-text}"
    typography: "{typography.mono}"
    padding: "20px 24px"
  code-inline:
    backgroundColor: "{colors.code-bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.code}"
    padding: "2px 6px"
---

# Design System: Gabriel Quaresma

## Overview

**Creative North Star: "The Tactics Board"**

The site is a coach's tactics board and a Football Manager player profile. The ground is chalk-white paper with a faint green cast; on it sit deep turf-green fields, and on those fields everything is chalk: 2–4px rounded lines, round magnet tokens, condensed lettering. Turf is the single club colour. Every neutral, from page to hairline, is tinted toward it, so even the "grey" surfaces belong to the same pitch.

Type does the shouting. Section heads and the name are set like kit lettering: Archivo at 70% width, weight 800, uppercase, packed to a 0.86–0.9 line height. Everything else is calm: a plain sentence-case body, small condensed caps for labels and table heads, and a 68ch reading column on posts where the world shows up only in headings, links, and code. Density is generous: sections breathe on 96–128px vertical padding, and each one opens on a heavy 2px ink rule under its head.

Motion is scarce on purpose. The authored moment is the chalk play on the hero board: lines draw, magnets drop, the ball runs Rails, TypeScript, React, into goal. Everything else is quiet: the perimeter band crawls slowly, photographs wipe up into place, numbers in the league table count up once. Text sections do not fade in; they are simply there.

**Key Characteristics:**
- One club colour (turf green) on a green-tinted chalk ground; paired light and dark values for every role.
- Condensed heavy uppercase kit lettering for display and section heads only.
- Turf fields (board, perimeter band, footer) are the only filled colour surfaces, and they always carry chalk.
- Flat: no shadows anywhere. Depth comes from rules, tonal surface steps, and turf fields.
- Small, square-leaning corners (2px controls, 6px frames); round only for magnets, crests, and avatars.
- One authored motion moment (the chalk play); everything else is restrained and honours reduced motion.

## Colors

One club colour and a set of pitch-tinted neutrals; every role has a paired light and dark value, swapped on `:root.dark`.

### Primary
- **Club Turf** (`turf`, dark `turf-dark`): The only filled colour surface. Tactics board, perimeter band, footer contact field, the primary button, the header crest, testimonial monograms, and text selection. Always carries chalk on top.
- **Deep Turf** (`turf-deep`): Hover state of turf buttons and the perimeter band's edge rules.
- **Turf Ink** (`turf-ink`, dark `turf-ink-dark`): Turf used as a stroke or text on the page ground: CTA underlines, active nav underline, prose link underlines, the league-table PR counts. In dark it lifts to a bright pitch green (`#6fcb9b`) because the field green would vanish on near-black.
- **Chalk** (`chalk`) and **Quiet Chalk** (`chalk-quiet`): Lines, numbers, and text on turf. Quiet chalk is for secondary labels on turf (board header, footer meta).

### Neutral
- **Chalk Ground** (`page`): Page background; warm-green paper in light, near-black pitch at night in dark.
- **Raised** / **Lifted** (`raised`, `lifted`): Two tonal steps above the page for media frames, row hover, and avatar placeholders.
- **Ink** (`ink`): Headings, kit lettering, primary text links, and the 2px section rule.
- **Text** (`text`): Body copy.
- **Quiet** (`quiet`): Meta, captions, secondary nav, table heads.
- **Line** / **Strong Line** (`line`, `line-strong`): Hairline dividers and borders; strong line for quiet-CTA underlines, outline controls, and blockquote rules.
- **Focus** (`focus`): 2px focus outline, turf in light, bright turf in dark.

### Code
- **Colored pencil tokens** (`code-*`): Muted keyword plum, string green, number rust, title blue, type ochre, symbol teal, comment grey, each at least 4.8:1 on `pre-bg`. They live only inside code blocks on posts; they are the one place hues other than turf appear.

### Named Rules
**The One Club Colour Rule.** Turf green is the only hue in the interface. Code highlighting is the sole exception, and it stays inside code blocks.

**The Chalk On Turf Rule.** A turf surface always carries chalk (lines, lettering, magnets) and never body-size ink text. If something sits on turf, it is chalk or quiet chalk.

**The Turf Ink Rule.** On the page ground, turf appears as a line or a number (underlines, counts, marks), never as a fill behind paragraph text.

## Typography

**Display Font:** Archivo Variable (with system-ui, Segoe UI, Roboto, Arial fallback), loaded with its width axis.
**Body Font:** Archivo Variable at normal width, `ss01` on.
**Label/Mono Font:** Archivo condensed caps for labels; ui-monospace stack for code.

**Character:** One family worked across its width axis: compressed and heavy like shirt numbers at the top, open and plain for reading. The contrast comes from width and weight, not from a second face.

### Hierarchy
- **Display** (800, clamp(3.5rem, 9vw, 6rem), 0.86, 70% width, uppercase): The name in the hero, the closing contact line on the footer field (clamp up to 6rem), and level-1 page heads (up to 7rem).
- **Headline** (800, clamp(2.5rem, 6vw, 4.5rem), 0.9, 70% width, uppercase): Section heads; also club and project names at 2–4rem, and the perimeter band crawl at 1.5–1.75rem.
- **Title** (800, clamp(2.25rem, 5.2vw, 4.25rem), 1.02, 78% width, sentence case, balanced): Blog post titles. Mixed case because a long sentence in all-caps kit lettering stops being readable.
- **Title Row** (700, 1.5–2rem, 1.1, 85% width, sentence case): Post rows, talk titles, testimonial quotes (92% width, 1.25–1.5rem, 500).
- **Lede** (400, 1.125–1.25rem, 1.625): Intro paragraphs beside section heads and under post titles.
- **Body** (400, 1.0625rem rising to 1.1875rem, 1.75, max 68ch): Post prose. Interface body is 1rem.
- **Label** (600, 0.8125rem, 0.06em, 80% width, uppercase): Nav, buttons, table heads, post fact labels, board header, meta lines.

### Named Rules
**The Kit Lettering Rule.** Condensed uppercase 800 is reserved for display, section heads, names of clubs and projects, the perimeter band, and magnet numbers. Body, quotes, and post titles stay in sentence case.

**The No Eyebrow Rule.** Headings stand alone. No small caps kicker, eyebrow, or section number sits above a heading; the 2px ink rule under the head and the lede beside it carry the context.

## Layout

Two containers: a wide frame (max 80rem, 20px gutters, 40px from md) for every section, and a read frame (max 48rem) for narrow text; post prose is held to 68ch inside the wide frame. The header is fixed, 64px tall, on the page colour with a hairline bottom; anchored targets offset by 5.5rem.

Sections run on 96px vertical padding, 128px from md. Each section opens with a head on a 12-column grid: the headline takes 7 columns, the lede the remaining 5, bottom-aligned, then a 2px ink rule and 40–56px before content. Feature layouts split 7/5 or 8/4 (featured project and video beside supporting copy). The hero is two columns at lg (identity left, tactics board right); below lg the board drops directly under the role line. The perimeter band runs full bleed between the hero and the first section.

Lists read as rows, not cards: posts, the league table, and client contracts are separated by hairlines. On mobile the league table collapses each row into a three-column grid (position, repository, count) with the rest stacked beneath. Every text link and control gets a 44px hit target.

## Elevation & Depth

The system is flat. There are no box shadows. Depth is built three ways: tonal surface steps (page, raised, lifted), rules (hairline dividers, 2px ink rules under section heads and atop code blocks), and turf fields, which read as the pitch laid on the paper. The only fills that stack on turf are chalk magnets and the turf halo that keeps board labels legible across chalk lines.

### Named Rules
**The Chalk And Rule Rule.** Separate with a line or a tonal step, never a shadow. A heavier ink rule marks the start of something; a hairline divides peers.

## Shapes

Corners are small and nearly square: 2px on buttons, chips, timeline bars, and thumbnails; 6px on the board, media frames, and the bottom of code blocks (their top edge is a flat 2px ink rule). Round is reserved for the pitch's own objects and people: magnet tokens, the 55 crest, monograms, avatars, and the circular arrow button on post rows. Strokes are rounded-cap chalk lines, 2–4px; dashed strokes mean off-the-ball runs or a volunteer role.

## Components

### Buttons
Few and firm; most actions are text links.
- **Shape:** Nearly square (2px).
- **Turf button:** Turf fill, chalk label in condensed caps (0.875rem), 44px tall, 20px sides; 36px compact in the header. Used for Contact and the talk play control.
- **Hover / Focus:** Fill deepens to deep turf over 300ms; focus is the global 2px outline offset 3px.
- **Copy chip:** Outline in strong line, condensed caps 0.75rem, 32px tall with an extended hit area. On turf it inverts to a translucent chalk outline that fills chalk with a turf label on hover.

### Text Links (CTA)
- **CTA:** Ink, semibold, 2px turf-ink underline offset 6px. On hover the underline thickens to 4px and tightens to 4px offset with the out-expo curve; an arrow runs 4px right (or 2px up-right for external links).
- **Quiet CTA:** Quiet text with a 1px strong-line underline, darkening to ink on hover.

### Navigation
Fixed header: the round turf crest with "55" in kit lettering (tilts -8° on hover), the name in caps, then section links in quiet caps that turn ink on hover. The active page gets a 2px turf-ink underline. Below lg a "Menu" caps toggle opens a sheet of hairline-separated items set in 1.875rem kit lettering. A theme toggle closes the row.

### Tactics Board (signature)
A turf field with 6px corners and faint mowing stripes, a caps header ("Formation", "Replay"), and an SVG pitch in chalk at 78% opacity. Players are chalk magnets with turf numbers and condensed chalk labels haloed in turf. On first view the chalk lines draw (1.3s, out-expo, staggered 45ms), magnets drop and scale in, passes draw behind the ball, and a ripple marks the goal. It waits paused until 35% visible and is static under reduced motion.

### Perimeter Band (signature)
Full-bleed turf strip with deep-turf edge rules, crawling verifiable credentials in kit lettering separated by small chalk rings. 48s linear loop, paused on hover, static under reduced motion; a screen-reader list carries the same items.

### Turf Field Footer (signature)
Every page ends on a turf field: a display-size chalk line, the email in large chalk with a translucent chalk underline, the copy chip, and social links, with the halfway line and centre circle chalked across it at 16% opacity.

### League Table
Open-source contributions as a league table: caps head row in quiet, hairline rows that tint to raised on hover, position in quiet kit lettering, merged-PR counts in large turf-ink kit lettering that count up once, and a bold Total row.

### Rows and Media
Post rows: hairline-separated, title row type turning turf-ink on hover, with a 44px round outline arrow button that fills turf. Photographs and project shots sit in 6px frames with a hairline border on raised, and are the only elements that animate on scroll: a 1.1s clip-path wipe upward.

### Post Reading Column
Title block, a facts strip between 2px ink rules with caps labels and vertical hairlines between cells, then 68ch prose. Prose headings are 800 at 80% width in sentence case; links are ink with a 2px turf-ink underline; blockquotes take a 2px strong-line rule and italic quiet text. Code blocks sit on `pre-bg` with a hairline border, a 2px ink top edge, and a pinned language label; inline code uses `code-bg` with 3px corners.

## Do's and Don'ts

### Do:
- **Do** use a CSS role variable (`--turf`, `--ink`, `--line`) for every colour so one utility serves both themes.
- **Do** put chalk on turf: lines, lettering, and magnets; secondary text on turf uses quiet chalk.
- **Do** open a section with the shared section head: kit headline, optional lede beside it, 2px ink rule beneath.
- **Do** separate peers with hairlines and mark beginnings with a 2px ink rule.
- **Do** give every text link and control a 44px hit target.
- **Do** gate every animation behind `prefers-reduced-motion: no-preference` and keep content visible without JavaScript.
- **Do** keep scroll motion to photographs wiping in; reserve the authored sequence for the tactics board.

### Don't:
- **Don't** introduce a second accent hue; turf is the only club colour, and code tokens stay in code blocks.
- **Don't** add box shadows or glows; the system is flat.
- **Don't** place a kicker, eyebrow, or numbered label above a heading.
- **Don't** fade or slide text sections in on scroll.
- **Don't** set body copy, quotes, or long post titles in uppercase kit lettering.
- **Don't** build card grids for lists; use hairline rows.
- **Don't** round controls or frames beyond 6px; full rounds are for magnets, crests, avatars, and the round arrow button.
