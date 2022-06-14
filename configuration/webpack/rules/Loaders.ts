/**
 * This file contains all the loaders
 */

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const babelLoader = {
  test: /\.(ts|js)x?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
};

export const urlLoader = {
  test: /.(jpg|png)$/,
  use: {
    loader: 'url-loader',
  },
};

export const svgLoader = {
  test: /.svg$/,
  use: [
    {
      loader: 'svg-url-loader',
    },
  ],
};

export const styleSheetsLoader = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: ['style-loader', 'css-loader', 'sass-loader'],
};

export const scssProductionLoader = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
};
