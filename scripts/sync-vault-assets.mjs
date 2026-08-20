import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

const source = path.resolve('porto_vault/projects');
const target = path.resolve('public/project-assets');

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, {
  recursive: true,
  filter: (entry) => !entry.endsWith('.md') && !entry.endsWith('.html'),
});

console.log('Synced vault project attachments.');
