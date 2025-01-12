import { addDynamicIconSelectors } from '@iconify/tailwind';
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: ['icon-[mdi--menu]', 'icon-[mdi--close]'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [addDynamicIconSelectors(), typography()],
};
