!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["components_dom/g-popover/index"]=t():e["components_dom/g-popover/index"]=t()}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=27)}({0:function(e,t,o){"use strict";var n,r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(f,l){"object"===i(t)&&void 0!==e?e.exports=l():void 0===(r="function"==typeof(n=l)?n.call(t,o,t,e):n)||(e.exports=r)}(0,function(){return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=Object.prototype.toString.call(t).slice(8,-1).toLowerCase();return r!==Object.prototype.toString.call(o).slice(8,-1).toLowerCase()||!n||"object"!==r&&"array"!==r?t=o:Object.keys(o).forEach(function(r){var i=Object.prototype.toString.call(t[r]).slice(8,-1).toLowerCase();i!==Object.prototype.toString.call(o[r]).slice(8,-1).toLowerCase()||!n||"object"!==i&&"array"!==i?void 0!==o[r]&&(t[r]=o[r]):e(t[r],o[r])}),t}})},1:function(e,t,o){"use strict";var n,r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(f,l){"object"===i(t)&&void 0!==e?e.exports=l():void 0===(r="function"==typeof(n=l)?n.call(t,o,t,e):n)||(e.exports=r)}(0,function(){return function(e){var t=e||{};t.elementName=t.elementName||"div",t.style=t.style||{},t.customAttribute=t.customAttribute||{},t.attribute=t.attribute||{};var o=document.createElement(t.elementName);return Object.keys(t.style).forEach(function(e){o.style[e]=t.style[e]}),Object.keys(t.customAttribute).forEach(function(e){o.setAttribute("data-"+e,t.customAttribute[e])}),Object.keys(t.attribute).forEach(function(e){o[e]=t.attribute[e]}),o}})},2:function(e,t,o){"use strict";var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();var r=o(0),i=o(3),f=o(1),l=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.opts=r({wrap:"body",callback:{moduleDomCreateBefore:function(e){},moduleDomCreateAfter:function(e){},moduleDomRenderBefore:function(e){},moduleDomRenderAfter:function(e){},moduleDomRemoveBefore:function(e){},moduleDomRemoveAfter:function(e){},moduleDomShowBefore:function(e){},moduleDomShowAfter:function(e){},moduleDomHideBefore:function(e){},moduleDomHideAfter:function(e){},wrapDomGetBefore:function(e){},wrapDomGetAfter:function(e){},wrapDomRemoveBefore:function(e){},wrapDomRemoveAfter:function(e){}},config:{moduleDomAttribute:{},moduleDomCustomAttribute:{},moduleDomRenderMethod:{method:"appendChild",child:null},moduleDomStyle:{},moduleDomIsRender:!0,moduleDomIsClearTimer:!0}},t),this.moduleDom=null,this.wrapDom=null,this.moduleDomTimer={},this.init()}return n(e,[{key:"init",value:function(){this.render(),this.power()}},{key:"render",value:function(){this.wrapDomGet(),this.moduleDomRemove();var e=this.opts.callback;e.moduleDomCreateBefore(this),this.moduleDomCreate(),e.moduleDomCreateAfter(this),this.moduleDomRender()}},{key:"power",value:function(){}},{key:"moduleDomCreate",value:function(){var e=this.opts.config;this.moduleDom=f({style:e.moduleDomStyle,customAttribute:e.moduleDomCustomAttribute,attribute:r({},e.moduleDomAttribute)})}},{key:"moduleDomRender",value:function(){var e=this.opts.callback,t=this.opts.config;if(t.moduleDomIsRender&&this.wrapDom&&this.moduleDom){e.moduleDomRenderBefore(this);var o=t.moduleDomRenderMethod;if("insertBefore"===o.method){var n=i(o.child)[0];n?this.wrapDom.insertBefore(this.moduleDom,n):this.wrapDom.insertBefore(this.moduleDom,this.wrapDom.children[0])}"appendChild"===o.method&&this.wrapDom.appendChild(this.moduleDom),e.moduleDomRenderAfter(this)}}},{key:"moduleDomRemove",value:function(){var e=this.opts.callback;this.moduleDom&&this.moduleDom.parentNode&&(e.moduleDomRemoveBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomRemoveAfter(this)),this.moduleDomClearTimer()}},{key:"moduleDomClearTimer",value:function(){var e=this;e.opts.config.moduleDomIsClearTimer&&Object.keys(e.moduleDomTimer).forEach(function(t){clearInterval(e.moduleDomTimer[t]),clearTimeout(e.moduleDomTimer[t])})}},{key:"moduleDomHide",value:function(){var e=this.opts.callback;this.moduleDom&&this.moduleDom.parentNode&&(this.opts.config.moduleDomIsRender=!1,e.moduleDomHideBefore(this),this.moduleDom.parentNode.removeChild(this.moduleDom),e.moduleDomHideAfter(this))}},{key:"moduleDomShow",value:function(){var e=this.opts.callback;e.moduleDomShowBefore(this),this.wrapDom&&(this.opts.config.moduleDomIsRender=!0,this.moduleDomRender()),e.moduleDomShowAfter(this)}},{key:"wrapDomGet",value:function(){var e=this.opts.callback;e.wrapDomGetBefore(this),this.wrapDom=i(this.opts.wrap)[0],e.wrapDomGetAfter(this)}},{key:"wrapDomRemove",value:function(){var e=this.opts.callback;this.moduleDomRemove(),this.wrapDom&&this.wrapDom.parentNode&&(e.wrapDomRemoveBefore(this),this.wrapDom.parentNode.removeChild(this.wrapDom),e.wrapDomRemoveAfter(this))}},{key:"getModuleDomHtml",value:function(){return this.moduleDom?this.moduleDom.outerHTML:""}}]),e}();e.exports=l},27:function(e,t,o){"use strict";var n=o(0),r=o(1),i=o(2),f=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n({callback:{},config:{moduleDomIsRender:!1,element:".js-popover",eventType:"mouseover",positionLocation:"top-left",content:"no popover content"}},e)))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i),t}();f.prototype.moduleDomCreate=function(){var e=this.opts.config,t="g-popover_"+e.positionLocation;this.moduleDom=r({style:e.moduleDomStyle,customAttribute:e.moduleDomCustomAttribute,attribute:{className:"g-popover "+t,innerHTML:'\n                <div class="g-popover-content">'+e.content+'</div>\n                <div class="g-popover-icon"></div>                \n            '}})},f.prototype.power=function(){var e=this,t=e.opts.config,o=t.positionLocation,n=e.moduleDom;function r(){e.gPopoverMouseenterTimer=setTimeout(function(){e.moduleDomHide()},60)}function i(e){"top-left"===o&&$(n).css({left:$(e).offset().left,top:$(e).offset().top-n.offsetHeight}),"top-center"===o&&$(n).css({left:$(e).offset().left-(n.offsetWidth-e.offsetWidth)/2,top:$(e).offset().top-n.offsetHeight}),"top-right"===o&&$(n).css({left:$(e).offset().left-(n.offsetWidth-e.offsetWidth),top:$(e).offset().top-n.offsetHeight}),"bottom-left"===o&&$(n).css({left:$(e).offset().left,top:$(e).offset().top+e.offsetHeight}),"bottom-center"===o&&$(n).css({left:$(e).offset().left-(n.offsetWidth-e.offsetWidth)/2,top:$(e).offset().top+e.offsetHeight}),"bottom-right"===o&&$(n).css({left:$(e).offset().left-(n.offsetWidth-e.offsetWidth),top:$(e).offset().top+e.offsetHeight}),"left-top"===o&&$(n).css({left:$(e).offset().left-n.offsetWidth,top:$(e).offset().top}),"left-center"===o&&$(n).css({left:$(e).offset().left-n.offsetWidth,top:$(e).offset().top-(n.offsetHeight-e.offsetHeight)/2}),"left-bottom"===o&&$(n).css({left:$(e).offset().left-n.offsetWidth,top:$(e).offset().top-(n.offsetHeight-e.offsetHeight)}),"right-top"===o&&$(n).css({left:$(e).offset().left+e.offsetWidth,top:$(e).offset().top}),"right-center"===o&&$(n).css({left:$(e).offset().left+e.offsetWidth,top:$(e).offset().top-(n.offsetHeight-e.offsetHeight)/2}),"right-bottom"===o&&$(n).css({left:$(e).offset().left+e.offsetWidth,top:$(e).offset().top-(n.offsetHeight-e.offsetHeight)})}"mouseover"!==t.eventType&&"mouseenter"!==t.eventType||($(t.element).on("mouseenter",function(t){t.preventDefault(),t.stopPropagation(),e.moduleDomShow(),i(this),clearTimeout(e.gPopoverMouseenterTimer)}),$(t.element).on("mouseleave",function(e){e.preventDefault(),e.stopPropagation(),r()}),$(n).on("mouseenter",function(t){t.preventDefault(),t.stopPropagation(),clearTimeout(e.gPopoverMouseenterTimer)}),$(n).on("mouseleave",function(e){e.preventDefault(),e.stopPropagation(),r()})),"click"===t.eventType&&($(t.element).on("click",function(t){t.preventDefault(),t.stopPropagation(),0===e.moduleDom.offsetWidth?(e.moduleDomShow(),i(this)):e.moduleDomHide()}),$(document).on("click",function(){e.moduleDomHide()}))},e.exports=f},3:function(e,t,o){"use strict";var n,r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(f,l){"object"===i(t)&&void 0!==e?e.exports=l():void 0===(r="function"==typeof(n=l)?n.call(t,o,t,e):n)||(e.exports=r)}(0,function(){function e(e,t){for(var o=t;o!==e&&null!==o;)o=o.parentNode;return o===e}return function(t,o){var n=[],r=document;if(o&&(r="string"===Object.prototype.toString.call(o).slice(8,-1).toLowerCase()?document.querySelector(o):1===o.nodeType?o:o===document?o:"htmlcollection"===Object.prototype.toString.call(o).slice(8,-1).toLowerCase()||"nodelist"===Object.prototype.toString.call(o).slice(8,-1).toLowerCase()?[].slice.call(o)[0]:null),!r)return[];if(t)if("string"===Object.prototype.toString.call(t).slice(8,-1).toLowerCase())n=[].slice.call(r.querySelectorAll(t));else if(1===t.nodeType)n=[t],o&&(e(r,t)||(n=[]));else if(t===document)n=[t],o&&(n=[]);else if(("htmlcollection"===Object.prototype.toString.call(t).slice(8,-1).toLowerCase()||"nodelist"===Object.prototype.toString.call(t).slice(8,-1).toLowerCase())&&(n=[].slice.call(t),o)){var i=[];n.forEach(function(t){e(r,t)&&i.push(t)}),n=i}return n}})}})});