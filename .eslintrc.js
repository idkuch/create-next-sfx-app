module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'next',
		'next/core-web-vitals',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	plugins: ['@typescript-eslint'],
	rules: {
		// TODO: config to the end
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		curly: ['error'],
	},
};
