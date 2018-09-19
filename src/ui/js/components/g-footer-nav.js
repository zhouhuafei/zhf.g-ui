const createElement = require('zhf.create-element'); // 创建元素
const constructorInherit = require('zhf.constructor-inherit'); // 构造函数的继承
const Super = require('../components-super/g-super'); // 超类型(子类型继承的对象)

// 子类型
const Sub = constructorInherit(Super, {
    // 容器
    wrap: '.g-footer',
    // 回调
    callback: {},
    // 配置
    config: {},
    // 数据
    data: [
        // {
        //     routeName: 'home',
        //     href: '/',
        //     text: '首页',
        //     icon: 'icon-home',
        //     isHighlight: false,
        //     isShowMark: false
        // }
    ],
});

Sub.prototype.moduleDomCreate = function () {
    this.moduleDomClass = 'g-footer-nav';
    let moduleDomHtml = '';
    const data = this.opts.data;
    Object.keys(data).forEach(function (key) {
        const v = data[key];
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
                <div class="g-footer-nav-body-item-icon iconfont ${v.icon}"></div>
                <div class="g-footer-nav-body-item-text">${v.text}</div>
                ${markHtml}
            </a>
        `;
    });
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
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
