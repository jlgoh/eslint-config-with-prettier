module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'airbnb',
        'airbnb/hooks',
        'prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'jest', 'prettier'],
    rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'import/extensions': 'off',
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                },
                pathGroups: [
                    {
                        // Put imported assets last
                        pattern: '*.{css,gif,jpeg,jpg,png,scss,svg}',
                        patternOptions: {
                            matchBase: true,
                        },
                        group: 'index',
                        position: 'after',
                    },
                ],
            },
        ],
        'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
        // react rules
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-on-expression-per-line': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-sort-default-props': 'error',
        'react/jsx-sort-props': [
            'error',
            {
                reservedFirst: true,
                shorthandLast: true,
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/sort-prop-types': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        // prettier rules
        'prettier/prettier': 'error',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
