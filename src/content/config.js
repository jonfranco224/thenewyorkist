import { defineCollection, z } from 'astro:content';

export const collections = {
  articles: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string().optional(), // Optional fields if needed
    }),
  }),
};