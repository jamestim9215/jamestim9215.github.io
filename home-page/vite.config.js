import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [vue()],
  server: {
    port: 9000,
    cors: true,
    // https: true,
    // proxy: {
    //   "/dev": {
    //     target: "https://singda.com.tw",
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
  build:{
    target:['edge90','chrome90','firefox90','safari15']
  },
  base: './'

})
