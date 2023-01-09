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
  extends: ['airbnb-base'],
  plugins: ['jsdoc'],
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
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    /**
     * custom jsdocs
     */
    'jsdoc/no-undefined-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', 'ts', 'tsx'],
      },
    },
  },
};
