const createElement = require('zhf.create-element'); // 创建元素
const constructorInherit = require('zhf.create-element'); // 创建元素
const Super = require('../components-super/g-super'); // 超类型(子类型继承的对象)

// 子类型
const Sub = constructorInherit(Super, {
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
        icon: 'icon-no-data',
        text: '没有数据',
        button: {
            icon: 'icon-home',
            text: '回首页',
            href: '/',
        },
    },
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const data = this.opts.data;
    let buttonIconHtml = '';
    if (this.opts.config.button.isShowIcon) {
        buttonIconHtml = `<div class="g-button-icon iconfont ${data.button.icon}"></div>`;
    }
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-no-data',
            innerHTML: `
                <div class="g-no-data-icon iconfont ${data.icon}"></div>
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
