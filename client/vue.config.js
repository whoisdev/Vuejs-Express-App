module.exports = {
  pluginOptions: {
    quasar: {
      rtlSupport: true,
      treeShake: true
    }
  },
  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar[\\\/]/
  ],
  outputDir : __dirname + '/../server/public',
  devServer : {
    proxy : {
      '/api' : {
        target : 'http://localhost:3000'
      }
    }
  }
}
