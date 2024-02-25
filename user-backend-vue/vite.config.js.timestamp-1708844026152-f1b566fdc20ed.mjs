// vite.config.js
import { defineConfig } from "file:///C:/Users/james/Desktop/github/GithubIO/user-backend-vue/node_modules/vite/dist/node/index.js";
import path from "path";
import vue from "file:///C:/Users/james/Desktop/github/GithubIO/user-backend-vue/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\james\\Desktop\\github\\GithubIO\\user-backend-vue";
var vite_config_default = defineConfig(
  {
    define: {
      "process.env": process.env
    },
    plugins: [
      vue()
      // basicSsl()
    ],
    server: {
      port: 9e3,
      cors: true
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
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    },
    base: "./"
  }
);
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqYW1lc1xcXFxEZXNrdG9wXFxcXGdpdGh1YlxcXFxHaXRodWJJT1xcXFx1c2VyLWJhY2tlbmQtdnVlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqYW1lc1xcXFxEZXNrdG9wXFxcXGdpdGh1YlxcXFxHaXRodWJJT1xcXFx1c2VyLWJhY2tlbmQtdnVlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9qYW1lcy9EZXNrdG9wL2dpdGh1Yi9HaXRodWJJTy91c2VyLWJhY2tlbmQtdnVlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbi8vIGltcG9ydCBiYXNpY1NzbCBmcm9tICdAdml0ZWpzL3BsdWdpbi1iYXNpYy1zc2wnXHJcblxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKFxyXG4gIHtcclxuICAgIGRlZmluZToge1xyXG4gICAgICAncHJvY2Vzcy5lbnYnOiBwcm9jZXNzLmVudlxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgdnVlKCksXHJcbiAgICAgIC8vIGJhc2ljU3NsKClcclxuICAgIF0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgcG9ydDogOTAwMCxcclxuICAgICAgY29yczogdHJ1ZSxcclxuICAgICAgLy8gaHR0cHM6IHRydWUsXHJcbiAgICAgIC8vIHByb3h5OiB7XHJcbiAgICAgIC8vICAgXCIvZGV2XCI6IHtcclxuICAgICAgLy8gICAgIHRhcmdldDogXCJodHRwczovL21hdGVyaWFsLXBsYXRmb3JtYXBpLmF6dXJld2Vic2l0ZXMubmV0XCIsXHJcbiAgICAgIC8vICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgIC8vICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvZGV2LywgXCJcIiksXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfSxcclxuICAgIH0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBiYXNlOiAnLi8nXHJcbiAgfVxyXG4pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVcsU0FBUyxvQkFBb0I7QUFDbFksT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQUZoQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRO0FBQUEsRUFDYjtBQUFBLElBQ0UsUUFBUTtBQUFBLE1BQ04sZUFBZSxRQUFRO0FBQUEsSUFDekI7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQTtBQUFBLElBRU47QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFTUjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3RDO0FBQUEsSUFDRjtBQUFBLElBQ0EsTUFBTTtBQUFBLEVBQ1I7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
