import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const htmlFiles = [];
const requiredNavigation = [
  '#home',
  '#projects',
  '#experience',
  '#education',
  '#skills',
  '#contact',
];

const requiredProjectSubnav = [
  '#projects',
  'projects/roviro',
  'projects/inverted-pendulum',
  'projects/boogy-rover',
  'projects/trash-collector',
  'projects/robotino',
  'projects/linear-actuator',
  'projects/self-balancing-robot',
];

async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) await collect(filePath);
    if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(filePath);
  }
}

function outputPathFor(urlPath) {
  const base = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const normalizedBase = base && !base.toLowerCase().endsWith('.github.io') ? `/${base}` : '';
  let localPath = urlPath.split(/[?#]/)[0];

  if (normalizedBase && localPath.startsWith(normalizedBase)) {
    localPath = localPath.slice(normalizedBase.length);
  }

  localPath = localPath.replace(/^\/+/, '');
  return path.extname(localPath)
    ? path.join(root, localPath)
    : path.join(root, localPath, 'index.html');
}

await collect(root);
const failures = [];

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, 'utf8');
  const links = [...html.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1]);
  const base = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const prefix = base && !base.toLowerCase().endsWith('.github.io') ? `/${base}/` : '/';
  const relativePath = path.relative(root, htmlFile);

  for (const href of requiredNavigation) {
    const resolved = relativePath === 'index.html' ? href : `${prefix}${href}`;
    if (!links.includes(resolved)) failures.push(`${relativePath} missing navigation link ${resolved}`);
  }

  if (relativePath.startsWith('projects/')) {
    for (const route of requiredProjectSubnav) {
      const href = route.startsWith('#') ? `${prefix}${route}` : `${prefix}${route}/`;
      if (!links.includes(href)) failures.push(`${relativePath} missing project subnav link ${href}`);
    }
  }

  for (const href of links) {
    if (/^(?:https?:|mailto:|tel:|#)/.test(href)) continue;
    const target = outputPathFor(href);
    try {
      await access(target);
    } catch {
      failures.push(`${path.relative(root, htmlFile)} -> ${href}`);
    }
  }
}

if (failures.length) {
  console.error(`Broken internal links:\n${failures.join('\n')}`);
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} generated pages: no broken internal links.`);
