const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: '/src/js/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/dest/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: [
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: __dirname,
      exclude: /node_modules/
    },
    {
      test: /\.sass$/,
      loaders: ['style', 'css', 'sass?indentedSyntax']
    }
  ]
}
