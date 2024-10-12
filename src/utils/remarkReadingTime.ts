import { toString as convertToString } from 'mdast-util-to-string';
import readingTime from 'reading-time';

export const remarkReadingTime = () => {
	return (tree, file) => {
		const pageContent = convertToString(tree);
		const stats = readingTime(pageContent);
		file.data.astro.frontmatter.readingTime = stats;
	};
};
