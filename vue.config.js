module.exports = {
   //管理eslint语法检查的信息
   lintOnSave:false,
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          ws: true,
          changeOrigin: true,
          pathRewrite:{
              '^/api':''
          }
        }
      }
    }
  }