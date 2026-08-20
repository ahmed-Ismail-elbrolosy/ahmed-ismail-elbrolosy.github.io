import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './porto_vault/projects', pattern: '**/*.md' }),
  schema: z.object({
    order: z.number().int().positive(),
    dedicated: z.boolean().default(false),
    title: z.string(),
    navTitle: z.string().optional(),
    previewTitle: z.string().optional(),
    description: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    year: z.string().default('To be documented'),
    type: z.string().default('Project'),
    role: z.string().default('To be documented'),
    stack: z.array(z.string()).default([]),
    repository: z.url().optional(),
    heroMedia: z.string().optional(),
    image: z.string().startsWith('/').optional(),
    imageAlt: z.string().optional(),
    date: z.string().optional(),
    status: z.enum(['Ongoing', 'Completed']).optional(),
    sections: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        media: z.array(z.string()).default([]),
      }),
    ).default([]),
  }),
});

export const collections = { projects };
