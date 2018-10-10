<template>
    <div class="g-sort-tab">
        <div v-for="item in items"
             class="g-sort-tab-item"
             :class="{'g-sort-tab-item_active':item.isSelected}"
             @click="sortChange(item)"
        >
            <div class="g-sort-tab-item-text">{{item.text}}</div>
            <div v-if="item.hasSort"
                 class="g-sort-tab-item-icon"
            >
                <div class="g-sort-tab-item-icon-item"
                     :class="{'g-sort-tab-item-icon-item_active':item.sortMethod==='asc'}"
                ></div>
                <div class="g-sort-tab-item-icon-item"
                     :class="{'g-sort-tab-item-icon-item_active':item.sortMethod==='desc'}"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'g-sort-tab',
        props: {
            items: {
                type: Array,
                value: [],
                /*
                value: [
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
                */
            },
        },
        methods: {
            sortChange(item) {
                this.items.forEach((v) => {
                    v.isSelected = false;
                    v.sortMethod = '';
                });
                item.isSelected = true;
                if (item.hasSort) {
                    if (item.sortMethod === '') {
                        item.sortMethod = item.defaultSortMethod;
                    } else if (item.sortMethod === 'asc') {
                        item.sortMethod = 'desc';
                    } else if (item.sortMethod === 'desc') {
                        item.sortMethod = 'asc';
                    }
                }
                this.$emit('sortChange', item);
            },
        },
    };
</script>
