require('dotenv').config();
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const commonConfig = merge([
    {
        entry: [ 
            'font-awesome-webpack!./config/font-awesome.config.js',
            './src/js/entry.js'
        ],
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: 'app.js',
            publicPath: '/'
        },
        node: {
            fs: 'empty' // https://github.com/webpack-contrib/css-loader/issues/447#issuecomment-285598881
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
                    use: {
                        loader: 'file-loader'
                    }
                },
                { 
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: {
                        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
                    }
                },
                { 
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: {
                        loader: 'file-loader'
                    }
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
                'process.env.SENTRY_DSN': JSON.stringify(process.env.SENTRY_DSN || null)
            }),
            new GoogleFontsPlugin({
                local: false,
                fonts: [
                    { family: "Montserrat", variants: [ "400", "700" ]  },
                ]
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/index.html'),
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