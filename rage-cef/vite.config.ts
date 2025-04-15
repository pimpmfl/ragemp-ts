import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        // list the .html files that the rage-client is going to use
        helloWorld: resolve(__dirname, 'src/modules/hello-world/index.html'),
      },
    },
    outDir: '../dist/client_packages/cef',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
