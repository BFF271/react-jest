'use strict';
const path = require('path');
const webpack = require('webpack');

const isWebpackDevServer = process.argv.filter(a => path.basename(a) === 'webpack-dev-server').length;

const isWatch = process.argv.filter(a => a === '--watch').length

const plugins =
  isWebpackDevServer || !isWatch ? [] : [
    function(){
      this.plugin('done', function(stats){
        process.stderr.write(stats.toString('errors-only'));
      });
    }
  ]
;

module.exports = {
  devtool: 'eval-source-map',

  devServer: {
    contentBase: '.',
    port: 4000,
    // stats: 'errors-only',
  },

  entry: {
    main: './src/index.jsx',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    pathinfo: true,
    filename: '[name].js'
  },

  module: {
    rules: [
      // Javascript and JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-2', 'react']
          }
        }
      },
      // sass and css
      {
        test: /\.(scss|sass|css)$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },

  resolve: {
    alias: {
      ducks:   path.resolve(__dirname, 'src/ducks'),
      components: path.resolve(__dirname, 'src/components'),
    },
    modules: [ 'node_modules' ],
    extensions: [ '.js', '.jsx']
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ].concat(plugins)
};
