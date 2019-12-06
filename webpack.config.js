const path = require('path');

module.exports = {
  entry: './src/game.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  performance: { hints: false },
  resolve: {
  	alias: {
  		'~': path.resolve( __dirname, 'src' )
  	},
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};