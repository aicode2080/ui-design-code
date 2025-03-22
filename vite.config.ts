import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'tailwind.config.ts',
          dest: './',
        },
        {
          src: 'src/themes',
          dest: './src',
        },
      ],
    }),
  ],
  define: {
    global: 'window', // 或者 'globalThis'
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    deps: {
      inline: ['vitest-canvas-mock'],
    },
  },
  resolve: {
    alias: {
      classnames: 'classnames-es-ts',
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/stories/index.ts'),
      name: '@fish/ui-design-code',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          vue: 'React',
        },
      },
    },
  },
});
