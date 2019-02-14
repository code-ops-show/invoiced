const { resolve } = require('path');

module.exports = {
  filename: 'javascripts/[name].[hash].js',
  chunkFilename: 'javascripts/[name].[hash].chunk.js',
  publicPath: '/',
  path: resolve(__dirname, '..', 'dist')
};