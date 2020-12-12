const path = require("path");

const config = [{
  entry: {
    main: "./examples/src/main.js",
    tictactoe: "./examples/src/tictactoe.js",
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "examples/dist"),
    filename: "[name].js",
    globalObject: "typeof self !== \"undefined\" ? self : this"
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
            plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-runtime"]
          }
        }
      }
    ]
  },
}];

module.exports = config;