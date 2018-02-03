module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'curly': 'error',
    'default-case': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-console': 'warn',
    'no-implicit-coercion': 'error',
    'no-mixed-operators': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
  },
  globals: {},
}
