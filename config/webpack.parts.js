const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require('path');
const S3Plugin = require('webpack-s3-plugin');

exports.development = ({host, port} = {}) => ({
    output: {
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host,
        port
    }
});

exports.production = (options = {}) => ({
    output: {
        publicPath: `/${process.env.BUCKET}/`
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.ejs'),
            minify: {
                removeAttributeQuotes: true,
                removeComments: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true
            }
        }),
        new MinifyPlugin({ mangle: true }, { comments: false })
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