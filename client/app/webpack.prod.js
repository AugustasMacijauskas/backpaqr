const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.common');

module.exports = () => {
  config.entry.bundle = ['babel-polyfill', './app/index.js'];
  config.devtool = 'source-map';
  config.plugins = [
    ...config.plugins,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new UglifyJSPlugin({ sourceMap: true }),
    new HtmlWebpackPlugin({
      title: 'Backpaqr_uzduotis',
      template: './index.html',
      chunks: ['bundle'],
      filename: 'index.html',
      hash: false,
    }),
  ];

  return config;
};