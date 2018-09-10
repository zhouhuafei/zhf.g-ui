require('../commons/common'); // 公用的js
require('../../scss/pages/ui.scss'); // 当前页的样式

const SortTab = require('../../../ui/js/components/g-sort-tab'); // 排序tab
new SortTab({
    // 容器
    wrap: '.sort-tab',
    // 回调
    callback: {
        click: function (json) {
            console.log(json);
        }
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

const ProgressBar = require('../../../ui/js/components/g-progress-bar'); // 进度条
new ProgressBar({
    wrap: '.progress-bar',
});

