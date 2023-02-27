const path = require('path');
// 合併不同配置
const { merge } = require('webpack-merge');
// 讓 Webpack 能讀取到 .env 全域變數配置檔案
const Dotenv = require('dotenv-webpack');
// 視覺化打包分析工具
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// config
const modules = require('./config/modules');
const plugins = require('./config/plugins');
const resolve = require('./config/resolve');

const config = {
  mode: 'development',
  output: {
    path: path.resolve('dist'),
    filename: 'js/index.js',
    clean: true,
  },
  devtool: 'inline-source-map',
  // 只有開發模式有用。需先安裝 webpack-dev-server
  devServer: {
    port: 3000,
    // 在本地使用 BrowserRouter 才不會掛掉
    historyApiFallback: true,
    // 給他字串就可以抓取你的靜態資源
    static: 'src',
  },
  module: {
    rules: [modules.cssLoader, modules.sassLoader, modules.imageLoader, modules.babelLoader],
  },
  // 快取。提升打包速度，會緩存在 node_modules 內。
  cache: {
    type: 'filesystem', // 為了做其他配置
  },
  // dev 專屬的 plugins
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
};

module.exports = merge(config, plugins, resolve);
