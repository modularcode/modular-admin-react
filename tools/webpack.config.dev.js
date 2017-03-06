const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const config = require('./config');

const webpackConfigBase = require('./webpack.config.base');

const webpackConfigDevelopment = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    config.CLIENT_DIR + '/main.jsx'
  ],
  output: {
    path: config.DIST_DIR_CLIENT,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: config.DIST_DIR_CLIENT,
    historyApiFallback: true
  },
};


const webpackConfig = webpackMerge.smart(webpackConfigDevelopment, webpackConfigBase);

// console.log(JSON.stringify(webpackConfig, null, 2));

module.exports = webpackConfig;
