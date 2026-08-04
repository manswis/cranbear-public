import { defineCollection, z } from 'astro:content';

const legalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    app: z.string(),
    appName: z.string(),
    type: z.enum(['privacy', 'terms', 'guide']),
    lastUpdated: z.string(),
    supportEmail: z.string().email(),
  })
});

export const collections = {
  'legal': legalCollection,
};
