import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        // https://vitejs.dev/config/build-options.html#build-emptyoutdir
        emptyOutDir: false,
        target: 'es2015',
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: path.resolve(__dirname, './src/index.js'),
            name: 'duoIcons',
            // the proper extensions will be added
            fileName: 'duo-icons',
        }
    }
})
