# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository has two layers:

1. **TestLand** — a static landing page (`index.html`, `styles.css`, `script.js`). No build tools, no dependencies, runs directly in any browser.
2. **Product docs** — Discovery-phase documentation for a Style Subscription Platform (English Telegram channel + AI bot) in `docs/`.

## Running the Site

Open `index.html` directly in a browser. In VS Code, use the **Live Server** extension for auto-reload on save. No server, no build step.

## Site Architecture

Three files:

- [index.html](index.html) — 5 sections: Navbar, Hero, Features, Pricing, Contact, Footer. Anchor IDs used for smooth-scroll.
- [styles.css](styles.css) — CSS custom properties in `:root`, CSS Grid (`features-grid`, `pricing-grid`), Flexbox (navbar), responsive breakpoint at `768px`.
- [script.js](script.js) — smooth scroll via `querySelector`, `IntersectionObserver` for `fadeInUp` animations on `.feature-card` and `.pricing-card`, contact form alert + reset, pricing button alerts.

## Design Tokens

| Variable | Value | Usage |
|---|---|---|
| `--primary-color` | `#6366f1` | Indigo — buttons, links, accents |
| `--secondary-color` | `#ec4899` | Pink — hero gradient end, hover states |
| `--dark-bg` | `#0f172a` | Footer background |
| `--light-bg` | `#f8fafc` | Features & Contact backgrounds |

The `.featured` class on `.pricing-card` scales and highlights the middle pricing tier.

---

## Autonomy Rules

**Act without asking for confirmation** on all standard operations:
- Creating, editing, or deleting files created in the current session
- Writing and updating documentation
- Running `git add`, `git commit`, `git push` to feature branches
- Installing dependencies, running scripts

**STOP and confirm before:**
- `git push --force` or `git reset --hard` to any branch
- `git push` directly to `main` (bypass of branch workflow)
- Deleting files or folders that existed before the current session and were not created by Claude

---

## Git & GitHub Workflow

### Environment Setup

Always set before any git operation in this session:
```powershell
$env:PATH = $env:PATH + ";C:\Program Files\Git\bin"
$env:GIT_SSH = "C:\Program Files\Git\usr\bin\ssh.exe"
```

- Remote: `git@github.com:NikaVinn/Project_Nika.git`
- Default branch: `main` — **never push directly to main**
- SSH key: `C:\Users\nikav\.ssh\id_ed25519`

### Branch Convention

Every task gets its own branch. Branch naming:

```
docs/<topic>       # documentation work
feature/<topic>    # new features or product artifacts
fix/<topic>        # corrections
research/<topic>   # exploratory work
chore/<topic>      # tooling, config, CLAUDE.md
```

### Workflow Per Session

```powershell
# 1. Create branch
git checkout -b docs/topic-name

# 2. Work and commit
git add .
git commit -m "docs: short description"

# 3. Push branch (not main)
git push origin docs/topic-name
```

After push: tell the user "Branch pushed — open PR on GitHub to merge to main."  
**Only the user merges to main via GitHub Pull Request UI.**

### Commit Message Convention

Format: `type: imperative description` (lowercase, no period)

Types: `docs` · `feat` · `fix` · `refactor` · `research` · `chore`

Always end commit messages with:
```
Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

---

## Docs Structure

| File | Contents | Lifecycle |
|---|---|---|
| [docs/discovery.md](docs/discovery.md) | Index + Problem Statement, JTBD, Value Prop, Lean Canvas, Metrics | Stable |
| [docs/personas.md](docs/personas.md) | Magda (PL) + Anna (EU) with validation status | Updated as validated |
| [docs/competitive-landscape.md](docs/competitive-landscape.md) | Market map, positioning, Vakhula Style reference | Expanded over time |
| [docs/assumption-log.md](docs/assumption-log.md) | 6 hypotheses — status: 🔴/🟡/🟢/❌ | Updated per experiment |
| [docs/risk-register.md](docs/risk-register.md) | 6 risks — status: Open/Monitored/Closed | Updated per sprint |
| [docs/open-questions.md](docs/open-questions.md) | Product / Tech / GTM questions | Closed during Definition phase |
