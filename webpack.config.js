var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

const HtmlWebPackPlugin = require("html-webpack-plugin");

var entryPoint = './views'
const publicPath = '/static/';

module.exports = {
context: __dirname,

entry: {
    index: entryPoint + '/index.jsx',
},

output: {
    path: path.resolve(__dirname, './static/'),
    publicPath,
    filename: '[name].bundle.js'
},

module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
        },
        {
            test: /\.(jpg|png|otf|svg)$/,
            loader: 'url-loader'
        },
        {
             test: /\.css$/,
             use: [
                 'style-loader',
                 'css-loader',
             ]

        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader"
                }
            ]
        }
    ]
},

plugins: [
    new BundleTracker({
      filename: './webpack-stats.json'
    })
  ],

}