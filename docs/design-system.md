# Design System

## Intent

This portfolio should feel like an engineering journal, research lab archive, and industrial design record. It must not drift into startup landing page, SaaS dashboard, cyberpunk, or generic personal-brand aesthetics.

## Visual Principles

- Use strong whitespace and clear sectional rhythm.
- Prefer geometric alignment and thin rules over decorative surfaces.
- Keep corners square or nearly square.
- Let typography, structure, and evidence carry the design.
- Favor restraint over visual effects.

## Color

- Background: warm neutral paper tones.
- Text: dark graphite, not pure black.
- Accent: one restrained technical blue.
- Lines: visible but quiet grey separators.
- Avoid gradients, glow, neon, glassmorphism, and saturated multi-color accents.

## Typography

- Sans-serif for headings and body.
- Monospace for metadata, labels, navigation, and technical indexing.
- Headings should be large, compressed, and calm, not flashy.
- Body copy should stay concise and readable.

## Shape and Surfaces

- Border radius: 0–2px default.
- Borders: thin, used often for hierarchy.
- Cards should feel like panels or records, not soft marketing tiles.
- Media placeholders should look intentional and technical.

## Layout

- Homepage is the primary scan surface.
- Main top bar links to in-page sections only.
- Dedicated project pages use a secondary sticky project strip.
- Maintain strong desktop composition and clean mobile stacking.
- On mobile, prefer horizontal scrolling over collapsing important navigation into dropdowns.

## Navigation System

- Primary navigation contains only homepage sections: Home, Projects, Experience, Education, Skills, Contact.
- On the homepage, primary links use local anchors. On project pages, they return to the corresponding homepage anchor.
- Active homepage sections use the blue underline and `aria-current="location"`.
- Project names never compete with primary sections in the main bar.
- Dedicated project pages add a second, narrower project strip below the main header.
- The project strip starts with Project Index, then lists every major project and marks the current page.

## Homepage Sections

Required order:

1. Home
2. Projects
3. Experience
4. Education
5. Skills
6. Contact

The Contact section also holds the About-style biography. Website copy is normalized under `src/`; vault notes are editorial handoff material and never load directly at build time.

## Project Presentation

- ROViro and Inverted Pendulum receive greater visual prominence.
- Other major projects are smaller but still clear and direct.
- Archive projects remain on the homepage only unless promoted to full case-study status. Each gets a full-color side image or the standard technical media placeholder.
- Every major project keeps a dedicated page with reusable structure.

## Skills

- Keep the existing category groupings.
- Show branded software and platforms as compact icon cards with a one-line description.
- Keep engineering methods, protocols, and disciplines as plain text tags.
- Do not show proficiency bars, levels, or ratings.

## Organization Logos

- Logos support recognition but remain secondary to role and engineering work.
- Normalize source files to a shared 400 × 160 canvas and WebP delivery format.
- Preserve logo geometry; crop whitespace and resize, but do not redraw branding.
- Present logos on the neutral surface with a thin border.
- Default to grayscale with controlled contrast; restrained color may appear on hover.
- Do not let a logo become larger than the organization title or dominate an experience entry.
- On desktop, place the logo in the right metadata column beside the experience text to reduce vertical whitespace.
- On mobile, stack the logo below the date and tags at a controlled maximum width.

## Accessibility

- Maintain visible focus states.
- Preserve semantic heading order.
- Keep contrast strong enough for long reading.
- Honor reduced-motion preferences.
- Do not rely only on color for active states.

## Anti-Patterns

Do not add:

- large rounded gradient cards
- glowing borders
- animated blobs
- progress-bar skill charts
- oversized startup CTA sections
- fake metrics or fabricated results
- stock robotics imagery
- decorative 3D gimmicks

## Editing Guidance

- When adding new sections, prefer extending the existing grid/rule system.
- When adding media, replace placeholders with evidence-rich images, plots, videos, or diagrams.
- When processing editorial notes from the vault, integrate findings into structured sections but preserve the user's raw notes/comments at the end of the file for reference.
- When in doubt, choose the more restrained option.
