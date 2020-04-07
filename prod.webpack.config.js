const path = require("path");

const config = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "JSGameTools.js",
    library: "JSGameTools",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

module.exports = config;