var path = require('path');
var webpack = require('webpack');
module.exports = {
 entry: './frontend/src/index.js',
 mode: 'production',
 output: {
  path: path.join(__dirname, 'frontend'),
  filename: 'bundle.js'
 },
 module: {
  rules: [{
   loader: 'babel-loader',
   exclude: /node_modules/,
  },
  {
   test: /\.css$/,
   loader: "style-loader!css-loader"
  }
]
 }
}