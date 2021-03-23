const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: path.resolve(__dirname, "obj/main.js"),
    server: path.resolve(__dirname, "obj/server.js")
  },
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: "[name]-bundle.js",
  },
  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".js"],
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            enforce: "pre",
            use: ["source-map-loader"],
        },
    ],
  },
};