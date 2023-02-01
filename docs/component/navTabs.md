# NavTabs 导航条

快速的数据化配置一个导航条，常用于后台管理系统中。

依赖组件： `ElTabs` `ElTabPane` `ElPopover` `ElButton` `ElIcon`， 需先全局注册。

## 基础使用

在下面的例子中，基于后台系统做了一个简单的架子，便于理解该组件。

在 `Tab` 标签栏上右键操作可打开导航功能菜单。

<ClientOnly><navTabs/></ClientOnly>

::: details 点击查看代码
@[code vue{7-15}](@example/navTabs.vue)
:::

## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| v-model:tabs | Tab[] | - | 选项卡配置，必须
| routePath | string | - | 当前路由 path，必须
| homePath | string | - | 首页 path，该 tab 将置顶不会被移除
| more  | boolean | true | 更多按钮
| fixed | boolean | - | 固定菜单
| reload | boolean | - | 重载菜单
| isBackground | boolean | - | 背景样式导航条


### TabProps

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| title | string | - | tab 名称，必须
| path  | index | - | 路由地址，必须
| icon  | string | - | tab 图标或图片地址
| fixed | boolean | - | 是否固定


## 事件

| 名称          | 参数  |   说明                     | 
| -----------   | ------- | -----------------------------  |
| pathChange    | path  | path 发生变化时      |
| reload        | -     | 点击重新加载菜单时      |


## 插槽

| 名称            | 插槽作用域 |   说明             | 
| ----------- |   ------- | -----------------------------  |
| menu        | { item } |  下拉菜单           | 
