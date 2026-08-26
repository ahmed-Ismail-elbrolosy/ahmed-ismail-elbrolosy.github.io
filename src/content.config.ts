import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publicAsset = z.string().refine((value) => {
  if (!value || value.startsWith('/') || /[?#]/.test(value) || /^[a-z][a-z0-9+.-]*:/i.test(value)) return false;
  return !value.split('/').some((segment) => segment === '.' || segment === '..');
}, 'Expected a path contained within public/');

const media = z.union([
  z.string(),
  z.discriminatedUnion('type', [
    z.object({
      type: z.literal('image'),
      src: publicAsset,
      alt: z.string(),
      label: z.string(),
      caption: z.string(),
    }),
    z.object({
      type: z.literal('video'),
      src: publicAsset,
      label: z.string(),
      caption: z.string(),
      poster: publicAsset.optional(),
      ratio: z.enum(['wide', 'landscape', 'portrait', 'cinematic']).default('wide'),
      silent: z.boolean().default(false),
      captions: z.object({
        src: publicAsset,
        label: z.string(),
        language: z.string(),
      }).optional(),
    }),
    z.object({
      type: z.literal('document'),
      src: publicAsset,
      label: z.string(),
      caption: z.string(),
    }),
  ]),
]);

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    order: z.number().int().positive(),
    title: z.string(),
    navTitle: z.string(),
    previewTitle: z.string().optional(),
    description: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    year: z.string().default('To be documented'),
    type: z.string(),
    role: z.string().default('To be documented'),
    stack: z.array(z.string()).default([]),
    repository: z.url().refine((url) => url.startsWith('https://'), 'Repository URL must use HTTPS').optional(),
    heroMedia: media,
    sections: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        body: z.array(z.string()).default([]),
        media: z.array(media).default([]),
      }),
    ),
  }),
});

export const collections = { projects };
