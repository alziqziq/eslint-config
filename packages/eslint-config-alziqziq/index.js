module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    commonjs: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'jsdoc'],
  rules: {
    /**
     * custom eslint
     */
    'no-console': 'error',
    'no-warning-comments': 'warn',
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
    'import/prefer-default-export': 'off',
    /**
     * custom prettier
     */
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
    /**
     * custom jsdocs
     */
    'jsdoc/no-undefined-types': 'off',
  },
};
