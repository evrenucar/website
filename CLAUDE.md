# CLAUDE.md — Website repo

This is the **public** Canico Pets website (Astro static site, deploys to GitHub Pages). Read `AGENTS.md` first for full rules.

## Skills you must use — do not skip

Project-scoped skills live in `.claude/skills/`. Before writing prose or code, invoke the relevant skill via the Skill tool.

### Writing (all user-facing copy on this site)

- **`no-ai-slop`** — 24 rules against AI-slop writing patterns. Consult **before** writing or editing any string that will appear on the site. Full banned lists in `.claude/skills/no-ai-slop/references/ai-writing-detection.md`.
- **`rossmann-voice`** — precise, human-sounding voice profile.

The whole point of this repo is public-facing copy. Every Trans component, every alt text, every hero line, every product description, every SEO description passes through the no-ai-slop rules. If you find yourself writing:

- em-dashes (`—`),
- "It's not X. It's Y.",
- "In today's [anything]",
- decorative emojis,
- vague adjectives ("robust", "seamless", "thoughtful", "beautifully"),
- hollow filler ("we should talk"),

...stop and rewrite. These are the top offenders.

### Code (Astro components, pages, styles)

- **`ponytail`** — YAGNI. Do not add a component, dependency, or CSS layer unless it earns its keep. One line over fifty. Reuse what is already here.
- **`frontend-design`** — invoke before starting any new UI section, layout, or visual restyle. Rejects templated defaults; forces deliberate choices about palette, type, and structure that fit *this* brand (Canico Pets pet lifestyle, not a generic SaaS aesthetic).

Trigger words: refactor, abstraction, dependency, install, "let me add a helper", new section, new page, restyle, redesign, layout, hero, palette, typography.

### Order of operations

1. Invoke `no-ai-slop` before writing any user-facing string.
2. Invoke `ponytail` before adding code structure.
3. Do this at the top of the turn, not after producing a draft.

### When the Skill tool says "Unknown skill"

Read `.claude/skills/no-ai-slop/SKILL.md` (and `references/ai-writing-detection.md`) directly and apply the rules manually. Warn the user that a fresh session would auto-load the skill.

## Repo hygiene

- This directory is its own git repo. `git` commands run inside `website/` only.
- Never copy internal ops content (leads, pricing, supplier names) from the parent repo — see `AGENTS.md`.
- Content collection at `src/content/products/` is the product source of truth. The schema in `src/content/config.ts` is intentionally shaped for a future webshop.

## Anchor decisions (from parent repo)

- Primary tagline: **Designed for pets. Made for modern homes.**
- Product name: **Cat Litter Collecting Mat**.
- Typography: Manrope + DM Sans (Google Fonts, loaded in BaseLayout).
- Palette: from concept style sheet — coral / lavender / sunshine / teal / cobalt / pink on a warm cream base.
- Bilingual EN/TR with instant CSS-based toggle. No page reload.
