# Table 表格

快速的数据化配置一个带有分页排序的表格布局表单。

依赖组件： `ElTable` `ElTableColumn` `ElPagination` ，需先全局注册。


## 基础使用

当分页和排序发生变化，会同步参数到 `page` 对象，同时触发 `request` 请求。

要显示分页至少需要配置 `currentPage` `pageSize` `total | pageCount` 三个属性。

表格的 `default-sort` 属性的 `{prop, order}` 被 `page` 属性的 `{sortProp, sortOrder}` 代替。

<ClientOnly><tableBase/></ClientOnly>

::: details 点击查看代码
@[code](@example/tableBase.vue)
:::

## 插槽使用

属性 `label`  `slot` 可以为一个渲染函数，使用 `jsx` 大幅提高体验。

开启模板插槽，`slot` 属性必须 `slot-` 开头。

<ClientOnly><tableSlot/></ClientOnly>

::: details 点击查看代码
@[code](@example/tableSlot.vue)
:::

## 自动合并

设置 `merge.keys` 选择要自动合并列的 prop。

设置 `merge.direction` 选择合并方向，也可设置 `auto` 自动合并。

<ClientOnly><tableMerge/></ClientOnly>

::: details 点击查看代码
@[code](@example/tableMerge.vue)
:::

## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| loading | boolean | - | 是否加载中
| columns | ColumnProps[] | - | 表格配置项 
| page | PageProps  | - | 分页排序参数  |
| merge| | MergeProps | 自动合并单元格
| ...... | -  | - | [ElTable 属性](https://element-plus.gitee.io/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7)

### ColumnProps

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| label | string \| RenderFunction | - | 列标题 
| slot | string  \| RenderFunction | - | 列插槽
| hidden | boolean | - | 列是否不可见
| children | ColumnProps[] | - | 多级表头
| ...... | -  |-|  [ElTableColumn 属性](https://element-plus.gitee.io/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7) |

### PageProps
| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| sortProp  | string | - | 排序列 prop
| sortOrder | 'ascending'\|'descending'\|null | - | 排序列方式
| ... | -  | - | [ElPagination 属性](https://element-plus.gitee.io/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7)

### MergeProps
| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| keys  | string[] | - | 合并列的prop集合
| direction | 'vertical' \| 'horizontal'\| 'auto' | 'auto' | 合并方向

## 方法

| 名称            | 参数  |   说明       | 
| -----------    | ------- | -----------------------------  |
| getRef    | -  |  获取 elTable 组件实例        |


## 插槽

| 名称            | 插槽作用域 |   说明                                   | 
| -----------    |   ------- | -----------------------------  |
| slot-xx        | {row,$index,column} |  列具名插槽           | 
| prepend        | - |   columns 前置插槽           |
| append         | - |   columns 后置插槽            |
| empty          | - |    ELTable empty 插槽            |
| append-row     | - |    ELTable append 插槽            |