---
title: 更新日志
sidebar: auto
---

## v.1.0.10 （2023-04-26）

### patch
- __AgelTable:__ 针对 ELTable defaltSort 无效的补丁 [issues/10077](https://github.com/element-plus/element-plus/issues/10077)

## v.1.0.9 （2023-03-15）

### fix
- __NavTabs：__  修复在 useStorage(tabs) 的情况下，tab loading 不会停止

## v.1.0.8 （2023-03-14）

### feat
- __CountTo：__  新增滚动计数组件
- __Ellipsis：__  新增滚动计数组件


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


## v.1.0.2（2023-02-02）

### fix

- __FormGird,FormDesc,FormTableitor：__  修复 form.model 被赋值新对象时获取 value 失效
- __FormDesc,FormTableitor：__  修复在多级 prop下，必填标识未显示
- __FormDesc：__ 修复在视图模式下，计算 labelWidth 失效的问题


### feat
- __FormGird,FormDesc：__ 添加 getRef, validate, resetFields 方法
- __FormItems：__ 添加组件
- __FormItem：__ 支持 class 属性


## v.1.0.0 （2023-02-01）

- __ElementPlusCrx：__ 发布 v.1.0 版本