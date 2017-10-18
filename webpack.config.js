const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const hintJS = require('./webpack/js.hint');
const images = require('./webpack/images');
const styleLint = require('./webpack/stylelint');
 
const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};
 
const common = merge([
  {
    entry: PATHS.source + '/pages/index/index.js',
    output: {
        path: PATHS.build,
        filename: 'js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.source + '/pages/index/index.pug'
        })
    ]
  },
  pug(),
  images()
]);

module.exports = function(env) {
    if (env === 'production') {
        return merge([
          common,
          extractCSS(),
          uglifyJS(),
      ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            styleLint(),
            sass(),
            css(),
            hintJS()
        ]);
    }
};