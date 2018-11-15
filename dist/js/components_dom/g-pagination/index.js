(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["components_dom/g-pagination/index"] = factory();
	else
		root["components_dom/g-pagination/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/components_dom/g-pagination/index.js");
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

/***/ "./src/js/components_dom/g-pagination/index.js":
/*!*****************************************************!*\
  !*** ./src/js/components_dom/g-pagination/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)

// 默认数据
var defaultData = {
    nowCount: 10, // 当前页的数据条数
    allCount: 100, // 数据总条数
    nowPage: 1, // 当前页
    allPage: null // 总页数
};
defaultData.allPage = Math.ceil(defaultData.allCount / defaultData.nowCount);

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {
                // 上一页的回调
                prevPage: function prevPage() {},
                // 下一页的回调
                nextPage: function nextPage() {},
                // 选择某一页的回调
                selectPage: function selectPage() {},
                // 页码改变就触发
                changePage: function changePage() {}
            },
            // 配置
            config: {
                nowCount: defaultData.nowCount,
                allCount: defaultData.allCount,
                nowPage: defaultData.nowPage,
                allPage: defaultData.allPage
            }
        }, opts)));
    }

    return Sub;
}(Super);

// (建)(覆)内部模块的创建(覆盖超类型)


Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-pagination',
            innerHTML: '\n                <div class="g-pagination-text">\u7B2C</div>\n                <div class="g-pagination-now-page">\n                    <label class="g-select">\n                        <select class="g-select-body">\n                            ' + this.renderOption() + '\n                        </select>\n                        <span class="g-select-mark g-iconfont g-icon-select"></span>\n                    </label>\n                </div>\n                <div class="g-pagination-text">\u9875</div>\n                <a href="javascript:;" class="g-pagination-btn g-pagination-btn-inactive g-iconfont g-icon-prev"></a>\n                <a href="javascript:;" class="g-pagination-btn g-iconfont g-icon-next"></a>\n            '
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
    for (var i = 0; i < this.opts.config.allPage; i++) {
        html += '<option value="' + (i + 1) + '">' + (i + 1) + '</option>';
    }
    return html;
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
    var self = this;
    var data = this.opts.config;
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
    var data = this.opts.config;
    if (data.nowPage > 1) {
        data.nowPage--;
        var oldChecked = this.selectDom.querySelector('option:checked');
        if (oldChecked.previousElementSibling) {
            oldChecked.selected = false;
            oldChecked.previousElementSibling.selected = true;
        }
        this.nextPageEnable();
        this.opts.callback.prevPage(this);
        this.opts.callback.changePage(this);
    }
    if (data.nowPage === 1) {
        this.prevPageDisable();
    }
};

// 下一页
Sub.prototype.nextPage = function () {
    var data = this.opts.config;
    if (data.nowPage < data.allPage) {
        data.nowPage++;
        var oldChecked = this.selectDom.querySelector('option:checked');
        if (oldChecked.nextElementSibling) {
            oldChecked.selected = false;
            oldChecked.nextElementSibling.selected = true;
        }
        this.prevPageEnable();
        this.opts.callback.nextPage(this);
        this.opts.callback.changePage(this);
    }
    if (data.nowPage === data.allPage) {
        this.nextPageDisable();
    }
};

// 选择第几页
Sub.prototype.selectPage = function () {
    var data = this.opts.config;
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
    this.opts.callback.changePage(this);
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

/***/ })

/******/ });
});