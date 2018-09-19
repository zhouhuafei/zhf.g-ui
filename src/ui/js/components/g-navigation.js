const createElement = require('zhf.create-element'); // 创建元素
const constructorInherit = require('zhf.create-element'); // 创建元素
const Super = require('../components-super/g-super'); // 超类型(子类型继承的对象)
// 超类型(子类型继承的对象)
const route = '/phone/';

// 子类型
const Sub = constructorInherit(Super, {
    // 回调
    callback: {},
    // 配置
    config: {},
    // 数据
    data: {
        items: [
            /*
            {
                href: route,
                icon: 'icon-home',
                text: '首页',
                isShowMark: false,
            },
            {
                href: `${route}dev-globals/`,
                icon: 'icon-dev',
                text: '开发全局',
                isShowMark: false,
            },
            {
                href: `${route}dev-components/`,
                icon: 'icon-dev',
                text: '开发组件',
                isShowMark: false,
            },
            {
                href: `${route}dev-words/`,
                icon: 'icon-dev',
                text: '开发词汇',
                isShowMark: false,
            },
            {
                href: `${route}mine/`,
                icon: 'icon-mine',
                text: '我的',
                isShowMark: false,
            },
            */
        ],
    },
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const data = this.opts.data;
    const items = data.items;
    let html = '';
    items.forEach(function (v) {
        let markHtml = '';
        if (v.isShowMark) {
            markHtml = '<div class="g-navigation-item-mark"></div>';
        }
        html += `
            <a href="${v.href}" class="g-navigation-item">
                <div class="g-navigation-item-icon iconfont ${v.icon}"></div>
                <div class="g-navigation-item-text">${v.text}</div>
                ${markHtml}
            </a>
        `;
    });
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-navigation',
            innerHTML: html,
        },
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
};

module.exports = Sub;
