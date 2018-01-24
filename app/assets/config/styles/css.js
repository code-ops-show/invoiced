module.exports = { 
  loader: 'css-loader',
  options: { 
    sourceMap: true,
    modules: true,
    importLoader: 1,
    localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
  }
};
