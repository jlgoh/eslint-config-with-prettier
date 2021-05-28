## Installation

1. Install the configs by running:

```
npx install-peerdeps --dev @jlgoh/eslint-config-with-prettier
```

2. Create a `.eslintrc` file in your root directory and insert the following:

```json
{
    "extends": ["@jlgoh/eslint-config-with-prettier"]
}
```

3. Create a `.prettierrc` file in your root directory and insert the following:

```
"@jlgoh/eslint-config-with-prettier/.prettierrc"
```

## Integrating with VSCode Editor

1.  Install the ESLint extension
2.  Install the Prettier Extension ( Turn on Format On Save for easy development )
3.  Reload VSCode if ESLint and Prettier do not work for the first time
