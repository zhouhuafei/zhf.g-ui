const extend = require('zhf.extend'); // 对象的扩展
const createElement = require('zhf.create-element'); // 创建元素
const Super = require('zhf.dom-components-super'); // 超类型(子类型继承的对象)

// 子类型
class Sub extends Super {
    constructor(opts) {
        super(extend({
            // 回调
            callback: {
                click: function () {
                },
            },
            // 配置
            config: {
                isHand: false, // 是否手动控制
                status: 'on', // 状态
                text: {
                    on: '已开启',
                    off: '已关闭',
                },
            },
        }, opts));
    }
}

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    this.moduleDomActiveClass = 'g-radio-switch_active';
    let isOn = '';
    if (config.status === 'on') {
        isOn = this.moduleDomActiveClass;
    }
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: `g-radio-switch ${isOn}`,
            innerHTML: `
                <div class="g-radio-switch-body">
                    <div class="g-radio-switch-body-round"></div>
                </div>
                <div class="g-radio-switch-text">${config.text[config.status]}</div>
            `,
        },
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    const self = this;
    const config = this.opts.config;
    this.moduleDom.addEventListener('click', function () {
        if (!config.isHand) {
            if (!self.isOn()) {
                self.on();
            } else {
                self.off();
            }
        }
        self.opts.callback.click({status: config.status});
    });
};

// 是否处于开启状态
Sub.prototype.isOn = function () {
    return this.moduleDom.classList.contains(this.moduleDomActiveClass);
};

// 开启
Sub.prototype.on = function () {
    const config = this.opts.config;
    if (!this.isOn()) {
        this.moduleDom.classList.add(this.moduleDomActiveClass);
        config.status = 'on';
        this.moduleDom.querySelector('.g-radio-switch-text').innerHTML = `${config.text[config.status]}`;
    }
};

// 关闭
Sub.prototype.off = function () {
    const config = this.opts.config;
    if (this.isOn()) {
        this.moduleDom.classList.remove(this.moduleDomActiveClass);
        config.status = 'off';
        this.moduleDom.querySelector('.g-radio-switch-text').innerHTML = `${config.text[config.status]}`;
    }
};

module.exports = Sub;
