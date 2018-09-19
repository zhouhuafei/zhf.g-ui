const createElement = require('zhf.create-element'); // 创建元素
const constructorInherit = require('zhf.constructor-inherit'); // 构造函数的继承
const Super = require('../components-super/g-super'); // 超类型(子类型继承的对象)
const domAddPosition = require('zhf.dom-add-position');

// 子类型
const Sub = constructorInherit(Super, {
    // 回调
    callback: {
        click: function () {
        },
        moduleDomRenderBefore: function (self) {
            domAddPosition(self.wrapDom, 'relative');
        },
    },
    // 配置
    config: {
        isTransparent: false, // 是不是透明的(默认不透明)
        positionMethod: 'fixed', // 模块的定位方式 'fixed'(相对于整个文档) 'absolute'(相对于外部容器)
    },
    // 数据
    data: {},
});

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
