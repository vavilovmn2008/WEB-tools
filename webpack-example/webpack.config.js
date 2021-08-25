const {resolve} = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


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
                test: /\.(png|jpe?g|gif|mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
            },
                {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], 
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
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        port: 9000
    }
}