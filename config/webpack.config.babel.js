import path from 'path'

const clientPath = path.join(__dirname, '..', 'client')

const config = {
  entry: {
    app: path.join(clientPath, 'index.js')
  },

  output: {
    path: path.join(__dirname, '..', 'build', 'client'),
    publicPath: 'http://localhost:8080',
    filename: '[name].js'
  },

  devtool: 'cheap-module-eval-source-map',

  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        clientPath
      ],
      exclude: /node_modules/,
      loader: 'babel'
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
  }
}

export default config
