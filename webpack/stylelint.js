const styleLintPlugin = require('stylelint-webpack-plugin');
module.exports = function () {
  return {
    plugins: [
        new styleLintPlugin({
          syntax: 'scss',
          configFile: '.stylelintrc',
          context: 'source',
          
      })
    ]
  };
};