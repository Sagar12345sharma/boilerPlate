import HtmlWebpackPlugin from 'html-webpack-plugin';

const configuration = {
  filename: 'index.html',
  template: './public/index.html',
  minify: {
    collapseWhitespace: true,
    keepClosingSlash: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
  },
};

export const htmlWebpackPlugin = new HtmlWebpackPlugin(configuration);
