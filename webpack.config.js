const path = require('path');

const publicPath = path.join(__dirname, '/dist');
const srcPath = path.join(__dirname, '/src');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
              ['@babel/preset-env'],
            ],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    static: publicPath,
  },
};
