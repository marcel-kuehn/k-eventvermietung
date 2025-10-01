import pluginImport from 'eslint-plugin-import';
import astro from 'eslint-plugin-astro';

export default [
  // Ignore build artifacts and external folders
  {
    ignores: ['**/dist/**', '**/node_modules/**', '**/build/**', '**/public/**', '**/husky/**'],
  },

  // Astro recommended config
  ...astro.configs.recommended,
  {
    plugins: {
      import: pluginImport,
    },
  },

  // Additional useful rules
  {
    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
      'import/no-relative-parent-imports': 'error',
      'no-restricted-imports': ['error', { patterns: ['./*', '../*'] }],
    },
  },
];
