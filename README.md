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
porto_vault/projects/         Canonical Obsidian-compatible project records
public/                       Replaceable images, videos, diagrams, and resume
scripts/check-links.mjs       Generated-site internal link validator
src/components/               Shared UI and project components
src/data/career.ts            Personal, education, and experience data
docs/design-system.md         Visual and interaction consistency rules
src/layouts/                  Shared page and project layouts
src/pages/                    Home and generated project routes
src/styles/global.css         Design system and responsive styles
src/content.config.ts         Project schema
astro.config.ts               Static and GitHub Pages configuration
```

The source `.txt` files in the repository root remain reference material. Project content lives in `porto_vault/projects/`; each Markdown record is either a dedicated page (`dedicated: true`) or an Additional Work archive entry.

Project attachments stay beside the related vault project. `npm run sync:vault-assets` mirrors non-Markdown, non-HTML vault attachments to `public/project-assets/` before checks and builds. Reference them in frontmatter as root-relative `/project-assets/...` paths.

## Add or Edit a Major Project

Each project is a Markdown file in `porto_vault/projects/`. Edit its frontmatter and section descriptions there. A `dedicated: true` record automatically creates a project page and homepage project card; other records appear in Additional Work.

To add a new major project:

1. Copy an existing file in `porto_vault/projects/`.
2. Give it a unique filename; that filename becomes its URL slug.
3. Assign a unique numeric `order`.
4. Complete required frontmatter fields according to `src/content.config.ts`.
5. Run `npm run check` and `npm run build`.

The project automatically appears in the homepage overview, project-page sub-navigation, and previous/next sequence.

Archive records omit `dedicated: true`. They do not receive full pages or project-navigation links.

## Replace Media Placeholders

Current project entries provide labels to `MediaPlaceholder.astro`. To replace one:

1. Put media in `public/images/`, `public/videos/`, or `public/diagrams/`.
2. Replace the corresponding `MediaPlaceholder` call in the shared layout, or extend project schema with a media source field.
3. Use semantic `<img>`, `<video>`, or `<figure>` markup with useful alt text or captions.
4. Store public asset paths as root-relative values, for example `/images/robot.webp`, then render them through `assetPath()` so project-site deployment remains valid.

Never use filesystem-absolute paths. `assetPath()` applies Astro's deployment base to stored root-relative asset references.

## Edit Homepage Content

- Personal details, education, and experience: `src/data/career.ts`
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

1. `porto_vault/projects/roviro.md`
2. `porto_vault/projects/robotino.md`
3. `src/data/career.ts`
4. Other archive records in `porto_vault/projects/`
5. `src/pages/index.astro`
6. Other files in `porto_vault/projects/`
7. `src/styles/global.css` for design tokens
8. `docs/design-system.md`
