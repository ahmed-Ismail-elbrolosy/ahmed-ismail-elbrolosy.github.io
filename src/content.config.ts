import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

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
    repository: z.url().optional(),
    heroMedia: z.string(),
    sections: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        media: z.array(z.string()).default([]),
      }),
    ),
  }),
});

export const collections = { projects };
