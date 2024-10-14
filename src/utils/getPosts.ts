import type { CollectionEntry } from 'astro:content';

import { getCollection } from 'astro:content';

type Post = CollectionEntry<'post'>;

const isProd = import.meta.env.PROD;

/**
 * Get all posts
 * @returns {Post[]} all posts
 */
export const getAllPosts = async (): Promise<Post[]> => {
	const posts = await getCollection('post', (post) => {
		return isProd ? !post.data.draft : true;
	});

	return posts;
};

/**
 * Sort posts by date in descending order
 * @param {Post} posts
 * @returns {Post} posts sorted by date in descending order
 */
export const sortPostsByDate = (posts: Post[]): Post[] => {
	return posts.sort((a, b) => {
		const aDate = new Date(
			a.data.updatedDate ?? a.data.publishedDate,
		).valueOf();
		const bDate = new Date(
			b.data.updatedDate ?? b.data.publishedDate,
		).valueOf();
		return bDate - aDate;
	});
};

const getAllTags = (posts: Post[]): string[] =>
	posts.flatMap((post) => [...post.data.tags]);

/**
 * Get unique tags from all posts
 * @param {Post[]} posts
 * @returns {string[]} unique tags
 */
export const getUniqueTags = (posts: Post[]): string[] => {
	const tags = getAllTags(posts);
	return [...new Set(tags)];
};

/**
 * Get unique tags with count
 * @param {Post[]} posts
 */
export const getUniqueTagsWithCount = (posts: Post[]): [string, number][] => {
	return [
		...getAllTags(posts).reduce(
			(acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
};
