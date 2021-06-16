const SystemBellPlugin = require('system-bell-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].js', //[2]
  },
  devServer: {
    //[3]
    compress: false,
    open: 'chrome',
    stats: 'errors-only',
    overlay: true,
  },
  plugins: [new SystemBellPlugin()], //[1]
};
