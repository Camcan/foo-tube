module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module'
	},
	env: {
		node: true,
		browser: true
	},
	globals: {
		GLOBAL: true
	},
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:react/recommended',
		'plugin:jest/recommended'
	],
	rules: {
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'prefer-const': [
			'error',
			{
				destructuring: 'all'
			}
		],
		'no-prototype-builtins': 'off',
		'prefer-destructuring': [
			'error',
			{
				VariableDeclarator: {
					array: true,
					object: true
				},
				AssignmentExpression: {
					array: true,
					object: false
				}
			},
			{
				enforceForRenamedProperties: false
			}
		]
	}
};
