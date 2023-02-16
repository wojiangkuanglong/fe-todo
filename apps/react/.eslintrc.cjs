module.exports = {
  root: true,
  extends: ["custom"],
  plugins: ['react', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    "react/jsx-key": "off",
  }
};