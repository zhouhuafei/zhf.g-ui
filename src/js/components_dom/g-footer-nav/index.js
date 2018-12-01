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
                items: [
                    // {
                    //     routeName: 'home',
                    //     href: '/',
                    //     text: '首页',
                    //     icon: 'g-iconfont g-icon-home',
                    //     isHighlight: false,
                    //     isShowMark: false
                    // }
                ],
            },
        }, opts));
    }
}

Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    const items = config.items;
    this.moduleDomClass = 'g-footer-nav';
    let moduleDomHtml = '';
    Object.keys(items).forEach(function (key) {
        const v = items[key];
        let highlightClass = '';
        if (v.isHighlight) {
            highlightClass = 'g-footer-nav-body-item_active';
        }
        let markHtml = '';
        if (v.isShowMark) {
            markHtml = '<div class="g-footer-nav-body-item-mark"></div>';
        }
        moduleDomHtml += `
            <a class="g-footer-nav-body-item ${highlightClass}" href="${v.href}">
                <div class="g-footer-nav-body-item-icon ${v.icon}"></div>
                <div class="g-footer-nav-body-item-text">${v.text}</div>
                ${markHtml}
            </a>
        `;
    });
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: this.moduleDomClass,
            innerHTML: `<div class="g-footer-nav-body">${moduleDomHtml}</div>`,
        },
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
};

module.exports = Sub;
