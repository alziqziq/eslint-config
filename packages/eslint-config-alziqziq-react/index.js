"use strict";

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
  extends: ['alziqziq', 'plugin:react/recommended', 'airbnb', 'airbnb/hooks'],
  plugins: ['react'],
  rules: {
    /**
     * custom react
     */
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
