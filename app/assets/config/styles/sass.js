const { resolve } = require('path');

module.exports = { 
  loader: 'sass-loader', 
  options: { 
    sourceMap: true,
    includePaths: [
      resolve(__dirname, '..', '..', 'src'), 
      'node_modules'
    ]
  }
};
