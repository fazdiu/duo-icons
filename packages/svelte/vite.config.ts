import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';
import pkg from './package.json' with { type: 'json' };

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  return {
    root: isBuild ? '.' : 'playground',
    plugins: [svelte(), isBuild && dts({
      insertTypesEntry: true,
      rollupTypes: true,
      include: ['src'],
      // Important for Svelte: helps process component types
      compilerOptions: {
        declaration: true,
        declarationMap: true
      }
    })],
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
        external: ['svelte'],
        output: {
          globals: {
            svelte: 'svelte',
          }
        },
      },
    },
  }
});
