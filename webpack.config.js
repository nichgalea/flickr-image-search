const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dotenv = require("dotenv");
dotenv.config();

const basePath = path.join(__dirname, "src");

module.exports = {
  target: "web",
  entry: path.join(basePath, "app.jsx"),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: "dashes"
            }
          },
          "sass-loader",
          { loader: "postcss-loader", options: { plugins: [autoprefixer] } }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${basePath}/index.html`
    }),
    new webpack.DefinePlugin({
      API_KEY: JSON.stringify(process.env.API_KEY)
    })
  ]
};
