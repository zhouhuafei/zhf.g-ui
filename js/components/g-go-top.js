const tools = require('zhf.tools'); // 工具方法集合
const applications = require('zhf.applications'); // 应用方法集合
const Super = require('../components-dom-super/g-super'); // 超类型(子类型继承的对象)

// 子类型
const Sub = tools.constructorInherit(Super, {
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
    this.moduleDom = applications.createElement({
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
        applications.scrollMoveTo(0, 0);
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
