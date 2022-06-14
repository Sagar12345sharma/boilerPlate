// const path = require('path');

import path from 'path';
import * as webpack from 'webpack';

import { babelLoader, urlLoader, svgLoader, styleSheetsLoader } from './rules';

// const { babelLoader, urlLoader, svgLoader, styleSheetsLoader } = require('./rules');

// export interface commonConfigType {
//   entry: string;
//   resolve: {
//     extensions: string[];
//   };
//   module: {
//     rules: any[];
//   };
// }
/* module.exports = */ const commonConfiguration: webpack.Configuration = {
  entry: path.resolve(__dirname, '..', '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      babelLoader,
      urlLoader,
      svgLoader,
      styleSheetsLoader,
    ],
  },
};
export default commonConfiguration;
