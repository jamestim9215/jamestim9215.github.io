import { defineConfig } from 'vite'
// import path from 'path'
// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(
  {
    server:{
      port: 5500,
      host: true
    },
    // plugins: [vue()]
    resolve: {
      // alias: {
      //   '@': path.resolve(__dirname, './src'),
      // },
    },
    base: './'
})
