const createElement = require('zhf.create-element'); // 创建元素
const constructorInherit = require('zhf.constructor-inherit'); // 构造函数的继承
const Super = require('zhf.dom-components-super'); // 超类型(子类型继承的对象)

// 子类型
const Sub = constructorInherit(Super, {
    // 容器
    wrap: '.g-footer',
    // 回调
    callback: {},
    // 配置
    config: {},
    // 数据
    data: {},
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-copyright',
            innerHTML: `
                <div class="g-copyright-icon g-iconfont g-icon-logo"></div>
                <div class="g-copyright-text">版权信息哟</div>
            `,
        },
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
};

module.exports = Sub;
