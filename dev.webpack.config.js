const path = require("path");
const CircularDependencyPlugin = require("circular-dependency-plugin");

const config = {
  entry: "./src/index.js",
  mode: "development",
  plugins: [
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      include: /src/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    })
  ],
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "JSGameTools.dev.js",
    library: "JSGameTools",
    libraryTarget: "umd",
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
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader'
          },
        ],
      }
    ]
  }
};

module.exports = config;