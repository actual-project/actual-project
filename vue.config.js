module.exports = {
   //管理eslint语法检查的信息
   lintOnSave:false,
    devServer: {
      proxy: {
        '/api': {//接口信息，即带有api的文件才可以跨域
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