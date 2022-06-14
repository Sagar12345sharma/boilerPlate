const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const configuration = {
  name: 'questionMaker',
  filename: 'remoteEntry.js',
  exposes: {
    './QuestionMaker': './src/bootstrap',
  },
};

export const moduleFederationPlugin = new ModuleFederationPlugin(configuration);
