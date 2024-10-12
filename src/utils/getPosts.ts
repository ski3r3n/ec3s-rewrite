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
 * @returns {Map<string, number>} unique tags with count
 */
export const getUniqueTagsWithCount = (posts: Post[]): Map<string, number> => {
	const tags = getAllTags(posts);
	const tagMap = new Map<string, number>();

	tags.forEach((tag) => {
		tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1);
	});

	return tagMap;
};
