const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../avam-ammo/node_modules/avam-bg-services/')
  }
};