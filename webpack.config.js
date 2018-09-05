/* webpack4 */
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html生成的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // scss文件转css文件需要这个(提取出css文件)
const ImageminPlugin = require('imagemin-webpack-plugin').default; // 压缩图片
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩js
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清空目录

module.exports = function (env, argv) {
    const isProduction = argv.mode === 'production'; // 是否是生产环境
    // 环境----开发环境
    let configEnvironment = {
        hash: '[hash:8].', // 图片和字体用到了这个hash
        chunkhash: '', // js用到了这个chunkhash
        contenthash: '', // css用到了这个contenthash
        min: '', // 第三方库是否引用压缩版(生产环境引用压缩版)
        isMinCss: false, // 是否压缩css
        isMinJs: false, // 是否压缩js
        isWatch: true, // 是否监听
        minView: {}, // 压缩视图模板文件
        devtool: '', // #source-map
    };
    const minimizer = [];
    const plugins = [
        // 插件----清空dist/assets目录下对应的项目文件
        new CleanWebpackPlugin(['dist'], {
            root: `${__dirname}/`,
            verbose: true,
            dry: false,
        }),
        // 插件----处理页面视图模板页面文件
        new HtmlWebpackPlugin({ // ui样式页，此处应该循环处理
            template: `./src/demo/views/pages/ui.html`, // 入口模板
            filename: `views/pages/ui.html`, // 出口模板
            // 需要引入的chunk,不配置就会引入所有被CommonsChunkPlugin提取出的公共js和所有入口js,模板视图文件里js的引入顺序和chunks里的排序无关,和CommonsChunkPlugin里的顺序有关(倒叙)
            chunks: ['ui', 'this-is-global-file-common', 'this-is-global-file-vendor', 'this-is-global-file-manifest'],
            minify: false, // 压缩视图模板文件
        }),
        new HtmlWebpackPlugin({ // word单词页，此处应该循环处理
            template: `./src/demo/views/pages/word.html`, // 入口模板
            filename: `views/pages/word.html`, // 出口模板
            // 需要引入的chunk,不配置就会引入所有被CommonsChunkPlugin提取出的公共js和所有入口js,模板视图文件里js的引入顺序和chunks里的排序无关,和CommonsChunkPlugin里的顺序有关(倒叙)
            chunks: ['word', 'this-is-global-file-common', 'this-is-global-file-vendor', 'this-is-global-file-manifest'],
            minify: false, // 压缩视图模板文件
        }),
        // 插件----提取css样式到文件
        new MiniCssExtractPlugin({filename: `css/pages/[name].${configEnvironment.contenthash}css`}),
    ];

    // 环境----生产环境
    if (isProduction) {
        configEnvironment = {
            hash: '[hash:8].', // 图片和字体用到了这个hash
            chunkhash: '[chunkhash].', // js用到了这个chunkhash
            contenthash: '[contenthash].', // css用到了这个contenthash
            min: 'min.', // 第三方库是否引用压缩版(生产环境引用压缩版)
            isMinCss: true, // 是否压缩css
            isMinJs: true, // 是否压缩js
            isWatch: false, // 是否监听
            minView: {
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
            },
            devtool: '#source-map', // #source-map
        };
        minimizer.push(new UglifyJsPlugin({cache: true, parallel: true, sourceMap: true})); // 插件----压缩js
        plugins.push(new ImageminPlugin({disable: false, pngquant: {quality: '95-100'}})); // 插件----压缩图片
    }

    return {
        // devtool----#source-map
        devtool: configEnvironment.devtool,
        // resolve----配置用来影响webpack模块解析规则
        resolve: {
            // 加速----默认的配置会采用向上递归搜索的方式去寻找node_modules,为了减少搜索我们直接写明node_modules的全路径
            modules: [`${__dirname}/node_modules/`],
            // 别名----引入开发版本还是生产版本
            alias: {
                // vue: `vue/dist/vue.${configEnvironment.min}js`,
                // axios: `axios/dist/axios.min.js`,
            },
        },
        // 忽略----从输出的bundle中排除依赖
        externals: {
            // jquery: 'window.jQuery',
            // laydate: 'window.laydate',
            // swiper: 'window.Swiper',
        },
        // 入口----配置
        entry: {
            'ui': './src/demo/js/pages/ui.js', // ui样式页，此处应该循环处理
            'word': './src/demo/js/pages/word.js', // word单词页，此处应该循环处理
            // 'this-is-global-file-vendor': ['zhf.extend'], // 公用的第三方包
        },
        // 出口----配置
        output: {
            path: `${__dirname}/dist/demo/`, // 出口路径，必须是绝对路径
            filename: `js/pages/[name].[id].bundle.${configEnvironment.chunkhash}js`, // 出的文件名
            publicPath: `../../`, // 静态资源引入的路径方式
            /*
            chunkFilename用来打包require.ensure方法中引入的模块,如果该方法中没有引入任何模块则不会生成任何chunk块文件
            比如在main.js文件中,require.ensure([],function(require){alert(11);}),这样不会打包块文件
            只有这样才会打包生成块文件require.ensure([],function(require){alert(11);require('./greeter')})
            或者这样require.ensure(['./greeter'],function(require){alert(11);})
            chunk的hash值只有在require.ensure中引入的模块发生变化,hash值才会改变
            注意:对于不是在ensure方法中引入的模块,此属性不会生效,只能用CommonsChunkPlugin插件来提取
            */
            chunkFilename: `js/chunks/[name].[id].chunk.${configEnvironment.chunkhash}js`,
        },
        // 优化----配置
        // optimization: {
        //     splitChunks: {
        //         chunks: 'async',
        //         minSize: 30000,
        //         maxSize: 0,
        //         minChunks: 1,
        //         maxAsyncRequests: 5,
        //         maxInitialRequests: 3,
        //         automaticNameDelimiter: '~',
        //         name: true,
        //         cacheGroups: {
        //             vendors: {
        //                 test: /[\\/]node_modules[\\/]/,
        //                 priority: -10
        //             },
        //             default: {
        //                 minChunks: 2,
        //                 priority: -20,
        //                 reuseExistingChunk: true
        //             }
        //         }
        //     }
        // },
        optimization: {
            // runtimeChunk: {
            //     name: 'this-is-global-file-manifest'
            // },
            splitChunks: {
                cacheGroups: {
                    // 注意: priority属性
                    // 其次: 打包业务中公共代码
                    common: {
                        name: 'this-is-global-file-common',
                        chunks: 'all',
                        priority: 0,
                        minSize: 0,
                        minChunks: 1,
                    },
                    // 首先: 打包node_modules中的文件
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'this-is-global-file-vendor',
                        chunks: 'all',
                        priority: 10,
                        minSize: 0,
                        minChunks: 1,
                    },
                },
            },
            minimizer: minimizer,
        },
        // 插件----配置
        plugins: plugins,
        // 监听----配置
        watch: configEnvironment.isWatch,
        // 模块----模块加载相关的配置
        module: {
            // rules----loader加载器的规则集合
            rules: [
                // loader----处理sass
                {
                    test: /\.(css|scss)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: configEnvironment.isMinCss, // css压缩
                            },
                        },
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
                // loader----es6转成es5
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: ['babel-loader'],
                },
                // loader----处理图片
                {
                    test: /\.(png|jp(e)?g|gif|svg|ico)(\?.*)?$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                                name: `images/[name].${configEnvironment.hash}[ext]`,
                            },
                        },
                    ],
                },
                // loader----处理字体
                {
                    test: /\.(woff|eot|ttf)(\?.*)?$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                                name: `fonts/[name].${configEnvironment.hash}[ext]`,
                            },
                        },
                    ],
                },
                // loader----处理音频
                {
                    test: /\.(mp3)(\?.*)?$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                                name: `audios/[name].${configEnvironment.hash}[ext]`,
                            },
                        },
                    ],
                },
                // loader----处理视图模板文件里的src
                {
                    test: /\.ejs/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                attrs: ['img:src', 'img:data-src', 'link:href', 'audio:src'],
                            },
                        },
                    ],
                },
            ],
        },
        // 重载----自动刷新
        devServer: {
            historyApiFallback: true,
            inline: true,
            open: true,
            port: 961,
            openPage: 'dist/demo/',
        },
    };
};
