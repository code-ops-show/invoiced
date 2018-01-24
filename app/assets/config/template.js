const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = new HtmlWebpackPlugin({
  chunks: ['base', 'app', 'manifest'],
  filename: 'index.html',
  name: 'app_name',
  minify: { 
    collapseWhitespace: true
  },
  title: 'Welcome to Fronto JS',
  template: 'template.ejs',
  links: [
  ],
  scripts: [
  ],
  inject: false
})