const { merge } = require('webpack-merge');
const common = require('./webpack.common');
// const webpack = require("webpack");
const path = require('path');
    
module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        watchFiles: ['index.html', 'src/**/*'],
        open: true,

        client: {
            overlay: {
                // logging: 'info'
                errors: true,
                warnings: false,
            },
        }
    },
});