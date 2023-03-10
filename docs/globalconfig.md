# 全局配置

该组件的全局配置依附于 `ElConfigProvider` 组件的 `experimental-features` 属性中。

这是非常重要且方便的功能，可以非常轻松地为表格，表格分页，表单组件添加全局配置，比如智能生成 placeholder 属性, 为日期组件智能设置格式化等。

<ClientOnly><globalconfig/></ClientOnly>

@[code](@example/globalconfig.vue)

支持配置类型如下：

@[code{4-18}](../packages//utils/useCrxGlobalConfig.ts)
