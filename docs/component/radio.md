# Radio 单选框组

快速的数据化配置一个单选框组，常用于搭配数据表单。

## 基础使用

<ClientOnly><radioBase/></ClientOnly>

::: details 点击查看代码
@[code](@example/radioBase.vue)
:::

## 属性

| 属性    | 类型                           | 默认值 | 说明                                                                                                    |
| ------- | ------------------------------ | ------ | ------------------------------------------------------------------------------------------------------- |
| options | RadioProps[] \| string[]       | -      | radio 配置                                                                                              |
| props   | {label: string, value: string} | -      | RadioProps 配置别名                                                                                     |
| button  | boolean                        | -      | 按钮样式                                                                                                |
| border  | boolean                        | -      | 边框样式                                                                                                |
| ......  | -                              | -      | [ElRadioGroup 属性](https://element-plus.org/zh-CN/component/radio.html#radio-group-%E5%B1%9E%E6%80%A7) |

### RadioProps

| 属性     | 类型                        | 默认值 | 说明     |
| -------- | --------------------------- | ------ | -------- |
| label    | string                      | -      | 标签     |
| value    | string \| number \| boolean | -      | 选中值   |
| disabled | boolean                     | -      | 是否禁用 |

## 插槽

| 名称    | 插槽作用域   | 说明       |
| ------- | ------------ | ---------- |
| default | {item,index} | 自定义模板 |
