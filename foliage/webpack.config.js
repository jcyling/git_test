const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader", 
          {
            loader: "css-loader", options: { importLoaders: 1 }
          },
          "postcss-loader"
        ]
      },
    ],
  },
  devServer: {
    open: true,
    watchContentBase: true,
    contentBase: path.resolve(__dirname, 'dist')
  },
};