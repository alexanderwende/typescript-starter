const path               = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode:      'development',
    entry:     './src/index.ts',
    devtool:   'eval-source-map',
    devServer: {
        contentBase: './dist'
    },
    module:    {
        rules: [
            {
                test:    /\.tsx?$/,
                use:     'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve:   {
        extensions: ['.ts', '.js']
    },
    plugins:   [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    output:    {
        filename: 'index.js',
        path:     path.resolve(__dirname, 'dist')
    }
};
