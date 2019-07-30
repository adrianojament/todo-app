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
                loader: "babel-loader",
                options: {                    
                    plugins: [require('plugin-transform-object-rest-spread')] // added
                }
            }
        },   
        {
            test: /\.scss$/,            
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
        },
        {
            test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
            loader: 'file'
        }     
    ]
    }

}