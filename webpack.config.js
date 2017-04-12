const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './index.js',
    vendor: 'moment',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
  ],
  module: {
    rules: [{
      test: /.(png|jpg)$/,
      use: 'file-loader?name=[name].[ext]',
    }],
  },
};
