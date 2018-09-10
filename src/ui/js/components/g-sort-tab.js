const extend = require('zhf.extend'); // 对象的扩展
const createElement = require('zhf.create-element'); // 创建元素
const Super = require('../components-super/g-super-es6'); // 超类型(子类型继承的对象)

// 子类型
class Sub extends Super {
    constructor(json) {
        super(extend({
            // 回调
            callback: {
                click: function (json) {
                }
            },
            // 配置
            config: {
                items: [],
                /*
                items: [
                    {
                        name: 'scale',
                        text: '比例',
                        hasSort: true,
                    },
                    {
                        name: 'profit',
                        text: '收益',
                        hasSort: true,
                    },
                    {
                        name: 'price',
                        text: '价格',
                        hasSort: true,
                    },
                ],
                */
                defaultIndex: 0,
                defaultSortMethod: 'asc', // asc升序 desc降序
            },
        }, json));
    }

    // (建)(覆)内部模块的创建(覆盖超类型)
    moduleDomCreate() {
        let innerHTML = '';
        const config = this.opts.config;
        const items = config.items || [];
        const defaultIndex = config.defaultIndex;
        const defaultSortMethod = config.defaultSortMethod;
        if (!items.length) {
            return;
        }
        items.forEach(function (v, i) {
            innerHTML += `
                <div class="g-sort-tab-item ${defaultIndex === i ? 'g-sort-tab-item_active' : ''}">
                    <div class="g-sort-tab-item-text">${v.text}</div>
                    ${v.hasSort ? `<div class="g-sort-tab-item-icon">
                        <div class="g-sort-tab-item-icon-item ${defaultSortMethod === 'asc' && defaultIndex === i ? 'g-sort-tab-item-icon-item_active' : ''}"></div>
                        <div class="g-sort-tab-item-icon-item ${defaultSortMethod === 'desc' && defaultIndex === i ? 'g-sort-tab-item-icon-item_active' : ''}"></div>
                    </div>` : ''}
                </div>
            `;
        });
        this.moduleDom = createElement({
            style: this.opts.config.moduleDomStyle,
            customAttribute: this.opts.config.moduleDomCustomAttribute,
            attribute: {
                className: 'g-sort-tab',
                innerHTML: innerHTML,
            },
        });
    }

    // (功)(覆)功能(覆盖超类型)
    power() {
        const callback = this.opts.callback;
        const moduleDom = this.moduleDom;
        const items = moduleDom.querySelectorAll('.g-sort-tab-item');
        items.forEach(function (v) {
            v.addEventListener('click', function () {
                // const hasActive = this.querySelector('.g-sort-tab-item-icon-item_active');
                // if (hasActive) {
                //     hasActive.classList.remove('g-sort-tab-item-icon-item_active');
                // }
                // items.forEach(function (v2) {
                //     v2.classList.remove('g-sort-tab-item_active');
                // });
                // items.querySelectorAll('.g-sort-tab-item-icon-item').forEach(function (v3) {
                //     v3.classList.remove('g-sort-tab-item-icon-item_active');
                // });
                // this.classList.add('g-sort-tab-item_active');
                // callback.click({});
            });
        });
    }
}

module.exports = Sub;
