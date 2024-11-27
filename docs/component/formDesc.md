# FormDesc 描述表单

快速的数据化配置一个描述列表布局表单。

## 基础使用

设置 `viewModel` 属性可开启查看模式，表单可快速在查看和编辑中切换。

`FormDesc` 组件的大小继承自表单的 `size` 属性，排列方向和文本标签对齐方式继自承表单的 `labelPosition` 属性，文本标签宽度继承自表单的 `labelWidth` 属性。

<ClientOnly><formDesc/></ClientOnly>

::: details 点击查看代码
@[code](@example/formDesc.vue)
:::

## 属性

| 属性                         | 类型            | 默认值 | 说明                                                                                                              |
| ---------------------------- | --------------- | ------ | ----------------------------------------------------------------------------------------------------------------- |
| items                        | ItemProps[]     | -      | 表单配置项                                                                                                        |
| model-prop                   | string          | -      | 表单 model 键名                                                                                                   |
| scope                        | object          | -      | 表单项插槽作用域参数                                                                                              |
| view-model                   | boolean         | -      | 视图模式，只渲染 value                                                                                            |
| label-width                  | string\| number | -      | label 列宽度                                                                                                      |
| content-width                | string\| number | -      | content 列最小宽度                                                                                                |
| border                       | boolean         | true   | 开启边框                                                                                                          |
| column, border, title, extra | -               | -      | [ElDescriptions 属性](https://element-plus.org/zh-CN/component/descriptions.html#descriptions-%E5%B1%9E%E6%80%A7) |

### ItemProps

| 属性                            | 类型 | 默认值 | 说明                                                                                                                       |
| ------------------------------- | ---- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| ......                          | -    | -      | [AgelFormItem 属性](/element-plus-crx/component/formItems.html#itemprops)                                                  |
| span, className, labelClassName | -    | -      | [ElDescriptionsItem 属性](https://element-plus.org/zh-CN/component/descriptions.html#descriptions-item-%E5%B1%9E%E6%80%A7) |

## 方法

| 名称        | 参数                | 说明                      |
| ----------- | ------------------- | ------------------------- |
| getRef      | prop                | 获取组件实例              |
| validate    | (callback)=>Promise | 对整个 items 表单进行验证 |
| resetFields | props               | 重置表单                  |

## 插槽

| 名称    | 插槽作用域 | 说明              |
| ------- | ---------- | ----------------- |
| slot-xx | itemProps  | item 组件具名插槽 |
| prepend | -          | items 前置插槽    |
| append  | -          | items 后置插槽    |
