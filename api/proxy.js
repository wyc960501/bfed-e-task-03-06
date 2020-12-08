/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''

  // 处理代理目标地址
  if (req.url.includes('/front')) {
    target = 'http://edufront.lagou.com/'
  } else if (req.url.startsWith('/boss')) {
    target = 'http://eduboss.lagou.com/'
  }

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true
  })(req, res)
}
