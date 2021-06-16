const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    //[1]
    main: './src/index.js',
  },
  output: {
    //[2]
    path: path.join(__dirname, '..', 'dist'),
  },
  plugins: [
    //[3]
    new HtmlWebpackPlugin({
      title: 'Webpack Configuration Split',
    }),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src', 'app', 'components'),
    },
  },
};
