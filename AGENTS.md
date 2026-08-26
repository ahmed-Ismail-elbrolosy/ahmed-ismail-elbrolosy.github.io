# Agent Guidelines for Portfolio Repository

This document contains instructions for AI agents (OpenCode, Antigravity, etc.) working in this repository.

## 1. Editorial Workflow & Vault Handoff
- **`porto_vault/` is a local editorial handoff area**, not the live website CMS. Notes and media here are source material for reviews and manual normalization into `src/content/projects/`, `src/data/`, and `public/`.
- **Preserve Raw Notes at the End of Files**: When the user adds raw notes, updates, or scratchpad commentary (e.g., `> new updates...` or under `## Raw Notes`) for the AI to scan and adjust the project files:
  - Extract and integrate the facts, code references, and media into the structured sections/codebase.
  - **Always keep and preserve the user's raw notes/comments at the end of the source file** so they remain accessible for future reference. Never delete or overwrite the user's original raw notes unless explicitly requested.

## 2. Voice & Tone
- Maintain the feel of an **engineering journal, research lab archive, and industrial design record**.
- Avoid marketing jargon, exaggerated buzzwords, startup CTA patterns, and decorative fluff.
- Write calm, precise, and concise technical copy.

## 3. Evidence & Factuality
- Strictly separate verified hardware/simulation results from targets, active hypotheses, or unverified claims.
- Real engineering failures, trade-offs, and negative results are valuable evidence—document them accurately rather than hiding them.
- When metrics or parameters are unconfirmed, mark them with standard pending/confirmation phrasing rather than inventing estimates.
