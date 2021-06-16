const { merge } = require('webpack-merge');

const commonConfig = require('./config/webpack.common');

module.exports = (env) => {
  const config = require('./config/webpack.' + env);
  return merge(commonConfig, config);
};

// module.exports = {
//   entry: './src/main.tsx',
//   output: {
//     path: __dirname + '/public',
//     filename: 'bundle.js',
//   },
// };
