---
title: 更新日志
sidebar: auto
---

## v.1.1.3 （2023-12-21）

### Feat
- __ElementPlusCrx：__ 优化导入流程，按需导入时不再需要全局注册依赖组件
- __FormGird、FormItems、FormDecs：__ label 渲染函数支持作用域参数
- __FormDecs：__ 新增 contentWidth 配置列宽

### fix
- __Table：__ 修复 getRef 无效
- __FormGird、FormItems：__ 修复 viewModel 无效的问题


## v.1.1.1 （2023-12-02）

### fix
- __ContextMenu：__  添加屏幕边缘检测 [issues/10077](https://github.com/agrass-GitHub/element-plus-crx/issues/3)


## v.1.1.0 （2023-07-31）

### feat

- 升级到 vue3.3 版本 （要求的 vue 最低版本为 v3.3）
- 完善了 TypeScript 提示体验

## v.1.0.11 （2023-06-08）

### feat
- __Table：__ 新增合并方向可选为 auto
- __Table：__ 新增 ElTableColumn 列的全局配置


## v.1.0.10 （2023-04-26）

### patch
- __Table:__ 针对 ELTable defaltSort 无效的补丁 [issues/10077](https://github.com/element-plus/element-plus/issues/10077)

### fix
- __CountTo：__  修复打包时 ts 的错误


## v.1.0.9 （2023-03-15）

### fix
- __NavTabs：__  修复在 useStorage(tabs) 的情况下，tab loading 不会停止

## v.1.0.8 （2023-03-14）

### feat
- __CountTo：__  新增滚动计数组件
- __Ellipsis：__  新增省略文本组件


## v.1.0.7 （2023-03-10）

### feat
- __MapInput：__  适配 AMap 2.0
- __ContextMenu：__  新增右键菜单组件

### chore
- __Table：__  修复 ts contextmenu 事件的提示错误

## v.1.0.6 （2023-02-09）

### fix
- __NavTabs：__  修复超出无法滚动的问题，完善 tab 样式竖向对齐
- __AgelMapInput：__  完善经纬度的 prepend 样式
- __AgelFormItem：__  完善 getRef 的逻辑

## v.1.0.4 （2023-02-07）

### feat
- __FormTableitor：__  添加 getRef 方法
- __Table：__  添加 getRef 方法
- __ElementPlusCrx：__ 修复全局组件声明无效的问题


## v.1.0.2 （2023-02-02）

### fix

- __FormGird,FormDesc,FormTableitor：__  修复 form.model 被赋值新对象时获取 value 失效
- __FormDesc,FormTableitor：__  修复在多级 prop下，必填标识未显示
- __FormDesc：__ 修复在视图模式下，计算 labelWidth 失效的问题


### feat
- __FormGird,FormDesc：__ 添加 getRef, validate, resetFields 方法
- __FormItems：__ 添加组件
- __FormItem：__ 新增 class 属性


## v.1.0.0 （2023-02-01）

- __ElementPlusCrx：__ 发布 v.1.0 版本