# FormItem 表单项

快速的数据化配置一个表单。

依赖组件：`ElFormItem` `ElInput`，依赖指令：`v-loading`，需先全局注册。


## 典型表单

使用内置数据化的表单项组件比如 `agel-select`、`agel-radio`、`agel-checkbox`等，可快速完成一个包含各种输入表单项的基础表单。

属性 `slot` 指定要渲染的组件或组件名称

属性 `attrs` 为其组件提供属性支持，使用驼峰命名法。

属性 `required` 将自动生成由 label 组成的必填规则。


<ClientOnly><formItem/></ClientOnly>

::: details 点击查看代码
@[code](@example/formItem.vue)
:::

## 插槽表单

属性 `label`  `slot` 可以为一个渲染函数，使用 `jsx` 大幅提高体验。

属性 `slots` 可以实现表单项组件的子插槽的渲染。

<ClientOnly><formItemSlot/></ClientOnly>

::: details 点击查看代码
@[code](@example/formItemSlot.vue)
:::


## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| prop | string | - | model 键名，支持 'obj.xx.xx' 
| label | string \| RenderFunction | - | 标签文本 
| required | boolean | - | 自动生成必填规则
| slot | string \| Component \| RenderFunction  | ElInput | 表单项组件
| slots | Slots ｜ RenderFunction | - | 表单项组件的插槽
| attrs | object | - | 表单项组件的属性
| viewModel | boolean | - | 视图模式，只渲染 value
| viewFormat | RenderFunction | - | 视图模式的格式化工具
| vmodel | '.trim' \| '.number' | - | v-model 修饰符
| loading | boolean | - | 是否显示加载
| hidden | boolean | true | 是否显示
| labelWidth, rules, error, showMessage,  inlineMessage  |  | ... |  [ElFormIten 属性](https://element-plus.gitee.io/zh-CN/component/layout.html#col-attributes)|


## 方法

| 名称            | 参数  |   说明                                   | 
| -----------    | ------- | -----------------------------  |
| resetField    | -  |   继承自 ELFormItem        |
| clearValidate    | -  | 继承自 ELFormItem       |

## 插槽

| 插槽名  | 插槽作用域   | 说明  
| ---    | ---   | ---  
| label |  -  | 标签位置显示的内容
| default | itemProps | 表单的内容
| error | {error} | 验证错误信息的显示内容