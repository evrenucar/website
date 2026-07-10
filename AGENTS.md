# AGENTS.md — Rules for the Public Website Repo

This is the **public** Canico Pet website repository. It is intentionally isolated from the internal ops repo one level up.

## Skills — top priority

Before writing any user-facing string on this site, consult the project-scoped skills at `.claude/skills/`. See `CLAUDE.md` for details. Short version:

- Any prose or copy (hero lines, product descriptions, alt text, meta descriptions, form labels) → invoke `no-ai-slop` first. Fall back to reading `.claude/skills/no-ai-slop/SKILL.md` directly if the Skill tool says "Unknown skill".
- Any Astro/CSS/JS work → invoke `ponytail` first.
- If the task involves both → invoke both, at the top of the turn.

The whole point of this repo is public-facing copy. Every emoji, em-dash, "It's not X, it's Y" pattern, or vague adjective is a slop signal.

## Rules

- Everything committed here is publishable. Assume it will be indexed by Google and read by competitors.
- Never copy from the parent repo (`../`). Not leads, not pricing, not supplier names, not internal strategy, not decision logs.
- Never commit credentials, API keys, or analytics secrets. Use `.env` locally.
- Photos here should be brand-approved. Ask before adding factory floor imagery.
- Any external service (analytics, form endpoint, cookie banner) must be listed transparently in a public privacy page.
- Content copy should match the brand voice defined in `../brand/` — but do not reference internal docs by path in commits.

## Workflow

- Small commits. One idea per commit.
- Do not run `git` commands here from the parent repo. `cd` into this directory first.

## Framework

Not decided yet. Placeholder-only until user chooses.
