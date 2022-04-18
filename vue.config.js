const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //代理跨域服务器
  devServer: {
    proxy: {
      '/api': {
        'target': 'http://39.98.123.211',
        'changeOrigin': true,
        // 'pathRewrite': { '^/api' : '' },
      },
    }
  },
})
