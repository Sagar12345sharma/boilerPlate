import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const configuration = {
  // Simulate the removal of files
  dry: true,
  // Write Logs to Console
  verbose: true,
  // Automatically remove all unused webpack assets on rebuild
  cleanStaleWebpackAssets: false,
};

export const cleanWebpackPlugin = new CleanWebpackPlugin(configuration);
