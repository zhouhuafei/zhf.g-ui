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
                positionLocation: 'top-left', // 弹窗的定位位置('top-left'，'top-center'，'top-right')。
                content: 'no tooltip content',
            },
        }, opts));
    }
}

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    const positionLocation = `g-tooltip_${config.positionLocation}`;// 弹窗的定位位置
    // 弹窗结构
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: `g-tooltip ${positionLocation}`,
            innerHTML: `
                <div class="g-tooltip-content">${config.content}</div>
                <div class="g-tooltip-icon"></div>                
            `,
        },
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
};

module.exports = Sub;
