module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['alziqziq-react', 'alziqziq-typescript'],
  plugins: ['require-explicit-generics'],
  rules: {
    /**
     * custom react
     */
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'require-explicit-generics/require-explicit-generics': [
      'error',
      { useState: 1 },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
