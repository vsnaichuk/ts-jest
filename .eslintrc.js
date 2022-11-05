/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  root: true,
  globals: {
    __DEV__: true,
    JSX: true,
    ReactNavigation: true,
    WEB_CONFIG: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    es6: true,
    jest: true,
    jasmine: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  ignorePatterns: ['web-build/*'],
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:import/recommended',
    // 'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  settings: {
    'import/ignore': 'node_modules',
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
  rules: {
    // Import
    'import/first': 2,
    'no-shadow': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'external',
          [('sibling', 'index', 'internal', 'parent', 'builtin')],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-cycle': [2, { maxDepth: 8, ignoreExternal: true }],
    'import/prefer-default-export': 0,
    'import/no-unresolved': 'error',
    // TS_general
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-var-requires': 0,
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    // TS_functions
    '@typescript-eslint/naming-convention': [
      'error',
      // TypeScript
      {
        selector: 'interface',
        format: ['StrictPascalCase'],
        prefix: ['I'],
      },
      {
        selector: 'typeAlias',
        format: ['StrictPascalCase'],
        suffix: ['Type', 'Types'],
      },
      {
        selector: 'typeParameter',
        format: ['StrictPascalCase'],
        prefix: ['T'],
      },
      // Enums
      {
        selector: 'enum',
        format: ['StrictPascalCase'],
        suffix: ['Enum'],
      },
      {
        selector: 'enumMember',
        format: ['StrictPascalCase'],
      },
      // JavaScript
      {
        selector: 'parameter',
        leadingUnderscore: 'allow',
        format: ['strictCamelCase'],
        filter: {
          regex: 'BaseComponent|Component',
          match: false,
        },
      },
      {
        selector: 'method',
        format: ['strictCamelCase'],
        filter: {
          regex: 'Element|Component|URL',
          match: false,
        },
      },
      {
        selector: 'property',
        format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
        filter: {
          regex: 'nativeID|compatibilityJSON',
          match: false,
        },
      },
      {
        selector: 'classProperty',
        format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'classMethod',
        format: ['strictCamelCase', 'StrictPascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: ['strictCamelCase', 'StrictPascalCase'],
        filter: {
          regex: 'UTC',
          match: false,
        },
      },
      {
        selector: 'variable',
        format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-function': 0,
    // general
    'no-duplicate-imports': 2,
    'no-undef': ['error'],
    'max-len': [
      2,
      100,
      2,
      {
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreComments: true,
      },
    ],
  },
};
