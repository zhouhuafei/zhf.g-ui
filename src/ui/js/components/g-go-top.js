const createElement = require('zhf.create-element'); // 创建元素
const constructorInherit = require('zhf.create-element'); // 创建元素
const Super = require('../components-super/g-super'); // 超类型(子类型继承的对象)
const scrollMoveTo = require('zhf.scroll-move-to');

// 子类型
const Sub = constructorInherit(Super, {
    // 容器
    wrap: '.g-footer',
    // 回调
    callback: {},
    // 配置
    config: {
        showHeight: 200,
    },
    // 数据
    data: {},
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-go-top',
            innerHTML: '<div class="g-go-top-icon iconfont icon-up"></div>',
        },
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    const self = this;
    this.moduleDom.addEventListener('click', function () {
        scrollMoveTo(0, 0);
    });
    window.addEventListener('scroll', function () {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= self.opts.config.showHeight) {
            self.moduleDom.classList.add('g-go-top_active');
        } else {
            self.moduleDom.classList.remove('g-go-top_active');
        }
    });
};

module.exports = Sub;
