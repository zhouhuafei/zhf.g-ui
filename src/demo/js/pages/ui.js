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
                name: 'scale',
                text: '比例',
                hasSort: true,
            },
            {
                name: 'profit',
                text: '收益',
                hasSort: true,
            },
            {
                name: 'price',
                text: '价格',
                hasSort: true,
            },
        ],
        defaultIndex: 1,
        defaultSortMethod: 'desc', // asc升序 desc降序
    },
});

const ProgressBar = require('../../../ui/js/components/g-progress-bar'); // 进度条
new ProgressBar({
    wrap: '.progress-bar',
});

