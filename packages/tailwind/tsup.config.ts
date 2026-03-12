import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/plugin.ts'],
  format: ['cjs', 'esm'], // Soporte para proyectos viejos y nuevos
  dts: true,              // Genera los archivos .d.ts automáticamente
  clean: true,
  minify: true,
});
