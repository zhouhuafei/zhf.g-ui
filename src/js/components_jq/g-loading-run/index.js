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
                positionMethod: '', // 模块的定位方式 'fixed'(相对于整个文档) 'absolute'(相对于外部容器)
                positionLocation: 'center', // 模块的定位位置
            },
            // 数据
            data: {},
        }, opts));
    }
}

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    let moduleDomHtml = '';
    let moduleDomClass = '';
    const positionMethod = config.positionMethod;
    const positionLocation = config.positionLocation;
    // 相对文档居中
    if (positionMethod === 'fixed') {
        moduleDomClass += `g-loading-run_fixed g-loading-run_${positionLocation}`;
    }
    // 相对容器居中
    if (positionMethod === 'absolute') {
        if (getComputedStyle(this.wrapDom).position === 'static') {
            this.wrapDom.style.position = 'relative';
        }
        moduleDomClass += `g-loading-run_absolute g-loading-run_${positionLocation}`;
    }
    moduleDomHtml = `<div class="g-loading-run-icon g-iconfont g-icon-loading"></div>`;
    // 模块创建
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: `g-loading-run ${moduleDomClass}`,
            innerHTML: moduleDomHtml,
        },
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
};

module.exports = Sub;
