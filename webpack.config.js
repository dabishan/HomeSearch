const path = require('path');

module.exports = {
  entry: {
    app:'./HomeSearch/App_Plugins/HomeSearch/App/index.ts',
  },
  mode: 'development',
  output: {
    path: path.resolve('./HomeSearch/App_Plugins/HomeSearch/Dist'),
    filename: '[name].bundle.js',
    publicPath:'/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      { 
        test: /\.[css|sass|scss]$/,
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