var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var node_modules = path.resolve(__dirname, 'node_modules')
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js')

module.exports = {
  entry: [{
    app: path.resolve(__dirname, 'client', 'index.js')
  }],

  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        // JS
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        // JSX
        test: /\.jsx$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        // CSS Stylesheets
        test: /\.css$/,
        loader: 'style!css'
      }, {
        // Less Stylesheets
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ],

    // Do not allow webpack to parse these:
    noParse: [pathToReact]
  },

  resolve: {
    // You don't need to type these extensions if you don't want to.
    extensions: ['', '.js', '.jsx'],

    // Use minified react. (Don't go through React JS and all its dependencies)
    // Reference: https://github.com/christianalfoni/react-webpack-cookbook/wiki/Optimizing-rebundling#running-minified-file-in-development
    alias: {
      'react': pathToReact
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Web Application'
    })
  ]
}
