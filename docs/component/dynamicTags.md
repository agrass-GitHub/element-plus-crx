# dynamicTags 动态编辑标签

一个可添加删除的动态编辑标签，常用于搭配表单。

依赖组件： `ElTag` `ElInput` `ElButton`，需先全局注册。

## 基础使用

<ClientOnly><dynamicTags/></ClientOnly>

::: details 点击查看代码
@[code](@example/dynamicTags.vue)
:::

## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| v-model:modelValue |  string[] | - | 标签列表
| disabled     | boolean         | false  | 是否禁用                  |  
| createable   | boolean         | true   | 是否可创建标签                |  
| closable     | boolean         | true   | 是否可关闭标签     |
| repeatable   | boolean         | false  | 是否可创建重复签                |  
| customTagProp | (tag: string, index: number) => TagProps |  -    | 自定义每个标签的 prop
| validateEvent   | boolean     | true  | 是否触发表单验证                | 
| type, hit, color, effect, round   | -  | - | [ElTag 属性](https://element-plus.gitee.io/zh-CN/component/tag.html#tag-%E5%B1%9E%E6%80%A7)
