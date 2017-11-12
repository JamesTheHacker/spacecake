require('dotenv').config();
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const commonConfig = merge([
    {
        entry: [ 'bootstrap-loader', './src/js/app.js' ],
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'app.js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(html)$/,
                    use: {
                      loader: 'html-loader',
                    }
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader',
                    ]
                },
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            new GoogleFontsPlugin({
                local: false,
                fonts: [
                    { family: "Montserrat", variants: [ "400", "700" ]  },
                ]
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html'),
            }),
        ],
    }
]);

const devConfig = merge([
    parts.development()
]);

const productionConfig = merge([
    parts.production(),
    parts.DigitalOceanDeploy(
        process.env.KEY,
        process.env.SECRET,
        process.env.BUCKET,
        process.env.REGION,
        process.env.ENDPOINT
    )
]);

module.exports = () => {
    if (process.env.NODE_ENV === 'production') {
        return merge(commonConfig, productionConfig);
    }
    return merge(commonConfig, devConfig);
};