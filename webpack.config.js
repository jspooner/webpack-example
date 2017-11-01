const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack           = require('webpack');
const path              = require('path');

const ENV = process.env.NODE_ENV || 'development';

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: ENV === 'development',
  allChunks: true
});

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      template: './src/index.html',
      output: {
        publicPath: ''
      }
    })
  ],
  module: {
    rules: [{
      test: /\.html$/,
      use: ['html-loader'],
      exclude: [/index.html/]
    }, {
      test: /\.(scss|css)$/,
      loader: extractSass.extract({
        fallback: "style-loader",
        use: [{
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }]
      })
    }]
  }
};
