const extend = require('zhf.extend'); // 对象的扩展
const createElement = require('zhf.create-element'); // 创建元素
const Super = require('zhf.dom-components-super'); // 超类型(子类型继承的对象)

// 子类型
class Sub extends Super {
    constructor(opts) {
        super(extend({
            // 回调
            callback: {},
            // 配置
            config: {},
        }, opts));
    }
}

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: `g-loading-over`,
            innerHTML: `<div class="g-loading-over-icon g-iconfont g-icon-no-data"></div><div class="g-loading-over-text">数据加载完毕</div>`,
        },
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
};

module.exports = Sub;
