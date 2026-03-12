import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  root: 'playground',
  plugins: [react()],
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
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DuoIcons',
      fileName: 'index',
      formats: ['es'] //ESM is the preferred standard for modern React Native 
    },
    rollupOptions: {
      external: ['react', 'react-native', 'react-native-svg'],
      output: {
        globals: {
          react: 'React',
          'react-native': 'ReactNative',
          'react-native-svg': 'ReactNativeSvg'
        }
      }
    },
  },
  // This is where the magic happens to run react-native in vitejs!!!
  resolve: {
    alias: [
      // 1. Redirect the codegen to an empty module (this removes the "file not found" error)
      {
        find: /^react-native\/Libraries\/Utilities\/codegenNativeComponent$/,
        replacement: resolve(__dirname, 'node_modules/react-native-web/dist/exports/createElement')
      },
      // 2. Main mapping of React Native to Web using absolute path
      {
        find: 'react-native',
        replacement: resolve(__dirname, 'node_modules/react-native-web')
      },
      // 3. Mapping for SVG
      {
        find: 'react-native-svg',
        replacement: resolve(__dirname, 'node_modules/react-native-svg')
      }
    ],
    extensions: ['.web.tsx', '.web.ts', '.web.js', '.tsx', '.ts', '.js'],
  },
  optimizeDeps: {
    // This is vital to prevent Vite from attempting to analyze RN's insides
    include: ['react-native-web', 'react-native-svg'],
    esbuildOptions: {
      loader: { '.js': 'jsx' },
      resolveExtensions: ['.web.tsx', '.web.ts', '.web.js', '.tsx', '.ts', '.js'],
    },
  },
});
