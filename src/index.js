const { resolve } = require('path')

module.exports = {
  name: 'vuepress-plugin-speech',

  clientRootMixin: resolve(__dirname, 'mixin.js'),

  enhanceAppFiles: resolve(__dirname, 'enhanceApp.js')
}