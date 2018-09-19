const tools = require('zhf.tools'); // 工具方法集合
const applications = require('zhf.applications'); // 应用方法集合

// 底层构造函数
function Super(json) {
    // 函数外部传来的参数
    this.opts = extend(
        // 内部默认参数
        {
            // 父级
            wrap: '.g-body', // 这个仅支持传入选择器和原生dom节点
            // 回调
            callback: {
                // 内部模块创建之前的回调
                moduleDomCreateBefore: function (self) {
                },
                // 内部模块创建之后的回调
                moduleDomCreateAfter: function (self) {
                },
                // 内部模块渲染之前的回调
                moduleDomRenderBefore: function (self) {
                },
                // 内部模块渲染之后的回调
                moduleDomRenderAfter: function (self) {
                },
                // 内部模块移除之前的回调
                moduleDomRemoveBefore: function (self) {
                },
                // 内部模块移除之后的回调
                moduleDomRemoveAfter: function (self) {
                },
                // 内部模块显示之前的回调
                moduleDomShowBefore: function (self) {
                },
                // 内部模块显示之后的回调
                moduleDomShowAfter: function (self) {
                },
                // 内部模块隐藏之前的回调
                moduleDomHideBefore: function (self) {
                },
                // 内部模块隐藏之后的回调
                moduleDomHideAfter: function (self) {
                },
                // 外部容器获取之前的回调
                wrapDomGetBefore: function (self) {
                },
                // 外部容器获取之后的回调
                wrapDomGetAfter: function (self) {
                },
                // 外部容器移除之前的回调
                wrapDomRemoveBefore: function (self) {
                },
                // 外部容器移除之后的回调
                wrapDomRemoveAfter: function (self) {
                },
            },
            // 配置
            config: {
                // 内部模块的自定义属性
                moduleDomCustomAttribute: {},
                // 内部模块插入到外部容器的方式
                moduleDomRenderMethod: {
                    method: 'appendChild', // 'appendChild','insertBefore'
                    child: null,
                },
                moduleDomStyle: {}, // 内部模块的样式
                moduleDomIsRender: true, // 内部模块是否渲染
                moduleDomIsClearTimer: true, // 内部模块是否清除所有定时器(默认清除)
            },
            // 数据
            data: {},
        },
        // 外部传入参数
        json,
    );
    // 函数内部自带的属性
    this.moduleDom = null; // 内部的模块
    this.wrapDom = null; // 内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
    this.moduleDomTimer = {}; // 内部模块的定时器存储(假设内部模块有定时器)
    this.init(); // 初始化
}

// 初始化
Super.prototype.init = function () {
    this.render();
    this.power();
};

// 渲染
Super.prototype.render = function () {
    this.moduleDomRemove(); // 内部模块的移除(重新初始化的时候要移除掉以前有的内部模块)

    const callback = this.opts.callback;
    callback.moduleDomCreateBefore(this);
    this.moduleDomCreate(); // 内部模块的创建
    callback.moduleDomCreateAfter(this);

    this.wrapDomGet(); // 外部容器的获取
    this.moduleDomRender(); // 内部模块的渲染(如果外部容器存在,就把内部模块填充到外部容器里)
};

// (功)(覆)功能(这个方法需要在子类型里被覆盖掉)
Super.prototype.power = function () {
};

// (建)(覆)内部模块的创建(这个方法需要在子类型里被覆盖掉)
Super.prototype.moduleDomCreate = function () {
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-super-type',
            innerHTML: `
                <div class="g-super-type-text" style="text-align: center;">周华飞爱侯丽杰,侯丽杰爱周华飞sup-es5</div>
            `,
        },
    });
};

// 内部模块的渲染
Super.prototype.moduleDomRender = function () {
    const callback = this.opts.callback;
    const config = this.opts.config;
    if (config.moduleDomIsRender && this.wrapDom && this.moduleDom) {
        callback.moduleDomRenderBefore(this);
        const renderMethod = config.moduleDomRenderMethod;
        if (renderMethod.method === 'insertBefore') {
            const dom = getDomArray(renderMethod.child)[0];
            if (dom) {
                this.wrapDom.insertBefore(this.moduleDom, dom);
            } else {
                this.wrapDom.insertBefore(this.moduleDom, this.wrapDom.children[0]);
            }
        }
        if (renderMethod.method === 'appendChild') {
            this.wrapDom.appendChild(this.moduleDom);
        }
        callback.moduleDomRenderAfter(this);
    }
};

// 内部模块的移除
Super.prototype.moduleDomRemove = function () {
    const callback = this.opts.callback;
    if (this.moduleDom && this.moduleDom.parentNode) {
        callback.moduleDomRemoveBefore(this);
        this.moduleDom.parentNode.removeChild(this.moduleDom);
        callback.moduleDomRemoveAfter(this);
    }
    this.moduleDomClearTimer();
};

// 内部模块的定时器清除(假设内部模块有定时器)
Super.prototype.moduleDomClearTimer = function () {
    const self = this;
    if (self.opts.config.moduleDomIsClearTimer) {
        Object.keys(self.moduleDomTimer).forEach(function (attr) {
            clearInterval(self.moduleDomTimer[attr]);
            clearTimeout(self.moduleDomTimer[attr]);
        });
    }
};

// 内部模块的隐藏(显示隐藏和是否清除定时器无关)
Super.prototype.moduleDomHide = function () {
    const callback = this.opts.callback;
    if (this.moduleDom.parentNode) {
        this.opts.config.moduleDomIsRender = false;
        callback.moduleDomHideBefore(this);
        this.moduleDom.parentNode.removeChild(this.moduleDom);
        callback.moduleDomHideAfter(this);
    }
};

// 内部模块的显示(显示隐藏和是否清除定时器无关)
Super.prototype.moduleDomShow = function () {
    const callback = this.opts.callback;
    callback.moduleDomShowBefore(this);
    if (this.wrapDom) {
        this.opts.config.moduleDomIsRender = true;
        this.moduleDomRender();
    }
    callback.moduleDomShowAfter(this);
};

// 外部容器的获取
Super.prototype.wrapDomGet = function () {
    const callback = this.opts.callback;
    callback.wrapDomGetBefore(this);
    this.wrapDom = getDomArray(this.opts.wrap)[0];
    callback.wrapDomGetAfter(this);
};

// 外部容器的移除
Super.prototype.wrapDomRemove = function () {
    const callback = this.opts.callback;
    // 先移除内部的模块
    this.moduleDomRemove();
    // 再移除外部的容器
    if (this.wrapDom) {
        callback.wrapDomRemoveBefore(this);
        this.wrapDom.parentNode.removeChild(this.wrapDom);
        callback.wrapDomRemoveAfter(this);
    }
};

// 获取内部模块的整体html结构
Super.prototype.getModuleDomHtml = function () {
    return this.moduleDom ? this.moduleDom.outerHTML : '';
};

module.exports = Super;
