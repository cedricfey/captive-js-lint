module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12
    // sourceType: module
  },
  rules: {
    'comma-dangle': ['error', 'never']
  }
};
