const tools = require('zhf.tools'); // 工具方法集合
const applications = require('zhf.applications'); // 应用方法集合
const Super = require('../components-dom-super/g-super'); // 超类型(子类型继承的对象)

// 子类型
const Sub = tools.constructorInherit(Super, {
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
    this.moduleDom = applications.createElement({
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
