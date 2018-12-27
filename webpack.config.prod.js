const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    app: './HomeSearch/App_Plugins/HomeSearch/App/index.ts',
  },
  mode: 'production',
  output: {
    path: path.resolve('./HomeSearch/App_Plugins/HomeSearch/Dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        // sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: [{ loader: "file-loader" }]
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].style.css' })
  ]
}