import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';
import pkg from './package.json' with { type: 'json' };

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  return {
    root: isBuild ? '.' : 'playground',
    plugins: [react(), dts({ insertTypesEntry: true, rollupTypes: true })],

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
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true,
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'DuoIcons',
        fileName: 'index',
        formats: ['es', 'umd']
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
  }
});
