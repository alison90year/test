const path = require('path');

// 主题配置
const themeFiles = {
  themeBlue: [
  ]
}

// 默认主题
const defaultFiles = [
  './src/styles/theme/default.styl',
]

// 全局样式文件
const commonFiles = [
  './src/styles/common/variables.styl',
  './src/styles/common/functions.styl',
  './src/styles/index.styl'
]

let theme = themeFiles[process.env.ENV_CHANNEL] || defaultFiles;
theme.push(...commonFiles);
theme = theme.map((file) => {
  return path.resolve(__dirname, file);
});

module.exports = theme;
