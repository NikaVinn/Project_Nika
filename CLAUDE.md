# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**TestLand** is a static landing page with no build tools, frameworks, or dependencies. It runs directly in any browser.

This repository also contains product documentation for a Style Subscription Platform (Telegram channel + AI bot), located in `docs/`.

## Running the Project

Open `index.html` directly in a browser — no server needed. In VS Code, use the **Live Server** extension for auto-reload on save.

## Architecture

Three files make up the entire site:

- [index.html](index.html) — page structure with 5 sections: Navbar, Hero, Features, Pricing, Contact, Footer. All sections use anchor IDs for smooth-scroll navigation.
- [styles.css](styles.css) — all styles. Uses CSS custom properties (defined in `:root`) for the color palette. Layout is CSS Grid (`features-grid`, `pricing-grid`) and Flexbox (navbar). Responsive breakpoint at `768px`.
- [script.js](script.js) — vanilla JS only. Handles smooth scroll, contact form submission (currently just an alert), scroll-triggered `fadeInUp` animations via `IntersectionObserver`, and pricing button click alerts.

## Design Tokens (CSS Variables)

| Variable | Value | Usage |
|---|---|---|
| `--primary-color` | `#6366f1` | Indigo — buttons, links, accents |
| `--secondary-color` | `#ec4899` | Pink — hero gradient end, hover states |
| `--dark-bg` | `#0f172a` | Footer background |
| `--light-bg` | `#f8fafc` | Features & Contact section backgrounds |

## Key Patterns

- The `.featured` class on a `.pricing-card` applies the highlighted/scaled style to the middle pricing tier.
- Scroll animations work by setting `opacity: 0` on `.feature-card` and `.pricing-card` in JS, then applying `fadeInUp` via `IntersectionObserver` when elements enter the viewport.
- The contact form submission is not wired to any backend — it shows an alert and resets the form.

---

## Autonomy Rules

**Act without asking for confirmation** on all standard operations:
- Creating, editing, or deleting files I created in the current session
- Writing documentation, updating existing docs
- Running `git add`, `git commit`, `git push` to feature branches
- Installing dependencies, running scripts

**STOP and confirm before:**
- `git push --force` or `git reset --hard` to any branch
- `git push` directly to `main` (bypassing branch workflow — see below)
- Deleting files or folders that existed before the current session and were not created by me
- Any operation that cannot be undone in under 30 seconds

---

## Git & GitHub Workflow

### Setup
- Remote: `git@github.com:NikaVinn/Project_Nika.git`
- Default branch: `main` (protected — never push directly)
- SSH key location: `C:\Users\nikav\.ssh\id_ed25519`
- Git binary: `C:\Program Files\Git\bin\git.exe`
- SSH binary: `C:\Program Files\Git\usr\bin\ssh.exe`
- Always set before git operations: `$env:PATH = $env:PATH + ";C:\Program Files\Git\bin"; $env:GIT_SSH = "C:\Program Files\Git\usr\bin\ssh.exe"`

### Branch Convention

Every unit of work goes in its own branch. Never commit directly to `main`.

**Branch naming:**
```
docs/<topic>        # documentation work
feature/<topic>     # new features or product artifacts
fix/<topic>         # corrections to existing content
research/<topic>    # exploratory / spike work
```

**Examples:**
```
docs/definition-mvp
docs/personas-validation
feature/bot-spec
fix/lean-canvas-pricing
```

### Workflow (every session)

1. **Start:** create or switch to a feature branch
   ```powershell
   git checkout -b docs/topic-name
   ```

2. **Work:** commit frequently with clear messages
   ```
   git add .
   git commit -m "type: short description"
   ```

3. **Push:** push the branch to GitHub (not main)
   ```
   git push origin docs/topic-name
   ```

4. **Done:** tell the user — "Branch pushed. Open PR on GitHub to merge to main."
   The user merges via GitHub UI when ready.

### Commit Message Convention

```
docs: update assumption log with A1 validation result
feat: add bot platform comparison table
fix: correct pricing tier in lean canvas
research: competitive analysis of EU Telegram channels
```

Format: `type: imperative description` (no capital, no period)  
Types: `docs`, `feat`, `fix`, `refactor`, `research`, `chore`

Always end commits with:
```
Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

### Merging to main

**Only the user merges to main** — via GitHub Pull Request UI.  
Claude never merges or pushes to main directly.

---

## Docs Structure

Product documentation lives in `docs/`:

| File | Contents |
|---|---|
| [docs/discovery.md](docs/discovery.md) | Index + stable artifacts (Problem, JTBD, Value Prop, Lean Canvas, Metrics) |
| [docs/personas.md](docs/personas.md) | User personas — Magda (PL) + Anna (EU) |
| [docs/competitive-landscape.md](docs/competitive-landscape.md) | Market map, competitors, positioning |
| [docs/assumption-log.md](docs/assumption-log.md) | 6 hypotheses with live validation status |
| [docs/risk-register.md](docs/risk-register.md) | 6 risks with mitigation + status |
| [docs/open-questions.md](docs/open-questions.md) | Open Product / Tech / GTM questions |
