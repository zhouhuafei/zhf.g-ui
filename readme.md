# 重点
* vue组件凡是涉及到DOM和BOM的都不允许在代码中出现。
* vue组件凡是涉及到DOM和BOM的都不允许在代码中出现。
* vue组件凡是涉及到DOM和BOM的都不允许在代码中出现。

```
# 安装依赖
npm i
# 开发环境打包
npm run demoDev
# 生产环境打包
npm run demoBuild
# 开发环境热更新打包，可以直接运行这个来查看demo。
npm run demoDevHot
# 生产环境热更新打包，可以直接运行这个来查看demo。
npm run demoBuildHot
```

```
# 静态资源的目录结构
src
├── js
│   ├── commons_dom
│   ├── commons_vue
│   ├── components_dom
│   ├── components_vue
│   ├── config
└── scss
    ├── animations
    ├── base
    ├── commons
    ├── components
    ├── config
    ├── fonts
    ├── reset
    └── tools
```

# 约定大于一切，规则至上 - css
* 使用的阿里字体图标 http://www.iconfont.cn/
* g-表示全局级别，有这个前缀的样式是整站通用的样式。
* g-mask层级是500，弹窗类型大于500即可，非弹窗类型请小于500。
* rem：默认是基于320的宽度进行设计的,
    - js：将屏幕宽度或者最外层容器的宽度除以10的结果赋值给html的fontSize。
    - scss：如果是320的设计图，1rem就是32px，可在scss中使用px2rem(xxx)。注：xxx是在设计图中量取的值。
* 字体图标格式：```<span class="g-iconfont g-icon-xxx"></span>```。
* css命名规范1：使用长链接命名方式，就是使用中划线一直连接下去，修饰符使用下划线进行链接。
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
* css命名规范2：下划线同时具备值的作用。
```
.g-display_flex {}
```

# 功能组件 - 传参规则
```
new Component({
    wrap: '', // 组件所属容器，支持传入选择器和原生dom节点。
    callback: {}, // 组件回调
    config: {}, // 组件配置
});
```

# components_dom目录下，哪些组件依赖了jq？
* g-tooltip-app
* g-validate
* g-popover

# 用法
* scss
    - 全部引入
    ```
    @import "zhf.g-ui/src/scss/commons/g-common"; // 组件，所有的组件集合。
    ```
    - 按需引入
    ```
    @import "zhf.g-ui/src/scss/base/g-base"; // 基础样式，必须引入。
    @import "zhf.g-ui/src/scss/components/g-sort-tab"; // 排序tab的样式
    ```
* js：dom组件
    - 全部引入
    ```
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
    } = require('zhf.g-ui/src/js/commons_dom/g-common');
    ```
    - 按需引入
    ```
    const SortTab = require('zhf.g-ui/src/js/commons_dom/g-sort-tab');
    const ProgressBar = require('zhf.g-ui/src/js/commons_dom/g-progress-bar');
    ```
* js：vue组件
    - 全部引入
    ```
    require('zhf.g-ui/src/js/commons_vue/g-common');
    ```
    - 按需引入
    ```
    import gSortTab from 'zhf.g-ui/src/js/components_vue/g-sort-tab/index';
    Vue.use(gSortTab);
    ```

# 自定义
