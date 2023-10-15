/*
 * @Author: wen 439023672@qq.com
 * @Date: 2023-10-12 06:46:08
 * @LastEditors: wen 439023672@qq.com
 * @LastEditTime: 2023-10-13 06:51:02
 * @FilePath: \react-template\build\pro.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @fileName webpack.config.js
 * @description based.config|基础配置
 * @param mode|开发模式
 * @param entry|入口文件路径
 * @param output|打包输出配置
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = isDev => ({
  mode: isDev ? "development" : "production",
  entry: path.resolve(__dirname, "../src/main.jsx"),
  output: {
    clean: true,
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "../dist"), // 打包后的目录
  },
  resolve: {
    extensions: [".jsx", ".js"], // 如使用Ts测加上'.tsx', '.ts'
    alias: {
      "@": path.join(__dirname, "../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //排除内容不解析
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [  isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      //图像
      {
        test: /.(png|jpg|jepg|git|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, //限制在 10kb
          },
        },
        generator: {
          filename: "static/images/[name][ext]",
        },
      },
      // 视频
      {
        test: /.(mp4|mp3|webm)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: "static/medias/[name][ext]",
        },
      },
      //字体
      {
        test: /.(woff2|eot|ttf|otf)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: "static/fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css",
    }),
  ],
});
