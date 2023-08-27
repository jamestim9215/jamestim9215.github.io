import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(
  {
    define: {
      'process.env': process.env
    },
    plugins: [vue()],
    server: {
      port: 9000,
      cors: true,
      proxy: {
        "/dev": {
          target: "https://ai-nb-thermal.azurewebsites.net",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev/, ""),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    base: './'
  }
)
