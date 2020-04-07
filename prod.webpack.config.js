const path = require("path");

const config = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "JSGameTools.js",
    library: "JSGameTools",
    libraryTarget: "umd"
  }
};

module.exports = config;