import eslintConfig from 'eslint-config-universal-code';

const config = eslintConfig({
  json: true,
  stylistic: true,
  unicorn: true,
  yml: true,
  perfectionist: true,
  typescript: true,
  ignore: ['postcss.config.cjs']
}, {
  rules: {
    'no-console': 'off',
    'max-statements': ['error', 20]
  }
});

export default config;