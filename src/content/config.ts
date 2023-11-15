import { z, defineCollection } from 'astro:content';

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    year: z.number(),
    emoji: z.string(),
    title: z.string(),
    description: z.string(),
    link: z.string(),
    isArchived: z.boolean(),
  }),
});

export const collections = { projects };
