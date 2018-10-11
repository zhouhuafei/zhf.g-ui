const extend = require('zhf.extend'); // 对象的扩展
const createElement = require('zhf.create-element'); // 创建元素
const Super = require('zhf.dom-components-super'); // 超类型(子类型继承的对象)

// 子类型
class Sub extends Super {
    constructor(opts) {
        super(extend({
            // 回调
            callback: {
                click: function (obj) {
                },
            },
            // 配置
            config: {
                isHaveEvent: true, // 是否具备事件(默认具备)
                allStarNum: 5, // 所有的星星数
                nowStarNum: 4, // 当前被选择的星星数
            },
        }, opts));
    }
}

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    let html = '';
    for (let i = 0; i < this.opts.config.allStarNum; i++) {
        let className = '';
        if (i < this.opts.config.nowStarNum) {
            className = 'g-star-item_active';
        }
        html += `<div data-index="${i}" class="g-iconfont g-icon-star g-star-item ${className}"></div>`;
    }
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-star',
            innerHTML: html,
        },
    });
    this.opts.star = this.moduleDom.children;
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    const self = this;
    if (this.opts.config.isHaveEvent) {
        this.moduleDom.addEventListener('click', function (ev) {
            const target = ev.target;
            if (target.classList.contains('g-star-item')) {
                const index = target.dataset.index;
                for (let j = 0; j < self.opts.config.allStarNum; j++) {
                    if (j <= index) {
                        self.opts.star[j].classList.add('g-star-item_active');
                    } else {
                        self.opts.star[j].classList.remove('g-star-item_active');
                    }
                }
                self.opts.callback.click({element: this, index: index});
            }
        });
    }
};

module.exports = Sub;
