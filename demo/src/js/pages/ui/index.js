require('../../../scss/pages/ui/index.scss'); // 当前页的样式

// 组件按需引入
/*
const SortTab = require('../../../../src/js/commons_dom/g-sort-tab');
const ProgressBar = require('../../../../src/js/commons_dom/g-progress-bar');
*/

// 组件全部引入
const {
    Message,
    Confirm,
    SortTab,
    ProgressBar,
    Popover,
    Validate,
    Loading,
    LoadingOver,
    LoadingDialog,
    NoData,
    Pagination,
    Table,
    RadioSwitch,
} = require('../../../../../src/js/commons_dom/g-common');

// 功能组件 - 排序tab
new SortTab({
    // 容器
    wrap: '.sort-tab',
    // 回调
    callback: {
        click: function (json) {
            console.log(json);
        },
    },
    // 配置
    config: {
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
        defaultIndex: 0, // 默认索引
        defaultSortMethod: 'asc', // asc升序 desc降序
    },
});

// 功能组件 - 分页
new Pagination({wrap: '.pagination'});

// 功能组件 - 表格
new Table({wrap: '.table'});

// 功能组件 - 单选切换
new RadioSwitch({wrap: '.radio-switch'});

// 功能组件 - 进度条
const progressBar = new ProgressBar({
    wrap: '.progress-bar',
});
let canvasSetScaleNum = 0;
const canvasSetScaleTimer = setInterval(function () {
    if (canvasSetScaleNum === 30) {
        clearInterval(canvasSetScaleTimer);
    }
    progressBar.canvasSetScale(canvasSetScaleNum); // 0 - 100
    canvasSetScaleNum++;
}, 60);

// 功能组件 - Popover
document.querySelectorAll('.js-popover').forEach(function (v) {
    new Popover({
        config: {
            element: v,
            content: '建议尺寸：640*640',
            eventType: 'click',
            positionLocation: 'top-center',
        },
    });
});

// 验证
(function () {
    const validateInput = new Validate({element: '.js-validate'});
    validateInput.setValidate('no-999', function (value) {
        return Number(value) !== 999;
    });
    document.querySelector('.js-save').addEventListener('click', function () {
        // 测试确认框和提示框
        new Confirm({
            callback: {
                cancel: function () {
                    new Message({
                        config: {
                            time: 3000, // 展示的时间
                            isShowIcon: false, // 是否显示icon
                            isShowClose: true, // 是否显示关闭按钮
                            icon: 'icon-success', // icon的class
                            content: '已取消', // 内容信息
                            positionLocation: 'center', // 弹窗的定位位置    positionMethod定位方式强制fixed
                        },
                    });
                },
                confirm: function () {
                    const isAllPassValidate = validateInput.isAllPassValidate();
                    new Message({
                        config: {
                            time: 3000, // 展示的时间
                            isShowIcon: false, // 是否显示icon
                            isShowClose: true, // 是否显示关闭按钮
                            icon: 'icon-success', // icon的class
                            content: isAllPassValidate ? '验证已通过，可执行保存操作' : '验证尚未通过，不可执行保存操作', // 内容信息
                            positionLocation: 'center', // 弹窗的定位位置    positionMethod定位方式强制fixed
                        },
                    });
                },
                close: function () {
                    new Message({
                        config: {
                            time: 3000, // 展示的时间
                            isShowIcon: false, // 是否显示icon
                            isShowClose: true, // 是否显示关闭按钮
                            icon: 'icon-success', // icon的class
                            content: '已关闭', // 内容信息
                            positionLocation: 'center', // 弹窗的定位位置    positionMethod定位方式强制fixed
                        },
                    });
                },
            },
            config: {
                positionLocation: 'center', // 弹窗的定位位置('top'，'center'，'bottom')。positionMethod定位方式强制fixed。
                isShowClose: true, // 是否显示关闭按钮
                closeContent: '<div class="g-iconfont g-icon-close"></div>', // 关闭按钮的内容
                isShowHeader: true, // 是否显示头部
                headerContent: '提示:', // 头部内容
                isShowBody: true, // 是否显示主体
                isShowIcon: false, // 是否显示icon
                icon: 'icon-warning', // icon的类型
                isCustom: false, // 是否自定义
                content: '<div>确定要执行这个操作?</div>', // 主体内容
                isShowFooter: true, // 是否显示尾部
                isShowConfirm: true, // 是否显示确认按钮
                confirmContent: '确认', // 确认按钮的内容
                isShowCancel: true, // 是否显示取消按钮
                cancelContent: '取消', // 取消按钮的内容
                isShowMask: true, // 是否显示遮罩
                isHandHide: false, // 是否手动隐藏(一般只用于点击确认时)
            },
        });
    });
}());

// 中间弹层loading
const loading = new LoadingDialog({config: {moduleDomIsRender: false}});
$('.js-loading-dialog_show').on('click', () => {
    loading.moduleDomShow();
});
$('.js-loading-dialog_hide').on('click', () => {
    loading.moduleDomHide();
});

// 数据加载中
new Loading({wrap: '.loading-normal'});
// 数据加载完毕
new LoadingOver({wrap: '.loading-over'});
// 没有数据
new NoData({wrap: '.no-data'});

// vue系列组件按需引入
/*
import gSortTab from '../../../../../src/js/components_vue/g-sort-tab/index';
Vue.use(gSortTab);
*/

// vue系列组件全部引入
require('../../../../../src/js/commons_vue/g-common');
import app from './app.vue';

new Vue({
    el: '#app',
    template: `<app></app>`,
    components: {app},
});
