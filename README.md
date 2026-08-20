# Ahmed Elbrolosy Engineering Portfolio

Static systems-engineering and product-design portfolio built with Astro and TypeScript. It documents mechanical design, embedded systems, robotics, control, SLAM, and computer vision work.

## Local Development

Requires Node.js 22 or newer. The deployment workflow uses Node.js 24.

```bash
npm install
npm run dev
```

Astro serves the local site at `http://localhost:4321/` by default.

Run all static checks and build verification:

```bash
npm run check
npm run build
npm run check:links
```

Preview the generated production site:

```bash
npm run preview
```

## Project Structure

```text
.github/workflows/deploy.yml  GitHub Pages workflow
porto_vault/                  Editable editorial handoff notes
public/                       Replaceable images, videos, diagrams, and resume
scripts/check-links.mjs       Generated-site internal link validator
src/components/               Shared UI and project components
src/content/projects/         Website-owned project records
src/data/                     Website-owned homepage and career data
docs/design-system.md         Visual and interaction consistency rules
src/layouts/                  Shared page and project layouts
src/pages/                    Home and generated project routes
src/styles/global.css         Design system and responsive styles
src/content.config.ts         Project schema
astro.config.ts               Static and GitHub Pages configuration
```

The vault is an editorial handoff, not the website CMS. Edit `porto_vault/main.md` and each `porto_vault/projects/<project>/index.md`, then request a website update. The notes and attachments are reviewed, rewritten where needed, and manually transferred into normalized website sources under `src/` and `public/`.

## Add or Edit a Major Project

Website project pages use normalized Markdown in `src/content/projects/`. Vault notes do not change the website automatically.

To add a new major project:

1. Create `porto_vault/projects/<project>/index.md` and add project attachments beside it.
2. Fill the visible Markdown sections with evidence-backed details.
3. Request a website update.
4. Normalize the approved content into `src/content/projects/<slug>.md` or `src/data/secondary-projects.ts`.
5. Copy only selected website assets into `public/`, then run checks and build.

A normalized file in `src/content/projects/` automatically appears in the homepage overview, project sub-navigation, and previous/next sequence. Additional Work remains normalized in `src/data/secondary-projects.ts`.

## Replace Media Placeholders

Current project entries provide labels to `MediaPlaceholder.astro`. To replace one:

1. Put media in `public/images/`, `public/videos/`, or `public/diagrams/`.
2. Replace the corresponding `MediaPlaceholder` call in the shared layout, or extend project schema with a media source field.
3. Use semantic `<img>`, `<video>`, or `<figure>` markup with useful alt text or captions.
4. Store public asset paths as root-relative values, for example `/images/robot.webp`, then render them through `assetPath()` so project-site deployment remains valid.

Never use filesystem-absolute paths. `assetPath()` applies Astro's deployment base to stored root-relative asset references.

## Edit Homepage Content

- Personal details, education, and experience: `src/data/career.ts`
- Homepage identity and positioning: `src/data/site.ts`
- Nokia x ODC and Torphy currently have intentional blank entries marked `pending`.
- Homepage sections and section order: `src/pages/index.astro`
- Homepage secondary archive: `src/data/secondary-projects.ts`
- Design consistency rules: `docs/design-system.md`
- Normalized organization logos: `public/images/companies/`

Organization logos are delivered as normalized WebP files. Add a root-relative `logo` and descriptive `logoAlt` to the corresponding experience in `src/data/career.ts`. Original supplied files remain under `pics/` for reference.

## Navigation Model

The sticky primary bar links only to homepage sections: Home, Projects, Experience, Education, Skills, and Contact. Dedicated project pages add a separate horizontal project strip. New major content should fit one of those homepage sections unless a strong information-architecture reason requires another primary item.

The complete visual and interaction rules live in `docs/design-system.md`.

## GitHub Pages Deployment

`astro.config.ts` reads `GITHUB_REPOSITORY`, which GitHub Actions provides as `OWNER/REPOSITORY`.

For a project repository named `REPOSITORY`, the production values become:

```text
site: https://OWNER.github.io
base: /REPOSITORY
```

For a user-site repository named `OWNER.github.io`, `base` remains `/`.

No username or repository-name placeholder needs manual editing. To test a project path locally:

```bash
GITHUB_REPOSITORY=USERNAME/REPOSITORY npm run build
GITHUB_REPOSITORY=USERNAME/REPOSITORY npm run check:links
```

In GitHub, open **Settings → Pages → Build and deployment** and select **GitHub Actions** as the source. Push to `main`; `.github/workflows/deploy.yml` checks, builds, validates links, and deploys the static site.

If the repository is renamed, no source change is required. A custom domain requires updating `site` configuration and GitHub Pages domain settings.

## First Files to Edit

1. `src/content/projects/roviro.md`
2. `src/content/projects/robotino.md`
3. `src/data/career.ts`
4. `src/data/secondary-projects.ts`
5. `src/pages/index.astro`
6. Other files in `src/content/projects/`
7. `src/styles/global.css` for design tokens
8. `docs/design-system.md`
