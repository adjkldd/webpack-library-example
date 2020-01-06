const path = require('path')

module.exports = [
  'source-map'
].map(devtool => ({
  mode: 'development',
  entry: './index.amd.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    library: 'foo',
    libraryTarget: 'umd',
  },
  devtool,
  externals: {
    jquery: {
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: '$',
      root: '$',
    }
  },
}));
