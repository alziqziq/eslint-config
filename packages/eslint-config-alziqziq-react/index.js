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
      'error',
      {
        namedComponents: 'function-declaration',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/no-danger': 'off',
    'react/destructuring-assignment': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
