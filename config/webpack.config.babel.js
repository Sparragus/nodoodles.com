import path from 'path'

const clientPath = path.join(__dirname, '..', 'client')

const config = {
  entry: {
    app: path.join(clientPath, 'index.js')
  },
  output: {
    path: path.join(__dirname, '..', 'build', 'client'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        clientPath
      ],
      loader: 'babel'
    }, {
      test: /\.css$/,
      include: [
        clientPath
      ],
      loaders: ['style', 'css']
    }]
  }
}

export default config
