

module.exports = {
    publicPath: process.env.NODE_ENV === "production" 
    ? 
    "./" 
    : "/",
    
  
    // 在yarn build時 生成檔案的目錄 default:'dist'
    outputDir: "dist",
  
    // 放置生成的靜態資源 (js、css、img、fonts) 的目錄。default: ''
    assetsDir: "assets",
  
    devServer: {
      index: "index.html", // 預設啟動serve 開啟index頁面
      
      host: '',
      port: 9900, // 埠號
      open: true, // 配置自動啟動瀏覽器
    },
  };
  