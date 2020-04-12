const path = require("path");

const config = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "JSGameTools.js",
    library: "JSGameTools",
    libraryTarget: "umd"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  }
};

module.exports = config;