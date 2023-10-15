const getBaseCfg = require("./webpack.base");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(getBaseCfg(true), {
    devtool: "source-map",
    devServer: {
        port: 8080,
        compress: false,//压缩
        hot: true, 
        historyApiFallback: true, //解决404的问题
        static: {
            directory: path.join(__dirname, "../public")
        }
    }
})