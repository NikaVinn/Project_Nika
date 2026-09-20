# Landing Page Design Research
**Product:** Style Subscription Platform  
**Stage:** Design — Iteration 1  
**Date:** June 2026  
**Status:** ✅ Decision made — **Approach A: Warm Editorial** selected

---

## Context

This document captures a research-driven analysis of landing page design approaches relevant to a **women's lifestyle subscription product** targeting ages 25–50 in Europe. The goal is to choose a design direction before building the design kit.

Key constraints from Discovery:
- Audience buys **emotionally**, justifies **logically** — design must create desire first, then give rational anchors (price, features)
- Product is trust-based (personal stylist feel at €19/mo) — visual quality = perceived product quality (halo effect: 0.05s to form opinion)
- No social proof yet at launch — design must compensate with **voice, aesthetic, and specificity**
- Mobile-first (Instagram/Pinterest acquisition channel)

---

## Research Findings: What Actually Works in 2026

### Psychological foundation (non-negotiable across all approaches)

From conversion research across 50+ high-performing subscription landing pages:

| Principle | How it applies to this product |
|---|---|
| **Emotional first, logical second** | Hero must create desire/recognition before any feature list |
| **Halo effect** | Visual quality = perceived product quality. Cheap design = cheap stylist |
| **Specificity builds trust** | "Capsule for European office autumn" beats "seasonal guides" |
| **Loss aversion** | "Stop wasting money on impulse buys" stronger than "save money" |
| **Social mirror** | Testimonials/imagery must reflect the target woman, not a model |
| **One decision per section** | Each scroll = one micro-commitment, not a feature dump |

---

## Design Approach Candidates

### Approach A: Warm Editorial

**Reference world:** Kinfolk magazine, Cuyana, Reformation, Net-a-Porter editorials  
**Core idea:** The page feels like a beautifully curated magazine spread. Large lifestyle photography, generous whitespace, serif headlines, restrained color palette (cream, warm sand, deep charcoal). Every element feels intentional and premium.

**Visual language:**
- Typography: Display serif (e.g., Playfair Display, Cormorant) for headlines + clean sans-serif (Inter, DM Sans) for body
- Palette: Warm neutrals — cream `#FAF8F5`, warm sand `#E8DFD0`, charcoal `#1C1C1C`, one soft accent (dusty rose or sage)
- Layout: Asymmetric editorial grid, full-bleed photography sections, text breathing room
- Motion: Subtle — slow fade-ins, no jarring transitions

**Why it works for this product:**
- Immediately communicates "this is a premium, curated service"
- Women 25–50 recognize this aesthetic from the magazines and brands they already trust
- No need for social proof at launch — the aesthetic IS the proof of quality
- Works beautifully on mobile as a vertical magazine scroll

**Risks:**
- Requires high-quality photography (no stock photos — they will kill the effect)
- Lower information density means more scrolling to reach pricing
- Can feel cold if typography/copy isn't warm enough

**Conversion profile:** High for PREMIUM tier. Strong for BASIC if copy is warm.

---

### Approach B: Confident Minimalist (Anti-clutter)

**Reference world:** Loewe, The Row, Bottega Veneta digital — brutal simplicity  
**Core idea:** Radical reduction. One idea per screen. Maximum 15 words in the hero. Lots of white space. The restraint itself signals confidence and luxury. Nothing is explained — it's felt.

**Visual language:**
- Typography: Single typeface, two weights (light + bold). Grotesque or geometric sans (Neue Haas Grotesk, PP Neue Montreal)
- Palette: Near-monochrome — off-white, one mid-tone, near-black. No gradients.
- Layout: Almost nothing on the page. Centered or left-aligned single column.
- Motion: None or single reveal animation

**Why it works:**
- Extremely fast to load, passes mobile performance benchmarks
- Forces clarity — if you can't say it in 12 words, the product isn't defined
- Memorability is very high (rare in fashion subscription space)

**Risks:**
- Very hard to execute well — bad minimalism looks unfinished, not confident
- Low information density creates friction before CTA — requires very strong copy
- Risky without social proof or brand recognition

**Conversion profile:** Lower direct conversion, but very high-quality leads. Better as brand page than acquisition page.

---

### Approach C: Narrative Scroll (Story-driven)

**Reference world:** Headspace, Duolingo's old web, Recess, Ceremonia  
**Core idea:** The page tells a story from top to bottom. The user is the protagonist. Section by section: recognition of pain → moment of change → introduction of solution → proof → invitation. Each section is a chapter, not a feature block.

**Visual language:**
- Typography: Mix of display serif (emotional moments) + readable sans (factual sections)
- Palette: Warm and varied — each "chapter" can have a slightly different mood (problem section: muted/desaturated; solution section: warm and bright)
- Layout: Alternating rhythm — full-bleed image, then text, then card grid, then full-bleed again
- Motion: Scroll-triggered reveals, text appearing as you read — storytelling motion, not decoration

**Why it works for this product:**
- The wireframe already follows a narrative arc (pain → features → objections → pricing) — this approach makes that architecture visible and felt
- Converts the "Will this work for ME?" objection into empathy rather than an FAQ entry
- Works well without initial social proof because the story creates identification
- Natural mobile experience — scrolling = turning pages

**Risks:**
- Requires the most copywriting investment of all approaches
- Easy to make too long — must be disciplined about each section earning its scroll
- Motion can slow performance if overdone

**Conversion profile:** Consistently high for lifestyle subscriptions. Best balance of emotion + information.

---

### Approach D: Bento Editorial Grid

**Reference world:** Linear's website, Vercel, early Notion — adapted for lifestyle  
**Core idea:** Content organized in modular card blocks of varying sizes (like a bento box). No linear scroll story — instead, a visual composition where different pieces of value are laid out simultaneously. The eye moves non-linearly, creating exploration.

**Visual language:**
- Typography: Clean sans-serif system, varied type sizes within cards
- Palette: Light background with cards in different tones (some image-filled, some text, some data)
- Layout: CSS Grid with intentional size asymmetry — tall card next to two small ones, wide card spanning full width
- Motion: Cards animate in on scroll, hover states on cards

**Why it works:**
- Very high information density without feeling cluttered
- Modern, distinctive — almost no fashion subscription brands use it (differentiation opportunity)
- Works well for showcasing product variety (all the things inside the subscription)
- The "product deep-dive" section of the wireframe maps perfectly to this layout

**Risks:**
- Feels tech/startup-ish — needs careful warm adaptation to not alienate fashion audience
- Complex to implement well on mobile (grid collapses)
- Less emotionally linear — harder to build the storytelling arc

**Conversion profile:** Strong for feature-heavy sections, weaker for emotional opening. Best used as a hybrid element, not a full-page approach.

---

### Approach E: Warm Conversational (Newsletter-native)

**Reference world:** Beehiiv top newsletters, Ann Friedman, Cup of Jo, early Substack stars  
**Core idea:** The landing page reads like a personal letter or the first issue of the newsletter. Casual but smart. The founder voice is present. It feels like talking to a knowledgeable friend, not a brand. The CTA is "join the conversation," not "buy a subscription."

**Visual language:**
- Typography: Slightly humanist serif or warm sans-serif. Line length controlled for reading comfort (~65 chars).
- Palette: Paper-white background, ink-dark text, one soft accent
- Layout: Single column, tight. Like an email or a Substack page.
- Motion: None

**Why it works:**
- Extremely authentic — cuts through polished brand fatigue
- Converts free Telegram → paid subscription naturally because it builds relationship first
- Very fast to build and iterate
- Strong for cold traffic from social (feels personal, not corporate)

**Risks:**
- Can feel too casual for a €600/mo PREMIUM tier
- Less visual impact — doesn't "show" the product, only "tells"
- Harder to demonstrate content quality

**Conversion profile:** Very high for BASIC/Telegram funnel. Weak for PREMIUM standalone.

---

## Recommendation: Hybrid Approach C+A

**Primary direction: Narrative Scroll (C) with Warm Editorial (A) visual language**

**Why this combination:**

The wireframe's 8-section structure is already a story (problem → solution → proof → price → CTA). The design should make that story *felt*, not just *read*.

- Sections 1–2 (Hero + Problem): **Full Editorial** — large, emotional, near-silent. One powerful image. Recognition-triggering headline.
- Sections 3–4 (Product + Objections): **Narrative + Bento** — content-rich, but organized with visual rhythm. Show, don't list.
- Sections 5–6 (Pricing + CTA): **Clean and direct** — stripped back, no distraction. One decision.
- Sections 7–8 (Secondary CTA + FAQ): **Conversational** — warm, human, low-pressure.

**Visual identity direction:**
- Serif display headlines (Cormorant Garamond or Playfair Display)
- Clean body text (DM Sans or Inter)
- Palette: cream `#FAF8F5` base, warm sand `#E2D5C3`, charcoal `#1A1A1A`, accent dusty rose `#C4877A`
- No gradients in the current indigo/pink palette — replace with warm earth tones
- Photography style: real women, real contexts, warm light (not studio)

---

## Decision

**Selected: Approach A — Warm Editorial**  
Chosen in June 2026 after reviewing live HTML prototypes of all 5 approaches.

Active prototype: `prototype-a-editorial.html`

## Next Steps

- [ ] Define photography brief — what images are needed for Hero (3 photos), Problem, Product sections
- [ ] Build full design kit: typography scale, spacing system, component library
- [ ] Replace image placeholders with real photography
- [ ] Mobile responsive pass on prototype-a
- [ ] Connect to auth / payment flow (future phase)

---

*Research sources: Moburst (2026 trends), Orizon (summer/fall 2025 favorites), Landingfolio fashion examples, beehiiv newsletter conversion data, Awwwards editorial grid examples, conversion psychology research (Nethority, Serotonin Digital).*
