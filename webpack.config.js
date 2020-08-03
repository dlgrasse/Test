const baseConfigFunction = require('@sas/nova-scripts/config/webpack-base.config');
const webpack = require('webpack');

const ReactPluginConfig = new webpack.ProvidePlugin({ 'React':'react' });

module.exports = function(config) {
  const baseConfig = baseConfigFunction(config.env);
  
  baseConfig.plugins.push(ReactPluginConfig);
  
  return {
    ...baseConfig
  };
};
