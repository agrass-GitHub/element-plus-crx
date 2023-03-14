# CountTo 滚动计数 <Badge text="v.1.0.8+" />  

一个轻量级带有动画过渡的计数器。 

## 基础使用

<ClientOnly><countTo/></ClientOnly>

::: details 点击查看代码
@[code](@example/countTo.vue)
:::

## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| from | number | 0 | 动画起始数字
| to   | number | 0 | 动画结束数字
| duration | number  | 2500 | 动画过渡时间
| precision | number | 0 | 精度保留多少小数
| prefix | string | - | 文本前缀
| suffix | string | - | 文本后缀
| autoplay | boolean | true | 是否自动播放
| show-separator | boolean | true | 是否显示分隔符


## 方法

| 名称          | 参数  |   说明                     | 
| -----------   | ------- | -----------------------------  |
| start    | -  | 开始      |
| reset    | -  | 重置      |


该组件源码实现来自 [vue-countTo ](https://github.com/PanJiaChen/vue-countTo) 
