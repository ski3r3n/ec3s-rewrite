import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const removeDupsAndLowerCase = (tags: string[]) => {
	if (!tags.length) return tags;
	return [...new Set(tags.map((tag) => tag.toLowerCase()))];
};

const post = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/posts',
	}),
	schema: z.object({
		coverImage: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional(),
		title: z.string().max(50),
		description: z.string().min(15).max(160),
		author: z.string(),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		draft: z.boolean(),
		publishedDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

export const collections = {
	post,
};
