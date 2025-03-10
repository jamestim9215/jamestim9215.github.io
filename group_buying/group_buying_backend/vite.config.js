import {resolve} from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/group_buying/group_buying/dist/' : './',
  build: {
    outDir: './dist',
    assetsDir: "assets",
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
})
