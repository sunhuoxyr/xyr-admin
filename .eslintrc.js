module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/extensions': [
      // 这个是解决不写后缀报错的问题
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'never',
      },
    ],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'no-plusplus': 0,
    // vue3 不再限制单个根元素
    'vue/no-multiple-template-root': 0,
    'no-console': 0,
    'no-shadow': 0,
    'no-unused-vars': 0,
  },
  settings: {
    'import/resolver': {
      // 这个是解决引入时没后缀查不到的问题
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      alias: {
        map: [['@', './src/']],
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
      },
    },
  },
};
