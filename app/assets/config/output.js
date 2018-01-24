const { resolve } = require('path');

module.exports = {
  filename: 'javascripts/[name].[chunkhash].js',
  chunkFilename: 'javascripts/[name].[chunkhash].chunk.js',
  publicPath: '/',
  path: resolve(__dirname, '..', 'dist')
};
