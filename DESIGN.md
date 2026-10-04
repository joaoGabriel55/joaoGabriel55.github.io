---
name: Gabriel Quaresma
description: A calm monochrome notebook. Graphite tones, hairlines, and light-weight type on bond paper or carbon.
colors:
  carbon: "#0a0a0a"
  carbon-raised: "#141414"
  carbon-lifted: "#1a1a1a"
  bond-paper: "#ffffff"
  bond-raised: "#fafafa"
  bond-lifted: "#f5f5f5"
  ink: "#171717"
  graphite: "#525252"
  pencil: "#6b6b6b"
  pencil-dark: "#8a8a8a"
  chalk: "#a3a3a3"
  smudge: "#d4d4d4"
  hairline: "#e5e5e5"
  hairline-dark: "#262626"
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
typography:
  display:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 200
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 300
    lineHeight: 1.33
    letterSpacing: "-0.025em"
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.625
  label:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: "0.1em"
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.875rem"
    lineHeight: 1.625
rounded:
  sm: "4px"
  md: "8px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "80px"
  section: "96px"
  section-lg: "128px"
components:
  card:
    backgroundColor: "{colors.bond-raised}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.md}"
    padding: "24px"
  card-hover:
    backgroundColor: "{colors.bond-lifted}"
  card-dark:
    backgroundColor: "{colors.carbon-raised}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.md}"
    padding: "24px"
  card-dark-hover:
    backgroundColor: "{colors.carbon-lifted}"
  chip-outline:
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  chip-filled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  icon-button:
    textColor: "{colors.graphite}"
    rounded: "{rounded.full}"
    size: "48px"
  icon-button-small:
    textColor: "{colors.graphite}"
    rounded: "{rounded.full}"
    size: "36px"
  link-dash:
    textColor: "{colors.graphite}"
  link-dash-hover:
    textColor: "{colors.ink}"
---

# Design System: Gabriel Quaresma

## Overview

**Creative North Star: "The Monochrome Notebook"**

The site reads like an engineer's notebook. It uses graphite tones on a page, single-pixel ruled lines, and thin type set at about the weight of a pencil stroke. There is no hue anywhere in the system. Every color is a step on one achromatic neutral scale, and the page switches between two papers: **Bond Paper** (white) in light mode and **Carbon** (near-black) in dark mode. Hierarchy comes from type weight, tracking, and whitespace, never from color.

The mood is **calm**. Transitions are slow (300ms for color, 500–700ms for image reveals). Sections breathe, with 96–128px between them. Nothing animates unless the visitor does something, apart from the slow pulse of the scroll hint in the hero. Interactive pieces are **soft and tactile**: rounded cards and pill chips that brighten one tonal step when touched, links whose leading dash grows, and photographs that move from grayscale to full color on hover. That hover is the only moment of color in the whole system.

Both themes are equal. Every surface, line, and text role has a light and a dark value, and neither theme is treated as the default.

**Key Characteristics:**
- Strictly achromatic. Color only enters through photographs (on hover) and syntax-highlighted code.
- Light-weight system sans (200–300) for everything except tiny labels and code.
- Flat by rule. Depth comes from tonal steps and 1px hairlines, never shadows.
- Uppercase, widely tracked eyebrow labels above light headlines (`.eyebrow`).
- Slow, quiet motion that responds to the visitor.
- Paired light and dark values for every role.

## Colors

One achromatic scale (Tailwind's neutral family) supplies two paper bases, three surface steps per theme, and a graphite text ladder.

### Neutral
- **Carbon** (`carbon`): the dark-mode page. Used for `html`, `body`, and `main` backgrounds and for the translucent header (at 80%).
- **Carbon Raised** (`carbon-raised`): dark-mode card surfaces (repo cards, blog cards). One step lighter than the page.
- **Carbon Lifted** (`carbon-lifted`): dark-mode card hover. The "lift" on touch, expressed as tone.
- **Bond Paper** (`bond-paper`): the light-mode page and header (at 80%).
- **Bond Raised** (`bond-raised`): light-mode card surfaces.
- **Bond Lifted** (`bond-lifted`): light-mode card hover, plus `code` and `pre` backgrounds in posts.
- **Ink** (`ink`): light-mode headlines, strong text, and link hover. In dark mode it is the section divider and the `pre` background.
- **Graphite** (`graphite`): light-mode body copy and the resting color of links and chips. In dark mode it is used only for non-text marks such as link underlines.
- **Pencil** (`pencil`): light-mode meta text (eyebrow labels, dates, reading time, footer, star counts, the header's Blog link). Tuned to pass AA on hovered cards (4.9:1 on Bond Lifted).
- **Pencil Dark** (`pencil-dark`): the same meta roles in dark mode, plus chip text. Passes AA on Carbon and on both card steps (≥5.2:1).
- **Chalk** (`chalk`): dark-mode body copy and link resting color. In light mode it is the prose link underline.
- **Smudge** (`smudge`): light-mode chip and card-hover borders, and dark-mode prose text.
- **Hairline** (`hairline`): light-mode borders and dividers (sections, header, cards), plus filled-chip backgrounds.
- **Hairline Dark** (`hairline-dark`): dark-mode card borders, prose rules, and table borders.

Headings in dark mode are pure white (`#ffffff`, the same value as Bond Paper). In dark mode the two papers swap roles.

### Named Rules
**The No-Hue Rule.** No hue exists in the UI. If a new element needs emphasis, step it along the neutral scale or change its type weight. Do not add an accent color. The single exception is syntax highlighting inside code blocks (see Code Tokens), where hue carries meaning for the reader.

**The Paired Value Rule.** Every color assignment comes as a light/dark pair. A role defined for one theme only is incomplete. Hand-written CSS reads the paired role variables on `:root` / `:root.dark` in `src/app.css` (`--ink`, `--text-prose`, `--line`, and so on) and never hard-codes hex.

**The Readable Whisper Rule.** Quiet text still clears WCAG AA (4.5:1) on the surface it sits on, in both themes. Get quieter by size, case, and tracking, not by dropping below Pencil / Pencil Dark.

### Code Tokens
Muted "colored pencil" hues, used only for syntax highlighting inside article code blocks. Each has a light/dark pair and passes AA on the code-block background in both themes (lowest 4.9:1).
- **Plum** (`code-keyword` / `code-keyword-dark`): keywords (`def`, `const`, `await`).
- **Moss** (`code-string` / `code-string-dark`): strings and regexes.
- **Burnt Orange** (`code-number` / `code-number-dark`): numbers and literals.
- **Slate Blue** (`code-title` / `code-title-dark`): function names, properties, attributes.
- **Ochre** (`code-type` / `code-type-dark`): types, classes, built-ins.
- **Teal** (`code-symbol` / `code-symbol-dark`): Ruby symbols, variables, interpolation.
- Comments use Pencil / Pencil Dark in italics; punctuation and plain code use the prose ink.

**The Develop-on-Touch Rule.** Photographs (profile, project previews, repo avatars) rest in grayscale and return to color only on hover. This is the only place color appears.

## Typography

**Display Font:** System UI sans (`system-ui`, `-apple-system`, Segoe UI, Roboto, Helvetica Neue, Arial)
**Body Font:** The same system stack
**Label/Mono Font:** `ui-monospace` stack for code only

**Character:** One native sans in a single family, set mostly at weights 200–300 so it reads like fine pencil on paper. The system stack is a deliberate choice: the page looks native on every OS and loads nothing. Tailwind's `font-sans` is set to this same stack.

### Hierarchy
- **Display** (200, 2.25rem mobile → 3rem md → 3.75rem lg, line-height 1, tracking -0.025em): the hero name only.
- **Headline** (300, 1.875rem → 2.25rem md, tracking -0.025em): section headings (`Projects`, `Blog`) and post titles, which scale up to 3rem.
- **Title** (300, 1.25rem → 1.5rem md, tracking -0.025em): project names and blog-card titles.
- **Body** (300, 1rem on mobile → 1.125rem md, line-height 1.625): intro copy, project descriptions, and article prose. Articles cap at about 48rem (`max-w-3xl`), and intro and section copy at `max-w-2xl`.
- **Label** (400, 0.75rem, tracking 0.1em, UPPERCASE, in Pencil / Pencil Dark): section eyebrows ("Selected Work", "Community", "Thoughts & Ideas"), card dates, and the hero role line (0.875–1rem, light weight, widest tracking).
- **Code** (mono, 0.875rem): inline code chips and `pre` blocks in posts.

Article prose adds intermediate heading steps on mobile (1.125–1.875rem), stepping up at md.

Weight 500 is used only for `strong`, table headers, and repo names on cards.

### Named Rules
**The Pencil Weight Rule.** Headings use weights 200–300, never bold. Emphasis comes from size, tracking, and the ink/graphite contrast, not from weight.

**The Eyebrow Rule.** Every section heading has a tiny uppercase tracked label above it (in Pencil or Graphite) that names the section's role in plain words.

## Layout

There is a single centered column. Home sections use a `max-w-5xl` container (64rem) with 24px side padding, or 48px from md up. Articles narrow to `max-w-3xl`.

- **Rhythm:** sections are separated by 96px (128px md) of vertical padding plus a full-width top hairline. Section headers sit 64–80px above their content.
- **Hero:** fills the viewport (`min-h-screen`) with centered content, stacking photo, name, role line, intro, and social links with 48–64px gaps. A 1×64px gradient line pulses below as a scroll hint (desktop only).
- **Projects:** two-column rows from md up, alternating image left and right. They collapse to image-then-text on mobile. Rows are 80px apart.
- **Grids:** repo cards use 3 columns and blog cards 2 columns from md up, with 24–32px gaps. Both stack to one column below md.
- **Breakpoints:** essentially one, `md` (768px). `lg` only enlarges the display name and post titles.
- **Header:** fixed and 100% wide, with a 16px vertical pad. Content starts below it through hero padding.

## Elevation & Depth

The system is flat by rule. No element uses a `box-shadow`. Depth comes from three tonal steps per theme (page, raised card, lifted hover) and from 1px hairline borders that darken one step on hover. The fixed header is the only layered surface: an 80%-opacity paper with a medium backdrop blur and a bottom hairline. The hero photo's soft halo is a blurred gradient ring behind the image, not a shadow.

### Named Rules
**The Flat-By-Rule Rule.** Never add box-shadows. To make something feel raised, step its background one tone toward the opposite paper and darken its hairline.

## Shapes

The shapes are softened rectangles and true circles.

- **Gently rounded (8px):** cards, project image frames, `pre` blocks, and post images.
- **Barely rounded (4px):** filled blog tags and inline code.
- **Fully round:** the profile photo, repo avatars, social and theme-toggle buttons, and outline chips (pills).
- **Lines:** 1px everywhere, whether borders, section rules, the gradient scroll hint, or link dashes. No thicker strokes, except the 2px blockquote rule in posts.

## Components

### Dash Link (signature)
The site's signature interaction, used for "Get in touch", "View Source Code", "View my contributions", and "Read Article". A 1px horizontal dash (24–32px) leads the text. On hover the dash grows to 40–48px and darkens to Ink (white in dark mode), the text moves from Graphite to Ink, and a trailing arrow (when present) slides 4px right. All of this happens over 300ms.

### Cards / Containers
- **Corner Style:** gently rounded (8px).
- **Background:** Bond Raised / Carbon Raised. Hover lightens or darkens one step to Bond Lifted / Carbon Lifted.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px Hairline (Hairline Dark in dark mode), shifting one step on hover (Smudge / `#404040`).
- **Internal Padding:** 24px, or 32px on md blog cards.
- **Whole-card targets:** blog cards are full buttons. Repo cards contain a Dash Link.

### Chips
- **Outline pill** (project stack, post tags): transparent, with a 1px Smudge border (Hairline Dark in dark mode), Graphite text at 12px with wide tracking, and 4×12px padding.
- **Filled tag** (blog-card tags): Hairline background (`ink` tone in dark mode), Graphite text, 4px radius, 4×8px padding, `#` prefix.
- Chips are static labels and have no hover state.

### Round Icon Buttons
Social links (48px) and the theme toggle (36px) are circles with a 1px border and a 60%-opacity icon. On hover the border darkens, the background fills with Bond Lifted / near-Carbon, and the icon reaches full opacity. Icons are 16–20px, stroked at 1.5px.

### Navigation
The header is fixed, translucent (80% paper with backdrop blur), and has a bottom hairline. The name sits on the left as a home button (light weight, wide tracking, 14–16px). The right side holds a "Blog" text link in Pencil that turns Ink on hover, followed by the theme toggle. The same layout is used on mobile.

### Photo Frame
Project previews sit in a 16:9 frame with 8px rounding. At rest the image is grayscale at 80% opacity, with a paper-tinted gradient veil from the bottom. On hover it turns color, reaches full opacity, scales to 105%, and the veil fades out. The image change runs 700ms ease-out and the veil 500ms.

### Code Blocks
Rendered from fenced markdown with highlight.js, registering only the languages the blog uses (Ruby, TypeScript, JavaScript, Bash, SQL, JSON, YAML). A labelled block shows its language name as a tiny uppercase tracked label (eyebrow treatment, Pencil) that stays pinned while the block scrolls sideways. Unlabelled fences (prompts, terminal output) stay plain and unlabelled. Token colors come from the Code Tokens set.

### Article Prose
Long-form posts use light body type in Graphite (`#404040` light / Smudge dark) and light headings in Ink. Links get a 1px Chalk underline that darkens to Ink on hover. Code blocks have 8px rounding with a Bond Lifted fill and a Hairline border. Tables are fully ruled with 1px hairlines.

## Do's and Don'ts

### Do:
- **Do** take every color from the neutral scale and give it a light/dark pair (The Paired Value Rule).
- **Do** set headings at weights 200–300 with -0.025em tracking, and put an uppercase 0.1em-tracked eyebrow label above section headings.
- **Do** show "raised" and "hover" with a one-step tonal shift plus a hairline change (The Flat-By-Rule Rule).
- **Do** use the Dash Link for any text call to action.
- **Do** rest photos in grayscale and bring them to color on hover over 500–700ms.
- **Do** keep transitions slow and calm: 300ms for color and border changes, 500–700ms for image reveals. Gate movement (scaling, sliding arrows, the pulse) behind `motion-safe:`; color and opacity changes stay for everyone.
- **Do** give small text links a 44px hit area with the `.hit-area` utility (vertical padding cancelled by negative margin).
- **Do** keep section rhythm at 96/128px with a top hairline between sections.

### Don't:
- **Don't** add an accent hue, gradient color, or colored UI element (The No-Hue Rule). Code-token hues stay inside code blocks and never leak into UI chrome.
- **Don't** use box-shadows for elevation.
- **Don't** use bold headings or heavy weights for emphasis.
- **Don't** use strokes thicker than 1px, apart from the existing 2px blockquote rule.
- **Don't** design for one theme only.
- **Don't** set meta or label text below Pencil / Pencil Dark (The Readable Whisper Rule).
- **Don't** load a webfont. The system stack is the typeface.
