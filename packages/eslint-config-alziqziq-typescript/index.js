module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    commonjs: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  extends: ['plugin:@typescript-eslint/recommended', 'alziqziq'],
  plugins: ['@typescript-eslint'],
  rules: {
    /**
     * custom typescript
     */
    '@typescript-eslint/typedef': [
      'error',
      {
        arrowParameter: true,
        parameter: true,
        propertyDeclaration: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
  },
};
