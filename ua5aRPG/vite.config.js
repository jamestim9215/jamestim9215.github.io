import { defineConfig } from 'vite'
import path from 'path'
// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(
  {
    // plugins: [vue()],
    server:{
      port: 5500,
      host: true
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    base: './'
})
