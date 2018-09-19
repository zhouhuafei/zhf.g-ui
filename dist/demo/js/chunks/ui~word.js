(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui~word"],{

/***/ "./src/ui/js/components-super/g-super-es6.js":
/*!***************************************************!*\
  !*** ./src/ui/js/components-super/g-super-es6.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var getDomArray = __webpack_require__(/*! zhf.get-dom-array */ "./node_modules/zhf.get-dom-array/dist/index.min.js"); // 创建元素

// 底层构造函数

var Super = function () {
    function Super(json) {
        _classCallCheck(this, Super);

        // 函数外部传来的参数
        this.opts = extend(
        // 内部默认参数
        {
            // 父级
            wrap: '.g-body', // 这个仅支持传入选择器和原生dom节点
            // 回调
            callback: {
                // 内部模块创建之前的回调
                moduleDomCreateBefore: function moduleDomCreateBefore(self) {},
                // 内部模块创建之后的回调
                moduleDomCreateAfter: function moduleDomCreateAfter(self) {},
                // 内部模块渲染之前的回调
                moduleDomRenderBefore: function moduleDomRenderBefore(self) {},
                // 内部模块渲染之后的回调
                moduleDomRenderAfter: function moduleDomRenderAfter(self) {},
                // 内部模块移除之前的回调
                moduleDomRemoveBefore: function moduleDomRemoveBefore(self) {},
                // 内部模块移除之后的回调
                moduleDomRemoveAfter: function moduleDomRemoveAfter(self) {},
                // 内部模块显示之前的回调
                moduleDomShowBefore: function moduleDomShowBefore(self) {},
                // 内部模块显示之后的回调
                moduleDomShowAfter: function moduleDomShowAfter(self) {},
                // 内部模块隐藏之前的回调
                moduleDomHideBefore: function moduleDomHideBefore(self) {},
                // 内部模块隐藏之后的回调
                moduleDomHideAfter: function moduleDomHideAfter(self) {},
                // 外部容器获取之前的回调
                wrapDomGetBefore: function wrapDomGetBefore(self) {},
                // 外部容器获取之后的回调
                wrapDomGetAfter: function wrapDomGetAfter(self) {},
                // 外部容器移除之前的回调
                wrapDomRemoveBefore: function wrapDomRemoveBefore(self) {},
                // 外部容器移除之后的回调
                wrapDomRemoveAfter: function wrapDomRemoveAfter(self) {}
            },
            // 配置
            config: {
                // 内部模块的自定义属性
                moduleDomCustomAttribute: {},
                // 内部模块插入到外部容器的方式
                moduleDomRenderMethod: {
                    method: 'appendChild', // 'appendChild','insertBefore'
                    child: null
                },
                moduleDomStyle: {}, // 内部模块的样式
                moduleDomIsRender: true, // 内部模块是否渲染
                moduleDomIsClearTimer: true // 内部模块是否清除所有定时器(默认清除)
            },
            // 数据
            data: {}
        },
        // 外部传入参数
        json);
        // 函数内部自带的属性
        this.moduleDom = null; // 内部的模块
        this.wrapDom = null; // 内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
        this.moduleDomTimer = {}; // 内部模块的定时器存储(假设内部模块有定时器)
        this.init(); // 初始化
    }

    // 初始化


    _createClass(Super, [{
        key: 'init',
        value: function init() {
            this.render();
            this.power();
        }

        // 渲染

    }, {
        key: 'render',
        value: function render() {
            this.moduleDomRemove(); // 内部模块的移除(重新初始化的时候要移除掉以前有的内部模块)

            var callback = this.opts.callback;
            callback.moduleDomCreateBefore(this);
            this.moduleDomCreate(); // 内部模块的创建
            callback.moduleDomCreateAfter(this);

            this.wrapDomGet(); // 外部容器的获取
            this.moduleDomRender(); // 内部模块的渲染(如果外部容器存在,就把内部模块填充到外部容器里)
        }

        // (功)(覆)功能(这个方法需要在子类型里被覆盖掉)

    }, {
        key: 'power',
        value: function power() {}

        // (建)(覆)内部模块的创建(这个方法需要在子类型里被覆盖掉)

    }, {
        key: 'moduleDomCreate',
        value: function moduleDomCreate() {
            this.moduleDom = createElement({
                style: this.opts.config.moduleDomStyle,
                customAttribute: this.opts.config.moduleDomCustomAttribute,
                attribute: {
                    className: 'g-super-type-es6',
                    innerHTML: '\n                    <div class="g-super-type-es6-text" style="text-align: center;">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DEsup-es6</div>\n                '
                }
            });
        }

        // 内部模块的渲染

    }, {
        key: 'moduleDomRender',
        value: function moduleDomRender() {
            var callback = this.opts.callback;
            var config = this.opts.config;
            if (config.moduleDomIsRender && this.wrapDom && this.moduleDom) {
                callback.moduleDomRenderBefore(this);
                var renderMethod = config.moduleDomRenderMethod;
                if (renderMethod.method === 'insertBefore') {
                    var dom = getDomArray(renderMethod.child)[0];
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
        }

        // 内部模块的移除

    }, {
        key: 'moduleDomRemove',
        value: function moduleDomRemove() {
            var callback = this.opts.callback;
            if (this.moduleDom && this.moduleDom.parentNode) {
                callback.moduleDomRemoveBefore(this);
                this.moduleDom.parentNode.removeChild(this.moduleDom);
                callback.moduleDomRemoveAfter(this);
            }
            this.moduleDomClearTimer();
        }

        // 内部模块的定时器清除(假设内部模块有定时器)

    }, {
        key: 'moduleDomClearTimer',
        value: function moduleDomClearTimer() {
            var self = this;
            if (self.opts.config.moduleDomIsClearTimer) {
                Object.keys(self.moduleDomTimer).forEach(function (attr) {
                    clearInterval(self.moduleDomTimer[attr]);
                    clearTimeout(self.moduleDomTimer[attr]);
                });
            }
        }

        // 内部模块的隐藏(显示隐藏和是否清除定时器无关)

    }, {
        key: 'moduleDomHide',
        value: function moduleDomHide() {
            var callback = this.opts.callback;
            if (this.moduleDom.parentNode) {
                this.opts.config.moduleDomIsRender = false;
                callback.moduleDomHideBefore(this);
                this.moduleDom.parentNode.removeChild(this.moduleDom);
                callback.moduleDomHideAfter(this);
            }
        }

        // 内部模块的显示(显示隐藏和是否清除定时器无关)

    }, {
        key: 'moduleDomShow',
        value: function moduleDomShow() {
            var callback = this.opts.callback;
            callback.moduleDomShowBefore(this);
            if (this.wrapDom) {
                this.opts.config.moduleDomIsRender = true;
                this.moduleDomRender();
            }
            callback.moduleDomShowAfter(this);
        }

        // 外部容器的获取

    }, {
        key: 'wrapDomGet',
        value: function wrapDomGet() {
            var callback = this.opts.callback;
            callback.wrapDomGetBefore(this);
            this.wrapDom = getDomArray(this.opts.wrap)[0];
            callback.wrapDomGetAfter(this);
        }

        // 外部容器的移除

    }, {
        key: 'wrapDomRemove',
        value: function wrapDomRemove() {
            var callback = this.opts.callback;
            // 先移除内部的模块
            this.moduleDomRemove();
            // 再移除外部的容器
            if (this.wrapDom) {
                callback.wrapDomRemoveBefore(this);
                this.wrapDom.parentNode.removeChild(this.wrapDom);
                callback.wrapDomRemoveAfter(this);
            }
        }

        // 获取内部模块的整体html结构

    }, {
        key: 'getModuleDomHtml',
        value: function getModuleDomHtml() {
            return this.moduleDom ? this.moduleDom.outerHTML : '';
        }
    }]);

    return Super;
}();

module.exports = Super;

/***/ }),

/***/ "./src/ui/js/components-super/g-super.js":
/*!***********************************************!*\
  !*** ./src/ui/js/components-super/g-super.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var getDomArray = __webpack_require__(/*! zhf.get-dom-array */ "./node_modules/zhf.get-dom-array/dist/index.min.js"); // 创建元素

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
            moduleDomCreateBefore: function moduleDomCreateBefore(self) {},
            // 内部模块创建之后的回调
            moduleDomCreateAfter: function moduleDomCreateAfter(self) {},
            // 内部模块渲染之前的回调
            moduleDomRenderBefore: function moduleDomRenderBefore(self) {},
            // 内部模块渲染之后的回调
            moduleDomRenderAfter: function moduleDomRenderAfter(self) {},
            // 内部模块移除之前的回调
            moduleDomRemoveBefore: function moduleDomRemoveBefore(self) {},
            // 内部模块移除之后的回调
            moduleDomRemoveAfter: function moduleDomRemoveAfter(self) {},
            // 内部模块显示之前的回调
            moduleDomShowBefore: function moduleDomShowBefore(self) {},
            // 内部模块显示之后的回调
            moduleDomShowAfter: function moduleDomShowAfter(self) {},
            // 内部模块隐藏之前的回调
            moduleDomHideBefore: function moduleDomHideBefore(self) {},
            // 内部模块隐藏之后的回调
            moduleDomHideAfter: function moduleDomHideAfter(self) {},
            // 外部容器获取之前的回调
            wrapDomGetBefore: function wrapDomGetBefore(self) {},
            // 外部容器获取之后的回调
            wrapDomGetAfter: function wrapDomGetAfter(self) {},
            // 外部容器移除之前的回调
            wrapDomRemoveBefore: function wrapDomRemoveBefore(self) {},
            // 外部容器移除之后的回调
            wrapDomRemoveAfter: function wrapDomRemoveAfter(self) {}
        },
        // 配置
        config: {
            // 内部模块的自定义属性
            moduleDomCustomAttribute: {},
            // 内部模块插入到外部容器的方式
            moduleDomRenderMethod: {
                method: 'appendChild', // 'appendChild','insertBefore'
                child: null
            },
            moduleDomStyle: {}, // 内部模块的样式
            moduleDomIsRender: true, // 内部模块是否渲染
            moduleDomIsClearTimer: true // 内部模块是否清除所有定时器(默认清除)
        },
        // 数据
        data: {}
    },
    // 外部传入参数
    json);
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

    var callback = this.opts.callback;
    callback.moduleDomCreateBefore(this);
    this.moduleDomCreate(); // 内部模块的创建
    callback.moduleDomCreateAfter(this);

    this.wrapDomGet(); // 外部容器的获取
    this.moduleDomRender(); // 内部模块的渲染(如果外部容器存在,就把内部模块填充到外部容器里)
};

// (功)(覆)功能(这个方法需要在子类型里被覆盖掉)
Super.prototype.power = function () {};

// (建)(覆)内部模块的创建(这个方法需要在子类型里被覆盖掉)
Super.prototype.moduleDomCreate = function () {
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-super-type',
            innerHTML: '\n                <div class="g-super-type-text" style="text-align: center;">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DEsup-es5</div>\n            '
        }
    });
};

// 内部模块的渲染
Super.prototype.moduleDomRender = function () {
    var callback = this.opts.callback;
    var config = this.opts.config;
    if (config.moduleDomIsRender && this.wrapDom && this.moduleDom) {
        callback.moduleDomRenderBefore(this);
        var renderMethod = config.moduleDomRenderMethod;
        if (renderMethod.method === 'insertBefore') {
            var dom = getDomArray(renderMethod.child)[0];
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
    var callback = this.opts.callback;
    if (this.moduleDom && this.moduleDom.parentNode) {
        callback.moduleDomRemoveBefore(this);
        this.moduleDom.parentNode.removeChild(this.moduleDom);
        callback.moduleDomRemoveAfter(this);
    }
    this.moduleDomClearTimer();
};

// 内部模块的定时器清除(假设内部模块有定时器)
Super.prototype.moduleDomClearTimer = function () {
    var self = this;
    if (self.opts.config.moduleDomIsClearTimer) {
        Object.keys(self.moduleDomTimer).forEach(function (attr) {
            clearInterval(self.moduleDomTimer[attr]);
            clearTimeout(self.moduleDomTimer[attr]);
        });
    }
};

// 内部模块的隐藏(显示隐藏和是否清除定时器无关)
Super.prototype.moduleDomHide = function () {
    var callback = this.opts.callback;
    if (this.moduleDom.parentNode) {
        this.opts.config.moduleDomIsRender = false;
        callback.moduleDomHideBefore(this);
        this.moduleDom.parentNode.removeChild(this.moduleDom);
        callback.moduleDomHideAfter(this);
    }
};

// 内部模块的显示(显示隐藏和是否清除定时器无关)
Super.prototype.moduleDomShow = function () {
    var callback = this.opts.callback;
    callback.moduleDomShowBefore(this);
    if (this.wrapDom) {
        this.opts.config.moduleDomIsRender = true;
        this.moduleDomRender();
    }
    callback.moduleDomShowAfter(this);
};

// 外部容器的获取
Super.prototype.wrapDomGet = function () {
    var callback = this.opts.callback;
    callback.wrapDomGetBefore(this);
    this.wrapDom = getDomArray(this.opts.wrap)[0];
    callback.wrapDomGetAfter(this);
};

// 外部容器的移除
Super.prototype.wrapDomRemove = function () {
    var callback = this.opts.callback;
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

/***/ }),

/***/ "./src/ui/js/components/g-confirm.js":
/*!*******************************************!*\
  !*** ./src/ui/js/components/g-confirm.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)

// 子类型
var Sub = constructorInherit(Super, {
    wrap: '.g-wrap',
    // 回调
    callback: {
        // 确认
        confirm: function confirm() {},
        // 取消
        cancel: function cancel() {},
        // 关闭
        close: function close() {}
    },
    // 配置
    config: {
        positionLocation: 'center', // 弹窗的定位位置('top'，'center'，'bottom')。positionMethod定位方式强制fixed。
        isShowClose: true, // 是否显示关闭按钮
        closeContent: '<div class="iconfont icon-close"></div>', // 关闭按钮的内容
        isShowHeader: true, // 是否显示头部
        headerContent: '提示:', // 头部内容
        isShowBody: true, // 是否显示主体
        isShowIcon: false, // 是否显示icon
        icon: 'icon-warning', // icon的类型
        isCustom: false, // 是否自定义
        content: '<div>确定要执行这个操作?</div>', // 主体内容
        isShowFooter: true, // 是否显示尾部
        isShowConfirm: true, // 是否显示确认按钮
        confirmContent: '确认', // 确认按钮的内容
        isShowCancel: true, // 是否显示取消按钮
        cancelContent: '取消', // 取消按钮的内容
        isShowMask: true, // 是否显示遮罩
        isHandHide: false // 是否手动隐藏(一般只用于点击确认时)
    },
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var positionLocation = 'g-confirm-wrap_' + config.positionLocation; // 弹窗的定位位置
    // 弹窗结构
    var html = this.renderConfirm();
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-confirm-wrap ' + positionLocation,
            innerHTML: html
        }
    });
};

// 确认框
Sub.prototype.renderConfirm = function () {
    var config = this.opts.config;
    var htmlHeader = '';
    if (config.isShowHeader) {
        htmlHeader = '<div class="g-confirm-header">' + config.headerContent + '</div>';
    }
    var htmlBody = '';
    if (config.isShowBody) {
        var htmlIcon = '';
        if (config.isShowIcon) {
            htmlIcon = '<div class="g-confirm-body-system-icon iconfont ' + config.icon + '"></div>';
        }
        var bodyClass = 'g-confirm-body-system';
        var bodyContent = '\n            ' + htmlIcon + '\n            <div class="g-confirm-body-system-text">' + config.content + '</div>\n        ';
        if (config.isCustom) {
            bodyClass = 'g-confirm-body-custom';
            bodyContent = config.content;
        }
        htmlBody = '\n            <div class="g-confirm-body">\n                <div class="' + bodyClass + '">\n                    ' + bodyContent + '\n                </div>\n            </div>\n        ';
    }
    var htmlFooter = '';
    if (config.isShowFooter) {
        var htmlCancel = '';
        if (config.isShowCancel) {
            htmlCancel = '<div class="g-button g-button_cancel g-confirm-footer-cancel">' + config.cancelContent + '</div>';
        }
        var htmlConfirm = '';
        if (config.isShowConfirm) {
            htmlConfirm = '<div class="g-button g-confirm-footer-confirm">' + config.confirmContent + '</div>';
        }
        htmlFooter = '<div class="g-confirm-footer">' + htmlCancel + htmlConfirm + '</div>';
    }
    var htmlClose = '';
    if (config.isShowClose) {
        htmlClose = '<div class="g-confirm-close">' + config.closeContent + '</div>';
    }
    var htmlMask = '';
    if (config.isShowMask) {
        htmlMask = '<div class="g-mask"></div>';
    }
    return '\n        ' + htmlMask + '\n        <div class="g-confirm">\n            ' + htmlHeader + '\n            ' + htmlBody + '\n            ' + htmlFooter + '\n            ' + htmlClose + ' \n        </div>\n    ';
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    var config = this.opts.config;
    var callback = this.opts.callback;
    // 关闭
    var close = this.moduleDom.querySelector('.g-confirm-close');
    if (close) {
        close.addEventListener('click', function () {
            self.moduleDomHide();
            callback.close();
        });
    }
    // 取消
    var cancel = this.moduleDom.querySelector('.g-confirm-footer-cancel');
    if (cancel) {
        cancel.addEventListener('click', function () {
            self.moduleDomHide();
            callback.cancel();
        });
    }
    // 确认
    var confirm = this.moduleDom.querySelector('.g-confirm-footer-confirm');
    if (confirm) {
        confirm.addEventListener('click', function () {
            if (!config.isHandHide) {
                self.moduleDomHide();
            }
            callback.confirm();
        });
    }
};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-copyright.js":
/*!*********************************************!*\
  !*** ./src/ui/js/components/g-copyright.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)

// 子类型
var Sub = constructorInherit(Super, {
    // 容器
    wrap: '.g-footer',
    // 回调
    callback: {},
    // 配置
    config: {},
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-copyright',
            innerHTML: '\n                <div class="g-copyright-icon iconfont icon-logo"></div>\n                <div class="g-copyright-text">\u7248\u6743\u4FE1\u606F\u54DF</div>\n            '
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-footer-nav.js":
/*!**********************************************!*\
  !*** ./src/ui/js/components/g-footer-nav.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)

// 子类型
var Sub = constructorInherit(Super, {
    // 容器
    wrap: '.g-footer',
    // 回调
    callback: {},
    // 配置
    config: {},
    // 数据
    data: [
        // {
        //     routeName: 'home',
        //     href: '/',
        //     text: '首页',
        //     icon: 'icon-home',
        //     isHighlight: false,
        //     isShowMark: false
        // }
    ]
});

Sub.prototype.moduleDomCreate = function () {
    this.moduleDomClass = 'g-footer-nav';
    var moduleDomHtml = '';
    var data = this.opts.data;
    Object.keys(data).forEach(function (key) {
        var v = data[key];
        var highlightClass = '';
        if (v.isHighlight) {
            highlightClass = 'g-footer-nav-body-item_active';
        }
        var markHtml = '';
        if (v.isShowMark) {
            markHtml = '<div class="g-footer-nav-body-item-mark"></div>';
        }
        moduleDomHtml += '\n            <a class="g-footer-nav-body-item ' + highlightClass + '" href="' + v.href + '">\n                <div class="g-footer-nav-body-item-icon iconfont ' + v.icon + '"></div>\n                <div class="g-footer-nav-body-item-text">' + v.text + '</div>\n                ' + markHtml + '\n            </a>\n        ';
    });
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: this.moduleDomClass,
            innerHTML: '<div class="g-footer-nav-body">' + moduleDomHtml + '</div>'
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-go-top.js":
/*!******************************************!*\
  !*** ./src/ui/js/components/g-go-top.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)
var scrollMoveTo = __webpack_require__(/*! zhf.scroll-move-to */ "./node_modules/zhf.scroll-move-to/dist/index.min.js");

// 子类型
var Sub = constructorInherit(Super, {
    // 容器
    wrap: '.g-footer',
    // 回调
    callback: {},
    // 配置
    config: {
        showHeight: 200
    },
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-go-top',
            innerHTML: '<div class="g-go-top-icon iconfont icon-up"></div>'
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    this.moduleDom.addEventListener('click', function () {
        scrollMoveTo(0, 0);
    });
    window.addEventListener('scroll', function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= self.opts.config.showHeight) {
            self.moduleDom.classList.add('g-go-top_active');
        } else {
            self.moduleDom.classList.remove('g-go-top_active');
        }
    });
};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-jump-link.js":
/*!*********************************************!*\
  !*** ./src/ui/js/components/g-jump-link.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var timeCountDown = __webpack_require__(/*! zhf.time-count-down */ "./node_modules/zhf.time-count-down/dist/index.min.js"); // 倒计时
var Confirm = __webpack_require__(/*! ./g-confirm */ "./src/ui/js/components/g-confirm.js");

// 专门为请求成功写的跳转链接弹窗

var Super = function Super(opts) {
    _classCallCheck(this, Super);

    opts = extend({
        title: '操作成功',
        seconds: 3,
        pageTitle: '登录',
        href: 'javascript:;'
    }, opts);
    var content = '<div class="g-jump-link">\n            <div class="g-jump-link-title">' + opts.title + '</div>\n            <div class="g-jump-link-body">\n                <div class="g-jump-link-body-seconds">' + opts.seconds + '</div>\n                <div>\u79D2\u540E\u81EA\u52A8\u8DF3\u8F6C\u5230</div>\n                <a href="' + opts.href + '" class="g-jump-link-body-page-title">' + opts.pageTitle + '\u9875</a>\n            </div>\n            <a href="' + opts.href + '" class="g-jump-link-footer">\u70B9\u51FB\u6B64\u5904\u624B\u52A8\u8DF3\u8F6C</a>\n        </div>';
    var oConfirm = new Confirm({
        config: {
            positionLocation: 'center', // 弹窗的定位位置
            isShowHeader: false, // 是否显示头部
            headerContent: '提示:', // 头部内容
            isShowBody: true, // 是否显示主体
            content: content, // 主体内容
            isShowFooter: false, // 是否显示尾部
            isShowClose: false, // 是否显示关闭按钮
            closeContent: '<div class="iconfont icon-close"></div>', // 关闭按钮的内容
            isShowConfirm: false, // 是否显示确认按钮
            confirmContent: '确认', // 确认按钮的内容
            isShowCancel: false, // 是否显示取消按钮
            cancelContent: '取消', // 取消按钮的内容
            isCustom: false, // 是否自定义
            isShowIcon: false, // 是否显示icon
            icon: 'icon-warning', // icon的类型
            isShowMask: true, // 是否显示遮罩
            isHandHide: false // 是否手动隐藏(一般只用于点击确认时)
        }
    });
    var seconds = oConfirm.moduleDom.querySelector('.g-jump-link-body-seconds');
    timeCountDown({
        seconds: opts.seconds,
        callback: {
            run: function run(obj) {
                seconds.innerHTML = obj.seconds;
            },
            over: function over() {
                window.location.href = opts.href;
            }
        }
    });
};

module.exports = Super;

/***/ }),

/***/ "./src/ui/js/components/g-lazy-load.js":
/*!*********************************************!*\
  !*** ./src/ui/js/components/g-lazy-load.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var offset = __webpack_require__(/*! zhf.offset */ "./node_modules/zhf.offset/dist/index.min.js");

// 延迟加载
function LazyLoad(json) {
    this.opts = extend({
        element: '.g-lazy-load', // 哪些元素进行懒加载
        srcAttr: 'data-src', // 默认获取哪里的属性值当做src
        moreHeight: 0, // 多加载一部分高度的图片
        interval: 80, // 函数节流时间(延迟时间)
        isInitRender: true // 是否初始化的时候就进行render
    }, json);
    this.clientHeight = document.documentElement.clientHeight;
    this.init();
}

LazyLoad.prototype.init = function () {
    if (this.opts.isInitRender) {
        this.render();
    }
    this.power();
};
LazyLoad.prototype.render = function () {
    var self = this;
    var moreHeight = this.opts.moreHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var minTop = scrollTop - moreHeight;
    var maxTop = this.clientHeight + minTop + moreHeight;
    var src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC';
    var aDom = getDomArray(this.opts.element);
    aDom.forEach(function (v) {
        if (v.tagName.toLowerCase() === 'img') {
            if (!v.getAttribute('src')) {
                v.src = src;
            }
            v.setAttribute('height', '100%');
            v.setAttribute('width', '100%');
        }
    });
    aDom.forEach(function (v) {
        // 排除那些被none掉的元素(被none掉的元素,通过offsetWidth和offsetHeight获取到的值是0)
        if (v.offsetWidth) {
            var elementTop = offset(v).top;
            var elementBottom = elementTop + v.offsetHeight;
            // 出现在可视区才进行处理
            if (elementBottom >= minTop && elementTop <= maxTop) {
                if (v.tagName.toLowerCase() === 'img') {
                    if (v.getAttribute(self.opts.srcAttr)) {
                        v.src = v.getAttribute(self.opts.srcAttr);
                    }
                    v.removeAttribute('height');
                    v.removeAttribute('width');
                } else if (v.getAttribute(self.opts.srcAttr)) {
                    v.style.backgroundImage = 'url(' + v.getAttribute(self.opts.srcAttr) + ')';
                }
                v.classList.remove('g-lazy-load');
                v.classList.add('g-lazy-load_active');
            }
        }
    });
};
LazyLoad.prototype.power = function () {
    var self = this;
    var timer = null;
    window.addEventListener('scroll', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            self.render();
        }, self.opts.interval);
    });
};
module.exports = LazyLoad;

/***/ }),

/***/ "./src/ui/js/components/g-loading.js":
/*!*******************************************!*\
  !*** ./src/ui/js/components/g-loading.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)

// 子类型
var Sub = constructorInherit(Super, {
    // 回调
    callback: {},
    // 配置
    config: {
        status: 'loading', // 加载状态 loading(加载中) over(加载完毕)
        positionMethod: '', // 模块的定位方式 'fixed'(相对于整个文档) 'absolute'(相对于外部容器)
        positionLocation: 'center' // 模块的定位位置
    },
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var moduleDomHtml = '';
    var moduleDomClass = '';
    var status = config.status;
    var positionMethod = config.positionMethod;
    var positionLocation = config.positionLocation;
    // 加载中
    if (status === 'loading') {
        moduleDomClass = 'g-loading-run ';
        // 相对文档居中
        if (positionMethod === 'fixed') {
            moduleDomClass += 'g-loading-fixed g-loading-' + positionLocation;
        }
        // 相对容器居中
        if (positionMethod === 'absolute') {
            moduleDomClass += 'g-loading-absolute g-loading-' + positionLocation;
        }
        moduleDomHtml = '\n            <div class="g-loading-body">\n                <div class="g-loading-run-icon iconfont icon-loading"></div>\n            </div>\n        ';
    }
    // 加载完毕
    if (status === 'over') {
        moduleDomClass = 'g-loading-over ';
        // 相对文档居中
        if (positionMethod === 'fixed') {
            moduleDomClass += 'g-loading-fixed g-loading-' + positionLocation;
        }
        // 相对容器居中
        if (positionMethod === 'absolute') {
            moduleDomClass += 'g-loading-absolute g-loading-' + positionLocation;
        }
        moduleDomHtml = '\n            <div class="g-loading-body">\n                <div class="g-loading-over-icon iconfont icon-no-data"></div>\n                <div class="g-loading-over-text">\u6CA1\u6709\u6570\u636E\u4E86</div>\n            </div>\n        ';
    }
    // 模块创建
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-loading ' + moduleDomClass,
            innerHTML: moduleDomHtml
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-mask.js":
/*!****************************************!*\
  !*** ./src/ui/js/components/g-mask.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)
var domAddPosition = __webpack_require__(/*! zhf.dom-add-position */ "./node_modules/zhf.dom-add-position/dist/index.min.js");

// 子类型
var Sub = constructorInherit(Super, {
    // 回调
    callback: {
        click: function click() {},
        moduleDomRenderBefore: function moduleDomRenderBefore(self) {
            domAddPosition(self.wrapDom, 'relative');
        }
    },
    // 配置
    config: {
        isTransparent: false, // 是不是透明的(默认不透明)
        positionMethod: 'fixed' // 模块的定位方式 'fixed'(相对于整个文档) 'absolute'(相对于外部容器)
    },
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var className = '';
    if (config.isTransparent) {
        className = 'g-mask_transparent';
    }
    if (config.positionMethod === 'fixed') {
        className = 'g-mask-fixed';
    }
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-mask ' + className,
            innerHTML: ''
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    this.moduleDom.addEventListener('click', function (ev) {
        self.opts.callback.click();
        ev.stopPropagation();
    });
};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-message.js":
/*!*******************************************!*\
  !*** ./src/ui/js/components/g-message.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)

// 子类型
var Sub = constructorInherit(Super, {
    wrap: '.g-wrap',
    // 回调
    callback: {
        // 关闭
        close: function close() {}
    },
    // 配置
    config: {
        time: 3000, // 展示的时间
        isShowIcon: false, // 是否显示icon
        isShowClose: true, // 是否显示关闭按钮
        icon: 'icon-success', // icon的class
        content: '成功', // 内容信息
        positionLocation: 'top' // 弹窗的定位位置('top'，'center'，'bottom')。positionMethod定位方式强制fixed。
    },
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var positionLocation = 'g-message_' + config.positionLocation; // 弹窗的定位位置
    // 弹窗结构
    var html = this.renderAlert();
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-message ' + positionLocation,
            innerHTML: html
        }
    });
};

// 提示框
Sub.prototype.renderAlert = function () {
    var config = this.opts.config;
    var htmlIcon = '';
    if (config.isShowIcon) {
        htmlIcon = '<div class="g-message-icon iconfont ' + config.icon + '"></div>';
    }
    var closeHtml = '';
    if (config.isShowClose) {
        closeHtml = '<div class="g-message-close iconfont icon-close" ></div>';
    }
    return '\n        ' + closeHtml + '\n        ' + htmlIcon + '\n        <div class="g-message-text">' + config.content + '</div>\n    ';
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    var config = this.opts.config;
    var callback = this.opts.callback;
    var close = this.moduleDom.querySelector('.g-message-close');
    var timer = null;
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

/***/ }),

/***/ "./src/ui/js/components/g-navigation.js":
/*!**********************************************!*\
  !*** ./src/ui/js/components/g-navigation.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)
// 超类型(子类型继承的对象)
var route = '/phone/';

// 子类型
var Sub = constructorInherit(Super, {
    // 回调
    callback: {},
    // 配置
    config: {},
    // 数据
    data: {
        items: [
            /*
            {
                href: route,
                icon: 'icon-home',
                text: '首页',
                isShowMark: false,
            },
            {
                href: `${route}dev-globals/`,
                icon: 'icon-dev',
                text: '开发全局',
                isShowMark: false,
            },
            {
                href: `${route}dev-components/`,
                icon: 'icon-dev',
                text: '开发组件',
                isShowMark: false,
            },
            {
                href: `${route}dev-words/`,
                icon: 'icon-dev',
                text: '开发词汇',
                isShowMark: false,
            },
            {
                href: `${route}mine/`,
                icon: 'icon-mine',
                text: '我的',
                isShowMark: false,
            },
            */
        ]
    }
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var data = this.opts.data;
    var items = data.items;
    var html = '';
    items.forEach(function (v) {
        var markHtml = '';
        if (v.isShowMark) {
            markHtml = '<div class="g-navigation-item-mark"></div>';
        }
        html += '\n            <a href="' + v.href + '" class="g-navigation-item">\n                <div class="g-navigation-item-icon iconfont ' + v.icon + '"></div>\n                <div class="g-navigation-item-text">' + v.text + '</div>\n                ' + markHtml + '\n            </a>\n        ';
    });
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-navigation',
            innerHTML: html
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-no-data.js":
/*!*******************************************!*\
  !*** ./src/ui/js/components/g-no-data.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)

// 子类型
var Sub = constructorInherit(Super, {
    // 回调
    callback: {},
    // 配置
    config: {
        button: {
            isShowIcon: false
        }
    },
    // 数据
    data: {
        icon: 'icon-no-data',
        text: '没有数据',
        button: {
            icon: 'icon-home',
            text: '回首页',
            href: '/'
        }
    }
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var data = this.opts.data;
    var buttonIconHtml = '';
    if (this.opts.config.button.isShowIcon) {
        buttonIconHtml = '<div class="g-button-icon iconfont ' + data.button.icon + '"></div>';
    }
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-no-data',
            innerHTML: '\n                <div class="g-no-data-icon iconfont ' + data.icon + '"></div>\n                <div class="g-no-data-text">' + data.text + '</div>\n                <a class="g-no-data-button g-button" href="' + data.button.href + '">\n                    ' + buttonIconHtml + '\n                    <div class="g-button-text">' + data.button.text + '</div>\n                </a>\n            '
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-pagination.js":
/*!**********************************************!*\
  !*** ./src/ui/js/components/g-pagination.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)

// 默认数据
var defaultData = {
    nowCount: 10, // 当前页的数据条数
    allCount: 100, // 数据总条数
    nowPage: 1, // 当前页
    allPage: null // 总页数
};
defaultData.allPage = Math.ceil(defaultData.allCount / defaultData.nowCount);

// 子类型
var Sub = constructorInherit(Super, {
    // 回调
    callback: {
        // 上一页的回调
        prevPage: function prevPage() {},
        // 下一页的回调
        nextPage: function nextPage() {},
        // 选择某一页的回调
        selectPage: function selectPage() {}
    },
    // 配置
    config: {},
    // 数据
    data: defaultData
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-pagination',
            innerHTML: '\n                <div class="g-pagination-text">\u7B2C</div>\n                <div class="g-pagination-now-page">\n                    <label class="g-select">\n                        <select class="g-select-body">\n                            ' + this.renderOption() + '\n                        </select>\n                        <span class="g-select-mark iconfont icon-select"></span>\n                    </label>\n                </div>\n                <div class="g-pagination-text">\u9875</div>\n                <a href="javascript:;" class="g-pagination-btn g-pagination-btn-inactive iconfont icon-prev"></a>\n                <a href="javascript:;" class="g-pagination-btn iconfont icon-next"></a>\n            '
        }
    });
    this.prevDom = this.moduleDom.querySelectorAll('.g-pagination-btn')[0]; // 上一页的按钮
    this.nextDom = this.moduleDom.querySelectorAll('.g-pagination-btn')[1]; // 下一页的按钮
    this.btnInactiveClass = 'g-pagination-btn-inactive'; // 上一页和下一页的禁用状态
    this.selectDom = this.moduleDom.querySelector('.g-pagination-now-page .g-select-body'); // 选择某一页的按钮
};

// 渲染第几页里面的页码
Sub.prototype.renderOption = function () {
    var html = '';
    for (var i = 0; i < this.opts.data.allPage; i++) {
        html += '<option value="' + (i + 1) + '">' + (i + 1) + '</option>';
    }
    return html;
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    var data = this.opts.data;
    if (data.nowPage === 1) {
        this.prevPageDisable();
    }
    if (data.nowPage === data.allPage) {
        this.nextPageDisable();
    }

    this.prevDom.addEventListener('click', function () {
        if (!this.classList.contains(self.btnInactiveClass)) {
            self.prevPage();
        }
    });

    this.nextDom.addEventListener('click', function () {
        if (!this.classList.contains(self.btnInactiveClass)) {
            self.nextPage();
        }
    });

    this.selectDom.addEventListener('change', function () {
        self.selectPage();
    });
};

// 上一页
Sub.prototype.prevPage = function () {
    var data = this.opts.data;
    if (data.nowPage > 1) {
        data.nowPage--;
        var oldChecked = this.selectDom.querySelector('option:checked');
        if (oldChecked.previousElementSibling) {
            oldChecked.selected = false;
            oldChecked.previousElementSibling.selected = true;
        }
        this.nextPageEnable();
        this.opts.callback.prevPage(this);
    }
    if (data.nowPage === 1) {
        this.prevPageDisable();
    }
    console.log(data);
};

// 下一页
Sub.prototype.nextPage = function () {
    var data = this.opts.data;
    if (data.nowPage < data.allPage) {
        data.nowPage++;
        var oldChecked = this.selectDom.querySelector('option:checked');
        if (oldChecked.nextElementSibling) {
            oldChecked.selected = false;
            oldChecked.nextElementSibling.selected = true;
        }
        this.prevPageEnable();
        this.opts.callback.nextPage(this);
    }
    if (data.nowPage === data.allPage) {
        this.nextPageDisable();
    }
    console.log(data);
};

// 选择第几页
Sub.prototype.selectPage = function () {
    var data = this.opts.data;
    data.nowPage = this.selectDom.value;
    this.nextPageEnable();
    this.prevPageEnable();
    if (data.nowPage === 1) {
        this.prevPageDisable();
    }
    if (data.nowPage === data.allPage) {
        this.nextPageDisable();
    }
    this.opts.callback.selectPage(this);
    console.log(data);
};

// 上一页禁用
Sub.prototype.prevPageDisable = function () {
    this.prevDom.classList.add(this.btnInactiveClass);
};

// 上一页启用
Sub.prototype.prevPageEnable = function () {
    this.prevDom.classList.remove(this.btnInactiveClass);
};

// 下一页禁用
Sub.prototype.nextPageDisable = function () {
    this.nextDom.classList.add(this.btnInactiveClass);
};

// 下一页启用
Sub.prototype.nextPageEnable = function () {
    this.nextDom.classList.remove(this.btnInactiveClass);
};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-popover.js":
/*!*******************************************!*\
  !*** ./src/ui/js/components/g-popover.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)

// 子类型
var Sub = constructorInherit(Super, {
    wrap: '.g-wrap',
    // 回调
    callback: {},
    // 配置
    config: {
        moduleDomIsRender: false,
        element: '.js-popover',
        eventType: 'mouseover',
        positionLocation: 'top-left', // 弹窗的定位位置('top-left'，'top-center'，'top-right')。
        content: 'no popover content'
    },
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var positionLocation = 'g-popover_' + config.positionLocation; // 弹窗的定位位置
    // 弹窗结构
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-popover ' + positionLocation,
            innerHTML: '\n                <div class="g-popover-content">' + config.content + '</div>\n                <div class="g-popover-icon"></div>                \n            '
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    var opts = self.opts;
    var config = opts.config;
    var positionLocation = config.positionLocation;
    var moduleDom = self.moduleDom;
    if (config.eventType === 'mouseover' || config.eventType === 'mouseenter') {
        $(config.element).on('mouseenter', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            self.moduleDomShow();
            setCss(this);
            clearTimeout(self.gPopoverMouseenterTimer);
        });
        $(config.element).on('mouseleave', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            fnModuleDomHide();
        });
        $(moduleDom).on('mouseenter', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            clearTimeout(self.gPopoverMouseenterTimer);
        });
        $(moduleDom).on('mouseleave', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            fnModuleDomHide();
        });
    }

    function fnModuleDomHide() {
        self.gPopoverMouseenterTimer = setTimeout(function () {
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
                top: $(eventDom).offset().top - moduleDom.offsetHeight
            });
        }
        if (positionLocation === 'top-center') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth) / 2,
                top: $(eventDom).offset().top - moduleDom.offsetHeight
            });
        }
        if (positionLocation === 'top-right') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth),
                top: $(eventDom).offset().top - moduleDom.offsetHeight
            });
        }
        // 水平居下
        if (positionLocation === 'bottom-left') {
            $(moduleDom).css({
                left: $(eventDom).offset().left,
                top: $(eventDom).offset().top + eventDom.offsetHeight
            });
        }
        if (positionLocation === 'bottom-center') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth) / 2,
                top: $(eventDom).offset().top + eventDom.offsetHeight
            });
        }
        if (positionLocation === 'bottom-right') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth),
                top: $(eventDom).offset().top + eventDom.offsetHeight
            });
        }
        // 垂直居左
        if (positionLocation === 'left-top') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - moduleDom.offsetWidth,
                top: $(eventDom).offset().top
            });
        }
        if (positionLocation === 'left-center') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - moduleDom.offsetWidth,
                top: $(eventDom).offset().top - (moduleDom.offsetHeight - eventDom.offsetHeight) / 2
            });
        }
        if (positionLocation === 'left-bottom') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - moduleDom.offsetWidth,
                top: $(eventDom).offset().top - (moduleDom.offsetHeight - eventDom.offsetHeight)
            });
        }
        // 垂直居右
        if (positionLocation === 'right-top') {
            $(moduleDom).css({
                left: $(eventDom).offset().left + eventDom.offsetWidth,
                top: $(eventDom).offset().top
            });
        }
        if (positionLocation === 'right-center') {
            $(moduleDom).css({
                left: $(eventDom).offset().left + eventDom.offsetWidth,
                top: $(eventDom).offset().top - (moduleDom.offsetHeight - eventDom.offsetHeight) / 2
            });
        }
        if (positionLocation === 'right-bottom') {
            $(moduleDom).css({
                left: $(eventDom).offset().left + eventDom.offsetWidth,
                top: $(eventDom).offset().top - (moduleDom.offsetHeight - eventDom.offsetHeight)
            });
        }
    }
};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-progress-bar.js":
/*!************************************************!*\
  !*** ./src/ui/js/components/g-progress-bar.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super-es6 */ "./src/ui/js/components-super/g-super-es6.js"); // 超类型(子类型继承的对象)
var globalConfig = __webpack_require__(/*! ../config/g-config */ "./src/ui/js/config/g-config.js"); // 全局配置

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(json) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {},
            // 配置
            config: {},
            // 数据
            data: {}
        }, json)));
    }

    // (建)(覆)内部模块的创建(覆盖超类型)


    _createClass(Sub, [{
        key: 'moduleDomCreate',
        value: function moduleDomCreate() {
            this.moduleDom = createElement({
                style: this.opts.config.moduleDomStyle,
                customAttribute: this.opts.config.moduleDomCustomAttribute,
                attribute: {
                    className: 'g-progress-bar',
                    innerHTML: '\n                    <canvas class="g-progress-bar-canvas"></canvas>\n                    <div class="g-progress-bar-text">0%</div>    \n                '
                }
            });
        }

        // (功)(覆)功能(覆盖超类型)

    }, {
        key: 'power',
        value: function power() {
            var self = this;
            self.canvas = self.moduleDom.querySelector('.g-progress-bar-canvas');
            self.canvasContext = self.canvas.getContext('2d');
            self.radian = Math.PI / 180; // 弧度
            self.canvasSetVar(); // 设置变量
            self.canvasSetScale(0); // 设置比例
            window.addEventListener('resize', function () {
                globalConfig.resetOutermostContainerDomMaxWidth(); // 重置最大宽度
                self.canvasSetVar(); // 设置变量
                self.canvasSetScale(self.canvasScaleNum || 0); // 设置比例
            });
        }
    }, {
        key: 'canvasSetVar',
        value: function canvasSetVar() {
            // 设置变量
            var moduleDom = this.moduleDom;
            var canvas = this.canvas;
            var canvasContext = this.canvasContext;
            this.canvasW = moduleDom.offsetWidth;
            this.canvasH = moduleDom.offsetHeight;
            canvas.width = this.canvasW; // 宽
            canvas.height = this.canvasH; // 高
            this.canvasRadius = this.canvasW / 2; // 半径
            canvasContext.translate(this.canvasRadius, this.canvasRadius); // 平移中心点
            canvasContext.rotate(-90 * this.radian); // 旋转90弧度
            this.canvasCenterX = 0; // 中心点x
            this.canvasCenterY = 0; // 中心点y
            this.canvasBorderW = globalConfig.px2remCanvas(5); // 边框
        }
    }, {
        key: 'canvasDrawCircle',
        value: function canvasDrawCircle(strokeStyle, angle) {
            // 画圆
            var ctx = this.canvasContext;
            ctx.strokeStyle = strokeStyle || '#dddddd';
            var temporaryRadius = this.canvasRadius; // 临时半径
            for (var i = 0; i < this.canvasBorderW; i++) {
                ctx.beginPath();
                ctx.arc(this.canvasCenterX, this.canvasCenterY, temporaryRadius, 0, '' + (!isNaN(angle) ? angle * this.radian : 360 * this.radian), false);
                ctx.stroke();
                temporaryRadius--;
            }
        }

        // 设置比例

    }, {
        key: 'canvasSetScale',
        value: function canvasSetScale() {
            var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            this.canvasScaleNum = num;
            this.canvasContext.clearRect(0, 0, this.canvasW, this.canvasH); // 清理画布
            this.canvasDrawCircle(); // 画圆
            this.canvasDrawCircle('#67C23A', num * 3.6); // 画圆
            this.moduleDom.querySelector('.g-progress-bar-text').innerHTML = num + '%';
        }
    }]);

    return Sub;
}(Super);

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-radio-switch.js":
/*!************************************************!*\
  !*** ./src/ui/js/components/g-radio-switch.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)

// 子类型
var Sub = constructorInherit(Super, {
    // 回调
    callback: {
        click: function click() {}
    },
    // 配置
    config: {
        isHand: false, // 是否手动控制
        status: 'on', // 状态
        txt: {
            on: '已开启',
            off: '已关闭'
        }
    },
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    this.moduleDomActiveClass = 'g-radio-switch_active';
    var isOn = '';
    if (config.status === 'on') {
        isOn = this.moduleDomActiveClass;
    }
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-radio-switch ' + isOn,
            innerHTML: '\n                <div class="g-radio-switch-body">\n                    <div class="g-radio-switch-body-round"></div>\n                </div>\n                <div class="g-radio-switch-text">' + config.txt[config.status] + '</div>\n            '
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    var config = this.opts.config;
    this.moduleDom.addEventListener('click', function () {
        if (!config.isHand) {
            if (!self.isOn()) {
                self.on();
            } else {
                self.off();
            }
        }
        self.opts.callback.click({ status: config.status });
    });
};

// 是否处于开启状态
Sub.prototype.isOn = function () {
    return this.moduleDom.classList.contains(this.moduleDomActiveClass);
};

// 开启
Sub.prototype.on = function () {
    var config = this.opts.config;
    if (!this.isOn()) {
        this.moduleDom.classList.add(this.moduleDomActiveClass);
        config.status = 'on';
        this.moduleDom.querySelector('.g-radio-switch-text').innerHTML = '' + config.txt[config.status];
    }
};

// 关闭
Sub.prototype.off = function () {
    var config = this.opts.config;
    if (this.isOn()) {
        this.moduleDom.classList.remove(this.moduleDomActiveClass);
        config.status = 'off';
        this.moduleDom.querySelector('.g-radio-switch-text').innerHTML = '' + config.txt[config.status];
    }
};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-sort-tab.js":
/*!********************************************!*\
  !*** ./src/ui/js/components/g-sort-tab.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super-es6 */ "./src/ui/js/components-super/g-super-es6.js"); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(json) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {
                click: function click(json) {}
            },
            // 配置
            config: {
                items: [],
                /*
                items: [
                    {
                        name: 'synthesize',
                        text: '综合',
                        hasSort: false,
                    },
                    {
                        name: 'sale',
                        text: '销量',
                        hasSort: true,
                    },
                    {
                        name: 'price',
                        text: '价格',
                        hasSort: true,
                    },
                ],
                */
                defaultIndex: 0,
                defaultSortMethod: 'asc' // asc升序 desc降序
            }
        }, json)));
    }

    // (建)(覆)内部模块的创建(覆盖超类型)


    _createClass(Sub, [{
        key: 'moduleDomCreate',
        value: function moduleDomCreate() {
            var innerHTML = '';
            var config = this.opts.config;
            var items = config.items || [];
            var defaultIndex = config.defaultIndex;
            var defaultSortMethod = config.defaultSortMethod;
            if (!items.length) {
                return;
            }
            items.forEach(function (v, i) {
                innerHTML += '\n                <div data-name="' + v.name + '" class="g-sort-tab-item ' + (defaultIndex === i ? 'g-sort-tab-item_active' : '') + '">\n                    <div class="g-sort-tab-item-text">' + v.text + '</div>\n                    ' + (v.hasSort ? '<div class="g-sort-tab-item-icon">\n                        <div data-sort-method="asc" class="g-sort-tab-item-icon-item ' + (defaultSortMethod === 'asc' && defaultIndex === i ? 'g-sort-tab-item-icon-item_active' : '') + '"></div>\n                        <div data-sort-method="desc" class="g-sort-tab-item-icon-item ' + (defaultSortMethod === 'desc' && defaultIndex === i ? 'g-sort-tab-item-icon-item_active' : '') + '"></div>\n                    </div>' : '') + '\n                </div>\n            ';
            });
            this.moduleDom = createElement({
                style: this.opts.config.moduleDomStyle,
                customAttribute: this.opts.config.moduleDomCustomAttribute,
                attribute: {
                    className: 'g-sort-tab',
                    innerHTML: innerHTML
                }
            });
        }

        // (功)(覆)功能(覆盖超类型)

    }, {
        key: 'power',
        value: function power() {
            var opts = this.opts;
            var config = opts.config;
            var callback = opts.callback;
            var defaultSortMethod = config.defaultSortMethod;
            var moduleDom = this.moduleDom;
            var items = moduleDom.querySelectorAll('.g-sort-tab-item');
            var itemClass = 'g-sort-tab-item';
            var itemActiveClass = 'g-sort-tab-item_active';
            var sortClass = 'g-sort-tab-item-icon-item';
            var sortActiveClass = 'g-sort-tab-item-icon-item_active';
            items.forEach(function (v) {
                v.addEventListener('click', function () {
                    if (this.classList.contains(itemActiveClass)) {
                        var _sortActiveDom = this.querySelector('.' + sortActiveClass);
                        if (_sortActiveDom) {
                            _sortActiveDom.classList.remove(sortActiveClass);
                            _sortActiveDom.nextElementSibling && _sortActiveDom.nextElementSibling.classList.add(sortActiveClass);
                            _sortActiveDom.previousElementSibling && _sortActiveDom.previousElementSibling.classList.add(sortActiveClass);
                        }
                    } else {
                        moduleDom.querySelectorAll('.' + itemClass).forEach(function (v2) {
                            v2.classList.remove(itemActiveClass);
                            v2.querySelectorAll('.' + sortClass).forEach(function (v3) {
                                v3.classList.remove(sortActiveClass);
                            });
                        });
                        this.classList.add(itemActiveClass);
                        var sortDomAll = this.querySelectorAll('.' + sortClass);
                        if (defaultSortMethod === 'asc') {
                            sortDomAll[0] && sortDomAll[0].classList.add(sortActiveClass);
                        } else {
                            sortDomAll[1] && sortDomAll[1].classList.add(sortActiveClass);
                        }
                    }
                    var itemActiveDom = moduleDom.querySelector('.' + itemActiveClass);
                    var sortActiveDom = itemActiveDom.querySelector('.' + sortActiveClass);
                    callback.click({
                        name: itemActiveDom.dataset.name,
                        sortMethod: sortActiveDom ? sortActiveDom.dataset.sortMethod : ''
                    });
                });
            });
        }
    }]);

    return Sub;
}(Super);

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-star.js":
/*!****************************************!*\
  !*** ./src/ui/js/components/g-star.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)

// 子类型
var Sub = constructorInherit(Super, {
    // 回调
    callback: {
        click: function click(obj) {}
    },
    // 配置
    config: {
        isHaveEvent: true, // 是否具备事件(默认具备)
        allStarNum: 5, // 所有的星星数
        nowStarNum: 4 // 当前被选择的星星数
    },
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var html = '';
    for (var i = 0; i < this.opts.config.allStarNum; i++) {
        var className = '';
        if (i < this.opts.config.nowStarNum) {
            className = 'g-star-item_active';
        }
        html += '<div data-index="' + i + '" class="iconfont icon-star g-star-item ' + className + '"></div>';
    }
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-star',
            innerHTML: html
        }
    });
    this.opts.star = this.moduleDom.children;
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    if (this.opts.config.isHaveEvent) {
        this.moduleDom.addEventListener('click', function (ev) {
            var target = ev.target;
            if (target.classList.contains('g-star-item')) {
                var index = target.dataset.index;
                for (var j = 0; j < self.opts.config.allStarNum; j++) {
                    if (j <= index) {
                        self.opts.star[j].classList.add('g-star-item_active');
                    } else {
                        self.opts.star[j].classList.remove('g-star-item_active');
                    }
                }
                self.opts.callback.click({ element: this, index: index });
            }
        });
    }
};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-sub-es6.js":
/*!*******************************************!*\
  !*** ./src/ui/js/components/g-sub-es6.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super-es6 */ "./src/ui/js/components-super/g-super-es6.js"); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(json) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {},
            // 配置
            config: {},
            // 数据
            data: {}
        }, json)));
    }

    // (建)(覆)内部模块的创建(覆盖超类型)


    _createClass(Sub, [{
        key: 'moduleDomCreate',
        value: function moduleDomCreate() {
            this.moduleDom = createElement({
                style: this.opts.config.moduleDomStyle,
                customAttribute: this.opts.config.moduleDomCustomAttribute,
                attribute: {
                    className: 'g-sub-type-es6',
                    innerHTML: '\n                    <div class="g-sub-type-es6-text" style="text-align: center;">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DEsub-es6</div>\n                '
                }
            });
        }

        // (功)(覆)功能(覆盖超类型)

    }, {
        key: 'power',
        value: function power() {}
    }]);

    return Sub;
}(Super);

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-sub.js":
/*!***************************************!*\
  !*** ./src/ui/js/components/g-sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)

// 子类型
var Sub = constructorInherit(Super, {
    // 回调
    callback: {},
    // 配置
    config: {},
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-sub-type',
            innerHTML: '\n                <div class="g-sub-type-text" style="text-align: center;">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DEsub-es5</div>\n            '
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-table.js":
/*!*****************************************!*\
  !*** ./src/ui/js/components/g-table.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)

// 子类型
var Sub = constructorInherit(Super, {
    // 回调
    callback: {},
    // 配置
    config: {},
    // 数据
    data: {
        header: [{ content: 'undefined-header0' }, { content: 'undefined-header1' }, { content: 'undefined-header2' }],
        body: [[{ content: 'undefined-body0-0' }, { content: 'undefined-body0-1' }, { content: 'undefined-body0-2' }]],
        footer: ''
    }
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-table',
            innerHTML: '\n                <div class="g-table-header">\n                    <div class="g-table-row">\n                        ' + this.moduleDomCreateHeader() + '\n                    </div>\n                </div>\n                <div class="g-table-body">\n                    ' + this.moduleDomCreateBody() + '\n                </div>\n                <div class="g-table-footer">\n                    ' + this.moduleDomCreateFooter() + '\n                </div>\n            '
        }
    });
};

Sub.prototype.moduleDomCreateHeader = function () {
    var html = '';
    this.opts.data.header.forEach(function (v) {
        html += '\n            <div class="g-table-col">\n                <div class="g-table-col-body">\n                    ' + v.content + '\n                </div>\n            </div>\n        ';
    });
    return html;
};

Sub.prototype.moduleDomCreateBody = function () {
    var html = '';
    this.opts.data.body.forEach(function (v0) {
        var row = '';
        v0.forEach(function (v1) {
            row += '\n                <div class="g-table-col">\n                    <div class="g-table-col-body">\n                        ' + v1.content + '\n                    </div>\n                </div>\n            ';
        });
        html += '<div class="g-table-row">' + row + '</div>';
    });
    return html;
};

Sub.prototype.moduleDomCreateFooter = function () {
    return this.opts.data.footer;
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-tooltip-app.js":
/*!***********************************************!*\
  !*** ./src/ui/js/components/g-tooltip-app.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var Tooltip = __webpack_require__(/*! ./g-tooltip */ "./src/ui/js/components/g-tooltip.js"); // 工具提示框(文本提示框)

// 工具提示框(文本提示框)的应用
function Sub(opts) {
    this.opts = extend({
        element: '.js-g-tooltip',
        eventType: 'mouseover',
        positionLocation: 'top-left' // 弹窗的定位位置('top-left'，'top-center'，'top-right')。
    }, opts);
    this.init();
}

Sub.prototype.init = function () {
    var self = this;
    var opts = self.opts;
    var positionLocation = opts.positionLocation;
    if (opts.eventType === 'mouseover' || opts.eventType === 'mouseenter') {
        $(document).on('mouseenter', opts.element, function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            var dom = this;
            clearTimeout(dom.gTooltipMouseenterTimer);
            if (!dom.gTooltipMouseenter) {
                dom.gTooltipMouseenter = new Tooltip({
                    config: {
                        positionLocation: opts.positionLocation,
                        content: dom.dataset.title,
                        elementDom: dom
                    }
                });
                var moduleDom = dom.gTooltipMouseenter.moduleDom;
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
                        elementDom: this
                    }
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
                top: $(eventDom).offset().top - moduleDom.offsetHeight
            });
        }
        if (positionLocation === 'top-center') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth) / 2,
                top: $(eventDom).offset().top - moduleDom.offsetHeight
            });
        }
        if (positionLocation === 'top-right') {
            $(moduleDom).css({
                left: $(eventDom).offset().left - (moduleDom.offsetWidth - eventDom.offsetWidth),
                top: $(eventDom).offset().top - moduleDom.offsetHeight
            });
        }
    }
};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-tooltip.js":
/*!*******************************************!*\
  !*** ./src/ui/js/components/g-tooltip.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var constructorInherit = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! ../components-super/g-super */ "./src/ui/js/components-super/g-super.js"); // 超类型(子类型继承的对象)

// 子类型
var Sub = constructorInherit(Super, {
    wrap: '.g-wrap',
    // 回调
    callback: {},
    // 配置
    config: {
        positionLocation: 'top-left', // 弹窗的定位位置('top-left'，'top-center'，'top-right')。
        content: 'no tooltip content'
    },
    // 数据
    data: {}
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var positionLocation = 'g-tooltip_' + config.positionLocation; // 弹窗的定位位置
    // 弹窗结构
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-tooltip ' + positionLocation,
            innerHTML: '\n                <div class="g-tooltip-content">' + config.content + '</div>\n                <div class="g-tooltip-icon"></div>                \n            '
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

/***/ }),

/***/ "./src/ui/js/components/g-validate.js":
/*!********************************************!*\
  !*** ./src/ui/js/components/g-validate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 工具方法集合
var domAddPosition = __webpack_require__(/*! zhf.dom-add-position */ "./node_modules/zhf.dom-add-position/dist/index.min.js");
var checkStr = __webpack_require__(/*! zhf.check-str */ "./node_modules/zhf.check-str/dist/index.min.js");
var getParent = __webpack_require__(/*! zhf.get-parent */ "./node_modules/zhf.get-parent/dist/index.min.js");
var getDomArray = __webpack_require__(/*! zhf.get-dom-array */ "./node_modules/zhf.get-dom-array/dist/index.min.js");

function ValidateForm(json) {
    this.opts = extend({
        element: '',
        hintWrapClass: 'g-form', // 指定提示框的父级
        fileActiveClass: 'g-upload_active', // 文件或者图片上传成功之后的class，做限制个数需要这个
        isBindEvent: true // 是否绑定事件
    }, json);
    this.init();
}

ValidateForm.prototype.init = function () {
    this.hintClass = 'g-validate';
    this.render();
    if (this.opts.isBindEvent) {
        this.power();
    }
};
ValidateForm.prototype.render = function () {
    var self = this;
    self.element = getDomArray(this.opts.element); // 为了兼容未来动态创建的元素，此方法会被多次调用，元素要重新获取。
    self.element.forEach(function (v) {
        if (!v.hintWrapDom) {
            // 为了兼容未来动态创建的元素，此方法会被多次调用，为了提高性能，所以这里不重新赋值，虽然此处可以重新赋值。
            var hintWrapDom = self.getHintWrapDom(v);
            if (hintWrapDom) {
                domAddPosition(hintWrapDom, 'relative');
                v.hintWrapDom = hintWrapDom;
            }
        }
        if (!v.hintDom) {
            // 为了兼容未来动态创建的元素，此方法会被多次调用，但是这里却不能重新赋值，否则会导致引用消失，以至于renderHintAdd时修改hintDom内g-validate-text的innerHTML失效。
            v.hintDom = document.createElement('span');
            v.hintDom.innerHTML = '\n                <span class="g-validate-text"></span>\n                <span class="g-validate-icon"></span>\n            ';
            v.hintDom.classList.add(self.hintClass);
        }
    });
};
ValidateForm.prototype.getHintWrapDom = function (input) {
    var hintWrapClass = this.opts.hintWrapClass;
    var parent = getParent(input, '.' + hintWrapClass); // 把这个放上面，是为了少调用一次getParent方法，因为g-form布局用的居多，g-validate-wrap没怎么使用。
    if (!parent) {
        parent = getParent(input, '.g-validate-wrap');
    }
    if (!parent) {
        parent = input.parentNode;
    }
    return parent;
};
ValidateForm.prototype.renderHintAdd = function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var input = opts.input;
    var hintDom = input.hintDom;
    if (hintDom) {
        hintDom.querySelector('.g-validate-text').innerHTML = opts.txt;
        var hintWrapDom = input.hintWrapDom;
        var hintDomIsExist = hintWrapDom.querySelector('.' + this.hintClass);
        if (hintWrapDom && !hintDomIsExist) {
            // hintWrapDom.appendChild(hintDom);
            hintWrapDom.insertBefore(hintDom, hintWrapDom.children[0]);
        }
    }
};
ValidateForm.prototype.renderHintRemove = function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var input = opts.input;
    var hintWrapDom = input.hintWrapDom;
    var hintDom = hintWrapDom.querySelector('.' + this.hintClass);
    if (hintWrapDom && hintDom) {
        hintWrapDom.removeChild(hintDom);
    }
};
ValidateForm.prototype.validateInput = function (input) {
    var self = this;
    var opts = self.opts;
    if (input.offsetWidth === 0) {
        // 不验证宽度为0的input(display为none时不验证)(只有没被隐藏的才进行验证)
        return;
    }
    var validateType = input.dataset.validate || 'undefined';
    var validateHintTxt = input.dataset.hint || 'undefined';
    var type = validateType.split(' ');
    var hintTxt = validateHintTxt.split(' ');
    var hintWrapDom = input.hintWrapDom;
    var inputType = input.type;
    var inputName = input.name; // 这个不能使用，因为有些name名称是这种格式 hobby[] 此时通过name获取会报错 -> 纠正 其实不会报错 只需要 input[name=""] 把变量放在双引号里拼接一下就行了
    var isPassword = inputType === 'password';
    var isRadio = inputType === 'radio';
    var isCheckbox = inputType === 'checkbox';
    var isFile = inputType === 'file';
    var value = input.value;
    if (isFile) {
        // 如果是file类型的input，值就是input身上的自定义属性data-value
        value = input.dataset.value;
    }
    // 验证自定义的规则
    var customValidateRule = input.customValidateRule || {};
    Object.keys(customValidateRule).forEach(function (keys) {
        var obj = customValidateRule[keys];
        obj.isValidateSuccess = obj.fn(value);
    });
    // 验证非自定义的规则
    var isValidateSuccess = true; // 是否验证成功了，假设验证通过了。
    type.forEach(function (v, i) {
        if (isValidateSuccess && customValidateRule[v]) {
            // 验证通过了且自定义验证存在则校验自定义的规则是否通过了
            if (isValidateSuccess && customValidateRule[v].isValidateSuccess) {
                self.renderHintRemove({ input: input });
                isValidateSuccess = true;
            } else {
                self.renderHintAdd({ txt: hintTxt[i], input: input });
                isValidateSuccess = false;
            }
        }
        if (isValidateSuccess && !customValidateRule[v]) {
            // 验证通过了且自定义验证不存在则校验非自定义的规则是否通过了
            if (isValidateSuccess && v === 'no-empty') {
                // 设置了非空验证
                var isEmpty = checkStr.isEmpty(value);
                if (isPassword) {
                    // input为password类型的进行特殊处理
                    isEmpty = value === ''; // 因为密码可以输入空格，所以没必要去除首尾空格。
                }
                if (isRadio || isCheckbox) {
                    // input为radio类型和input为checkbox类型的进行特殊处理（这两种类型只验证是否必填就够用了，file类型和select下拉框也是只验证必填就够用了。）
                    var isChecked = hintWrapDom.querySelector('input[name="' + inputName + '"]:checked');
                    isEmpty = isChecked === null;
                }
                if (isEmpty) {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                } else {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                }
            }
            if (isValidateSuccess && v === 'no-zero') {
                // 设置了非零验证
                if (checkStr.isZero(value)) {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                } else {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                }
            }
            if (isValidateSuccess && v === 'yes-positive-integer') {
                // 设置了正整数验证
                if (checkStr.isPositiveInteger(value)) {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                }
            }
            if (isValidateSuccess && v === 'yes-positive-float') {
                // 设置了正浮点数验证
                if (checkStr.isPositiveFloat(value)) {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                }
            }
            if (isValidateSuccess && v === 'yes-phone') {
                // 设置了电话验证
                if (checkStr.isPhoneNumEasy(value)) {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                }
            }
            if (isValidateSuccess && v === 'yes-email') {
                // 设置了邮箱验证
                if (checkStr.isEmail(value)) {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                }
            }
            if (isValidateSuccess && v === 'yes-url') {
                // 设置了网址验证
                if (checkStr.isUrl(value)) {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                }
            }
            var yesLimitLength = /yes-limit-length-(\d+)/.exec(v);
            if (isValidateSuccess && yesLimitLength) {
                // 设置了限制长度
                var length = yesLimitLength[1];
                var isPassLimitLength = value.length > length;
                if (isCheckbox) {
                    // input为checkbox类型的进行特殊处理
                    var checkboxAll = hintWrapDom.querySelectorAll('input[name="' + inputName + '"]:checked');
                    isPassLimitLength = length >= checkboxAll.length;
                }
                if (isFile) {
                    // input为file类型的进行特殊处理
                    var fileAll = hintWrapDom.querySelectorAll('.' + opts.fileActiveClass); // 这个class应该放到opts里，是可配置的。
                    isPassLimitLength = length >= fileAll.length;
                }
                if (isPassLimitLength) {
                    self.renderHintRemove({ input: input });
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({ txt: hintTxt[i], input: input });
                    isValidateSuccess = false;
                }
            }
        }
    });
    input.isValidateSuccess = isValidateSuccess;
};
ValidateForm.prototype.isAllPassValidate = function () {
    var self = this;
    self.render(); // 为了兼容未来动态创建的元素，这里需要重新渲染并绑定属性
    var isValidateSuccess = true;
    self.element.forEach(function (v) {
        self.validateInput(v);
        if (v.isValidateSuccess !== true) {
            isValidateSuccess = false;
        }
    });
    return isValidateSuccess;
};
ValidateForm.prototype.power = function () {
    var self = this;
    var eventIsRepeat = {};
    self.element.forEach(function (v) {
        var eventsType = v.dataset.event || 'blur';
        // js原生事件无法给未来动态创建的元素加事件，除非我用自己封装的那个事件委托进行绑定，但是代码上百行，还是直接用jq的吧。
        // jq的事件委托很奇葩，如果input里有值，清空之后失去焦点会触发两次，没有值触发一次。
        // 奇葩的原因是因为委托了blur和change事件，blur的时候如果value改变了，会触发blur和change，所以会触发两次，没毛病。
        // jq的事件委托可以给未来动态创建的元素加事件，但是事件会被绑定多次(因为外部的forEach循环)，所以我定义了一个eventIsRepeat来进行过滤。
        var name = eventsType + self.opts.element;
        if (!eventIsRepeat[name]) {
            eventIsRepeat[name] = true;
            $(document).on(eventsType, self.opts.element, function () {
                self.render(); // 为了兼容未来动态创建的元素，这里需要重新渲染并绑定属性
                self.validateInput(this);
            });
        }
    });
};

// 自定义验证规则
ValidateForm.prototype.setValidate = function (name, fn) {
    this.element.forEach(function (v) {
        if (!v.customValidateRule) {
            v.customValidateRule = {}; // 自定义规则
        }
        v.customValidateRule[name] = {
            fn: fn,
            isValidateSuccess: false
        };
    });
};

module.exports = ValidateForm;

/***/ }),

/***/ "./src/ui/js/config/g-config.js":
/*!**************************************!*\
  !*** ./src/ui/js/config/g-config.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GlobalConfig = function GlobalConfig() {
    _classCallCheck(this, GlobalConfig);

    this.outermostContainerSelector = window['g-outermost-container-selector'] || 'body'; // 这里需要手动配置。最外层容器的选择器(仅支持选择器格式，例如：'.wrap'，'#container')。
    this.outermostContainerDom = document.querySelector(this.outermostContainerSelector); // 最外层容器的dom节点。
    this.outermostContainerDomMaxWidth = this.outermostContainerDom.offsetWidth; // 最外层容器的最大宽度。
    this.isH5 = window['g-is-h5'] ? window['g-is-h5'] : true; // 这里需要手动配置。是否是手机自适应页面(canvas自适应用到了这个，手机端才有canvas自适应)。
    this.h5PsdWidth = window['g-h5-psd-width'] || 320; // 这里需要手动配置。设计图的宽。(如果是手机自适应站点，这里才会被使用到)。
    this.h5PsdSplitNum = window['g-h5-psd-split-num'] || 10; // 这里需要手动配置。页面分割数量。在此处表达的意思是：将最外层容器的宽度分成10份，则一份就是outermostContainerMaxWidth/10像素，把结果设置给html的fontSize属性，则1rem就是outermostContainerMaxWidth/10像素。
    this.resetOutermostContainerDomMaxWidth = function () {
        this.outermostContainerDomMaxWidth = this.outermostContainerDom.offsetWidth; // 最外层容器的最大宽度。
    };
    this.px2remCanvas = function (px) {
        // canvas自适应
        if (this.isH5) {
            // 如果是h5，canvas才有自适应功能
            return px * this.outermostContainerDomMaxWidth / this.h5PsdWidth;
        } else {
            return px;
        }
    };
    this.px2rem = function (px) {
        // rem自适应
        if (this.isH5) {
            // 如果是h5，才有自适应功能
            return px / this.h5PsdWidth * this.h5PsdSplitNum;
        } else {
            return px;
        }
    };
};

module.exports = new GlobalConfig();

/***/ })

}]);