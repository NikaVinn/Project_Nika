# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**TestLand** is a static landing page with no build tools, frameworks, or dependencies. It runs directly in any browser.

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

## Git & GitHub

- Remote: `git@github.com:NikaVinn/Project_Nika.git`
- Default branch: `main`
- SSH key location: `C:\Users\nikav\.ssh\id_ed25519`
- After changes: `git add . && git commit -m "message" && git push`
