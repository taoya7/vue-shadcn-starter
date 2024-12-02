import antfu from '@antfu/eslint-config'

export default antfu({
  vue: {
    vueVersion: 3,
  },
  typescript: true,
  stylistic: {
    semi: false,
    singleQuote: true,
    indent: 2,
    jsx: true,
  },
  rules: {
    'vue/custom-event-name-casing': [2, 'kebab-case'], // 对自定义事件名称强制使用特定大小写
    'style/max-statements-per-line': 'off',
    // 允许单行if不换行
    'antfu/if-newline': 'off',
    // 仅单行if允许不使用大括号
    'curly': ['error', 'multi-line'],
    'no-console': 'off',
    'node/prefer-global/process': 'off',
    'ts/ban-types': 'off',
    'ts/method-signature-style': 'off',
    'unused-imports/no-unused-vars': 'off',
    'array-callback-return': 'off',
    'ts/ban-ts-comment': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'ts/consistent-type-imports': 'off',
    'ts/no-require-imports': 'off',
    'ts/no-var-requires': 'off',
  },
})