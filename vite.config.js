import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pinia from 'pinia'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port:8080,
  },

  build:{
    rollupOptions:{
      external:[
          '/stores/AllStore.js',
          '/themes/epa_theme/images/sprite.artifact.svg',



      ]
    }
  }
})
