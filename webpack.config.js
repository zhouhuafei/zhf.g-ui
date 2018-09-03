const HtmlWebpackPlugin = require('html-webpack-plugin'); // html生成的插件

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

module.exports = {
    // devtool----#source-map
    devtool: configEnvironment.devtool,
    entry: {
        'index': './src/demo/index.js', // 入口文件
    },
    output: {
        filename: './dist/demo/[name].js', // 出口文件
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./src/demo/index.html`, // 入口模板
            filename: `./dist/demo/index.html`, // 出口模板
            // 需要引入的chunk,不配置就会引入所有被CommonsChunkPlugin提取出的公共js和所有入口js,模板视图文件里js的引入顺序和chunks里的排序无关,和CommonsChunkPlugin里的顺序有关(倒叙)
            chunks: ['./dist/demo/index.js'],
            minify: false, // 压缩视图模板文件
        })
    ],
    watch: true,
    module: {
        // rules----loader加载器的规则集合
        rules: [
            // loader----处理sass
            {
                test: /\.(css|scss)$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: configEnvironment.isMinCss, // css压缩
                        },
                    }, 'postcss-loader', 'sass-loader'],
                }),
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
};
