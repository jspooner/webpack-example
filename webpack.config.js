const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack           = require('webpack');
const path              = require('path');

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  allChunks: true
});

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      output: {
        publicPath: ''
      }
    })
  ],
  module: {
    rules: [
      { 
        test: /\.html$/, 
        use: ['html-loader'],
        exclude: [ /index.html/ ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader', 
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader', 
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};

