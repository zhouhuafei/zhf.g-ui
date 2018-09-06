/* webpack4 */
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html生成的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // scss文件转css文件需要这个(提取出css文件)
const ImageminPlugin = require('imagemin-webpack-plugin').default; // 压缩图片
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩js
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清空目录

module.exports = function (env, argv) {
    const isProduction = argv.mode === 'production'; // 是否是生产环境
    console.log('argv.mode', argv.mode);
    // 环境----开发环境
    let configEnvironment = {
        hash: '[hash:8].', // 图片和字体用到了这个hash
        chunkhash: '', // js用到了这个chunkhash
        contenthash: '', // css用到了这个contenthash
        min: '', // 第三方库是否引用压缩版(生产环境引用压缩版)
        isMinCss: false, // 是否压缩css
        isWatch: true, // 是否监听
        minView: {}, // 压缩视图模板文件
        devtool: '', // #source-map
    };
    // 环境----生产环境
    if (isProduction) {
        configEnvironment = {
            hash: '[hash:8].', // 图片和字体用到了这个hash
            chunkhash: '[contenthash].', // webpack3时js用到了这个chunkhash，webpack4时js需要使用contenthash。否则修改css会导致js的hash值改变。
            contenthash: '[contenthash].', // css用到了这个contenthash
            min: 'min.', // 第三方库是否引用压缩版(生产环境引用压缩版)
            isMinCss: true, // 是否压缩css
            isWatch: false, // 是否监听
            minView: {
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
            },
            devtool: '#source-map', // #source-map
        };
    }
    // 压缩----配置
    const minimizer = [];
    // 插件----配置
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
            // 需要引入的chunk,不配置就会引入所有被CommonsChunkPlugin提取出的公共js和所有入口js,模板视图文件里js的引入顺序和chunks里的排序无关,和CommonsChunkPlugin里的顺序有关(倒叙)。webpack4中和priority属性值有关(等级高的优先引入)。
            chunks: ['ui', 'this-is-global-file-common', 'this-is-global-file-vendor'],
            minify: configEnvironment.minView, // 压缩视图模板文件
        }),
        new HtmlWebpackPlugin({ // word单词页，此处应该循环处理
            template: `./src/demo/views/pages/word.html`, // 入口模板
            filename: `views/pages/word.html`, // 出口模板
            // 需要引入的chunk,不配置就会引入所有被CommonsChunkPlugin提取出的公共js和所有入口js,模板视图文件里js的引入顺序和chunks里的排序无关,和CommonsChunkPlugin里的顺序有关(倒叙)。webpack4中和priority属性值有关(等级高的优先引入)。
            chunks: ['word', 'this-is-global-file-common', 'this-is-global-file-vendor'],
            minify: configEnvironment.minView, // 压缩视图模板文件
        }),
        // 插件----提取css样式到文件
        new MiniCssExtractPlugin({
            filename: `css/pages/[name].${configEnvironment.contenthash}css`,
            chunkFilename: `css/chunks/[name].${configEnvironment.contenthash}css`,
        }),
    ];
    // 环境----生产环境
    if (isProduction) {
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
        },
        // 出口----配置
        output: {
            path: `${__dirname}/dist/demo/`, // 出口路径，必须是绝对路径
            filename: `js/pages/[name].${configEnvironment.chunkhash}js`, // 出的文件名
            publicPath: `/`, // 引入静态资源文件时，资源的前缀路径。如果不使用webpack-dev-server，路径配置成'../../'，静态页面可以直接本地打开进行观看。
            /*
            chunkFilename用来打包require.ensure方法中引入的模块,如果该方法中没有引入任何模块则不会生成任何chunk块文件
            比如在main.js文件中,require.ensure([],function(require){alert(11);}),这样不会打包块文件
            只有这样才会打包生成块文件require.ensure([],function(require){alert(11);require('./greeter')})
            或者这样require.ensure(['./greeter'],function(require){alert(11);})
            chunk的hash值只有在require.ensure中引入的模块发生变化,hash值才会改变
            注意1：对于不是在ensure方法中引入的模块,此属性不会生效,只能用CommonsChunkPlugin插件来提取。
            注意2：CommonsChunkPlugin在webpack4中不支持了，支持使用optimization.splitChunks属性进行公共模块(chunks)的提取。css使用mini-css-extract-plugin模块进行提取。
            */
            chunkFilename: `js/chunks/[name].${configEnvironment.chunkhash}js`,
        },
        // 优化----配置
        optimization: {
            splitChunks: {
                chunks: 'all', // 表示显示块的范围。有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)。默认值：async。
                cacheGroups: {
                    // 如果引入(require/import)了node_modules里都包，则提取为this-is-global-file-vendor(.css/.js)
                    vendor: {
                        test: /node_modules/, // 匹配符合规则的块。
                        name: 'this-is-global-file-vendor', // 提取成此文件
                        priority: 10, // 优先级10
                        enforce: true, // 强制拆出块，否则不达到一定容量，拆不出来。应该是如果拆出的块，达不到minSize(默认30kb)值，则不会进行拆出。
                    },
                    // 如果引入(require/import)了common模块，则提取为this-is-global-file-common(.css/.js)
                    commons: {
                        test: /common/, // 匹配符合规则的块。
                        name: 'this-is-global-file-common', // 提取成此文件
                        priority: 9, // 优先级10
                        enforce: true, // 强制拆出块，否则不达到一定容量，拆不出来。应该是如果拆出的块，达不到minSize(默认30kb)值，则不会进行拆出。
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
            historyApiFallback: true, // 对于单页应用，如果路由不是hash方式，防止回退404，所有的路径都执行index.html。
            inline: true, // 设置为true，代码有变化，浏览器端刷新。
            open: true, // 打开浏览器
            port: 4555, // 端口
            /*
            output.publicPath是：'/'
            output.path是：`${__dirname}/dist/demo/`
            正确的访问路径是：output.publicPath 拼接上 output.path之后的路径
            所以访问路径是：/views/pages/ui.html。但是使用openPage配置时，前面不要带反斜杠，否则浏览器上会出现两个反斜杠。
            */
            openPage: 'views/pages/ui.html', // 打开指定的路径
        },
    };
};
