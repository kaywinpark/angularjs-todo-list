const webpack = require('webpack');
const path = require('path');


const config = {
    entry: {
        app: path.join(__dirname, 'src', 'index.js'),
    },
    module: {
        loaders: [
            {
                // JS LOADER
                // Reference: https://github.com/babel/babel-loader
                // Transpile .js files using babel-loader
                // Compiles ES6 and ES7 into ES5 code
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        port: 8080
    }
};

module.exports = config;