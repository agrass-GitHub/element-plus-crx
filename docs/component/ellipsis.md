# Ellipsis 省略文本 <Badge text="v.1.0.8+" />  

一个省略的文本，文字特别多会用得上。

## 基础使用

当文本内容超过容器宽度会显示省略号，当鼠标移入时会通过 `Tooltip` 显示完整内容。

设置 `line-clamp` 指定文本行数，超出省略。

设置 `word-clamp` 指定文本字数，超出省略。



<ClientOnly><ellipsis/></ClientOnly>

::: details 点击查看代码
@[code](@example/ellipsis.vue)
:::

## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| line-clamp | number | 1 | 超出文本行数省略
| word-clamp | number | - | 超出文本字数省略
| title-tip | boolean | false | 使用 title 属性的 tootip
| effect, placement, enterable, offset, popperClass, showArrow, showAfter, hideAfter     | -  |-|  [ELTooltip 属性](https://element-plus.gitee.io/zh-CN/component/layout.html#col-attributes) |



