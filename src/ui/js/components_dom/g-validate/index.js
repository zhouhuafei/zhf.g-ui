const extend = require('zhf.extend'); // 工具方法集合
const domAddPosition = require('zhf.dom-add-position');
const checkStr = require('zhf.check-str');
const getParent = require('zhf.get-parent');
const getDomArray = require('zhf.get-dom-array');
const eventDelegate = require('zhf.event-delegate');

function Validate(json) {
    this.opts = extend({
        element: '',
        hintWrapClass: 'g-form', // 指定提示框的父级
        fileActiveClass: 'g-upload_active', // 文件或者图片上传成功之后的class，做限制个数需要这个
        isBindEvent: true, // 是否绑定事件
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
    const self = this;
    self.element = getDomArray(this.opts.element); // 为了兼容未来动态创建的元素，此方法会被多次调用，元素要重新获取。
    self.element.forEach(function (v) {
        if (!v.hintWrapDom) { // 为了兼容未来动态创建的元素，此方法会被多次调用，为了提高性能，所以这里不重新赋值，虽然此处可以重新赋值。
            const hintWrapDom = self.getHintWrapDom(v);
            if (hintWrapDom) {
                domAddPosition(hintWrapDom, 'relative');
                v.hintWrapDom = hintWrapDom;
            }
        }
        if (!v.hintDom) { // 为了兼容未来动态创建的元素，此方法会被多次调用，但是这里却不能重新赋值，否则会导致引用消失，以至于renderHintAdd时修改hintDom内g-validate-text的innerHTML失效。
            v.hintDom = document.createElement('span');
            v.hintDom.innerHTML = `
                <span class="g-validate-text"></span>
                <span class="g-validate-icon"></span>
            `;
            v.hintDom.classList.add(self.hintClass);
        }
    });
};
Validate.prototype.getHintWrapDom = function (input) {
    const hintWrapClass = this.opts.hintWrapClass;
    let parent = getParent(input, `.${hintWrapClass}`); // 把这个放上面，是为了少调用一次getParent方法，因为g-form布局用的居多，g-validate-wrap没怎么使用。
    if (!parent) {
        parent = getParent(input, '.g-validate-wrap');
    }
    if (!parent) {
        parent = input.parentNode;
    }
    return parent;
};
Validate.prototype.renderHintAdd = function (opts = {}) {
    const input = opts.input;
    const hintDom = input.hintDom;
    if (hintDom) {
        hintDom.querySelector('.g-validate-text').innerHTML = opts.txt;
        const hintWrapDom = input.hintWrapDom;
        const hintDomIsExist = hintWrapDom.querySelector(`.${this.hintClass}`);
        if (hintWrapDom && !hintDomIsExist) {
            // hintWrapDom.appendChild(hintDom);
            hintWrapDom.insertBefore(hintDom, hintWrapDom.children[0]);
        }
    }
};
Validate.prototype.renderHintRemove = function (opts = {}) {
    const input = opts.input;
    const hintWrapDom = input.hintWrapDom;
    const hintDom = hintWrapDom.querySelector(`.${this.hintClass}`);
    if (hintWrapDom && hintDom) {
        hintWrapDom.removeChild(hintDom);
    }
};
Validate.prototype.validateInput = function (input) {
    const self = this;
    const opts = self.opts;
    if (input.offsetWidth === 0) { // 不验证宽度为0的input(display为none时不验证)(只有没被隐藏的才进行验证)
        return;
    }
    const validateType = input.dataset.validate || 'undefined';
    const validateHintTxt = input.dataset.hint || 'undefined';
    const type = validateType.split(' ');
    const hintTxt = validateHintTxt.split(' ');
    const hintWrapDom = input.hintWrapDom;
    const inputType = input.type;
    const inputName = input.name; // 这个不能使用，因为有些name名称是这种格式 hobby[] 此时通过name获取会报错 -> 纠正 其实不会报错 只需要 input[name=""] 把变量放在双引号里拼接一下就行了
    const isPassword = inputType === 'password';
    const isRadio = inputType === 'radio';
    const isCheckbox = inputType === 'checkbox';
    const isFile = inputType === 'file';
    let value = input.value;
    if (isFile) { // 如果是file类型的input，值就是input身上的自定义属性data-value
        value = input.dataset.value;
    }
    // 验证自定义的规则
    const customValidateRule = input.customValidateRule || {};
    Object.keys(customValidateRule).forEach((keys) => {
        const obj = customValidateRule[keys];
        obj.isValidateSuccess = obj.fn(value);
    });
    // 验证非自定义的规则
    let isValidateSuccess = true; // 是否验证成功了，假设验证通过了。
    type.forEach(function (v, i) {
        if (isValidateSuccess && customValidateRule[v]) { // 验证通过了且自定义验证存在则校验自定义的规则是否通过了
            if (isValidateSuccess && customValidateRule[v].isValidateSuccess) {
                self.renderHintRemove({input: input});
                isValidateSuccess = true;
            } else {
                self.renderHintAdd({txt: hintTxt[i], input: input});
                isValidateSuccess = false;
            }
        }
        if (isValidateSuccess && !customValidateRule[v]) { // 验证通过了且自定义验证不存在则校验非自定义的规则是否通过了
            if (isValidateSuccess && v === 'no-empty') { // 设置了非空验证
                let isEmpty = checkStr.isEmpty(value);
                if (isPassword) { // input为password类型的进行特殊处理
                    isEmpty = value === ''; // 因为密码可以输入空格，所以没必要去除首尾空格。
                }
                if (isRadio || isCheckbox) { // input为radio类型和input为checkbox类型的进行特殊处理（这两种类型只验证是否必填就够用了，file类型和select下拉框也是只验证必填就够用了。）
                    const isChecked = hintWrapDom.querySelector(`input[name="${inputName}"]:checked`);
                    isEmpty = isChecked === null;
                }
                if (isEmpty) {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                } else {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                }
            }
            if (isValidateSuccess && v === 'no-zero') { // 设置了非零验证
                if (checkStr.isZero(value)) {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                } else {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                }
            }
            if (isValidateSuccess && v === 'yes-positive-integer') { // 设置了正整数验证
                if (checkStr.isPositiveInteger(value)) {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                }
            }
            if (isValidateSuccess && v === 'yes-positive-float') { // 设置了正浮点数验证
                if (checkStr.isPositiveFloat(value)) {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                }
            }
            if (isValidateSuccess && v === 'yes-phone') { // 设置了电话验证
                if (checkStr.isPhoneNumEasy(value)) {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                }
            }
            if (isValidateSuccess && v === 'yes-email') { // 设置了邮箱验证
                if (checkStr.isEmail(value)) {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                }
            }
            if (isValidateSuccess && v === 'yes-url') { // 设置了网址验证
                if (checkStr.isUrl(value)) {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                }
            }
            const yesLimitLength = /yes-limit-length-(\d+)/.exec(v);
            if (isValidateSuccess && yesLimitLength) { // 设置了限制长度
                const length = yesLimitLength[1];
                let isPassLimitLength = value.length > length;
                if (isCheckbox) { // input为checkbox类型的进行特殊处理
                    const checkboxAll = hintWrapDom.querySelectorAll(`input[name="${inputName}"]:checked`);
                    isPassLimitLength = length >= checkboxAll.length;
                }
                if (isFile) { // input为file类型的进行特殊处理
                    const fileAll = hintWrapDom.querySelectorAll(`.${opts.fileActiveClass}`); // 这个class应该放到opts里，是可配置的。
                    isPassLimitLength = length >= fileAll.length;
                }
                if (isPassLimitLength) {
                    self.renderHintRemove({input: input});
                    isValidateSuccess = true;
                } else {
                    self.renderHintAdd({txt: hintTxt[i], input: input});
                    isValidateSuccess = false;
                }
            }
        }
    });
    input.isValidateSuccess = isValidateSuccess;
};
Validate.prototype.isAllPassValidate = function () {
    const self = this;
    self.render(); // 为了兼容未来动态创建的元素，这里需要重新渲染并绑定属性
    let isValidateSuccess = true;
    self.element.forEach(function (v) {
        self.validateInput(v);
        if (v.isValidateSuccess !== true) {
            isValidateSuccess = false;
        }
    });
    return isValidateSuccess;
};
Validate.prototype.power = function () {
    const self = this;
    const eventIsRepeat = {};
    self.element.forEach(function (v) {
        const eventsType = v.dataset.event || 'blur';
        // js原生事件无法给未来动态创建的元素加事件，除非我用自己封装的那个事件委托进行绑定，但是代码上百行，还是直接用jq的吧。
        // jq的事件委托很奇葩，如果input里有值，清空之后失去焦点会触发两次，没有值触发一次。
        // 奇葩的原因是因为委托了blur和change事件，blur的时候如果value改变了，会触发blur和change，所以会触发两次，没毛病。
        // jq的事件委托可以给未来动态创建的元素加事件，但是事件会被绑定多次(因为外部的forEach循环)，所以我定义了一个eventIsRepeat来进行过滤。
        const name = eventsType + self.opts.element;
        if (!eventIsRepeat[name]) {
            eventIsRepeat[name] = true;
            eventDelegate.on(document, eventsType, self.opts.element, function () {
                self.render(); // 为了兼容未来动态创建的元素，这里需要重新渲染并绑定属性
                self.validateInput(this);
            });
        }
    });
};

// 自定义验证规则
Validate.prototype.setValidate = function (name, fn) {
    this.element.forEach(function (v) {
        if (!v.customValidateRule) {
            v.customValidateRule = {}; // 自定义规则
        }
        v.customValidateRule[name] = {
            fn: fn,
            isValidateSuccess: false,
        };
    });
};

module.exports = Validate;
