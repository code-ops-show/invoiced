module.exports = {
  test: /\.css$/i,
  use: [
    { loader: 'style-loader' }, 
    { loader: 'css-loader',
      options: {
        sourceMap: true
      }
    }
  ]
}
