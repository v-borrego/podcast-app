const merge = require("webpack-merge");
const configCommon = require("./webpack.common.js");

module.exports = env =>
  merge(configCommon(env), {
    optimization: {
      minimize: true
    }
  });
