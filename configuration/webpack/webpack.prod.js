import { merge } from 'webpack-merge';
import {
  htmlWebpackPlugin,
  // optimizeCssAssetsPlugin,
  miniCssExtractPlugin,
  cleanWebpackPlugin,
  moduleFederationPlugin,
  definePlugin,
  terserPlugin,
} from './plugins';
import { scssProductionLoader } from './rules';
import commonConfig from './webpack.common';

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    // publicPath: `https://${process.env.QM_DOMAIN}/`,
    publicPath: `http://localhost/`,
  },
  optimization: {
    minimizer: [/* optimizeCssAssetsPlugin, */ terserPlugin, htmlWebpackPlugin],
  },
  plugins: [definePlugin, moduleFederationPlugin, cleanWebpackPlugin, miniCssExtractPlugin],
  module: {
    rules: [scssProductionLoader],
  },
};

export default merge(commonConfig, prodConfig);
