import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    vue: true,
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/no-unused-vars': 'warn',
    },
  },
  {
    rules: {
      'no-console': 'warn',
      'unused-imports/no-unused-vars': 'warn',
      'curly': ['error', 'multi-line'],
      'ts/no-namespace': 'off',
      // 'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    },
  },
)
