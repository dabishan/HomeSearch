const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app:'./App/index.js',
  },
  output: {
    path: path.resolve('Dist'),
    filename: '[name].bundle.js',
    publicPath:'/'
  },
  module: {
    rules: [
      { 
        test: /\.[css|sass|scss]$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
                { loader: "css-loader" },
                { loader: "sass-loader" }
            ]
        })
    },
    {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: [{loader: "file-loader"}]
    },
    {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].style.css')
  ]
}