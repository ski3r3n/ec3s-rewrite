import globals from 'globals';

import pluginAstro from 'eslint-plugin-astro';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

import tseslint from 'typescript-eslint';

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,astro}'],
		ignores: ['node_modules', 'dist', 'build'],
	},
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginAstro.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx}'],
		...pluginReact.configs.flat['jsx-runtime'],
		languageOptions: {
			...pluginReact.configs.flat['jsx-runtime'].languageOptions,
			globals: {
				...globals.serviceworker,
				...globals.browser,
			},
		},
	},
	{
		rules: {
			'@typescript-eslint/triple-slash-reference': 'off',
			// 'react/react-in-jsx-scope': 'off',
			// 'sort-imports': [
			// 	'error',
			// 	{
			// 		ignoreCase: false,
			// 		ignoreDeclarationSort: false,
			// 		ignoreMemberSort: false,
			// 		allowSeparatedGroups: true,
			// 		memberSyntaxSortOrder: ['none', 'single', 'all', 'multiple'],
			// 	},
			// ],
		},
	},
];
