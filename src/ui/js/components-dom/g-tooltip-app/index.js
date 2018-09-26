const extend = require('zhf.extend'); // 对象的扩展
const Tooltip = require('../g-tooltip'); // 工具提示框(文本提示框)

// 工具提示框(文本提示框)的应用
function Sub(opts) {
    this.opts = extend({
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
            clearTimeout(dom.gTooltipMouseenterTimer);
            if (!dom.gTooltipMouseenter) {
                dom.gTooltipMouseenter = new Tooltip({
                    config: {
                        positionLocation: opts.positionLocation,
                        content: dom.dataset.title,
                        elementDom: dom,
                    },
                });
                const moduleDom = dom.gTooltipMouseenter.moduleDom;
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
                        clearTimeout(dom.gTooltipMouseenterTimer);
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
        dom.gTooltipMouseenterTimer = setTimeout(function () {
            dom.gTooltipMouseenter.moduleDomHide();
            delete dom.gTooltipMouseenter;
        }, 60);
    }

    if (opts.eventType === 'click') {
        $(document).on('click', opts.element, function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            if (!this.gTooltipClick) {
                this.gTooltipClick = new Tooltip({
                    config: {
                        positionLocation: opts.positionLocation,
                        content: this.dataset.title,
                        elementDom: this,
                    },
                });
                setCss(this.gTooltipClick.moduleDom, this);
            } else {
                if (this.gTooltipClick.moduleDom.offsetWidth === 0) {
                    this.gTooltipClick.moduleDomShow();
                } else {
                    this.gTooltipClick.moduleDomHide();
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
