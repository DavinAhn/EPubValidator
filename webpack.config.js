const webpack = require('webpack');

module.exports = {
  entry: {
    index: `${__dirname}/src/app/app.jsx`,
  },
  output: {
    path: `${__dirname}/resources/js`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            ['transform-es2015-classes', { loose: true }],
            ['transform-proto-to-assign'],
          ],
        },
      },
    ],
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
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
