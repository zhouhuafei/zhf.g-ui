require('../../scss/pages/ui.scss'); // 当前页的样式

// 功能组件 - 排序tab
const SortTab = require('../../../ui/js/components-dom/g-sort-tab');
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

// 功能组件 - 进度条
const ProgressBar = require('../../../ui/js/components-dom/g-progress-bar');
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
