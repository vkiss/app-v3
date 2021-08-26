const path = require( "path" );
const webpack = require( "webpack" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const HtmlWebpackInlineSourcePlugin = require( "html-webpack-inline-source-plugin" );
const CopyPlugin = require( "copy-webpack-plugin" );
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve( __dirname, "dist" )
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader"
          },
        ],
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: "raw-loader"
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
      inlineSource: "main.bundle.js",
      title: "Vinicius Kiss - Desenvolvedor Frontend",
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
    } ),
    new HtmlWebpackInlineSourcePlugin( HtmlWebpackPlugin ),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin( {
      FILEWEIGHT: "71.776"
    } ),
    new CopyPlugin( {
      patterns: [
        { from: "./rootFiles", to: "./" },
      ],
    } ),
  ],
  devServer: {
    contentBase: "./dist",
    open: true
  },
};
