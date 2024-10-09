import defaultTheme from 'tailwindcss/defaultTheme';
import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [addDynamicIconSelectors()],
};
