const path = require('path');
const devServer = require('./build/dev-server')
const theme = require('./theme');

function resolve (dir) {
  return path.join(__dirname, '.', dir);
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        ...theme
      ]
    });
}

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets',resolve('src/assets'))
      .set('comp',resolve('src/components'))
  },
  devServer
};
