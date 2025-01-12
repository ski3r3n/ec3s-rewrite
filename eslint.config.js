import globals from 'globals';

import pluginAstro from 'eslint-plugin-astro';
import pluginJs from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';

import tseslint from 'typescript-eslint';

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,astro}'],
		ignores: ['node_modules', 'dist', 'build', '.astro/*', '**/*.d.ts'],
	},
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
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
	pluginPrettier,
	...pluginAstro.configs.recommended,
	{
		rules: {
			'@typescript-eslint/triple-slash-reference': 'off',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-empty-object-type': 'warn',
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
