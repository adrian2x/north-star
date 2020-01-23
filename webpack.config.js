const path = require("path");

const buildENV = process.env.NODE_ENV ? process.env.NODE_ENV : "development";

module.exports = {
  mode: buildENV,
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        include: /src/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "postcss-sass-loader"],
        exclude: /node_modules/,
        include: /src/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
};
