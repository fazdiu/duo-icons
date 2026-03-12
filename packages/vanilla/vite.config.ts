import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import pkg from './package.json' with { type: 'json' };
import path from 'path';

export default defineConfig(({ command }) => {
    const isBuild = command === 'build';

    return {
        root: isBuild ? '.' : 'playground',
        plugins: [
            isBuild && dts({
                insertTypesEntry: true,
                include: ['src'],
                rollupTypes: true
            })
        ],
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
            outDir: resolve(__dirname, './dist'),
            emptyOutDir: true,
            lib: {
                entry: resolve(__dirname, 'src/index.js'),
                name: 'DuoIcons',
                formats: ['es', 'umd'],
                fileName: 'index',
            },
            rollupOptions: {
                external: [],
                output: {
                    globals: {},
                    // 2v backward compatibility; it will be removed in future versions
                    footer: 'if (typeof window !== "undefined") { window.duoIcons = window.DuoIcons; }'
                },
            },
            // sourcemap: true,
        },
    }
});
