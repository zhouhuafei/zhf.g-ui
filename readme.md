```
# 安装依赖
npm i
# 查看demo
npm run demo
```

```
# 静态资源的目录结构
src
├── demo
│   ├── h5
│   └── pc
├── dist
│   ├── h5
│   └── pc
├── node_modules
└── src
    ├── js
    │   ├── commons
    │   ├── components
    │   └── components-super
    └── scss
        ├── commons
        ├── components
        ├── config
        ├── fonts
        └── reset
```

# 约定大于一切，规则至上 - css
* 使用的阿里字体图标 http://www.iconfont.cn/
* g-表示全局级别,有这个前缀的样式是整站通用的样式。
* g-mask层级是500,弹窗类型大于500即可,非弹窗类型请小于500。
* css命名规范：使用长链接命名方式，就是使用中划线一直连接下去。修饰符使用一个下划线进行表示。
* rem：基于320的宽度进行设计的，将320的宽度分成了10份。
    - 如果是320的设计图，1rem就是32px。
    - 如果是640的设计图，1rem就是64px。
* 字体图标格式：```<span class="iconfont icon-g-xxx"></span>```。
```
.g-components .g-components-header {}
.g-components .g-components-header-item {}
.g-components .g-components-header-item.g-components-header-item_on {}
.g-components .g-components-header-item.g-components-header-item_off {}
.g-components .g-components-header-item.g-components-header-item_active {}
.g-components .g-components-header-item.g-components-header-item_inactive {}
.g-components .g-components-header-item.g-components-header-item_window {}
.g-components .g-components-header-item.g-components-header-item_list {}
.g-components .g-components-header-item.g-components-header-item_col-1 {}
.g-components .g-components-header-item.g-components-header-item_col-2 {}
.g-components .g-components-header-item.g-components-header-item_col-3 {}
.g-components .g-components-header-item.g-components-header-item_col-4 {}
.g-components .g-components-header-item.g-components-header-item_cancel {}
.g-components .g-components-header-item.g-components-header-item_confirm {}
.g-components .g-components-header-item.g-components-header-item_money-text {}
.g-components .g-components-header-item.g-components-header-item_money-symbol {}
.g-components .g-components-header-item.g-components-header-item_money-big {}
.g-components .g-components-header-item.g-components-header-item_money-small {}
```

# 功能组件 - 传参规则
```
new Component({
    wrap: '', // 组件所属容器，支持传入选择器和原生dom节点。
    callback: {}, // 组件回调
    config: {}, // 组件配置
    data: {}, // 组件数据
});
```
