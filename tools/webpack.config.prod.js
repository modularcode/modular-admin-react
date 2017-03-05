const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');

module.exports = {
  entry: [
    config.CLIENT_DIR + '/main.js'
  ],
  output: {
    path: config.DIST_DIR_CLIENT,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
