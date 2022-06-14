import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
// const { merge } = require('webpack-merge');
import { htmlWebpackPlugin, /*  moduleFederationPlugin,  */ definePlugin } from './plugins';
import 'webpack-dev-server';
// const { htmlWebpackPlugin, moduleFederationPlugin, definePlugin } = require('./plugins');
import commonConfig from './webpack.common';
// const commonConfig = require('./webpack.common');

// console.log({ htmlWebpackPlugin, moduleFederationPlugin, definePlugin });

// interface devConfigStructure extends commonConfigType {
//   mode: string;
//   output: {
//     publicPath: string;
//   };
//   devtool: string;
//   devServer: {
//     port: number;
//     host: string;
//     historyApiFallback: {
//       index: string;
//     };
//     allowedHosts: string;
//   };
//   plugins: any[];
// }

const devConfig: webpack.Configuration = {
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
  plugins: [definePlugin, htmlWebpackPlugin /* , moduleFederationPlugin */],
};

export default /* module.exports = */ merge(commonConfig, devConfig);
