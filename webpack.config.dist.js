const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'index': './src/js/components_vue/g-sort-tab/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'VueDraggableResizable',
        libraryTarget: 'umd',
    },
    devtool: false,
    resolve: {
        extensions: ['.js', '.vue'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
            },
        ],
    },
    externals: {
        vue: 'vue',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
        }),
    ],
};
