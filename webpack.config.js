// use MiniCssExtractPlugin.loader instead of style-loader if you want separate css files

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const webpackConfig = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  devServer: {
    hot: true,
    contentBase: 'dist',
    port: 9000,
  },
};

export default webpackConfig;
