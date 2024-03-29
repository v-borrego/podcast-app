const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const basePath = __dirname;
const { BaseHrefWebpackPlugin } = require("base-href-webpack-plugin");
const BrotliGzipPlugin = require("brotli-gzip-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = (env = {}) => ({
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".vue"],
    alias: {
      vue: "vue/dist/vue.esm.js"
    }
  },
  mode: "development",
  entry: {
    app: "./main.ts",
    vendor: ["vue", "vue-router", "vuex"]
  },
  output: {
    path: path.join(basePath, "dist"),
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendor",
          chunks: "initial",
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/], // Add suffix to vue files to transpile ts scripts in vue files
            transpileOnly: true
          }
        }
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              "vue-style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  camelCase: true,
                  localIdentName: "[name]__[local]__[hash:base64:5]"
                }
              }
            ]
          },
          {
            use: [
              process.env.NODE_ENV !== "production"
                ? "vue-style-loader"
                : MiniCssExtractPlugin.loader,
              "css-loader"
            ]
          }
        ]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      alwaysWriteToDisk: true
    }),
    new BrotliGzipPlugin({
      asset: "[path].br[query]",
      algorithm: "brotli",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      quality: 11
    }),
    new BrotliGzipPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new BaseHrefWebpackPlugin({ baseHref: "/" }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.join(__dirname, "./tsconfig.json"),
      vue: true
    }),
    new VueLoaderPlugin(),
    env.report &&
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: true,
        generateStatsFile: true,
        reportFilename: "report/report.html",
        statsFilename: "report/stats.json"
      })
  ].filter(p => p)
});
