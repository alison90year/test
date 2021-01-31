const AutoPrefixer = require("autoprefixer");
const px2rem = require("postcss-px2rem");
module.exports = ({
  file
}) => {
  let remUnit;
  // 判断条件 请自行调整 
  if (file && file.dirname && file.dirname.indexOf("vant") > -1) {
    remUnit = 37.5;
  } else {
    remUnit = 75;
  }
  return {
    plugins: [px2rem({
      remUnit: remUnit
    }), AutoPrefixer()]
  };
};
