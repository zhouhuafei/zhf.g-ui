const createElement = require('zhf.create-element'); // 创建元素
const constructorInherit = require('zhf.create-element'); // 创建元素
const Super = require('../components-super/g-super'); // 超类型(子类型继承的对象)

// 子类型
const Sub = constructorInherit(Super, {
    // 回调
    callback: {},
    // 配置
    config: {
        status: 'loading', // 加载状态 loading(加载中) over(加载完毕)
        positionMethod: '', // 模块的定位方式 'fixed'(相对于整个文档) 'absolute'(相对于外部容器)
        positionLocation: 'center', // 模块的定位位置
    },
    // 数据
    data: {},
});

// (建)(覆)内部模块的创建(覆盖超类型)
Sub.prototype.moduleDomCreate = function () {
    const config = this.opts.config;
    let moduleDomHtml = '';
    let moduleDomClass = '';
    const status = config.status;
    const positionMethod = config.positionMethod;
    const positionLocation = config.positionLocation;
    // 加载中
    if (status === 'loading') {
        moduleDomClass = 'g-loading-run ';
        // 相对文档居中
        if (positionMethod === 'fixed') {
            moduleDomClass += `g-loading-fixed g-loading-${positionLocation}`;
        }
        // 相对容器居中
        if (positionMethod === 'absolute') {
            moduleDomClass += `g-loading-absolute g-loading-${positionLocation}`;
        }
        moduleDomHtml = `
            <div class="g-loading-body">
                <div class="g-loading-run-icon iconfont icon-loading"></div>
            </div>
        `;
    }
    // 加载完毕
    if (status === 'over') {
        moduleDomClass = 'g-loading-over ';
        // 相对文档居中
        if (positionMethod === 'fixed') {
            moduleDomClass += `g-loading-fixed g-loading-${positionLocation}`;
        }
        // 相对容器居中
        if (positionMethod === 'absolute') {
            moduleDomClass += `g-loading-absolute g-loading-${positionLocation}`;
        }
        moduleDomHtml = `
            <div class="g-loading-body">
                <div class="g-loading-over-icon iconfont icon-no-data"></div>
                <div class="g-loading-over-text">没有数据了</div>
            </div>
        `;
    }
    // 模块创建
    this.moduleDom = createElement({
        style: this.opts.config.moduleDomStyle,
        customAttribute: this.opts.config.moduleDomCustomAttribute,
        attribute: {
            className: `g-loading ${moduleDomClass}`,
            innerHTML: moduleDomHtml,
        },
    });
};

// (功)(覆)功能(覆盖超类型)
Sub.prototype.power = function () {
};

module.exports = Sub;
