var webpack = require('webpack');

var nodeEnv = process.env.NODE_ENV || 'production';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  // devtool: 'source-map',
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: './build/js/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: [
          ["es2015", {
            "modules": false
          }]
        ]
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css-loader!sass-loader')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader!css-loader")
    }]
  },
  plugins: [
    // css optimize
    new OptimizeCssAssetsPlugin(),
    // sass
    new ExtractTextPlugin({
      filename: '../css/main.css',
      allChunks: true
    }),
    // uglify js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    }),
    // env plugin
    new webpack.DefinePlugin({
      'proccess.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    })
  ],
}
