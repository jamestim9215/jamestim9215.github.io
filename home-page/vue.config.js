

module.exports = {
    publicPath: process.env.NODE_ENV === "production" 
    ? "./" 
    : "./",
  
    // 在yarn build時 生成檔案的目錄 default:'dist'
    outputDir: "./dist",
    // outputDir: "../wwwroot",
  
    // 放置生成的靜態資源 (js、css、img、fonts) 的目錄。default: ''
    assetsDir: "assets",
    
};