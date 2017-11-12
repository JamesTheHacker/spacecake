const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require('path');
const PurifyCSSPlugin = require('purifycss-webpack');
const S3Plugin = require('webpack-s3-plugin');

exports.development = ({host, port} = {}) => ({
    output: {
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host,
        port,
    }
});

exports.production = () => ({
    output: {
        publicPath: `/${process.env.BUCKET}/`
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
            purifyOptions: {
                minify: true
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            minify: {
                removeAttributeQuotes: true,
                removeComments: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true
            }
        }),
        new MinifyPlugin(
            {
                mangle: true
            },
            {
                comments: false
            })
    ]
    
});

exports.DigitalOceanDeploy = (
    accessKeyId,
    secretAccessKey,
    bucket,
    region = 'nyc3',
    endpoint = 'nyc3.digitaloceanspaces.com'
) => ({
    plugins: [
        new S3Plugin({
            s3Options: {
                accessKeyId,
                secretAccessKey,
                region,
                endpoint
            },
            s3UploadOptions: {
              Bucket: bucket
            },
        })
    ]
});