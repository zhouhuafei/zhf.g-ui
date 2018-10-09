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
                button: {
                    isShowIcon: false,
                },
            },
            // 数据
            data: {
                icon: 'g-icon-no-data',
                text: '没有数据',
                button: {
                    icon: 'g-icon-home',
                    text: '回首页',
                    href: '/',
                },
            },
        }, opts));
    }
}

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    const data = this.opts.data;
    let buttonIconHtml = '';
    if (this.opts.config.button.isShowIcon) {
        buttonIconHtml = `<div class="g-button-icon g-iconfont ${data.button.icon}"></div>`;
    }
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-no-data',
            innerHTML: `
                <div class="g-no-data-icon g-iconfont ${data.icon}"></div>
                <div class="g-no-data-text">${data.text}</div>
                <a class="g-no-data-button g-button" href="${data.button.href}">
                    ${buttonIconHtml}
                    <div class="g-button-text">${data.button.text}</div>
                </a>
            `,
        },
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
};

module.exports = Sub;
