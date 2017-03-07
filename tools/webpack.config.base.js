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
        loader: "babel-loader",
      },
      {
        test:   /\.scss/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                config.NPM_DIR,
                config.CLIENT_DIR
              ]
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: []
            }
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        options: {
          limit: 100000
        }
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "application/font-woff"
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Modular Admin | ReactJS version',
      template: config.CLIENT_DIR + '/index.ejs',
    })
  ],
  resolve: {
    modules: [
      config.NPM_DIR,
      config.CLIENT_DIR,
    ],
    extensions: ['.js', '.jsx']
  }
};
