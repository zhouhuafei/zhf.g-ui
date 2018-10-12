class GlobalConfig {
    constructor() {
        this.isH5 = window['g-is_h5'] === true; // 这里需要手动配置(默认false)。是否是手机自适应页面(canvas自适应用到了这个，手机端才有canvas自适应)。
        this.psdWidth = window['g-psd_width'] || 320; // 这里需要手动配置(默认320)。设计图的宽。(如果是手机自适应站点，这里才会被使用到)。
        this.psdSplit = window['g-psd_split'] || 10; // 这里需要手动配置(默认10)。页面分割数量。在此处表达的意思是：将最外层容器的宽度分成10份，则一份就是outermostContainerMaxWidth/10像素，把结果设置给html的fontSize属性，则1rem就是outermostContainerMaxWidth/10像素。
        this.wrap = document.querySelector(window['g-wrap'] || 'body'); // 最外层容器的dom节点。默认body。仅支持选择器格式，例如：'.wrap'，'#container'。
        this.wrapMaxWidth = this.wrap.offsetWidth; // 最外层容器的最大宽度。
        this.resetWrapMaxWidth = function () {
            this.wrapMaxWidth = this.wrap.offsetWidth; // 最外层容器的最大宽度。
        };
        this.px2remCanvas = function (px) { // canvas自适应
            if (this.isH5) { // 如果是h5，canvas才有自适应功能
                return px * this.wrapMaxWidth / this.psdWidth;
            } else {
                return px;
            }
        };
        this.px2rem = function (px) { // rem自适应
            if (this.isH5) { // 如果是h5，才有自适应功能
                return px / this.psdWidth * this.psdSplit;
            } else {
                return px;
            }
        };
        window.addEventListener('resize', () => { // 重置最大宽度
            this.resetWrapMaxWidth();
        });
    }
}

module.exports = new GlobalConfig();
