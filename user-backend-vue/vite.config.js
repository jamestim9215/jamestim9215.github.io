import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
// import basicSsl from '@vitejs/plugin-basic-ssl'


// https://vitejs.dev/config/
export default defineConfig(
  {
    define: {
      'process.env': process.env
    },
    plugins: [
      vue(),
      // basicSsl()
    ],
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
  }
)
