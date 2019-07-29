const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');
const caminho = path.resolve(__dirname, 'node_modules')

module.exports ={
    entry: './src/index.jsx',
    output: {         
        path: path.resolve('./public'),
        filename: './app.js'
    },
    devServer: {                
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: caminho
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        rules: [{
            test: /.js[x]?$/,            
            exclude: caminho,
            use: {
                loader: "babel-loader"
            }
        },   
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
        },      
        { 
            test: /.css$/, 
            use: ['style-loader', 'css-loader'] 
        },
        {
            test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: [
            {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: 'fonts/'

                }
            }
            ]
        },        
        {
            test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
            loader: 'file'
        },
        { test: /\.s[a|c]ss$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }] },
        { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } },
        { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
        { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
        { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' }
    ]
    }

}