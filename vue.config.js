const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //打包时将.map文件忽略
  productionSourceMap:false,
  transpileDependencies: true,
  lintOnSave: false,
  //代理跨域服务器
  devServer: {
    proxy: {
      '/api': {
        'target': 'http://gmall-h5-api.atguigu.cn',
        'changeOrigin': true,
        // 'pathRewrite': { '^/api' : '' },
      },
    }
  },
})
