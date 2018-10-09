const extend = require('zhf.extend'); // 对象的扩展
const createElement = require('zhf.create-element'); // 创建元素
const Super = require('zhf.dom-components-super'); // 超类型(子类型继承的对象)

// 子类型
class Sub extends Super {
    constructor(json) {
        super(extend({
            // 回调
            callback: {
                click: function (json) {
                },
            },
            // 配置
            config: {
                items: [],
                /*
                items: [
                    {
                        name: 'synthesize',
                        text: '综合',
                        hasSort: false,
                    },
                    {
                        name: 'sale',
                        text: '销量',
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
                <div data-name="${v.name}" class="g-sort-tab-item ${defaultIndex === i ? 'g-sort-tab-item_active' : ''}">
                    <div class="g-sort-tab-item-text">${v.text}</div>
                    ${v.hasSort ? `<div class="g-sort-tab-item-icon">
                        <div data-sort-method="asc" class="g-sort-tab-item-icon-item ${defaultSortMethod === 'asc' && defaultIndex === i ? 'g-sort-tab-item-icon-item_active' : ''}"></div>
                        <div data-sort-method="desc" class="g-sort-tab-item-icon-item ${defaultSortMethod === 'desc' && defaultIndex === i ? 'g-sort-tab-item-icon-item_active' : ''}"></div>
                    </div>` : ''}
                </div>
            `;
        });
        this.moduleDom = createElement({
            style: config.moduleDomStyle,
            customAttribute: config.moduleDomCustomAttribute,
            attribute: {
                className: 'g-sort-tab',
                innerHTML: innerHTML,
            },
        });
    }

    // (功)(覆)功能(覆盖超类型)
    power() {
        const opts = this.opts;
        const config = opts.config;
        const callback = opts.callback;
        const defaultSortMethod = config.defaultSortMethod;
        const moduleDom = this.moduleDom;
        const items = moduleDom.querySelectorAll('.g-sort-tab-item');
        const itemClass = 'g-sort-tab-item';
        const itemActiveClass = 'g-sort-tab-item_active';
        const sortClass = 'g-sort-tab-item-icon-item';
        const sortActiveClass = 'g-sort-tab-item-icon-item_active';
        items.forEach(function (v) {
            v.addEventListener('click', function () {
                if (this.classList.contains(itemActiveClass)) {
                    const sortActiveDom = this.querySelector(`.${sortActiveClass}`);
                    if (sortActiveDom) {
                        sortActiveDom.classList.remove(sortActiveClass);
                        sortActiveDom.nextElementSibling && sortActiveDom.nextElementSibling.classList.add(sortActiveClass);
                        sortActiveDom.previousElementSibling && sortActiveDom.previousElementSibling.classList.add(sortActiveClass);
                    }
                } else {
                    moduleDom.querySelectorAll(`.${itemClass}`).forEach(function (v2) {
                        v2.classList.remove(itemActiveClass);
                        v2.querySelectorAll(`.${sortClass}`).forEach(function (v3) {
                            v3.classList.remove(sortActiveClass);
                        });
                    });
                    this.classList.add(itemActiveClass);
                    const sortDomAll = this.querySelectorAll(`.${sortClass}`);
                    if (defaultSortMethod === 'asc') {
                        sortDomAll[0] && sortDomAll[0].classList.add(sortActiveClass);
                    } else {
                        sortDomAll[1] && sortDomAll[1].classList.add(sortActiveClass);
                    }
                }
                const itemActiveDom = moduleDom.querySelector(`.${itemActiveClass}`);
                const sortActiveDom = itemActiveDom.querySelector(`.${sortActiveClass}`);
                callback.click({
                    name: itemActiveDom.dataset.name,
                    sortMethod: sortActiveDom ? sortActiveDom.dataset.sortMethod : '',
                });
            });
        });
    }
}

module.exports = Sub;
