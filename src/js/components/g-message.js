const tools = require('zhf.tools'); // 工具方法集合
const applications = require('zhf.applications'); // 应用方法集合
const Super = require('../components-dom-super/g-super'); // 超类型(子类型继承的对象)

// 子类型
const Sub = tools.constructorInherit(Super, {
    wrap: '.g-wrap',
    // 回调
    callback: {
        // 关闭
        close: function () {
        },
    },
    // 配置
    config: {
        time: 3000, // 展示的时间
        isShowIcon: false, // 是否显示icon
        isShowClose: true, // 是否显示关闭按钮
        icon: 'icon-success', // icon的class
        content: '成功', // 内容信息
        positionLocation: 'top', // 弹窗的定位位置('top'，'center'，'bottom')。positionMethod定位方式强制fixed。
    },
    // 数据
    data: {},
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    const positionLocation = `g-message_${config.positionLocation}`;// 弹窗的定位位置
    // 弹窗结构
    const html = this.renderAlert();
    this.moduleDom = applications.createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: `g-message ${positionLocation}`,
            innerHTML: html,
        },
    });
};

// 提示框
Sub.prototype.renderAlert = function () {
    const config = this.opts.config;
    let htmlIcon = '';
    if (config.isShowIcon) {
        htmlIcon = `<div class="g-message-icon iconfont ${config.icon}"></div>`;
    }
    let closeHtml = '';
    if (config.isShowClose) {
        closeHtml = '<div class="g-message-close iconfont icon-close" ></div>';
    }
    return `
        ${closeHtml}
        ${htmlIcon}
        <div class="g-message-text">${config.content}</div>
    `;
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    const self = this;
    const config = this.opts.config;
    const callback = this.opts.callback;
    const close = this.moduleDom.querySelector('.g-message-close');
    let timer = null;
    timer = setTimeout(function () {
        self.moduleDomHide();
        callback.close();
    }, config.time);
    close.addEventListener('click', function () {
        clearTimeout(timer);
        self.moduleDomHide();
        callback.close();
    });
};

module.exports = Sub;
