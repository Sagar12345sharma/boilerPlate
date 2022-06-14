const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    // publicPath: `https://${process.env.QM_DOMAIN}/`,
    publicPath: `http://localhost:3000/`,
  },
  devtool: 'source-map',
  devServer: {
    // port: process.env.APP_PORT,
    port: 3000,
    // host: "0.0.0.0",
    host: 'localhost',
    historyApiFallback: {
      index: '/',
    },
    allowedHosts: 'all',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // new ModuleFederationPlugin({
    //   name: 'questionMaker',
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './QuestionMaker': './src/bootstrap',
    //   },
    // }),
  ],
};

module.exports = merge(commonConfig, devConfig);
