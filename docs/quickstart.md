
# 快速开始


## 介绍

[![npm](https://img.shields.io/npm/v/element-plus-crx.svg)](https://www.npmjs.com/package/element-plus-crx)

- Vue 3 Composition AP
- TypeScript 编写

一个基于 vue3 + element plus 的扩展组件库，提供数据配置表单，表格，菜单等扩展组件。

极简的思想，完全的数据驱动，拥有绝对的灵活性，内置双语言，完整的 typescript 提示，方便的全局配置，帮助你快速开发！！up! up! up!

## 安装

`npm install element-plus-crx -s` 


## 全局引用

```js
import Vue from 'vue'
import ElementPlus from 'element-plus'
import ElementPlusCrx from 'element-plus-crx'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

app.use(ElementPlus)
app.use(ElementPlusCrx)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```

## 按需引用

每个组件有对应依赖的组件，需按照文档全局注册。

```js
import { AgelFormItems, AgelFormGrid, AgelTable } from 'element-plus-crx'

app.component(AgelFormItems.name, AgelFormItems)
app.component(AgelFormGrid.name, AgelFormGrid)
app.component(AgelTable.name, AgelTable)
```

完整组件列表如下：

```js
  const components = [
    AgelFormItems,
    AgelFormGrid,
    AgelFormDesc,
    AgelFormTableditor,
    AgelCheckbox,
    AgelRadio,
    AgelSelect,
    AgelUpload,
    AgelDynamicTags,
    AgelMapInput,
    AgelTable,
    AgelMenu,
    AgelNavTabs,
  ]
```
## Typescript 支持

如果您使用 Volar，请在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。

```json
// tsconfig.json
{
  "compilerOptions": {
   // ...
    "types": ["element-plus/global","element-plus-crx/global"],
  },
}

```
:::tip
组件源码是用 Typescript 编写，未做打包处理，如果你用的不是官方 vite 脚手架创建的vue3 项目，则需要考虑添加 typescript 支持。
:::
