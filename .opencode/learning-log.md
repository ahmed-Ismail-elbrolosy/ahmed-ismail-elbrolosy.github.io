## 2026-08-13 — Initial Engineering Portfolio

Built static Astro portfolio with seven typed Markdown project records, one generated project route, reusable project/media/navigation components, About experience record, secondary project archive, restrained engineering-journal CSS, generated-output link checks, and GitHub Pages deployment workflow. Nokia x ODC and Torphy remain visibly pending entries. Root `.txt` source notes remain untouched.

Chose Astro content collection because schema validation, ordering, top navigation, previews, and previous/next links can derive from one record per major project. Used `import.meta.env.BASE_URL` through `sitePath()` and environment-derived Astro `site`/`base` because GitHub project sites run below `/REPOSITORY/`. Avoided React and dropdown navigation because static Astro and a horizontal mobile strip satisfy requirements with no client JavaScript.

Remember: public asset references must include Astro base path. Major collection entries automatically enter global navigation; secondary projects should remain in archive unless they warrant full case studies. `scripts/check-links.mjs` verifies generated pages and all required top-nav routes in root and repository-path builds. Replace placeholder components with semantic media and useful alt text as assets arrive.

## 2026-08-14 — Scan-First Homepage Navigation

Reworked portfolio into one scan-first homepage with anchored Home, Projects, Experience, Education, Skills, and Contact sections. Removed separate About route and moved biography/contact into homepage ending. Dedicated project pages remain, now with a separate horizontal project strip and current-project state. Added hero portrait slot with base-safe relative asset path.

Normalized six supplied organization logos to 400 × 160 WebP canvases under `public/images/companies/`, preserving brand geometry while cropping whitespace. Experience entries use restrained grayscale/contrast treatment with optional muted color on hover. Original files remain under `pics/`.

Chose two-tier navigation because hiring/research visitors can scan core evidence in under five minutes without decoding project-heavy global navigation, while project readers retain immediate case-study switching. Main anchors use progressive enhancement: links work without JavaScript; IntersectionObserver only adds active-section state.

Remember: primary bar must stay section-based. Major projects belong in project subnavigation, not global navigation. Store portrait/logo paths relative without a leading slash and pass through `sitePath()` for GitHub Pages. Maintain logo normalization and design rules in `docs/design-system.md`.

## 2026-08-14 — Experience Logo Path and Layout Fix

Fixed broken company images by separating asset URLs from route URLs. `sitePath()` intentionally appends trailing slashes for generated pages, so images now use `assetPath()`, which applies Astro’s GitHub Pages base without changing the file extension. Moved logos from above role text into the right metadata column on desktop, aligned with date/tags, reducing vertical waste. Mobile stacks logos below metadata at a controlled width.

Remember: never use route helpers for static files. Use `assetPath()` for images, video, diagrams, and downloadable assets; use `sitePath()` for pages. Experience logos should remain horizontally adjacent to content on wide layouts.

## 2026-08-13 — Single-Page Navigation Refactor

Moved biography, contact, education, experience, and skills onto the homepage so visitors can scan the portfolio in one flow. Replaced global project-heavy navigation with section anchors and added a separate sticky project strip only on dedicated project pages. Added hero portrait placeholder support and documented the design system in `docs/design-system.md`.

Chose a single-page homepage because it reduces navigation friction and matches the goal of showing projects, credentials, and contact details within minutes. Kept dedicated project pages because project evidence still needs its own structure. Avoided reintroducing a separate About page to prevent duplicated content and split attention.

Remember: store portrait paths as root-relative values and render them through the base-aware `assetPath()` helper. Link checks now validate homepage anchor navigation and project-page sub-navigation separately.

## 2026-08-20 — Vault-Driven Project Records

Moved the canonical project collection to `porto_vault/projects/`. Every record now declares whether it is a dedicated case study or an Additional Work entry; pages, project navigation, previews, and archive rendering derive from that single collection. Added canonical records for all vault projects, replaced the duplicate Mecanum archive record with expanded Robotino documentation, and added a build-time attachment mirror into `public/project-assets/`.

Chose Astro's existing content collection rather than a bespoke vault parser because it preserves schema validation and static routing while letting Obsidian-compatible Markdown remain the editing surface. Stored media references as root-relative values and render them through `assetPath()` for base-aware deployment. A resume link intentionally targets `/resume.pdf` until the PDF is supplied; link validation permits that pending asset only.

Remember: add project Markdown in the vault, place attachments beside its project files, and run normal checks/builds to sync them. Do not add a separate archive data source.

## 2026-08-20 — Compact Section Navigation

Removed the identity portion of the sticky header while retaining the section navigation strip. Restored the header offset for hero and project subnavigation positioning. Copied the supplied portrait from `pics/me/meprofile.png` to `public/images/profile/ahmed-elbrolosy.png` and set the root-relative, base-aware portrait path in personal data.

Remember: the header should contain section navigation only unless the identity treatment is intentionally redesigned.

## 2026-08-20 — Image-Free Hero

Removed the portrait experiment and its dedicated hero column after repeated compositing work did not meet the editorial standard. Rebalanced the existing hero grid around the index, role headline, and engineering statement without changing typography or copy. Shifted the page foundation to a neutral creamy white (`#F4F2EC`) with a slightly lighter surface.

Remember: keep the hero image-free until a professionally photographed portrait is available. Original source photos remain under `pics/me/`; generated public composites are not part of the site.
