const extend = require('zhf.extend'); // 对象的扩展
const createElement = require('zhf.create-element'); // 创建元素
const Super = require('../components-super/g-super-es6'); // 超类型(子类型继承的对象)

// 子类型
class Sub extends Super {
    constructor(json) {
        super(extend({
            // 回调
            callback: {},
            // 配置
            config: {},
            // 数据
            data: {},
        }, json));
    }

    // (建)(覆)内部模块的创建(覆盖超类型)
    moduleDomCreate() {
        this.moduleDom = createElement({
            style: this.opts.config.moduleDomStyle,
            customAttribute: this.opts.config.moduleDomCustomAttribute,
            attribute: {
                className: 'g-progress-bar',
                innerHTML: `
                    <canvas class="g-progress-bar-canvas"></canvas>
                    <div class="g-progress-bar-text">0%</div>    
                `,
            },
        });
    }

    // (功)(覆)功能(覆盖超类型)
    power() {
        const self = this;
        self.canvas = self.moduleDom.querySelector('.g-progress-bar-canvas');
        self.canvasContext = self.canvas.getContext('2d');
        self.radian = Math.PI / 180; // 弧度
        self.canvasSetVar(); // 设置变量
        self.canvasDrawMap(); // 画地图
        self.canvasSetScale(0); // 设置比例
        window.addEventListener('resize', function () {
            self.canvasSetVar(); // 设置变量
            self.canvasDrawMap(); // 画地图
            self.canvasSetScale(self.canvasScaleNum || 0); // 设置比例
        });
    }

    canvasSetVar() {
        const moduleDom = this.moduleDom;
        const canvas = this.canvas;
        const canvasContext = this.canvasContext;
        this.canvasW = moduleDom.offsetWidth;
        this.canvasH = moduleDom.offsetHeight;
        canvas.width = this.canvasW; // 宽
        canvas.height = this.canvasH; // 高
        this.canvasRadius = this.canvasW / 2; // 半径
        canvasContext.translate(this.canvasRadius, this.canvasRadius); // 平移中心点
        canvasContext.rotate(-90 * this.radian); // 旋转90弧度
        this.canvasCenterX = 0; // 中心点x
        this.canvasCenterY = 0; // 中心点y
        this.canvasBorder = 5; // 边框
    }

    canvasDrawMap(strokeStyle, angle) {
        const ctx = this.canvasContext;
        ctx.strokeStyle = strokeStyle || '#dddddd';
        let temporaryRadius = this.canvasRadius; // 临时半径
        for (let i = 0; i < this.canvasBorder; i++) {
            ctx.beginPath();
            ctx.arc(this.canvasCenterX, this.canvasCenterY, temporaryRadius, 0, `${!isNaN(angle) ? angle * this.radian : 360 * this.radian}`, false);
            ctx.stroke();
            temporaryRadius--;
        }
    }

    // 设置比例
    canvasSetScale(num = 0) {
        this.canvasScaleNum = num;
        this.canvasContext.clearRect(0, 0, this.canvasW, this.canvasH); // 清理画布
        this.canvasDrawMap(); // 画地图
        this.canvasDrawMap('#67C23A', num * 3.6); // 画地图
        this.moduleDom.querySelector('.g-progress-bar-text').innerHTML = `${num}%`;
    }
}

module.exports = Sub;
