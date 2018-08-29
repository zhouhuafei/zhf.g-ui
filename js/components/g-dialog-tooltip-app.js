const tools = require('zhf.tools'); // 工具方法集合
const DialogTooltip = require('../components-dom/g-dialog-tooltip'); // 工具提示框(文本提示框)

// 工具提示框(文本提示框)的应用
function Sub(opts) {
    this.opts = tools.extend({
        element: '.js-g-tooltip',
        eventType: 'mouseover',
        positionLocation: 'top-left', // 弹窗的定位位置('top-left'，'top-center'，'top-right')。
    }, opts);
    this.init();
}

Sub.prototype.init = function () {
    const self = this;
    const opts = self.opts;
    const positionLocation = opts.positionLocation;
    if (opts.eventType === 'mouseover' || opts.eventType === 'mouseenter') {
        $(document).on('mouseenter', opts.element, function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            const dom = this;
            clearTimeout(dom.gDialogTooltipMouseenterTimer);
            if (!dom.gDialogTooltipMouseenter) {
                dom.gDialogTooltipMouseenter = new DialogTooltip({
                    config: {
                        positionLocation: opts.positionLocation,
                        content: dom.dataset.title,
                        elementDom: dom,
                    },
                });
                const moduleDom = dom.gDialogTooltipMouseenter.moduleDom;
                setCss(moduleDom, dom);
                moduleDom.classList.add('g-opacity-0');
                setTimeout(function () {
                    moduleDom.classList.add('g-transition');
                    moduleDom.classList.remove('g-opacity-0');
                }, 200);
                if (!moduleDom.hasEventMouseenter) {
                    moduleDom.hasEventMouseenter = true;
                    // 绑定事件
                    $(moduleDom).on('mouseenter', function (ev) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        clearTimeout(dom.gDialogTooltipMouseenterTimer);
                    });
                    $(moduleDom).on('mouseleave', function (ev) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        moduleDomHide(dom);
                    });
                }
            }
        });
        $(document).on('mouseleave', opts.element, function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            moduleDomHide(this);
        });
    }

    function moduleDomHide(dom) {
        dom.gDialogTooltipMouseenterTimer = setTimeout(function () {
            dom.gDialogTooltipMouseenter.moduleDomHide();
            delete dom.gDialogTooltipMouseenter;
        }, 60);
    }

    if (opts.eventType === 'click') {
        $(document).on('click', opts.element, function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            if (!this.gDialogTooltipClick) {
                this.gDialogTooltipClick = new DialogTooltip({
                    config: {
                        positionLocation: opts.positionLocation,
                        content: this.dataset.title,
                        elementDom: this,
                    },
                });
                setCss(this.gDialogTooltipClick.moduleDom, this);
            } else {
                if (this.gDialogTooltipClick.moduleDom.offsetWidth === 0) {
                    this.gDialogTooltipClick.moduleDomShow();
                } else {
                    this.gDialogTooltipClick.moduleDomHide();
                }
            }
        });
    }

    function setCss(moduleDom, eventDom) {
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
    }
};

module.exports = Sub;
