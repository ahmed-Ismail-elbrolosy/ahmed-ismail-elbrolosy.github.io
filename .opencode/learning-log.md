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

## 2026-08-20 — Editorial Vault Handoff

Reorganized every project into `porto_vault/projects/<project>/index.md`, with attachments retained in the same folder. Converted project notes and `main.md` to visible, human-readable Markdown instead of schema frontmatter. Restored independent website sources under `src/content/` and `src/data/`; Astro no longer reads the vault or copies its attachments automatically.

Chose an explicit human review step because vault notes are source material, not publish-ready CMS records. This allows copy editing, evidence checks, asset selection, and schema normalization before website changes ship. It also prevents partial notes from appearing publicly.

Remember: the user edits vault notes, then requests an update. Review and manually transfer approved content into `src/` and selected assets into `public/`.

## 2026-08-20 - Zsh Zellij Completion Fix

Corrected `~/.zshrc`'s Zellij completion wrapper. Zellij declares `a` as an exact alias for `attach`, so generated Zsh completion normally accepts it and inserts a trailing space. The wrapper instead keeps the alias as `a` and completes active session names directly from `zellij list-sessions --short`.

Restored styled `copy FILE` and `paste FILE` helpers with validation, byte/word/line statistics, overwrite confirmation, and paste preview. They prefer native Wayland clipboard tools and fall back to `xclip`; the old `copy` alias and redundant `clip-copy`/`clip-paste` functions were removed.

Added a ZLE Tab wrapper so both `zellij a<Tab>` and `zellij a <Tab>` invoke active-session completion without expanding the `a` alias. Verified this through a pseudo-terminal against two temporary detached sessions, then removed them.

Standardized directional pane controls across WezTerm and Zellij. WezTerm now uses Alt+H/J/K/L or Alt+Arrows to focus native panes and Ctrl equivalents to resize them; when Zellij is foreground, those keys are forwarded instead. Zellij keeps Alt directional focus and handles Ctrl directional resize in normal mode. Keeping Ctrl bindings normal-mode-only avoids collisions with Zellij's prompt and rename modes.

Re-enabled Zellij `session_serialization`, which had explicitly been disabled in the carried-over config. Active sessions were visible only while their server survived; exited sessions therefore disappeared from outside-shell completion. Verified that a saved and terminated test session remained listed as resurrectable through `zellij list-sessions --short`, then deleted the test record.

Enabled Zellij's unlock-first workflow with `default_mode "locked"` and a plain Ctrl+G normal/locked toggle. Changed global Alt pane bindings to exclude locked mode, so locked sessions pass application keys through instead of retaining pane controls.

Added terminal-level Ctrl+Shift+] in WezTerm to close the current pane immediately with no confirmation. WezTerm consumes the key before the PTY, preventing Zellij, OpenCode, or Neovim from receiving it. Retained Ctrl+Alt+W as the existing confirmed close action.

Chose to remove the premature `CURRENT == 2` branch rather than change the Tab key binding or Zellij configuration: the fault was isolated to the local completion wrapper, while Zellij's generated completion should own subcommand suggestions. Future session completion remains available for `attach`, `watch`, `kill-session`, and `delete-session`.

## 2026-08-20 - ROViro Evidence-Led Case Study

Rebuilt the ROViro editorial note and live project record from the current simulator source plus external Gazebo, DAVE, Stonefish, and ROS documentation. The page now distinguishes implemented simulation, media, bridge, and telemetry work from RTAB-Map, MeshLab, and thruster-TUI validation still being completed. Added intentional placeholders for seven requested evidence captures.

Rejected the claim that Gazebo “guesses” reactions while Stonefish computes exact geometry physics. Gazebo uses collision geometry for buoyancy but normally configured hydrodynamic coefficients; Stonefish uses geometry-informed drag and surface buoyancy with simplified added-mass approximations. Neither is CFD.

The companion workspace migrated to ROS 2 Lyrical, Gazebo Jetty, C++20, and Python 3.14. Keep portfolio result claims gated on reproducible captures, units, reference dimensions, and error calculations.

## 2026-08-21 - Narrative Case Studies and Media

Replaced one-paragraph project sections with long-form chapter content, stable chapter navigation, structured image/video evidence, and a bundled Plyr player. Promoted the autonomous lifting AGV into Selected Work and connected its navigation and lift videos. Generated local posters and preserved portrait/cinematic footage ratios.

Reframed ROViro around Kami's compromised mechanics and the actual research question: what control can recover, at what actuator cost, and where mechanical redesign remains mandatory. Rewrote project hero decks as direct statements of stakes and ownership rather than category summaries.

Rejected a permanent right-hand note rail after review. It filled whitespace with secondary text instead of strengthening the story. Section descriptions and body paragraphs now use the complete narrative column, with two full-width reading columns on desktop and one on mobile. Keep future additions in the main chronology unless they are genuine media evidence.

## 2026-08-21 - Approved Vault Publication

Published the approved Rocker-Bogie, Self-Balancing Robot, Inverted Pendulum, and GAN Gogh vault narratives as evidence-led website case studies. Added typed local PDF media with lazy iframe embeds and direct-open fallbacks, copied only selected public assets, promoted GAN Gogh from Additional Work to the project collection, and retained explicit ownership and validation boundaries where evidence is incomplete.

Kept the Rocker-Bogie report internal because it contains conflicting hardware and performance claims; neither the source nor the generated site includes it. Used the confirmed GAN presentation permission despite its Samsung template notice. Rejected unsupported controller results, model-to-simulation comparisons, training reproducibility claims, and inferred individual roles.

Remember: vault approval precedes publication. Treat reports as factual sources rather than automatic downloads, publish only explicitly cleared documents, and preserve unresolved contribution or quantitative-result gaps until primary evidence is supplied.

## 2026-08-21 - Missing-Detail Signals

Added a dedicated high-contrast red state for information that still needs evidence or user confirmation. It now marks unconfirmed project roles, absent validation or model artifacts, pending repositories and technologies, media placeholders, incomplete archive records, and reserved experience entries.

Kept documented failures and negative engineering results in the normal text color. Those are project evidence, not missing content. Future unresolved copy should use the existing explicit pending/confirmation language so the renderer can identify it without making all limitations look unfinished.

## 2026-08-22 - Portfolio Placement and Media Tiers

Standardized Selected Work within two intentional tiers: featured cards retain their larger hierarchy while every card in each tier now shares a fixed media ratio, bounded copy, and aligned action area. Expanded Additional Work into large-media rows, added a compressed ten-second muted AGV loop with pause and reduced-motion behavior, and replaced placeholders with the supplied foldable-box image.

Added `porto_vault/experiences.md` plus homepage visibility and project placement tables in `main.md`. Project placement uses one exclusive `none`, `selected`, or `additional` value; changing placement never deletes the project folder. Trash Collector remains selected and gained its supplied detection/build media. Robotino, Linear Actuator, ROViro, and Rocker-Bogie records now reflect the latest evidence and corrections.

Rejected real GIF conversion because MP4 is smaller, clearer, pausable, and accessibility-compatible. Keep full source recordings in the vault and publish short optimized previews on the homepage.

## 2026-08-26 - Raw Notes Preservation Rule

Established rule for processing user notes and editorial updates in vault files: when scanning raw user notes or scratchpad additions (such as blockquotes or trailing comments in project notes), extract and normalize the facts into the structured sections/codebase, but always retain the user's raw notes and comments at the bottom of the file so they remain accessible for future context. Defined in `AGENTS.md`, `README.md`, and `docs/design-system.md`.

