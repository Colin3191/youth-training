const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.json5$/,
        loader: "json5-loader",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    static: "./dist",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
