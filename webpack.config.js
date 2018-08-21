const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const commonConfigs = {
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};

const serverConfig = {
  ...commonConfigs,
  context: path.resolve(__dirname, 'src/server'),
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist/server'),
    filename: 'server.js'
  },
  target: 'node',
  externals: { express: 'commonjs express' },
  plugins: [
    new CopyWebpackPlugin(['app.yaml', 'package.json'])
  ]
};

module.exports = [serverConfig];
