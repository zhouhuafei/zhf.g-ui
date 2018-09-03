const HtmlWebpackPlugin = require('html-webpack-plugin'); // html生成的插件

module.exports = {
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
        rules: [],
    },
};
