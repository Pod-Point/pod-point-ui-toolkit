const webpack = require('webpack');
const config = require('./config');
require('babel-polyfill');

var isProd = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: config.src.js + 'script.js',
    output: {
        path: __dirname + config.dist.js,
        filename: 'script.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map',
    plugins: isProd ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: true
        })
    ] : [

    ]
};
