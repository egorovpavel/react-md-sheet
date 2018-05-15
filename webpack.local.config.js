const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
  entry: ['babel-polyfill','./example/index.js'],
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'react-md-sheet': path.resolve(__dirname, './src/index'),
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./example/index.html",
      filename: "./index.html"
    })
  ]
};
