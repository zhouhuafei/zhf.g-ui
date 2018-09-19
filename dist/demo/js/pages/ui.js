/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"ui": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/demo/js/pages/ui.js","this-is-global-file-vendor","this-is-global-file-common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/demo/js/pages/ui.js":
/*!*********************************!*\
  !*** ./src/demo/js/pages/ui.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../commons/common */ "./src/demo/js/commons/common.js"); // 公用的js
__webpack_require__(/*! ../../scss/pages/ui.scss */ "./src/demo/scss/pages/ui.scss"); // 当前页的样式

var SortTab = __webpack_require__(/*! ../../../ui/js/components/g-sort-tab */ "./src/ui/js/components/g-sort-tab.js"); // 排序tab
new SortTab({
    // 容器
    wrap: '.sort-tab',
    // 回调
    callback: {
        click: function click(json) {
            console.log(json);
        }
    },
    // 配置
    config: {
        items: [{
            name: 'synthesize',
            text: '综合',
            hasSort: false
        }, {
            name: 'sale',
            text: '销量',
            hasSort: true
        }, {
            name: 'price',
            text: '价格',
            hasSort: true
        }],
        defaultIndex: 0, // 默认索引
        defaultSortMethod: 'asc' // asc升序 desc降序
    }
});

var ProgressBar = __webpack_require__(/*! ../../../ui/js/components/g-progress-bar */ "./src/ui/js/components/g-progress-bar.js"); // 进度条
var progressBar = new ProgressBar({
    wrap: '.progress-bar'
});
var canvasSetScaleNum = 0;
var canvasSetScaleTimer = setInterval(function () {
    if (canvasSetScaleNum === 30) {
        clearInterval(canvasSetScaleTimer);
    }
    progressBar.canvasSetScale(canvasSetScaleNum); // 0 - 100
    canvasSetScaleNum++;
}, 60);

/***/ }),

/***/ "./src/demo/scss/pages/ui.scss":
/*!*************************************!*\
  !*** ./src/demo/scss/pages/ui.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

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

/******/ });