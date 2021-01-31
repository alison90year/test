
module.exports = {
  clientLogLevel: 'warning',
  historyApiFallback: true,
  hot: true,
  compress: false,
  open: 'Chrome',
  // publicPath: config.dev.assetsPublicPath,
  proxy: {
    '/dev': {
      pathRewrite: {
        '^/dev': ''
      },
      target: 'http://47.241.16.13/',
      // target: 'http://172.21.34.74/',
      ws: true,
      changeOrigin: true
    }
  }
}