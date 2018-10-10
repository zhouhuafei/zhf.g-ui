<template>
    <div id="app">
        <div class="g-title">vue组件 - 排序切换</div>
        <g-sort-tab :items="sortItems"></g-sort-tab>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                sortItems: [
                    {
                        name: 'comprehensive',
                        text: '综合',
                        isSelected: true, // 是否被选中
                        hasSort: false, // 有无排序
                        sortMethod: '', // 如果有排序，则当前是那种排序方式。 ''表示没选中 'asc'表示选中升序 'desc'表示选中降序
                        defaultSortMethod: 'asc', // 初次点击的时候，默认是什么排序（此处默认升序）。
                    },
                    {
                        name: 'price',
                        text: '价格',
                        isSelected: false, // 是否被选中
                        hasSort: true, // 有无排序
                        sortMethod: '', // 如果有排序，则当前是那种排序方式。 ''表示没选中 'asc'表示选中升序 'desc'表示选中降序
                        defaultSortMethod: 'asc', // 初次点击的时候，默认是什么排序（此处默认升序）。
                    },
                    {
                        name: 'sale',
                        text: '销量',
                        isSelected: false, // 是否被选中
                        hasSort: true, // 有无排序
                        sortMethod: '', // 如果有排序，则当前是那种排序方式。 ''表示没选中 'asc'表示选中升序 'desc'表示选中降序
                        defaultSortMethod: 'asc', // 初次点击的时候，默认是什么排序（此处默认升序）。
                    },
                ],
            };
        },
    };
</script>
