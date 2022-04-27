"use strict";

module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    browser: true,
    commonjs: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'jsdoc'],
  rules: {
    // custom eslint
    "no-console": "error",
    "no-warning-comments": "error",
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    // custom prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80,
        useTabs: false,
        tabWidth: 2,
        semi: true,
        arrowParens: 'always',
      },
    ],
    // custom jsdocs
    'jsdoc/no-undefined-types': 'off',
  }
}