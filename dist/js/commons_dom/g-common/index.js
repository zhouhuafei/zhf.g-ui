(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["commons_dom/g-common/index"] = factory();
	else
		root["commons_dom/g-common/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/commons_dom/g-common/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/zhf.check-str/dist/index.min.js":
/*!******************************************************!*\
  !*** ./node_modules/zhf.check-str/dist/index.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"===( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(0,function(){function t(t){return String(t).trim()}function e(e,n){n=t(n);var i=!1;return e&&("+"!==n[0]&&"-"!==n[0]||(n=n.substring(1)),(n=n.split("."))[0].length>1&&"0"!==n[0][0]&&(i=!0),1===n[0].length&&(i=!0)),i}return{isEmpty:function(e){return""===t(e)},isZero:function(e){return""!==(e=t(e))&&(e=Number(e).toString()),"0"===e},isNumberDefault:function(e){return/^[-+]?\d+(\.\d+)?$/.test(t(e))},isNumberNoPlusSign:function(e){return/^[-]?\d+(\.\d+)?$/.test(t(e))},isNumberNoZeroPrefix:function(t){return e(this.isNumberDefault(t),t)},isNumber:function(t){return this.isNumberNoPlusSign(t)&&this.isNumberNoZeroPrefix(t)},isIntegerDefault:function(e){return/^[-+]?\d+$/.test(t(e))},isIntegerNoPlusSign:function(e){return/^(-)?\d+$/.test(t(e))},isIntegerNoZeroPrefix:function(t){return e(this.isIntegerDefault(t),t)},isInteger:function(t){return this.isIntegerNoPlusSign(t)&&this.isIntegerNoZeroPrefix(t)},isPositiveIntegerDefault:function(e){return/^[+]?0*[1-9]\d*$/.test(t(e))},isPositiveIntegerNoPlusSign:function(e){return/^0*[1-9]\d*$/.test(t(e))},isPositiveIntegerNoZeroPrefix:function(e){return/^[+]?[1-9]\d*$/.test(t(e))},isPositiveInteger:function(e){return/^[1-9]\d*$/.test(t(e))},isNegativeIntegerDefault:function(e){return/^-0*[1-9]\d*$/.test(t(e))},isNegativeInteger:function(e){return/^-[1-9]\d*$/.test(t(e))},isFloatDefault:function(e,n){return(isNaN(n)||!isNaN(n)&&Number(n)<1)&&(n="1,"),new RegExp("^[-+]?\\d+\\.\\d{"+n+"}$").test(t(e))},isFloatNoPlusSign:function(e,n){return(isNaN(n)||!isNaN(n)&&Number(n)<1)&&(n="1,"),new RegExp("^[-]?\\d+\\.\\d{"+n+"}$").test(t(e))},isFloatNoZeroPrefix:function(t,n){return e(this.isFloatDefault(t,n),t)},isFloat:function(t,e){return this.isFloatNoPlusSign(t,e)&&this.isFloatNoZeroPrefix(t,e)},isPositiveFloatDefault:function(e,n){(isNaN(n)||!isNaN(n)&&Number(n)<1)&&(n="1,");var i=new RegExp("^[+]?\\d+\\.\\d{"+n+"}$"),r=t(e);return 0!==Number(r)&&i.test(r)},isPositiveFloatNoPlusSign:function(e,n){(isNaN(n)||!isNaN(n)&&Number(n)<1)&&(n="1,");var i=new RegExp("^\\d+\\.\\d{"+n+"}$"),r=t(e);return 0!==Number(r)&&i.test(r)},isPositiveFloatNoZeroPrefix:function(t,n){return e(this.isPositiveFloatDefault(t,n),t)},isPositiveFloat:function(t,e){return this.isPositiveFloatNoPlusSign(t,e)&&this.isPositiveFloatNoZeroPrefix(t,e)},isNegativeFloatDefault:function(e,n){(isNaN(n)||!isNaN(n)&&Number(n)<1)&&(n="1,");var i=new RegExp("^-\\d+\\.\\d{"+n+"}$"),r=t(e);return 0!==Number(r)&&i.test(r)},isNegativeFloat:function(t,n){return e(this.isNegativeFloatDefault(t,n),t)},isPhoneNum:function(e){return/^1[3456789]\d{9}$/.test(t(e))},isPhoneNumEasy:function(e){return/^1\d{10}$/.test(t(e))},isEmail:function(e){return/^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/.test(t(e))},isIp:function(e){return/^(?:(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:1[0-9][0-9]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:2[0-5][0-5])|(?:25[0-5])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))$/.test(t(e))},isIdCardNum:function(e){return/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/.test(t(e))},isIdCardNumEasy:function(e){return/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(t(e))},isChinese:function(e){return/^[\u4e00-\u9fa5]+$/.test(t(e))},isEnglish:function(e){return/^[a-zA-Z]+$/.test(t(e))},isDoubleByteChar:function(e){return/^[^\x00-\xff]+$/.test(t(e))},isLowercase:function(e){return/^[a-z]+$/.test(t(e))},isUppercase:function(e){return/^[A-Z]+$/.test(t(e))},isUrl:function(e){return/^(?:http(?:s|):\/\/|)(?:(?:\w*?)\.|)(?:\w*?)\.(?:\w{2,4})(?:\?.*|\/.*|)$/.test(t(e))},isPostalCode:function(e){return/^[1-9]\d{5}$/.test(t(e))},isDate:function(e){return/(^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$)|(^[1-9]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$)/.test(t(e))},isTime:function(e){return/^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/.test(t(e))},isDateTime:function(e){return/^([1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))|([1-9]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1]))\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/.test(t(e))}}});

/***/ }),

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

/***/ "./node_modules/zhf.get-parent/dist/index.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/zhf.get-parent/dist/index.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var getDomArray=__webpack_require__(/*! zhf.get-dom-array */ "./node_modules/zhf.get-dom-array/dist/index.min.js");function getParent(e,r){if(!(e=getDomArray(e)[0]))return console.log("第一个参数有误"),null;if(!r)return e.parentNode;if("string"==typeof r)switch(e=e.parentNode,r.charAt(0)){case".":for(;e;){if(!e.classList)return console.log("no find class"),null;if(e.classList.contains(r.substring(1)))return e;e=e.parentNode}break;case"#":for(;e;){if(e===document)return console.log("no find id"),null;if(e.id===r.substring(1))return e;e=e.parentNode}break;default:for(;e;){if(e===document)return console.log("no find tagName"),null;if(e.tagName.toLowerCase()===r)return e;e=e.parentNode}}return null}module.exports=getParent;

/***/ }),

/***/ "./node_modules/zhf.offset/dist/index.min.js":
/*!***************************************************!*\
  !*** ./node_modules/zhf.offset/dist/index.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var getDomArray=__webpack_require__(/*! zhf.get-dom-array */ "./node_modules/zhf.get-dom-array/dist/index.min.js");function offset(e){var t=0,r=0;for(e=getDomArray(e)[0];e;)t+=e.offsetTop,r+=e.offsetLeft,e=e.offsetParent;return{top:t,left:r}}module.exports=offset;

/***/ }),

/***/ "./node_modules/zhf.scroll-move-to/dist/index.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/zhf.scroll-move-to/dist/index.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(o,e){"object"===( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(undefined)}(0,function(){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6,i=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop,c=0,r=0,f=null,u=o-i>0,d=e-l>0;requestAnimationFrame(function m(){c=Math.ceil(Math.abs((o-i)/n)),r=Math.ceil(Math.abs((e-l)/n)),i+=c=u?c:-c,l+=r=d?r:-r,window.scrollTo(i,l),t&&t(i,l),f=requestAnimationFrame(m),i===Number(o)&&l===Number(e)&&cancelAnimationFrame(f)})}});

/***/ }),

/***/ "./node_modules/zhf.seconds-to-time/dist/index.min.js":
/*!************************************************************!*\
  !*** ./node_modules/zhf.seconds-to-time/dist/index.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(o,e){"object"===( false?undefined:_typeof(exports))&&"undefined"!=typeof module?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(0,function(){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{day:Math.floor(o/3600/24),hours:Math.floor(o/3600%24),minutes:Math.floor(o%3600/60),seconds:Math.floor(o%60),allSeconds:o}}});

/***/ }),

/***/ "./node_modules/zhf.time-count-down/dist/index.min.js":
/*!************************************************************!*\
  !*** ./node_modules/zhf.time-count-down/dist/index.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var extend=__webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"),secondsToTime=__webpack_require__(/*! zhf.seconds-to-time */ "./node_modules/zhf.seconds-to-time/dist/index.min.js");function timeCountDown(e){var n=extend({seconds:0,isToTime:!0,isHandleRunWhenZero:!1,isHandleOverWhenZero:!1,isHandleRunWhenOver:!1,callback:{run:function(){},over:function(){}}},e),o=Number(n.seconds)||0;o<0&&(o=0);var r=n.callback.run,s=n.callback.over,i=function(){n.isToTime?r(secondsToTime(o)):r({day:0,hours:0,minutes:0,seconds:0,allSeconds:o})};if(0===o&&(n.isHandleRunWhenZero&&i(),n.isHandleOverWhenZero&&s()),0<o){i();var a=setInterval(function(){0===--o?(clearInterval(a),n.isHandleRunWhenOver&&i(),s()):i()},1e3)}}module.exports=timeCountDown;

/***/ }),

/***/ "./src/js/commons_dom/g-common/index.js":
/*!**********************************************!*\
  !*** ./src/js/commons_dom/g-common/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Confirm: __webpack_require__(/*! ../../components_dom/g-confirm */ "./src/js/components_dom/g-confirm/index.js"),
    Copyright: __webpack_require__(/*! ../../components_dom/g-copyright */ "./src/js/components_dom/g-copyright/index.js"),
    FooterNav: __webpack_require__(/*! ../../components_dom/g-footer-nav */ "./src/js/components_dom/g-footer-nav/index.js"),
    GoTop: __webpack_require__(/*! ../../components_dom/g-go-top */ "./src/js/components_dom/g-go-top/index.js"),
    JumpLink: __webpack_require__(/*! ../../components_dom/g-jump-link */ "./src/js/components_dom/g-jump-link/index.js"),
    LazyLoad: __webpack_require__(/*! ../../components_dom/g-lazy-load */ "./src/js/components_dom/g-lazy-load/index.js"),
    Loading: __webpack_require__(/*! ../../components_dom/g-loading */ "./src/js/components_dom/g-loading/index.js"),
    LoadingOver: __webpack_require__(/*! ../../components_dom/g-loading-over */ "./src/js/components_dom/g-loading-over/index.js"),
    LoadingDialog: __webpack_require__(/*! ../../components_dom/g-loading-dialog */ "./src/js/components_dom/g-loading-dialog/index.js"),
    Mask: __webpack_require__(/*! ../../components_dom/g-mask */ "./src/js/components_dom/g-mask/index.js"),
    Message: __webpack_require__(/*! ../../components_dom/g-message */ "./src/js/components_dom/g-message/index.js"),
    Navigation: __webpack_require__(/*! ../../components_dom/g-navigation */ "./src/js/components_dom/g-navigation/index.js"),
    NoData: __webpack_require__(/*! ../../components_dom/g-no-data */ "./src/js/components_dom/g-no-data/index.js"),
    Pagination: __webpack_require__(/*! ../../components_dom/g-pagination */ "./src/js/components_dom/g-pagination/index.js"),
    Popover: __webpack_require__(/*! ../../components_dom/g-popover */ "./src/js/components_dom/g-popover/index.js"),
    ProgressBar: __webpack_require__(/*! ../../components_dom/g-progress-bar */ "./src/js/components_dom/g-progress-bar/index.js"),
    RadioSwitch: __webpack_require__(/*! ../../components_dom/g-radio-switch */ "./src/js/components_dom/g-radio-switch/index.js"),
    SortTab: __webpack_require__(/*! ../../components_dom/g-sort-tab */ "./src/js/components_dom/g-sort-tab/index.js"),
    Star: __webpack_require__(/*! ../../components_dom/g-star */ "./src/js/components_dom/g-star/index.js"),
    Sub: __webpack_require__(/*! ../../components_dom/g-sub */ "./src/js/components_dom/g-sub/index.js"),
    Table: __webpack_require__(/*! ../../components_dom/g-table */ "./src/js/components_dom/g-table/index.js"),
    Tooltip: __webpack_require__(/*! ../../components_dom/g-tooltip */ "./src/js/components_dom/g-tooltip/index.js"),
    TooltipApp: __webpack_require__(/*! ../../components_dom/g-tooltip-app */ "./src/js/components_dom/g-tooltip-app/index.js"),
    Validate: __webpack_require__(/*! ../../components_dom/g-validate */ "./src/js/components_dom/g-validate/index.js")
};

/***/ }),

/***/ "./src/js/components_dom/g-confirm/index.js":
/*!**************************************************!*\
  !*** ./src/js/components_dom/g-confirm/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
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
                closeContent: '<div class="g-iconfont g-icon-close"></div>', // 关闭按钮的内容
                isShowHeader: true, // 是否显示头部
                headerContent: '提示:', // 头部内容
                isShowBody: true, // 是否显示主体
                isShowIcon: false, // 是否显示icon
                icon: 'g-icon-warning', // icon的类型
                isCustom: false, // 是否自定义
                content: '<div>确定要执行这个操作?</div>', // 主体内容
                isShowFooter: true, // 是否显示尾部
                isShowConfirm: true, // 是否显示确认按钮
                confirmContent: '确认', // 确认按钮的内容
                isShowCancel: true, // 是否显示取消按钮
                cancelContent: '取消', // 取消按钮的内容
                isShowMask: true, // 是否显示遮罩
                isHandHide: false // 是否手动隐藏(一般只用于点击确认时)
            }
        }, opts)));
    }

    return Sub;
}(Super);

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
            htmlIcon = '<div class="g-confirm-body-system-icon g-iconfont ' + config.icon + '"></div>';
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

/***/ "./src/js/components_dom/g-copyright/index.js":
/*!****************************************************!*\
  !*** ./src/js/components_dom/g-copyright/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {},
            // 配置
            config: {}
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
            className: 'g-copyright',
            innerHTML: '\n                <div class="g-copyright-icon g-iconfont g-icon-logo"></div>\n                <div class="g-copyright-text">\u7248\u6743\u4FE1\u606F\u54DF</div>\n            '
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

/***/ }),

/***/ "./src/js/components_dom/g-footer-nav/index.js":
/*!*****************************************************!*\
  !*** ./src/js/components_dom/g-footer-nav/index.js ***!
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

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {},
            // 配置
            config: {
                items: [
                    // {
                    //     routeName: 'home',
                    //     href: '/',
                    //     text: '首页',
                    //     icon: 'g-icon-home',
                    //     isHighlight: false,
                    //     isShowMark: false
                    // }
                ]
            }
        }, opts)));
    }

    return Sub;
}(Super);

Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var items = config.items;
    this.moduleDomClass = 'g-footer-nav';
    var moduleDomHtml = '';
    Object.keys(items).forEach(function (key) {
        var v = items[key];
        var highlightClass = '';
        if (v.isHighlight) {
            highlightClass = 'g-footer-nav-body-item_active';
        }
        var markHtml = '';
        if (v.isShowMark) {
            markHtml = '<div class="g-footer-nav-body-item-mark"></div>';
        }
        moduleDomHtml += '\n            <a class="g-footer-nav-body-item ' + highlightClass + '" href="' + v.href + '">\n                <div class="g-footer-nav-body-item-icon g-iconfont ' + v.icon + '"></div>\n                <div class="g-footer-nav-body-item-text">' + v.text + '</div>\n                ' + markHtml + '\n            </a>\n        ';
    });
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
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

/***/ "./src/js/components_dom/g-go-top/index.js":
/*!*************************************************!*\
  !*** ./src/js/components_dom/g-go-top/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)
var scrollMoveTo = __webpack_require__(/*! zhf.scroll-move-to */ "./node_modules/zhf.scroll-move-to/dist/index.min.js");

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {},
            // 配置
            config: {
                showHeight: 200
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
            className: 'g-go-top',
            innerHTML: '<div class="g-go-top-icon g-iconfont g-icon-up"></div>'
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

/***/ "./src/js/components_dom/g-jump-link/index.js":
/*!****************************************************!*\
  !*** ./src/js/components_dom/g-jump-link/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var timeCountDown = __webpack_require__(/*! zhf.time-count-down */ "./node_modules/zhf.time-count-down/dist/index.min.js"); // 倒计时
var Confirm = __webpack_require__(/*! ../g-confirm */ "./src/js/components_dom/g-confirm/index.js");

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
            closeContent: '<div class="g-iconfont g-icon-close"></div>', // 关闭按钮的内容
            isShowConfirm: false, // 是否显示确认按钮
            confirmContent: '确认', // 确认按钮的内容
            isShowCancel: false, // 是否显示取消按钮
            cancelContent: '取消', // 取消按钮的内容
            isCustom: false, // 是否自定义
            isShowIcon: false, // 是否显示icon
            icon: 'g-icon-warning', // icon的类型
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

/***/ "./src/js/components_dom/g-lazy-load/index.js":
/*!****************************************************!*\
  !*** ./src/js/components_dom/g-lazy-load/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var offset = __webpack_require__(/*! zhf.offset */ "./node_modules/zhf.offset/dist/index.min.js");
var getDomArray = __webpack_require__(/*! zhf.get-dom-array */ "./node_modules/zhf.get-dom-array/dist/index.min.js");

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

/***/ "./src/js/components_dom/g-loading-dialog/index.js":
/*!*********************************************************!*\
  !*** ./src/js/components_dom/g-loading-dialog/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {},
            // 配置
            config: {
                icon: ''
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
            className: 'g-loading',
            innerHTML: '<div class="g-loading-icon g-iconfont g-icon-loading"></div>'
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

/***/ }),

/***/ "./src/js/components_dom/g-loading-over/index.js":
/*!*******************************************************!*\
  !*** ./src/js/components_dom/g-loading-over/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {},
            // 配置
            config: {}
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
            className: 'g-loading-over',
            innerHTML: '<div class="g-loading-over-icon g-iconfont g-icon-no-data"></div><div class="g-loading-over-text">\u6570\u636E\u52A0\u8F7D\u5B8C\u6BD5</div>'
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

/***/ }),

/***/ "./src/js/components_dom/g-loading/index.js":
/*!**************************************************!*\
  !*** ./src/js/components_dom/g-loading/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {},
            // 配置
            config: {}
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
            className: 'g-loading-dialog',
            innerHTML: '<div class="g-loading-dialog-icon g-iconfont g-icon-loading"></div>'
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

/***/ }),

/***/ "./src/js/components_dom/g-mask/index.js":
/*!***********************************************!*\
  !*** ./src/js/components_dom/g-mask/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {
                click: function click() {}
            },
            // 配置
            config: {
                isTransparent: false, // 是不是透明的(默认不透明)
                positionMethod: 'fixed' // 模块的定位方式 'fixed'(相对于整个文档) 'absolute'(相对于外部容器)
            }
        }, opts)));
    }

    return Sub;
}(Super);

// (建)(覆)内部模块的创建(覆盖超类型)


Sub.prototype.moduleDomCreate = function () {
    var self = this;
    var config = this.opts.config;
    var className = '';
    if (config.isTransparent) {
        className = 'g-mask_transparent';
    }
    if (config.positionMethod === 'fixed') {
        className = 'g-mask-fixed';
    }
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-mask ' + className,
            innerHTML: ''
        }
    });
    // 如果外部容器没有定位，则给外部容器增加一个定位。
    if (self.wrapDom && getComputedStyle(self.wrapDom).position === 'static') {
        self.wrapDom.style.position = 'relative';
    }
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

/***/ "./src/js/components_dom/g-message/index.js":
/*!**************************************************!*\
  !*** ./src/js/components_dom/g-message/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
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
                icon: 'g-icon-success', // icon的class
                content: '成功', // 内容信息
                positionLocation: 'center' // 弹窗的定位位置('top'，'center'，'bottom')。positionMethod定位方式强制fixed。
            }
        }, opts)));
    }

    return Sub;
}(Super);

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
        htmlIcon = '<div class="g-message-icon g-iconfont ' + config.icon + '"></div>';
    }
    var closeHtml = '';
    if (config.isShowClose) {
        closeHtml = '<div class="g-message-close g-iconfont g-icon-close" ></div>';
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

/***/ "./src/js/components_dom/g-navigation/index.js":
/*!*****************************************************!*\
  !*** ./src/js/components_dom/g-navigation/index.js ***!
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

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {},
            // 配置
            config: {
                items: [
                    /*
                    {
                        href: route,
                        icon: 'g-icon-home',
                        text: '首页',
                        isShowMark: false,
                    },
                    {
                        href: `${route}dev-globals/`,
                        icon: 'g-icon-dev',
                        text: '开发全局',
                        isShowMark: false,
                    },
                    {
                        href: `${route}dev-components/`,
                        icon: 'g-icon-dev',
                        text: '开发组件',
                        isShowMark: false,
                    },
                    {
                        href: `${route}dev-words/`,
                        icon: 'g-icon-dev',
                        text: '开发词汇',
                        isShowMark: false,
                    },
                    {
                        href: `${route}mine/`,
                        icon: 'g-icon-mine',
                        text: '我的',
                        isShowMark: false,
                    },
                    */
                ]
            }
        }, opts)));
    }

    return Sub;
}(Super);

// (建)(覆)内部模块的创建(覆盖超类型)


Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var items = config.items;
    var html = '';
    items.forEach(function (v) {
        var markHtml = '';
        if (v.isShowMark) {
            markHtml = '<div class="g-navigation-item-mark"></div>';
        }
        html += '\n            <a href="' + v.href + '" class="g-navigation-item">\n                <div class="g-navigation-item-icon g-iconfont ' + v.icon + '"></div>\n                <div class="g-navigation-item-text">' + v.text + '</div>\n                ' + markHtml + '\n            </a>\n        ';
    });
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
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

/***/ "./src/js/components_dom/g-no-data/index.js":
/*!**************************************************!*\
  !*** ./src/js/components_dom/g-no-data/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {},
            // 配置
            config: {
                icon: 'g-iconfont g-icon-no-data',
                text: '没有数据',
                button: {
                    isShowIcon: false,
                    icon: 'g-icon-home',
                    text: '回首页',
                    href: '/'
                }
            }
        }, opts)));
    }

    return Sub;
}(Super);

// (建)(覆)内部模块的创建(覆盖超类型)


Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var data = config;
    var buttonIconHtml = '';
    if (this.opts.config.button.isShowIcon) {
        buttonIconHtml = '<div class="g-button-icon ' + data.button.icon + '"></div>';
    }
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
        attribute: {
            className: 'g-no-data',
            innerHTML: '\n                <div class="g-no-data-icon g-iconfont ' + data.icon + '"></div>\n                <div class="g-no-data-text">' + data.text + '</div>\n                <a class="g-no-data-button g-button" href="' + data.button.href + '">\n                    ' + buttonIconHtml + '\n                    <div class="g-button-text">' + data.button.text + '</div>\n                </a>\n            '
        }
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

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

/***/ }),

/***/ "./src/js/components_dom/g-popover/index.js":
/*!**************************************************!*\
  !*** ./src/js/components_dom/g-popover/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {},
            // 配置
            config: {
                moduleDomIsRender: false,
                element: '.js-popover',
                eventType: 'mouseover',
                positionLocation: 'top-left', // 弹窗的定位位置('top-left'，'top-center'，'top-right')。
                content: 'no popover content'
            }
        }, opts)));
    }

    return Sub;
}(Super);

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
        $(document).on('click', function () {
            self.moduleDomHide();
        });
    }

    function fnModuleDomHide() {
        self.gPopoverMouseenterTimer = setTimeout(function () {
            self.moduleDomHide();
        }, 60);
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

/***/ "./src/js/components_dom/g-radio-switch/index.js":
/*!*******************************************************!*\
  !*** ./src/js/components_dom/g-radio-switch/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {
                click: function click() {}
            },
            // 配置
            config: {
                isHand: false, // 是否手动控制
                status: 'on', // 状态
                text: {
                    on: '已开启',
                    off: '已关闭'
                }
            }
        }, opts)));
    }

    return Sub;
}(Super);

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
            innerHTML: '\n                <div class="g-radio-switch-body">\n                    <div class="g-radio-switch-body-round"></div>\n                </div>\n                <div class="g-radio-switch-text">' + config.text[config.status] + '</div>\n            '
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
        this.moduleDom.querySelector('.g-radio-switch-text').innerHTML = '' + config.text[config.status];
    }
};

// 关闭
Sub.prototype.off = function () {
    var config = this.opts.config;
    if (this.isOn()) {
        this.moduleDom.classList.remove(this.moduleDomActiveClass);
        config.status = 'off';
        this.moduleDom.querySelector('.g-radio-switch-text').innerHTML = '' + config.text[config.status];
    }
};

module.exports = Sub;

/***/ }),

/***/ "./src/js/components_dom/g-sort-tab/index.js":
/*!***************************************************!*\
  !*** ./src/js/components_dom/g-sort-tab/index.js ***!
  \***************************************************/
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
                style: config.moduleDomStyle,
                customAttribute: config.moduleDomCustomAttribute,
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

/***/ "./src/js/components_dom/g-star/index.js":
/*!***********************************************!*\
  !*** ./src/js/components_dom/g-star/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {
                click: function click(obj) {}
            },
            // 配置
            config: {
                isHaveEvent: true, // 是否具备事件(默认具备)
                allStarNum: 5, // 所有的星星数
                nowStarNum: 4 // 当前被选择的星星数
            }
        }, opts)));
    }

    return Sub;
}(Super);

// (建)(覆)内部模块的创建(覆盖超类型)


Sub.prototype.moduleDomCreate = function () {
    var config = this.opts.config;
    var html = '';
    for (var i = 0; i < this.opts.config.allStarNum; i++) {
        var className = '';
        if (i < this.opts.config.nowStarNum) {
            className = 'g-star-item_active';
        }
        html += '<div data-index="' + i + '" class="g-iconfont g-icon-star g-star-item ' + className + '"></div>';
    }
    this.moduleDom = createElement({
        style: config.moduleDomStyle,
        customAttribute: config.moduleDomCustomAttribute,
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

/***/ "./src/js/components_dom/g-sub/index.js":
/*!**********************************************!*\
  !*** ./src/js/components_dom/g-sub/index.js ***!
  \**********************************************/
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
                    className: 'g-sub-type',
                    innerHTML: '\n                    <div class="g-sub-type-text" style="text-align: center;">\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770,\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DEsub-es6</div>\n                '
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

/***/ "./src/js/components_dom/g-table/index.js":
/*!************************************************!*\
  !*** ./src/js/components_dom/g-table/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {},
            // 配置
            config: {
                header: [{ content: 'undefined-header0' }, { content: 'undefined-header1' }, { content: 'undefined-header2' }],
                body: [[{ content: 'undefined-body0-0' }, { content: 'undefined-body0-1' }, { content: 'undefined-body0-2' }]],
                footer: ''
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
            className: 'g-table',
            innerHTML: '\n                <div class="g-table-header">\n                    <div class="g-table-row">\n                        ' + this.moduleDomCreateHeader() + '\n                    </div>\n                </div>\n                <div class="g-table-body">\n                    ' + this.moduleDomCreateBody() + '\n                </div>\n                <div class="g-table-footer">\n                    ' + this.moduleDomCreateFooter() + '\n                </div>\n            '
        }
    });
};

Sub.prototype.moduleDomCreateHeader = function () {
    var html = '';
    this.opts.config.header.forEach(function (v) {
        html += '\n            <div class="g-table-col">\n                <div class="g-table-col-body">\n                    ' + v.content + '\n                </div>\n            </div>\n        ';
    });
    return html;
};

Sub.prototype.moduleDomCreateBody = function () {
    var html = '';
    this.opts.config.body.forEach(function (v0) {
        var row = '';
        v0.forEach(function (v1) {
            row += '\n                <div class="g-table-col">\n                    <div class="g-table-col-body">\n                        ' + v1.content + '\n                    </div>\n                </div>\n            ';
        });
        html += '<div class="g-table-row">' + row + '</div>';
    });
    return html;
};

Sub.prototype.moduleDomCreateFooter = function () {
    return this.opts.config.footer;
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {};

module.exports = Sub;

/***/ }),

/***/ "./src/js/components_dom/g-tooltip-app/index.js":
/*!******************************************************!*\
  !*** ./src/js/components_dom/g-tooltip-app/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var Tooltip = __webpack_require__(/*! ../g-tooltip */ "./src/js/components_dom/g-tooltip/index.js"); // 工具提示框(文本提示框)

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

/***/ "./src/js/components_dom/g-tooltip/index.js":
/*!**************************************************!*\
  !*** ./src/js/components_dom/g-tooltip/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 对象的扩展
var createElement = __webpack_require__(/*! zhf.create-element */ "./node_modules/zhf.create-element/dist/index.min.js"); // 创建元素
var Super = __webpack_require__(/*! zhf.dom-components-super */ "./node_modules/zhf.dom-components-super/dist/index.min.js"); // 超类型(子类型继承的对象)

// 子类型

var Sub = function (_Super) {
    _inherits(Sub, _Super);

    function Sub(opts) {
        _classCallCheck(this, Sub);

        return _possibleConstructorReturn(this, (Sub.__proto__ || Object.getPrototypeOf(Sub)).call(this, extend({
            // 回调
            callback: {},
            // 配置
            config: {
                positionLocation: 'top-left', // 弹窗的定位位置('top-left'，'top-center'，'top-right')。
                content: 'no tooltip content'
            }
        }, opts)));
    }

    return Sub;
}(Super);

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

/***/ "./src/js/components_dom/g-validate/index.js":
/*!***************************************************!*\
  !*** ./src/js/components_dom/g-validate/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(/*! zhf.extend */ "./node_modules/zhf.extend/dist/index.min.js"); // 工具方法集合
var checkStr = __webpack_require__(/*! zhf.check-str */ "./node_modules/zhf.check-str/dist/index.min.js");
var getParent = __webpack_require__(/*! zhf.get-parent */ "./node_modules/zhf.get-parent/dist/index.min.js");
var getDomArray = __webpack_require__(/*! zhf.get-dom-array */ "./node_modules/zhf.get-dom-array/dist/index.min.js");

function Validate(json) {
    this.opts = extend({
        element: '',
        hintWrapClass: 'g-form', // 指定提示框的父级
        fileActiveClass: 'g-upload_active', // 文件或者图片上传成功之后的class，做限制个数需要这个
        isBindEvent: true // 是否绑定事件
    }, json);
    this.init();
}

Validate.prototype.init = function () {
    this.hintClass = 'g-validate';
    this.render();
    if (this.opts.isBindEvent) {
        this.power();
    }
};
Validate.prototype.render = function () {
    var self = this;
    self.element = getDomArray(this.opts.element); // 为了兼容未来动态创建的元素，此方法会被多次调用，元素要重新获取。
    self.element.forEach(function (v) {
        if (!v.hintWrapDom) {
            // 为了兼容未来动态创建的元素，此方法会被多次调用，为了提高性能，所以这里不重新赋值，虽然此处可以重新赋值。
            var hintWrapDom = self.getHintWrapDom(v);
            if (hintWrapDom) {
                // 如果外部容器没有定位，则给外部容器增加一个定位。
                if (getComputedStyle(hintWrapDom).position === 'static') {
                    hintWrapDom.style.position = 'relative';
                }
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
Validate.prototype.getHintWrapDom = function (input) {
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
Validate.prototype.renderHintAdd = function () {
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
Validate.prototype.renderHintRemove = function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var input = opts.input;
    var hintWrapDom = input.hintWrapDom;
    var hintDom = hintWrapDom.querySelector('.' + this.hintClass);
    if (hintWrapDom && hintDom) {
        hintWrapDom.removeChild(hintDom);
    }
};
Validate.prototype.validateInput = function (input) {
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
    var isFile = input.dataset.type === 'file' || inputType === 'file'; // 如果是file类型的input
    var value = input.value;
    if (isFile) {
        // 如果是file类型的input，值就是input身上的自定义属性data-value
        value = input.dataset.value;
    }
    // 处理自定义规则(每次验证都处理，可以保证setValidate对未来元素也有效)
    if (this.customValidateRule) {
        this.element.forEach(function (v1) {
            if (!v1.customValidateRule) {
                v1.customValidateRule = {}; // 自定义规则
            }
            Object.values(self.customValidateRule).forEach(function (v2) {
                v1.customValidateRule[v2.name] = {
                    fn: v2.fn,
                    isValidateSuccess: false
                };
            });
        });
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
Validate.prototype.isAllPassValidate = function () {
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
Validate.prototype.power = function () {
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
Validate.prototype.setValidate = function (name, fn) {
    if (!this.customValidateRule) {
        this.customValidateRule = {}; // 自定义规则
    }
    this.customValidateRule[name] = {
        name: name,
        fn: fn
    };
};

module.exports = Validate;

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