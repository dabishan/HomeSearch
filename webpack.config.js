const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app:'./HomeSearch/App_Plugins/HomeSearch/App/index.ts',
  },
  mode: 'development',
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './HomeSearch/App_Plugins/HomeSearch/App/template.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      { 
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader" ]
      },
      {
          test: /\.(png|jpg|jpeg|svg)$/,
          use: [{loader: "file-loader"}]
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
  }
}