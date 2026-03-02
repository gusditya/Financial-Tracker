import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

import { resolve } from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        news: resolve(__dirname, 'src/pages/news.html'),
        stocks: resolve(__dirname, 'src/pages/stocks.html'),
      },
    },
  },
});
