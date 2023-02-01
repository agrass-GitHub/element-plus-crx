# FormGrid 珊格表单

快速的数据化配置一个珊格布局表单。

依赖组件： `ElRow` `ElCol` `AgelFormItem` ，需先全局注册。


## 基础使用

grid 的 `span` 属性为表单设置全局的排版，item 的栅格属性优先级最高。

<ClientOnly><formGrid/></ClientOnly>

::: details 点击查看代码
@[code](@example/formGrid.vue)
:::

## 自适应表单

设置 `responsive:true` 开启响应式

根据容器宽度（非窗口宽度）自动调整栅格大小，可通过 `responsiveMethod` 来自定义规则。

<ClientOnly><formGridResponsive/></ClientOnly>

::: details 点击查看代码
@[code](@example/formGridResponsive.vue)
:::

## 联动表单

得益于 vue3 的 进步，数据化配置也可以通过 `computed` 简单快速的实现表单之间的联动。

<ClientOnly><formIGridChain/></ClientOnly>

::: details 点击查看代码
@[code](@example/formIGridChain.vue)
:::

## 动态增减表单

设置 `modelProp` 为表单项提供动态 prop，值得注意是 v-for 的 key 需指定为 index。

设置 `scope` 属性为 `slot` 渲染函数/插槽 提供作用域参数。

<ClientOnly><formGirdDynamic/></ClientOnly>

::: details 点击查看代码
@[code vue{4}](@example/formGirdDynamic.vue)
:::

## 模板插槽

在所有布局表单下，`slot` 属性可额外支持模板插槽，需要指定模板名称。

开启模板插槽，`slot` 属性必须 `slot-` 开头，否则会被识别为组件名称。

<ClientOnly><formGridTemplateSlot/></ClientOnly>

::: details 点击查看代码
@[code vue{5-7,20}](@example/formGridTemplateSlot.vue)
:::


## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| items | ItemProps[] | - | 表单配置项 
| modelProp | string | - | 表单 model 键名 
| scope | object | - | 表单项插槽作用域参数 
| viewModel | boolean | - | 视图模式，只渲染 value
| responsive | boolean | - | 是否开启自适应容器
| responsiveMethod | (width: number) => number | - | 自定义自适应容器方法
| span | number | 24 | 珊格列
| gutter | number | 18 | 珊格间距
| ...... | RowProps | - | [ElRow 属性](https://element-plus.gitee.io/zh-CN/component/layout.html#row-attributes)

### ItemProps

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| ...... | -    | - | [AgelFormItem 属性](/component/formItem.html#属性)
| span, push, pull, offset  | -  |-|  [ElCol 属性](https://element-plus.gitee.io/zh-CN/component/layout.html#col-attributes) |



## 插槽

| 名称            | 插槽作用域|   说明                                   | 
| -----------    |   ------- | -----------------------------  |
| slot-xx        | itemProps |  item 组件具名插槽           | 
| prepend        | - |   items 前置插槽           |
| append         | - |   items 后置插槽            |