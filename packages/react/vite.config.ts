import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: [{ find: '@/', replacement: `${__dirname}/src/` }],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@giftee/abukuma-react',
      formats: ['es', 'umd'],
      fileName: 'index',
      cssFileName: 'style',
    },
    rollupOptions: {
      external: [
        'react',
        /^react\/.*/,
        'react-dom',
        /react-dom\/.*/,
        '@giftee/abukuma-css',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
