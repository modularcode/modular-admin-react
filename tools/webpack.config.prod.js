const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const config = require('./config');

const webpackConfigBase = require('./webpack.config.base');

const webpackConfigDevelopment = {
  entry: [
    config.CLIENT_DIR + '/index.jsx'
  ],
  output: {
    path: config.DIST_DIR_CLIENT,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    })
  ]
};


const webpackConfig = webpackMerge.smart(webpackConfigBase, webpackConfigDevelopment);

// console.log(JSON.stringify(webpackConfig, null, 2));

module.exports = webpackConfig;
