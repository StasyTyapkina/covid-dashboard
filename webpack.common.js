const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'img//[name].[ext]',
              limit: 8192,
              /*fallback: require.resolve('responsive-loader'),
              quality: 85,*/
            },
          },
        ],
      },
      // FONT LOADER
     {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
     },
    ],
  },
  devtool: `inline-source-map`,
};