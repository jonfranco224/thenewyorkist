import { defineCollection, z } from "astro:content";

export const collections = {
  articles: defineCollection({
    type: 'content',
    schema: z.object({
      // Title of the article
      title: z.string().min(1),
      // The article description
      description: z.string().min(1),
      // Author name
      author: z.object({
        id: z.string(),
        name: z.string(),
      }),
      // Formatted date and time
      date: z.string().regex(
        /^\d{4}-\d{2}-\d{2}$/, // Regular expression for "YYYY-MM-DD"
        "Invalid date format. Expected YYYY-MM-DD.",
      ),
      // Category selection
      category: z.enum([
        "Politics",
        "Business",
        "Sports",
        "Entertainment",
        "Technology",
        "World",
        "Local",
        "Opinion",
        "Art",
        "Metro Beat",
        "Food"
      ]),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      // Whether the article is published or still in draft
      isPublished: z.boolean(),
    }),
  }),
  authors: defineCollection({
    type: 'content',
    schema: z.object({
      id: z.string().min(1),
      name: z.string().min(1),
      image: z.string(),
    }),
  }),
};
