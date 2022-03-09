const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")



module.exports = {
    mode: 'development',
    entry: './public/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3330,
        watchContentBase: true,
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            
            
            
        ]
    },

    plugins: [
        new NodePolyfillPlugin()
    ]
}