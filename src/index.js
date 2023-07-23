const { resolve } = require('path')

module.exports = (options) => ({
  name: 'vuepress-plugin-speech',

  clientRootMixin: resolve(__dirname, 'mixin.js'),

  enhanceAppFiles: resolve(__dirname, 'enhanceApp.js'),

  async clientDynamicModules () {
    return {
      name: 'speech-plugin-options.js',
      content: `export default ${JSON.stringify(options)}`
    }
  },
})