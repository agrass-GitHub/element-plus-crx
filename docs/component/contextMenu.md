# ContextMenu 右键菜单

快速的数据化配置一个右键菜单，用于交互逻辑较多的页面。

## 基础使用

使用 `menus` 配置一个菜单，`contextMenu` 事件需要禁用默认行为避免弹出默认菜单。

<ClientOnly><contextMenu/></ClientOnly>

::: details 点击查看代码
@[code](@example/contextMenu.vue)
:::

## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| modelValue | boolean | - | 是否显示
| x | number | - | 菜单出现的 x 坐标
| y | number | - | 菜单出现的 y 坐标
| menus | MenuItemProps[] | - | 菜单配置
| transition | string | - | 过渡动画，transition 组件的 name 名称

### MenuItemProps

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| title | string | - | 菜单名称，必须
| icon  | string | - | 菜单图标或图片地址
| remark | string | - | 菜单备注
| divided | boolean | - | 菜单下划线
| disabled | boolean | - | 是否禁用
| hidden | boolean | - | 是否隐藏
| className | string | - | Class 名称
| children | MenuItemProps[] | - | 下级菜单配置

## 事件

| 名称          | 参数  |   说明                     | 
| -----------   | ------- | -----------------------------  |
| select    | MenuItemProps  | 菜单选项被点击时触发      |
