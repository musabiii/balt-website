const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    stats: {
        children: true,
    },
    watch:true,
    mode: 'development',
    context: path.join(__dirname,'src'),
    entry: {main:"./index.js"},
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template:"./index.pug"
    }),
    // new CleanWebpackPlugin()
],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: "pug-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader'],
                // options:{
                //     name: '[path][name].[ext]',
                //     outputPath :  './images/',
                // }
            },
        ]
    }
}