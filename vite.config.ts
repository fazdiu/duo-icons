import path from 'path';
import { defineConfig } from 'vite';
import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  esbuild: {
    banner: `/*!
 * @license ${pkg.license}
 * @module ${pkg.name}
 * @version ${pkg.version}
 * @author ${pkg.author}
 * @description ${pkg.description || ''}
 * Copyright (c) ${new Date().getFullYear()} ${pkg.author}
 */`,
    drop: []
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: false,
    target: 'es2015',
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'duoIcons',
      fileName: 'duo-icons',
    },
  },
});