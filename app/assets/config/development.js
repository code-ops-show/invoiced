const webpack = require('webpack')
const path = require('path')
const { sync } = require('glob')

const entry = require('./entry')
const output = require('./output')
const resolve = require('./resolve')

output.filename = 'javascripts/[name].js'
output.chunkFilename = 'javascripts/[name].chunk.js'

const loaders = {
  babel: require('./loaders/babel'),
  css: require('./loaders/css'),
  assets: require('./loaders/assets')
}

const css = require('./styles/css')
const postcss = require('./styles/postcss')
const sass = require('./styles/sass')

const config = {
  entry,
  output,
  resolve,
  mode: 'development',
  module: {
    rules: [
      loaders.babel, loaders.assets, loaders.css, {
      test: /\.(scss|sass)$/i,
      use: [{ loader: 'style-loader' }, css, postcss, sass]
    }]
  },

  plugins: [
    require(path.resolve(__dirname, 'template')),
  ],

  devtool: 'source-map',

  devServer: {
    hot: true,
    inline: true,
    watchOptions: {
      ignored: /node_modules/
    },
    historyApiFallback: true,
    proxy: {
      "/v1": "http://localhost:3000"
    }
  }
}

module.exports = config