const tools = require('zhf.tools'); // 工具方法集合
const applications = require('zhf.applications'); // 应用方法集合
const Super = require('../components-super/g-super-es6'); // 超类型(子类型继承的对象)

// 子类型
class Sub extends Super {
    constructor(json) {
        super(tools.extend({
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
        this.moduleDom = applications.createElement({
            style: this.opts.config.moduleDomStyle,
            customAttribute: this.opts.config.moduleDomCustomAttribute,
            attribute: {
                className: 'g-sub-type-es6',
                innerHTML: `
                    <div class="g-sub-type-es6-text" style="text-align: center;">周华飞爱侯丽杰,侯丽杰爱周华飞sub-es6</div>
                `,
            },
        });
    }

    // (功)(覆)功能(覆盖超类型)
    power() {
    }
}

module.exports = Sub;
