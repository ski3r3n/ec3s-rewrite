import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import expressiveCode from 'astro-expressive-code';
import { remarkReadingTime } from './src/utils/remarkReadingTime';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
		expressiveCode(),
	],
	markdown: {
		remarkPlugins: [remarkReadingTime, remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
				},
			},
		},
	},
});
