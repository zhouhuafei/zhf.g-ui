const tools = require('zhf.tools'); // 工具方法集合
const applications = require('zhf.applications'); // 应用方法集合
const Super = require('../components-dom-super/g-super'); // 超类型(子类型继承的对象)

// 子类型
const Sub = tools.constructorInherit(Super, {
    wrap: '.g-wrap',
    // 回调
    callback: {},
    // 配置
    config: {
        moduleDomIsRender: false,
        element: '.js-popover',
        eventType: 'mouseover',
        positionLocation: 'top-left', // 弹窗的定位位置('top-left'，'top-center'，'top-right')。
        content: 'no popover content',
    },
    // 数据
    data: {},
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    const positionLocation = `g-dialog-popover_${config.positionLocation}`;// 弹窗的定位位置
    // 弹窗结构
    this.moduleDom = applications.createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: `g-dialog-popover ${positionLocation}`,
            innerHTML: `
                <div class="g-dialog-popover-content">${config.content}</div>
                <div class="g-dialog-popover-icon"></div>                
            `,
        },
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    const self = this;
    const opts = self.opts;
    const config = opts.config;
    const positionLocation = config.positionLocation;
    const moduleDom = self.moduleDom;
    if (config.eventType === 'mouseover' || config.eventType === 'mouseenter') {
        $(config.element).on('mouseenter', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            self.moduleDomShow();
            setCss(this);
            clearTimeout(self.gDialogPopoverMouseenterTimer);
        });
        $(config.element).on('mouseleave', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            fnModuleDomHide();
        });
        $(moduleDom).on('mouseenter', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            clearTimeout(self.gDialogPopoverMouseenterTimer);
        });
        $(moduleDom).on('mouseleave', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            fnModuleDomHide();
        });
    }

    function fnModuleDomHide() {
        self.gDialogPopoverMouseenterTimer = setTimeout(function () {
            self.moduleDomHide();
        }, 60);
    }

    if (config.eventType === 'click') {
        $(config.element).on('click', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            if (self.moduleDom.offsetWidth === 0) {
                self.moduleDomShow();
                setCss(this);
            } else {
                self.moduleDomHide();
            }
        });
    }

    function setCss(eventDom) {
        // 水平居上
        if (positionLocation === 'top-left') {
            $(moduleDom).css({
                left: $(eventDom).offset().left,
                top: $(eventDom).offset().top - moduleDom.offsetHeight,
            });
        }
        if (positionLocation === 'top-center') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth) / 2,
                top: $(eventDom).offset().top - moduleDom.offsetHeight,
            });
        }
        if (positionLocation === 'top-right') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth),
                top: $(eventDom).offset().top - moduleDom.offsetHeight,
            });
        }
        // 水平居下
        if (positionLocation === 'bottom-left') {
            $(moduleDom).css({
                left: $(eventDom).offset().left,
                top: $(eventDom).offset().top + eventDom.offsetHeight,
            });
        }
        if (positionLocation === 'bottom-center') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth) / 2,
                top: $(eventDom).offset().top + eventDom.offsetHeight,
            });
        }
        if (positionLocation === 'bottom-right') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth),
                top: $(eventDom).offset().top + eventDom.offsetHeight,
            });
        }
        // 垂直居左
        if (positionLocation === 'left-top') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - moduleDom.offsetWidth,
                top: $(eventDom).offset().top,
            });
        }
        if (positionLocation === 'left-center') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - moduleDom.offsetWidth,
                top: $(eventDom).offset().top - (moduleDom.offsetHeight - eventDom.offsetHeight) / 2,
            });
        }
        if (positionLocation === 'left-bottom') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - moduleDom.offsetWidth,
                top: $(eventDom).offset().top - (moduleDom.offsetHeight - eventDom.offsetHeight),
            });
        }
        // 垂直居右
        if (positionLocation === 'right-top') {
            $(moduleDom).css({
                left: $(eventDom).offset().left + eventDom.offsetWidth,
                top: $(eventDom).offset().top,
            });
        }
        if (positionLocation === 'right-center') {
            $(moduleDom).css({
                left: $(eventDom).offset().left + eventDom.offsetWidth,
                top: $(eventDom).offset().top - (moduleDom.offsetHeight - eventDom.offsetHeight) / 2,
            });
        }
        if (positionLocation === 'right-bottom') {
            $(moduleDom).css({
                left: $(eventDom).offset().left + eventDom.offsetWidth,
                top: $(eventDom).offset().top - (moduleDom.offsetHeight - eventDom.offsetHeight),
            });
        }
    }
};

module.exports = Sub;
