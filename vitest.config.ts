import { defineConfig } from 'vitest/config';

export default defineConfig({
  // plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['**/*.test.tsx'],
    globals: true,
  },
});
