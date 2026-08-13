# Ahmed Elbrolosy Engineering Portfolio

Static robotics, control systems, embedded systems, and mechatronics portfolio built with Astro and TypeScript. The homepage is the primary scan surface: visitors can move through projects, experience, education, skills, and contact details without leaving the page, while each major project still has its own dedicated case-study page.

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
public/                       Replaceable images, videos, and diagrams
scripts/check-links.mjs       Generated-site internal link validator
src/components/               Shared UI and project components
src/content/projects/         Major project Markdown records
src/data/career.ts            Personal, education, and experience data
src/data/secondary-projects.ts Secondary project archive
docs/design-system.md         Visual and interaction consistency rules
src/layouts/                  Shared page and project layouts
src/pages/                    Home and generated project routes
src/styles/global.css         Design system and responsive styles
src/content.config.ts         Project schema
astro.config.ts               Static and GitHub Pages configuration
```

The source `.txt` files in the repository root remain reference material. The website uses normalized, typed content under `src/content/` and `src/data/`.

## Add or Edit a Major Project

Each major project is a Markdown file in `src/content/projects/`. Edit frontmatter fields and section descriptions in that file. The shared dynamic route automatically creates the project page and the homepage project overview card.

To add a new major project:

1. Copy an existing file in `src/content/projects/`.
2. Give it a unique filename; that filename becomes its URL slug.
3. Assign a unique numeric `order`.
4. Complete required frontmatter fields according to `src/content.config.ts`.
5. Run `npm run check` and `npm run build`.

The project automatically appears in the homepage overview, project-page sub-navigation, and previous/next sequence.

Secondary archive records live in `src/data/secondary-projects.ts`. They do not receive full pages or top-navigation links.

## Replace Media Placeholders

Current project entries provide labels to `MediaPlaceholder.astro`. To replace one:

1. Put media in `public/images/`, `public/videos/`, or `public/diagrams/`.
2. Replace the corresponding `MediaPlaceholder` call in the shared layout, or extend project schema with a media source field.
3. Use semantic `<img>`, `<video>`, or `<figure>` markup with useful alt text or captions.
4. Prefix public asset URLs with `import.meta.env.BASE_URL` or use the `sitePath()` helper so project-site deployment remains valid.

Do not use root-relative paths such as `/images/robot.webp`; they break when deployed beneath a repository base path.

## Edit Homepage Content

- Personal details, education, and experience: `src/data/career.ts`
- Nokia x ODC and Torphy currently have intentional blank entries marked `pending`.
- Homepage sections and section order: `src/pages/index.astro`
- Homepage secondary archive: `src/data/secondary-projects.ts`
- Design consistency rules: `docs/design-system.md`
- Normalized organization logos: `public/images/companies/`

If you want your portrait to appear in the hero:

1. Put the image in `public/images/profile/`
2. Set `personal.portrait` in `src/data/career.ts`, for example:

```ts
portrait: 'images/profile/ahmed-elbrolosy.webp'
```

`src/pages/index.astro` applies the GitHub Pages base path with `assetPath()`. Keep the stored value relative and do not begin it with `/`. The current placeholder remains intentional until the image is added.

Organization logos are delivered as normalized WebP files. Add a relative `logo` and descriptive `logoAlt` to the corresponding experience in `src/data/career.ts`. Original supplied files remain under `pics/` for reference.

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
2. `src/content/projects/inverted-pendulum.md`
3. `src/data/career.ts`
4. `src/data/secondary-projects.ts`
5. `src/pages/index.astro`
6. Other files in `src/content/projects/`
7. `src/styles/global.css` for design tokens
8. `docs/design-system.md`
