const path = require('path');


const config = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/src'),
        publicPath: "/",
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        contentBase: "./src",
        port: 8080
    },

    module: {
        loaders: [
            {
                // JS LOADER
                // Reference: https://github.com/babel/babel-loader
                // Transpile .js files using babel-loader
                // Compiles ES6 and ES7 into ES5 code
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};

module.exports = config;