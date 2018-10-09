const extend = require('zhf.extend'); // 对象的扩展
const createElement = require('zhf.create-element'); // 创建元素
const Super = require('zhf.dom-components-super'); // 超类型(子类型继承的对象)

// 子类型
class Sub extends Super {
    constructor(opts) {
        super(extend({
            // 回调
            callback: {
                click: function () {
                },
            },
            // 配置
            config: {
                isTransparent: false, // 是不是透明的(默认不透明)
                positionMethod: 'fixed', // 模块的定位方式 'fixed'(相对于整个文档) 'absolute'(相对于外部容器)
            },
            // 数据
            data: {},
        }, opts));
    }
}

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    let className = '';
    if (config.isTransparent) {
        className = 'g-mask_transparent';
    }
    if (config.positionMethod === 'fixed') {
        className = 'g-mask-fixed';
    }
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: `g-mask ${className}`,
            innerHTML: '',
        },
    });
    // 如果外部容器没有定位，则给外部容器增加一个定位。
    if (self.wrapDom && getComputedStyle(self.wrapDom).position === 'static') {
        self.wrapDom.style.position = 'relative';
    }
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    const self = this;
    this.moduleDom.addEventListener('click', function (ev) {
        self.opts.callback.click();
        ev.stopPropagation();
    });
};

module.exports = Sub;
