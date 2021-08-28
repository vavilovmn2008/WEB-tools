const {resolve} = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports ={
    mode: "development",
    entry: './main.js',
    output: {
        filename: 'main.[contenthash].js',
        path: resolve (__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.(mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
            },
                
                {
                    test: /\.scss$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'], 
                    },
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')}),
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
        ],
    devServer: {
        port: 9000
    }
}