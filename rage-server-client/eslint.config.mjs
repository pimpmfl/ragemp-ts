// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  prettierRecommended,
  {
    rules: { '@typescript-eslint/no-explicit-any': 'error', 'no-console': 'warn', 'prettier/prettier': 'warn' }
  },
  {
    ignores: ['.github', '.vscode', 'build-scripts', 'node_modules', 'dist']
  }
);
