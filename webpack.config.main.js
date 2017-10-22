import path from 'path';
import webpack from 'webpack';
import checkEnv from './internal/checkenv';

checkEnv('production');

export default {
  devtool: 'source-map',

  entry: {
    index: path.join(__dirname, 'src', 'main', 'main.js'),
  },

  output: {
    path: __dirname,
    filename: 'index.js',
  },

  target: 'electron-main',

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
          presets: ['es2015'],
          plugins: [
            ['transform-es2015-classes', { loose: true }],
            ['transform-proto-to-assign'],
          ],
        },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    }),

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

  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false,
  },
};
