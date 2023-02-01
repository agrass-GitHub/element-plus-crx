# Upload 上传

快速的数据化配置一个下拉框，常用于搭配数据表单。

依赖组件： `ElUpload` `Elbutton` `ElIcon` `ElMessageBox` `ElMessage`，需先全局注册。

## 基础使用

点击文件即可快速预览。

在上传失败时会提示显示上传失败信息。

根据 `listType` `drag` 属性，会智能显示对应的默认插槽。


<ClientOnly><uploadBase/></ClientOnly>

::: details 点击查看代码
@[code](@example/uploadBase.vue)
:::

## 属性

| 属性 | 类型  | 默认值 | 说明  
| --- | ---   | ---   | --- 
| v-model:modelValue | UploadUserFile[] | - | 上传文件列表
| preview | boolean | true | 是否开启文件预览
| message | boolean | true | 上传错误时候智能提示
| limitHide | boolean | - | 超出上传个数限制隐藏上传按钮
| limitSize | number | - | 上传大小限制，kb
| tip | string | - | 上传提示语
| ...... | ......  | - | [ElUpload 属性](https://element-plus.gitee.io/zh-CN/component/upload.html#%E5%B1%9E%E6%80%A7)


## 方法

| 名称            | 参数  |   说明       | 
| -----------    | ------- | -----------------------------  |
| abort, submit, clearFiles, handleStart, handleRemove    | - |   [ElUpload 方法](https://element-plus.gitee.io/zh-CN/component/upload.html#%E5%A4%96%E9%83%A8%E6%96%B9%E6%B3%95)       |

## 插槽

| 名称            | 插槽作用域 |   说明        | 
| -----------    |   ------- | -----------------------------  |
| trigger, default, tip       | - |  [ElUpload 插槽](https://element-plus.gitee.io/zh-CN/component/upload.html#%E6%8F%92%E6%A7%BD)           | 