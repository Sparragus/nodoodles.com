import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const clientPath = path.join(__dirname, '..', 'client')

const config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    path.join(clientPath, 'index.js')
  ],

  output: {
    path: path.join(__dirname, '..', 'build', 'client'),
    publicPath: 'http://0.0.0.0:8080/',
    filename: 'app.js'
  },

  devtool: 'cheap-module-eval-source-map',

  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        clientPath
      ],
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }, {
      test: /\.css$/,
      include: [
        clientPath
      ],
      loaders: ['style', 'css']
    }]
  },

  devServer: {
    contentBase: path.join(__dirname, '..', 'build', 'client'),
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000'
      }
    },
    port: 8080
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      templateContent: htmlTemplate()
    })
  ]
}

function htmlTemplate () {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charSet='utf-8'/>
    <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1'/>
    <meta name='viewport'
      content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' />
    <base href='/'>
    <title>No Doodles</title>
  </head>
  <body>
    <div id='app'/>
  </body>
</html>`
}

export default config
