module.exports = { 
  loader: 'postcss-loader', 
  options: { 
    sourceMap: true,
    plugins: function() {
      return [require('autoprefixer')]
    } 
  } 
};
