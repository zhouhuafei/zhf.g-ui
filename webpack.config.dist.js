/* webpack4 */
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 将单个文件或整个目录复制到构建目录
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清空目录
const glob = require('glob');

module.exports = function (env, argv) {
    const isProduction = argv.mode === 'production'; // 是否是生产环境
    // 压缩----配置
    const minimizer = [];
    // 环境----生产环境
    if (isProduction) {
        minimizer.push(new UglifyJsPlugin({cache: true, parallel: true, sourceMap: false})); // 插件----压缩js
    }
    const entry = {};
    const files = glob.sync('./src/js/com*/**/*.js');
    files.forEach(function (v) {
        const key = v.split('/js/')[1].replace('.js', '');
        entry[key] = v;
    });
    const plugins = [
        // 插件----清空dist目录
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false,
        }),
        // 插件----vue-loader
        new VueLoaderPlugin(),
        // 插件----编译时期可以创建全局变量
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: argv.mode,
            },
        }),
        // 插件----将单个文件或整个目录复制到构建目录
        new CopyWebpackPlugin([{from: 'src/scss', to: 'scss'}]),
    ];
    return {
        entry: entry,
        output: {
            path: `${__dirname}/dist`,
            filename: 'js/[name].js',
            library: '[name]', // umd导出时的函数名
            libraryTarget: 'umd', // umd模块兼容处理
        },
        devtool: false,
        // resolve----配置用来影响webpack模块解析规则
        resolve: {
            // 加速----默认的配置会采用向上递归搜索的方式去寻找node_modules,为了减少搜索我们直接写明node_modules的全路径
            modules: [`${__dirname}/node_modules/`],
            // 别名----引入开发版本还是生产版本
            alias: {
                '@': `${__dirname}/src`,
            },
            // 后缀----如果不加后缀，则默认按以下后缀查找文件。
            extensions: ['.js', '.vue', '.scss', '.css', '.json'],
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
            // jquery: 'window.jQuery',
            // laydate: 'window.laydate',
            // swiper: 'window.Swiper',
            // vue: 'window.Vue',
        },
        // 优化----配置
        optimization: {
            minimizer: minimizer,
        },
        plugins: plugins,
    };
};
