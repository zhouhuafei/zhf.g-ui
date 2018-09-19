class GlobalConfig {
    constructor() {
        this.outermostContainerSelector = window['g-outermost-container-selector'] || 'body'; // 这里需要手动配置。最外层容器的选择器(仅支持选择器格式，例如：'.wrap'，'#container')。
        this.outermostContainerDom = document.querySelector(this.outermostContainerSelector); // 最外层容器的dom节点。
        this.outermostContainerDomMaxWidth = this.outermostContainerDom.offsetWidth; // 最外层容器的最大宽度。
        this.isH5 = window['g-is-h5'] ? window['g-is-h5'] : true; // 这里需要手动配置。是否是手机自适应页面(canvas自适应用到了这个，手机端才有canvas自适应)。
        this.h5PsdWidth = window['g-h5-psd-width'] || 320; // 这里需要手动配置。设计图的宽。(如果是手机自适应站点，这里才会被使用到)。
        this.h5PsdSplitNum = window['g-h5-psd-split-num'] || 10; // 这里需要手动配置。页面分割数量。在此处表达的意思是：将最外层容器的宽度分成10份，则一份就是outermostContainerMaxWidth/10像素，把结果设置给html的fontSize属性，则1rem就是outermostContainerMaxWidth/10像素。
        this.resetOutermostContainerDomMaxWidth = function () {
            this.outermostContainerDomMaxWidth = this.outermostContainerDom.offsetWidth; // 最外层容器的最大宽度。
        };
        this.px2remCanvas = function (px) { // canvas自适应
            if (this.isH5) { // 如果是h5，canvas才有自适应功能
                return px * this.outermostContainerDomMaxWidth / this.h5PsdWidth;
            } else {
                return px;
            }
        };
        this.px2rem = function (px) { // rem自适应
            if (this.isH5) { // 如果是h5，才有自适应功能
                return px / this.h5PsdWidth * this.h5PsdSplitNum;
            } else {
                return px;
            }
        };
    }
}

module.exports = new GlobalConfig();
