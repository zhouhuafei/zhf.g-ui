const extend = require('zhf.extend'); // 对象的扩展
const createElement = require('zhf.create-element'); // 创建元素
const Super = require('../components-super/g-super-es6'); // 超类型(子类型继承的对象)

// 子类型
class Sub extends Super {
    constructor(json) {
        super(extend({
            // 回调
            callback: {},
            // 配置
            config: {},
            // 数据
            data: {},
        }, json));
    }

    // (建)(覆)内部模块的创建(覆盖超类型)
    moduleDomCreate() {
        this.moduleDom = createElement({
            style: this.opts.config.moduleDomStyle,
            customAttribute: this.opts.config.moduleDomCustomAttribute,
            attribute: {
                className: 'g-progress-bar',
                innerHTML: `
                    <canvas class="g-progress-bar-canvas"></canvas>
                    <div class="g-progress-bar-text">0%</div>    
                `,
            },
        });
    }

    // (功)(覆)功能(覆盖超类型)
    power() {
    }
}

module.exports = Sub;
