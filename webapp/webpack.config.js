var path = require('path');
var webpack = require('webpack');

var env = {
  NODE_ENV: "development"
};

var config = {
  devtool: 'cheap-module-eval-source-map',
  // entry: {
  //   app: './public/src/index.js',
  //   vendor: [
  //     'react',
  //     'react-router',
  //     'redux',
  //     'react-dom',
  //     'lodash'
  //   ]
  // },

  entry: [
    './public/src/index.js',
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
   // root: [ path.join(__dirname, 'app') ]
  },
  output: {
    path: path.join(__dirname, '/public/src'),
    filename: 'bundle.js',
    publicPath: "/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filname: 'vendor.js'
    // })
  ],
  module: {
    loaders: [
          {
              test: /\.js$/,
              loader: "babel",
              query: {
                presets: [ "es2015", "react", "react-hmre", "stage-1" ]
              },
              exclude: /node_modules/,
          }
      ]
  }
};

module.exports = config;