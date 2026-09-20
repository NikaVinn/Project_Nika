# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Wardrobe Bureau** is a style subscription platform for women (ages 25–50, Europe). It consists of a static marketing landing page (current stage) that will eventually connect to an auth layer and LMS with gated content.

**Current stage:** Design iteration — building and refining the landing page.

## Running the Project

- `prototype-a-editorial.html` — **active design prototype** (Warm Editorial direction)

To open in browser on Windows with Cyrillic path — use PowerShell:
```powershell
Invoke-Item "c:\Users\nikav\OneDrive\Рабочий стол\Project Nika\prototype-a-editorial.html"
```

**Never use the Bash `start` command** for files in this directory — the Cyrillic characters in the path (`Рабочий стол`) cause it to open the folder instead of the file. Always use `Invoke-Item` in PowerShell.

No server needed — static files open directly in browser.

## Chosen Design Direction: Warm Editorial (Prototype A)

**Decision made June 2026.** After evaluating 5 approaches (Editorial, Minimalist, Narrative Scroll, Bento Grid, Conversational), **Warm Editorial** was selected as the primary direction.

### Design Tokens

| Variable | Value | Usage |
|---|---|---|
| `--cream` | `#FAF8F5` | Base background |
| `--sand` | `#E2D5C3` | Section backgrounds, cards |
| `--sand-dark` | `#C9B99E` | Image placeholders, borders |
| `--rose` | `#C4877A` | Accent — eyebrows, highlights, hover states |
| `--charcoal` | `#1A1A1A` | Primary text, dark sections, nav CTA |
| `--mid` | `#6B6560` | Body text, secondary content |
| `--light-text` | `#9E9790` | Labels, captions, fine print |

### Typography

| Role | Font | Weight |
|---|---|---|
| Display / Headlines | Cormorant Garamond | 300, 400, 600 (+ italic variants) |
| Body / UI | DM Sans | 300, 400, 500 |

### Page Structure (8 sections)

1. **Hero** — 2-column grid: left = headline + CTA, right = 3 editorial image placeholders
2. **Problem Validation** — left: section title, right: 4 numbered problem items with dividers
3. **Quote** — full-bleed dark section with italic brand promise
4. **Product Deep-Dive** — 2×2 card grid showing 4 feature categories
5. **Objections** — 2×2 grid, italic questions + plain answers
6. **Pricing** — left: intro text, right: stacked Basic + Premium cards
7. **CTA** — 2-column: image left, CTA block right
8. **Secondary CTA + FAQ + Footer**

### Key Visual Patterns

- Nav: fixed, `cream` bg, `charcoal` logo (Cormorant), uppercase nav links, solid `charcoal` CTA button
- Buttons: `.btn-primary` = charcoal fill, hover → rose; `.btn-ghost` = transparent, bottom border only
- Section rhythm: generous padding (120px top/bottom), 60px horizontal
- All headlines: Cormorant Garamond, `font-weight: 300`, `line-height: 1.05–1.1`
- Eyebrows/tags: 11px, `letter-spacing: 0.2em`, uppercase, rose color
- Image placeholders: `var(--sand-dark)` background with small uppercase label
- Full-bleed quote section: `var(--charcoal)` background, italic Cormorant, cream text
- Objections section: `var(--sand)` background

## Architecture

| File/Folder | Purpose |
|---|---|
| `prototype-a-editorial.html` | Active landing page prototype — all HTML + CSS inline |
| `docs/` | Active documentation — discovery, personas, design research, product notes |
| `archive/` | Outdated files kept for reference (wireframe, old placeholder, legacy code) |
| `archive/source-drafts/` | Original `.docx` source files that have been converted to `docs/` |

## Naming Convention & Archive Rules

- **Active docs** live in `docs/` with plain kebab-case names (e.g. `discovery.md`)
- **Outdated files** move to `archive/` — folder name signals status, no renaming needed
- **Original source drafts** (`.docx`, `.pdf`) move to `archive/source-drafts/` once converted to `.md`
- **Temp files** (`~$*`, `*.tmp`) are Word lock files — delete on sight, never commit

## Documentation Map

| Doc | Contents |
|---|---|
| [docs/discovery.md](docs/discovery.md) | Full discovery: problem, JTBD, lean canvas, metrics |
| [docs/personas.md](docs/personas.md) | Magda (PL) + Anna (EU) personas |
| [docs/competitive-landscape.md](docs/competitive-landscape.md) | Market map, positioning |
| [docs/landing-page-design-research.md](docs/landing-page-design-research.md) | Design approach research + decision rationale |
| [docs/product-delivery-model.md](docs/product-delivery-model.md) | Telegram channel + bot + payments — product delivery notes |
| [docs/assumption-log.md](docs/assumption-log.md) | 6 hypotheses with validation status |
| [docs/risk-register.md](docs/risk-register.md) | 6 risks with mitigation plans |
| [docs/open-questions.md](docs/open-questions.md) | Open product/tech/GTM questions |

## Git & GitHub

- Remote: `git@github.com:NikaVinn/Project_Nika.git`
- Default branch: `main`
- SSH key location: `C:\Users\nikav\.ssh\id_ed25519`
- After changes: `git add . && git commit -m "message" && git push`
