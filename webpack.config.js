'use strict';

var webpack = require('webpack'),
    path = require('path');

module.exports = {
    context: __dirname + '/app',
    entry: {  
        app: ['webpack/hot/dev-server', './bootstrap.js']
    },
    output: {
        path: __dirname + '/app/dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel?presets[]=es2015!jshint',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};