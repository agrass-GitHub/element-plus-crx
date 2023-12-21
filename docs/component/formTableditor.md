# FormTableditor 表格编辑表单

快速的数据化配置一个表格编辑器布局表单。

## 基础使用

设置 `row._view_` 属性可开启查看模式，表单行可快速在查看和编辑中切换。

<ClientOnly><formTableditor/></ClientOnly>

::: details 点击查看代码
@[code](@example/formTableditor.vue)
:::

## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| items | ItemProps[] | - | 表单配置项 
| model-prop | string | - | 表单 model 键名，必需 
| ...... | TableProps | - | [ElTable 属性](https://element-plus.gitee.io/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7)


### ItemProps

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| ...... | -    | - | [AgelFormItem 属性](/element-plus-crx/component/formItems.html#itemprops)
| type, index, align, headerAlign, width, minWidth, fixed, showOverflowTooltip | -  |-|  [ElTableColumn 属性](https://element-plus.gitee.io/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7) |

## 方法

| 名称            | 参数  |   说明       | 
| -----------    | ------- | -----------------------------  |
| getRef    | prop \| 'elTable'  |  获取组件实例        |
| validateRow    | index,callback |   验证某一行表单       |


## 插槽

| 名称            | 插槽作用域 |   说明                                   | 
| -----------    |   ------- | -----------------------------  |
| slot-xx        | itemProps |  item 组件具名插槽           | 
| prepend        | - |   items 前置插槽           |
| append         | - |   items 后置插槽            |
| empty          | - |    ELTable empty 插槽            |
| append-row     | - |    ELTable append 插槽            |