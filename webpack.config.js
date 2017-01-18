var webpack = require('webpack');
var nodeEnv = process.env.NODE_ENV || 'production';

var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: './dist/js/',
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
    }]
  },
  plugins: [
    // LiveReload
    new LiveReloadPlugin(),
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
  ]
}
