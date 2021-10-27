const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/split.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js',
        hashFunction: "xxhash64"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    devtool: 'source-map',
};