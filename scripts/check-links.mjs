import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const htmlFiles = [];
const requiredNavigation = [
  '#home',
  '#projects',
  '#about',
  '#experience',
  '#education',
  '#skills',
  '#contact',
];

const requiredProjectSubnav = [
  '#projects',
  'projects/roviro',
  'projects/graduation-project',
  'projects/inverted-pendulum',
  'projects/rocker-bogie',
  'projects/robotino',
  'projects/self-balancing-robot',
];

const pendingAssets = new Set(['resume.pdf']);

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
  const target = path.extname(localPath)
    ? path.join(root, localPath)
    : path.join(root, localPath, 'index.html');
  const relativeTarget = path.relative(root, target);

  return relativeTarget.startsWith('..') || path.isAbsolute(relativeTarget) ? null : target;
}

await collect(root);
const failures = [];

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, 'utf8');
  const links = [...html.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1]);
  const resources = [...html.matchAll(/\s(?:href|src|poster)="([^"]+)"/g)].map((match) => match[1]);
  const base = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const prefix = base && !base.toLowerCase().endsWith('.github.io') ? `/${base}/` : '/';
  const relativePath = path.relative(root, htmlFile);

  for (const href of requiredNavigation) {
    const resolved = relativePath === 'index.html' ? href : `${prefix}${href}`;
    if (!links.includes(resolved)) failures.push(`${relativePath} missing navigation link ${resolved}`);
  }

  if (relativePath.startsWith('projects/')) {
    let previousPosition = -1;
    for (const route of requiredProjectSubnav) {
      const href = route.startsWith('#') ? `${prefix}${route}` : `${prefix}${route}/`;
      if (!links.includes(href)) failures.push(`${relativePath} missing project subnav link ${href}`);
      const position = links.indexOf(href);
      if (position >= 0 && position < previousPosition) failures.push(`${relativePath} has project subnav out of order at ${href}`);
      if (position >= 0) previousPosition = position;
    }
  }

  for (const href of resources) {
    if (/^(?:https?:|mailto:|tel:|#)/.test(href)) continue;
    const target = outputPathFor(href);
    if (!target) {
      failures.push(`${path.relative(root, htmlFile)} -> ${href} escapes the build directory`);
      continue;
    }
    if (pendingAssets.has(path.relative(root, target))) continue;
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
