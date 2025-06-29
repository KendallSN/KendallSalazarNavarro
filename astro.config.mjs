// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://SHENNIX.github.io',
  base: '',
  output: 'static',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/layouts': path.resolve(__dirname, 'src/layouts'),
        '@/pages': path.resolve(__dirname, 'src/pages'),
        '@/assets': path.resolve(__dirname, 'src/assets')
      }
    }
  }
});
