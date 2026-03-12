import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  return {
    root: isBuild ? '.' : 'playground',
    plugins: [tailwindcss()],
    build: {
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true
    },
  }
});
