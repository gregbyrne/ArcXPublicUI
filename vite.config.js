import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
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
          '../../stores/Allstore',
        '../stores/Allstore',
        './stores/Allstore',
        '../../stores/Allstore.js',
        '../stores/Allstore.js',
        './stores/Allstore.js',



      ]
    }
  }
})
