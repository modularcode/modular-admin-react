const webpackMerge = require('webpack-merge');

const config = require('./config');

const webpackConfigBase = require('./webpack.config.base');

const webpackConfigDevelopment = {
  entry: [
    config.CLIENT_DIR + '/main.js'
  ],
  output: {
    path: config.DIST_DIR_CLIENT,
    filename: 'bundle.js'
  }
};


const webpackConfig = webpackMerge.smart(webpackConfigBase, webpackConfigDevelopment);

// console.log(JSON.stringify(webpackConfig, null, 2));

module.exports = webpackConfig;
