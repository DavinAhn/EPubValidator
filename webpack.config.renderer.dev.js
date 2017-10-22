import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';
import baseConfig from './webpack.config.renderer.base';
import checkEnv from './internal/checkenv';

checkEnv('development');

export default merge.smart(baseConfig, {
  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js',
  },

  watchOptions: {
    aggregateTimeout: 300,
    ignored: /node_modules/,
    poll: 1000,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
});
