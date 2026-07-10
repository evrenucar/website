# AGENTS.md — Rules for the Public Website Repo

This is the **public** Canico Pets website repository. It is intentionally isolated from the internal ops repo one level up.

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
