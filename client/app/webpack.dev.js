const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.common');

module.exports = () => {
  config.devServer = {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    inline: true,
    stats: {
      colors: true
    }
  };
  config.entry.bundle = ['babel-polyfill', 'react-dev-utils/webpackHotDevClient', './app/index.js']
  config.devtool = 'source-map';
  config.plugins = [
    ...config.plugins,
    new HtmlWebpackPlugin({
      title: 'NFQ_akademijos_stojimo_uzduotis',
      template: './index.html',
      chunks: ['bundle'],
      filename: 'index.html',
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ];
  return config;
};
