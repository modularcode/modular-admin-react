const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        enforce: "pre",
        exclude: config.NPM_DIR,
        loader: "eslint-loader",
        options: {
          configFile: config.ROOT_DIR + '/.eslintrc.client'
        }
      },
      {
        test: /\.(jsx|js)$/,
        exclude: config.NPM_DIR,
        use: [
          "babel-loader"
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  resolve: {
    modules: [
      config.NPM_DIR,
      config.CLIENT_DIR,
    ],
    extensions: ['.js', '.jsx']
  }
};
