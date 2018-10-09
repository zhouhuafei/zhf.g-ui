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
            config: {
                style: 'normal', // normal(无背景无定位)、highlight(白色背景覆盖父级)、dark（黑色背景覆盖父级）
            },
            // 数据
            data: {},
        }, opts));
    }
}

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    const style = String(config.style);
    if (style === 'highlight' || style === 'dark') {
        // 如果外部容器没有定位，则给外部容器增加一个定位。
        if (self.wrapDom && getComputedStyle(self.wrapDom).position === 'static') {
            self.wrapDom.style.position = 'relative';
        }
    }
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: `g-loading-dialog g-loading-dialog_${style}`,
            innerHTML: `<div class="g-loading-dialog-icon g-iconfont g-icon-loading"></div>`,
        },
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
};

module.exports = Sub;
