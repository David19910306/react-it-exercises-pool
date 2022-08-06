const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app){
  app.use(createProxyMiddleware('/api', {
    target: 'http://codesohigh.com/', //'https://elm.cangdu.org/',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }))
}
