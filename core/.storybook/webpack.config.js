const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  config.entry.push('webpack-hot-middleware/client.js?reload=true');
  config.mode = process.env.NODE_ENV || 'development';

  config.devServer = {
    watchContentBase: true,
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true
  };

  config.module.rules[0].use[0].options.sourceType = 'unambiguous';

  config.module.rules.push({
    test: /.\.story\.tsx$/,
    exclude: /(src|general-stories)/,
    use: 'raw-loader'
  });
  config.resolve.extensions.push('.story.tsx');

  config.resolve.alias = {
    '@src': path.resolve(__dirname, '../dist/collection')
  };

  const jsRule = config.module.rules[0];
  const babelPresets = jsRule.use.find((l) => l.loader === 'babel-loader')
    .options.presets;
  const minifyPreset = babelPresets[1];
  if (minifyPreset) {
    minifyPreset[1].simplifyComparisons = false;
  }

  return config;
};
