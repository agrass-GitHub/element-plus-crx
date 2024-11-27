---
title: 更新日志
sidebar: auto
---

## v.1.1.8 （2024-11-27）

### Fix

- **FormDecs:** 修复插槽占位高度的问题 [issues](https://github.com/agrass-GitHub/element-plus-crx/issues/13)
- **Upload:** 修复 limit-hide 无效的问题

### Feat

- **DynamicTags:** 新增 button-text 属性用于自定义按钮文本，添加 margin-bottom 样式

## v.1.1.7 （2024-11-01）

### Fix

- **Select:** 修复内容缩进对齐的问题 [issues](https://github.com/agrass-GitHub/element-plus-crx/issues/12)

## v.1.1.6 （2024-06-20）

### Fix

- **ContextMenu、Menu** ：修复 icon 不支持 base64Img 的报错 [issues](https://github.com/agrass-GitHub/element-plus-crx/issues/7)

## v.1.1.5 （2024-05-17）

### Fix

- **AgelSelect：** change 事件无效
- **AgelRadio：** 兼容废弃语法 label 与新语法 value [参考](https://element-plus.org/zh-CN/component/radio.html)

## v.1.1.4 （2024-05-03）

### Fix

- **ContextMenu：** 移除 useZindex，修复因 element-plus 升级导致的引入报错 [issues](https://github.com/agrass-GitHub/element-plus-crx/issues/4)

## v.1.1.3 （2023-12-21）

### Feat

- **ElementPlusCrx：** 优化导入流程，按需导入时不再需要全局注册依赖组件
- **FormGird、FormItems、FormDecs：** label 渲染函数支持作用域参数
- **FormDecs：** 新增 contentWidth 配置列宽

### Fix

- **Table：** 修复 getRef 无效
- **FormGird、FormItems：** 修复 viewModel 无效的问题

## v.1.1.1 （2023-12-02）

### Fix

- **ContextMenu：** 添加屏幕边缘检测 [issues](https://github.com/agrass-GitHub/element-plus-crx/issues/3)

## v.1.1.0 （2023-07-31）

### feat

- 升级到 vue3.3 版本 （要求的 vue 最低版本为 v3.3）
- 完善了 TypeScript 提示体验

## v.1.0.11 （2023-06-08）

### feat

- **Table：** 新增合并方向可选为 auto
- **Table：** 新增 ElTableColumn 列的全局配置

## v.1.0.10 （2023-04-26）

### patch

- **Table:** 针对 ELTable defaltSort 无效的补丁 [issues](https://github.com/element-plus/element-plus/issues/10077)

### Fix

- **CountTo：** 修复打包时 ts 的错误

## v.1.0.9 （2023-03-15）

### Fix

- **NavTabs：** 修复在 useStorage(tabs) 的情况下，tab loading 不会停止

## v.1.0.8 （2023-03-14）

### feat

- **CountTo：** 新增滚动计数组件
- **Ellipsis：** 新增省略文本组件

## v.1.0.7 （2023-03-10）

### feat

- **MapInput：** 适配 AMap 2.0
- **ContextMenu：** 新增右键菜单组件

### chore

- **Table：** 修复 ts contextmenu 事件的提示错误

## v.1.0.6 （2023-02-09）

### Fix

- **NavTabs：** 修复超出无法滚动的问题，完善 tab 样式竖向对齐
- **AgelMapInput：** 完善经纬度的 prepend 样式
- **AgelFormItem：** 完善 getRef 的逻辑

## v.1.0.4 （2023-02-07）

### feat

- **FormTableitor：** 添加 getRef 方法
- **Table：** 添加 getRef 方法
- **ElementPlusCrx：** 修复全局组件声明无效的问题

## v.1.0.2 （2023-02-02）

### Fix

- **FormGird,FormDesc,FormTableitor：** 修复 form.model 被赋值新对象时获取 value 失效
- **FormDesc,FormTableitor：** 修复在多级 prop下，必填标识未显示
- **FormDesc：** 修复在视图模式下，计算 labelWidth 失效的问题

### feat

- **FormGird,FormDesc：** 添加 getRef, validate, resetFields 方法
- **FormItems：** 添加组件
- **FormItem：** 新增 class 属性

## v.1.0.0 （2023-02-01）

- **ElementPlusCrx：** 发布 v.1.0 版本
