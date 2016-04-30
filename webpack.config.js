var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');


module.exports = {
  context: __dirname + '/client',
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/entry.js",
  output: {
    path: __dirname + "/client/dev/public/js",
    filename: "scripts.min.js"
  },
  module: {
   loaders: [
    { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
    { test: /\.css$/, loader: 'style-loader!css-loader'},
    { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
   ]
  },
  plugins: debug ? [] : [
    new CopyWebpackPlugin([{ from: 'assets' }]),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};