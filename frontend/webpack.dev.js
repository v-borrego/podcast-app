const merge = require("webpack-merge");
const configCommon = require("./webpack.common.js");

module.exports = env =>
  merge(configCommon(env), {
    devServer: {
      port: 8555,
      historyApiFallback: true
    },
    optimization: {
      minimize: false
    }
  });
