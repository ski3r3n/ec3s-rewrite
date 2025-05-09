import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import expressiveCode from 'astro-expressive-code';
import { remarkReadingTime } from './src/utils/remarkReadingTime';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import tailwindcss from '@tailwindcss/vite';
// import fs from 'node:fs';

// const auraDarkRaw = await fs.readFileSync('./aura-dark.jsonc');
// const auraDark = ExpressiveCodeTheme.fromJSONString(auraDarkRaw.toString());

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		expressiveCode({
			themes: ['laserwave'],
			styleOverrides: {
				uiFontFamily: 'var(--font-mono)',
				codeFontFamily: 'var(--font-mono)',
				codePaddingInline: '0rem',
			},
		}),
	],
	markdown: {
		remarkPlugins: [remarkReadingTime, remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
