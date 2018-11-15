(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["components_dom/g-validate/index"] = factory();
	else
		root["components_dom/g-validate/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/components_dom/g-validate/index.js");
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

/***/ })

/******/ });
});