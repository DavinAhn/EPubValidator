import chalk from 'chalk';
import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import baseConfig from './webpack.config.renderer.base';
import checkEnv from './internal/checkenv';

checkEnv('production');

const buildPath = path.join(__dirname, 'build');

export default merge.smart(baseConfig, {
  output: {
    path: path.join(buildPath, 'public', 'js'),
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    }),

    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'package.json'), to: buildPath },
      { from: path.join(__dirname, 'index.js'), to: buildPath },
      { from: path.join(__dirname, 'LICENSE'), to: buildPath },
      { from: path.join(__dirname, 'public', 'index.html'), to: path.join(buildPath, 'public') },
      { from: path.join(__dirname, 'libs'), to: path.join(buildPath, 'libs') },
    ], { copyUnmodified: true }),
  ],
});
