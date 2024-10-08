/** @type {import("prettier").Config} */
export default {
	plugins: ['prettier-plugin-astro'],
	trailingComma: 'all',
	useTabs: true,
	singleQuote: true,
	jsxSingleQuote: true,
	endOfLine: 'lf',
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
