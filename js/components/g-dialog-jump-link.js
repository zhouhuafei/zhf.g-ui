const tools = require('zhf.tools'); // 工具方法集合
const DialogConfirm = require('./g-dialog-confirm'); // 弹窗
const timeCountDown = require('zhf.time-count-down'); // 倒计时

// 专门为请求成功写的跳转链接弹窗
class Super {
    constructor(opts) {
        opts = tools.extend({
            title: '操作成功',
            seconds: 3,
            pageTitle: '登录',
            href: 'javascript:;',
        }, opts);
        const content = `<div class="g-dialog-jump-link">
            <div class="g-dialog-jump-link-title">${opts.title}</div>
            <div class="g-dialog-jump-link-body">
                <div class="g-dialog-jump-link-body-seconds">${opts.seconds}</div>
                <div>秒后自动跳转到</div>
                <a href="${opts.href}" class="g-dialog-jump-link-body-page-title">${opts.pageTitle}页</a>
            </div>
            <a href="${opts.href}" class="g-dialog-jump-link-footer">点击此处手动跳转</a>
        </div>`;
        const dialogConfirm = new DialogConfirm({
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
                isHandHide: false, // 是否手动隐藏(一般只用于点击确认时)
            },
        });
        const seconds = dialogConfirm.moduleDom.querySelector('.g-dialog-jump-link-body-seconds');
        timeCountDown({
            seconds: opts.seconds,
            callback: {
                run: function (obj) {
                    seconds.innerHTML = obj.seconds;
                },
                over: function () {
                    window.location.href = opts.href;
                },
            },
        });
    }
}

module.exports = Super;
