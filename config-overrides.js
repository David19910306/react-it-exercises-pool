const {override, addWebpackAlias} = require('customize-cra')
const addLessLoader = require('customize-cra-less-loader')
const path = require('path')

module.exports = override(
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {},
        localIdentName: "[path][name]__[local]--[hash:base64:5]"
      }
    }
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  })
)
