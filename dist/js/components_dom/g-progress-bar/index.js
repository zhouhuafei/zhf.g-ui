(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["components_dom/g-progress-bar/index"] = factory();
	else
		root["components_dom/g-progress-bar/index"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/components_dom/g-progress-bar/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/zhf.create-element/dist/index.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/zhf.create-element/dist/index.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(undefined)}(0,function(){return function(t){var e=t||{};e.elementName=e.elementName||"div",e.style=e.style||{},e.customAttribute=e.customAttribute||{},e.attribute=e.attribute||{};var o=document.createElement(e.elementName);return Object.keys(e.style).forEach(function(t){o.style[t]=e.style[t]}),Object.keys(e.customAttribute).forEach(function(t){o.setAttribute("data-"+t,e.customAttribute[t])}),Object.keys(e.attribute).forEach(function(t){o[t]=e.attribute[t]}),o}});

/***/ }),

/***/ "./node_modules/zhf.dom-components-super/dist/index.min.js":
/*!*****************************************************************!*\
  !*** ./node_modules/zhf.dom-components-super/dist/index.min.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function e(e,o){for(var t=0;t<o.length;t++){var m=o[t];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(e,m.key,m)}}return function(o,t,m){return t&&e(o.prototype,t),m&&e(o,m),o}}();function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}var extend=__webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"),getDomArray=__webpack_require__(/*! zhf.get-dom-array */ "./node_modules/zhf.get-dom-array/dist/index.min.js"),createElement=__webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"),Super=function(){function e(o){_classCallCheck(this,e),this.opts=extend({wrap:"body",callback:{moduleDomCreateBefore:function(e){},moduleDomCreateAfter:function(e){},moduleDomRenderBefore:function(e){},moduleDomRenderAfter:function(e){},moduleDomRemoveBefore:function(e){},moduleDomRemoveAfter:function(e){},moduleDomShowBefore:function(e){},moduleDomShowAfter:function(e){},moduleDomHideBefore:function(e){},moduleDomHideAfter:function(e){},wrapDomGetBefore:function(e){},wrapDomGetAfter:function(e){},wrapDomRemoveBefore:function(e){},wrapDomRemoveAfter:function(e){}},config:{moduleDomAttribute:{},moduleDomCustomAttribute:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:{},moduleDomIsRender:!0,moduleDomIsClearTimer:!0}},o),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}return _createClass(e,[{key:"init",value:function(){this.render(),this.power()}},{key:"render",value:function(){this.wrapDomGet(),this.moduleDomRemove();var e=this.opts.callback;e.moduleDomCreateBefore(this),this.moduleDomCreate(),e.moduleDomCreateAfter(this),this.moduleDomRender()}},{key:"power",value:function(){}},{key:"moduleDomCreate",value:function(){var e=this.opts.config;this.moduleDom=createElement({style:e.moduleDomStyle,customAttribute:e.moduleDomCustomAttribute,attribute:extend({},e.moduleDomAttribute)})}},{key:"moduleDomRender",value:function(){var e=this.opts.callback,o=this.opts.config;if(o.moduleDomIsRender&&this.wrapDom&&this.moduleDom){e.moduleDomRenderBefore(this);var t=o.moduleDomRenderMethod;if("insertBefore"===t.method){var m=getDomArray(t.child)[0];m?this.wrapDom.insertBefore(this.moduleDom,m):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"===t.method&&this.wrapDom.appendChild(this.moduleDom),e.moduleDomRenderAfter(this)}}},{key:"moduleDomRemove",value:function(){var e=this.opts.callback;this.moduleDom&&this.moduleDom.parentNode&&(e.moduleDomRemoveBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomRemoveAfter(this)),this.moduleDomClearTimer()}},{key:"moduleDomClearTimer",value:function(){var e=this;e.opts.config.moduleDomIsClearTimer&&Object.keys(e.moduleDomTimer).forEach(function(o){clearInterval(e.moduleDomTimer[o]),clearTimeout(e.moduleDomTimer[o])})}},{key:"moduleDomHide",value:function(){var e=this.opts.callback;this.moduleDom&&this.moduleDom.parentNode&&(this.opts.config.moduleDomIsRender=!1,e.moduleDomHideBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomHideAfter(this))}},{key:"moduleDomShow",value:function(){var e=this.opts.callback;e.moduleDomShowBefore(this),this.wrapDom&&(this.opts.config.moduleDomIsRender=!0,this.moduleDomRender()),e.moduleDomShowAfter(this)}},{key:"wrapDomGet",value:function(){var e=this.opts.callback;e.wrapDomGetBefore(this),this.wrapDom=getDomArray(this.opts.wrap)[0],e.wrapDomGetAfter(this)}},{key:"wrapDomRemove",value:function(){var e=this.opts.callback;this.moduleDomRemove(),this.wrapDom&&this.wrapDom.parentNode&&(e.wrapDomRemoveBefore(this),this.wrapDom.parentNode.removeChild(this.wrapDom),e.wrapDomRemoveAfter(this))}},{key:"getModuleDomHtml",value:function(){return this.moduleDom?this.moduleDom.outerHTML:""}}]),e}();module.exports=Super;

/***/ }),

/***/ "./node_modules/zhf.extend/dist/index.min.js":
/*!***************************************************!*\
  !*** ./node_modules/zhf.extend/dist/index.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(o,t){"object"===( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(undefined)}(0,function(){return function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=Object.prototype.toString.call(t).slice(8,-1).toLowerCase();return r!==Object.prototype.toString.call(e).slice(8,-1).toLowerCase()||!n||"object"!==r&&"array"!==r?t=e:Object.keys(e).forEach(function(r){var i=Object.prototype.toString.call(t[r]).slice(8,-1).toLowerCase();i!==Object.prototype.toString.call(e[r]).slice(8,-1).toLowerCase()||!n||"object"!==i&&"array"!==i?void 0!==e[r]&&(t[r]=e[r]):o(t[r],e[r])}),t}});

/***/ }),

/***/ "./node_modules/zhf.get-dom-array/dist/index.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/zhf.get-dom-array/dist/index.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(undefined)}(0,function(){function e(e,t){for(var o=t;o!==e&&null!==o;)o=o.parentNode;return o===e}return function(t,o){var n=[],l=document;if(o&&(l="string"===Object.prototype.toString.call(o).slice(8,-1).toLowerCase()?document.querySelector(o):1===o.nodeType?o:o===document?o:"htmlcollection"===Object.prototype.toString.call(o).slice(8,-1).toLowerCase()||"nodelist"===Object.prototype.toString.call(o).slice(8,-1).toLowerCase()?[].slice.call(o)[0]:null),!l)return[];if(t)if("string"===Object.prototype.toString.call(t).slice(8,-1).toLowerCase())n=[].slice.call(l.querySelectorAll(t));else if(1===t.nodeType)n=[t],o&&(e(l,t)||(n=[]));else if(t===document)n=[t],o&&(n=[]);else if(("htmlcollection"===Object.prototype.toString.call(t).slice(8,-1).toLowerCase()||"nodelist"===Object.prototype.toString.call(t).slice(8,-1).toLowerCase())&&(n=[].slice.call(t),o)){var r=[];n.forEach(function(t){e(l,t)&&r.push(t)}),n=r}return n}});

/***/ }),

/***/ "./src/js/components_dom/g-progress-bar/index.js":
/*!*******************************************************!*\
  !*** ./src/js/components_dom/g-progress-bar/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)
var globalConfig = __webpack_require__(/*! ../../config/g-config */ "./src/js/config/g-config/index.js"); // 全局配置

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(json) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {},
            // 配置
            config: {}
        }, json)));
    }

    // (建)(覆)内部模块的创建(覆盖超类型)


    _createClass(Sub, [{
        key: 'moduleDomCreate',
        value: function moduleDomCreate() {
            var config = this.opts.config;
            this.moduleDom = createElement({
                style: config.moduleDomStyle,
                customAttribute: config.moduleDomCustomAttribute,
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

/***/ "./src/js/config/g-config/index.js":
/*!*****************************************!*\
  !*** ./src/js/config/g-config/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GlobalConfig = function GlobalConfig() {
    var _this = this;

    _classCallCheck(this, GlobalConfig);

    this.isH5 = window['g-is_h5'] === true; // 这里需要手动配置(默认false)。是否是手机自适应页面(canvas自适应用到了这个，手机端才有canvas自适应)。
    this.psdWidth = window['g-psd_width'] || 320; // 这里需要手动配置(默认320)。设计图的宽。(如果是手机自适应站点，这里才会被使用到)。
    this.psdSplit = window['g-psd_split'] || 10; // 这里需要手动配置(默认10)。页面分割数量。在此处表达的意思是：将最外层容器的宽度分成10份，则一份就是outermostContainerMaxWidth/10像素，把结果设置给html的fontSize属性，则1rem就是outermostContainerMaxWidth/10像素。
    this.wrapDom = document.querySelector(window['g-wrap'] || 'body'); // 最外层容器的dom节点。默认body。仅支持选择器格式，例如：'.wrap'，'#container'。
    this.wrapMaxWidth = this.wrapDom.offsetWidth; // 最外层容器的最大宽度。
    this.resetWrapMaxWidth = function () {
        this.wrapMaxWidth = this.wrapDom.offsetWidth; // 最外层容器的最大宽度。
    };
    this.px2remCanvas = function (px) {
        // canvas自适应
        if (this.isH5) {
            // 如果是h5，canvas才有自适应功能
            return px * this.wrapMaxWidth / this.psdWidth;
        } else {
            return px;
        }
    };
    this.px2rem = function (px) {
        // rem自适应
        if (this.isH5) {
            // 如果是h5，才有自适应功能
            return px / this.psdWidth * this.psdSplit;
        } else {
            return px;
        }
    };
    window.addEventListener('resize', function () {
        // 重置最大宽度
        _this.resetWrapMaxWidth();
    });
};

module.exports = new GlobalConfig();

/***/ })

/******/ });
});