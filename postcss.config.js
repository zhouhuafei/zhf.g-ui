const autoprefixer = require('autoprefixer'); // css3加前缀

module.exports = {
    plugins: [
        autoprefixer({
            browsers: ['last 2 versions'],
        }),
    ],
};
