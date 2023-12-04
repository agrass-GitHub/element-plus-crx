# 快速开始 [![npm](https://img.shields.io/npm/v/element-plus-crx.svg)](https://www.npmjs.com/package/element-plus-crx)

:::tip
组件源码未做打包处理，引用请使用 vue3.3 以上版本 / 确保项目支持 Typescript
:::


## 特性

数据配置

- 数据配置表单/表格，极简的思想，完全的数据驱动，拥有绝对的灵活性。

扩展组件

- 更多丰富的扩展组件，在 ElementPlus 没有找到的这里或许会有。

快捷使用

- 适配双语言，黑暗模式，完整的 typescript 提示，更方便的全局配置。

## 安装

`npm install element-plus-crx -s`

## 全局引用

```js
import Vue from "vue";
import ElementPlus from "element-plus";
import ElementPlusCrx from "element-plus-crx";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

app.use(ElementPlus);
app.use(ElementPlusCrx);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
```

## 按需引用

每个组件有对应依赖的组件，需按照文档全局注册。

```js
import { AgelFormItems, AgelFormGrid, AgelTable } from "element-plus-crx";

app.component(AgelFormItems.name, AgelFormItems);
app.component(AgelFormGrid.name, AgelFormGrid);
app.component(AgelTable.name, AgelTable);
```

## Typescript 支持

如果您使用 Volar，请在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global", "element-plus-crx/global"]
  }
}
```

