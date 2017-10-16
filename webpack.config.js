const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: `${__dirname}/src/renderer/app.jsx`,
  },
  output: {
    path: `${__dirname}/public/js`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: [/node_modules/],
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx|es6)$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
          plugins: [
            ['transform-es2015-classes', { loose: true }],
            ['transform-proto-to-assign'],
          ],
        },
      },
      {
        test: /\.ttf$/,
        exclude: [/node_modules/],
        loader: 'file-loader',
        options: {
          name: '../fonts/[name].[ext]',
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        exclude: [/node_modules/],
        loader: 'file-loader',
        options: {
          name: '../images/[name].[ext]',
        },
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false,
      mangle: true,
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin({
      filename: '../css/style.css',
    }),
  ],
};
