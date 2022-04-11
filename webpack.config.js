//usar common js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle[hash].js",
  },
  //remove license file
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   //order matters
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: { modules: true },
      //     },
      //   ],
      // },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        //order matters
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true },
          },
          "sass-loader"
        ],
      },
      {},
      {},
    ],
  },
  devServer: {
    port: 3000,
  },
};
