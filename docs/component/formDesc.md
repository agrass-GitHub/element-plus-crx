# FormDesc 描述表单

快速的数据化配置一个描述列表布局表单。

依赖组件： `ElDescriptions` `ElDescriptionsItem` `AgelFormItem` ，需先全局注册。


## 基础使用

设置 `viewModel` 属性可开启查看模式，表单可快速在查看和编辑中切换。

`FormDesc` 组件的大小继承自表单的 `size` 属性，排列方向和文本标签对齐方式继自承表单的 `labelPosition` 属性，文本标签宽度继承自表单的 `labelWidth` 属性。

<ClientOnly><formDesc/></ClientOnly>

::: details 点击查看代码
@[code](@example/formDesc.vue)
:::

## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| items | ItemProps[] | - | 表单配置项 
| modelProp | string | - | 表单 model 键名 
| scope | object | - | 表单项插槽作用域参数 
| viewModel | boolean | - | 视图模式，只渲染 value
| border | boolean | true | 开启边框
| column, border, title, extra | -  | - | [ElDescriptions 属性](https://element-plus.gitee.io/zh-CN/component/descriptions.html#descriptions-%E5%B1%9E%E6%80%A7)

### ItemProps

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| ...... | -    | - | [AgelFormItem 属性](/component/formItem.html#属性)
| span, className, labelClassName | -   |-|  [ElDescriptionsItem 属性](https://element-plus.gitee.io/zh-CN/component/descriptions.html#descriptions-item-%E5%B1%9E%E6%80%A7) |

## 插槽

| 名称            | 插槽作用域|   说明                                   | 
| -----------    |   ------- | -----------------------------  |
| slot-xx        | itemProps |  item 组件具名插槽           | 
| prepend        | - |   items 前置插槽           |
| append         | - |   items 后置插槽            |