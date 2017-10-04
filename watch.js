const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const compiler = webpack(Object.assign(webpackConfig, { plugins: [] }));
compiler.watch({
  aggregateTimeout: 300,
  poll: 1000,
}, (err, stats) => {
  err && console.error(err);
});
