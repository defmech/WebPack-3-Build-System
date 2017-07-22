var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require("path");

/**
 * Define Path
 */


var outputFolder = 'build';

module.exports = {
  devtool: 'source-map',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, outputFolder),
    filename: 'js/[name].js',
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
      loader: ExtractTextPlugin.extract('css-loader?url=false!postcss-loader!sass-loader')
    }]
  },
  plugins: [
    // HTML
    new HtmlWebpackPlugin({
      title: 'DEV! WebPack-3-Build-System',
      hash: true,
      template: './src/index.html',
    }),
    // css optimize
    new OptimizeCssAssetsPlugin(),
    // copy static
    new CopyWebpackPlugin([{
      from: './src/assets',
      to: 'assets',
    }]),
    // Clean build
    new CleanWebpackPlugin([outputFolder], {
      verbose: true,
      dry: false,
      exclude: []
    }),
    // sass
    new ExtractTextPlugin({
      filename: 'css/main.css',
      allChunks: true
    }),
    // env plugin
    new webpack.DefinePlugin({
      'proccess.env': {
        NODE_ENV: 'production',
      }
    })
  ],
}
