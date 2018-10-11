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
                    /*
                    {
                        href: route,
                        icon: 'g-icon-home',
                        text: '首页',
                        isShowMark: false,
                    },
                    {
                        href: `${route}dev-globals/`,
                        icon: 'g-icon-dev',
                        text: '开发全局',
                        isShowMark: false,
                    },
                    {
                        href: `${route}dev-components/`,
                        icon: 'g-icon-dev',
                        text: '开发组件',
                        isShowMark: false,
                    },
                    {
                        href: `${route}dev-words/`,
                        icon: 'g-icon-dev',
                        text: '开发词汇',
                        isShowMark: false,
                    },
                    {
                        href: `${route}mine/`,
                        icon: 'g-icon-mine',
                        text: '我的',
                        isShowMark: false,
                    },
                    */
                ],
            },
        }, opts));
    }
}

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    const items = config.items;
    let html = '';
    items.forEach(function (v) {
        let markHtml = '';
        if (v.isShowMark) {
            markHtml = '<div class="g-navigation-item-mark"></div>';
        }
        html += `
            <a href="${v.href}" class="g-navigation-item">
                <div class="g-navigation-item-icon g-iconfont ${v.icon}"></div>
                <div class="g-navigation-item-text">${v.text}</div>
                ${markHtml}
            </a>
        `;
    });
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
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
