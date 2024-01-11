import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9000,
    cors: true,
    // https: true,
    // proxy: {
    //   "/dev": {
    //     target: "https://material-platformapi.azurewebsites.net",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/dev/, ""),
    //   },
    // },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: './'
})
