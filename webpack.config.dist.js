const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 将单个文件或整个目录复制到构建目录
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清空目录
const RenameOutputPlugin = require('rename-output-webpack-plugin');

module.exports = function (env, argv) {
    const isProduction = argv.mode === 'production'; // 是否是生产环境
    // 压缩----配置
    const minimizer = [];
    // 环境----生产环境
    if (isProduction) {
        minimizer.push(new UglifyJsPlugin({cache: true, parallel: true, sourceMap: false})); // 插件----压缩js
    }
    const entry = {
        'g-confirm': './src/js/components_dom/g-confirm/index.js',
        'g-message': './src/js/components_dom/g-message/index.js',
    };
    const plugins = [
        // 插件----清空dist目录
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false,
        }),
        // 插件----vue-loader
        new VueLoaderPlugin(),
        // 插件----js转模块
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: argv.mode,
            },
        }),
        // 插件----将单个文件或整个目录复制到构建目录
        new CopyWebpackPlugin([{from: 'src/scss', to: 'scss'}]),
    ];
    Object.keys(entry).forEach(function (key) {
        const v = entry[key];
        // 插件----重命名输出的文件
        plugins.push(new RenameOutputPlugin({
            key: v.split('/js/')[1].replace('js/'),
        }));
    });
    return {
        entry: entry,
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/components_dom/[name].js',
            library: '[name]', // umd导出时的函数名
            libraryTarget: 'umd', // umd模块兼容处理
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
        // 优化----配置
        optimization: {
            minimizer: minimizer,
        },
        plugins: plugins,
    };
};
