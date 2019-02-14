const webpack = require('webpack')
const path = require('path')
const { sync } = require('glob')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

const loadersDir = path.join(__dirname, 'config', 'loaders')

const entry = require('./entry')
const output = require('./output')
const resolve = require('./resolve')

const loaders = {
  babel: require('./loaders/babel'),
  assets: require('./loaders/assets')
}

const css = require('./styles/css')
const postcss = require('./styles/postcss')
const sass = require('./styles/sass')

const config = {
  entry,
  output,
  resolve,
  mode: 'production',
  module: {
    rules: [
      loaders.babel, loaders.assets, {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }, {
        test: /\.(scss|sass)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          css,
          postcss,
          'resolve-url-loader',
          sass
        ]
      }
    ]
  },

  plugins: [
    require(path.resolve(__dirname, 'template')),
    new CleanWebpackPlugin(['dist'], { 
      root: path.resolve(__dirname, '..')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new LodashModuleReplacementPlugin,
    new UglifyJSPlugin({}),
    new MiniCssExtractPlugin({
      filename: 'stylesheets/[name].[hash].css', allChunks: true
    })
  ]
}

module.exports = config