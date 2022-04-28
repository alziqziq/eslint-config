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
  rules: {
    /**
     * custom react
     */
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
