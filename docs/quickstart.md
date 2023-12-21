# 快速开始 [![npm](https://img.shields.io/npm/v/element-plus-crx.svg)](https://www.npmjs.com/package/element-plus-crx)

## 特性

数据配置

- 数据配置表单/表格，极简的思想，完全的数据驱动，拥有绝对的灵活性。

扩展组件

- 更多丰富的扩展组件，在 ElementPlus 没有找到的这里或许会有。

快捷使用

- 适配双语言，黑暗模式，完整的 typescript 提示，更方便的全局配置。

## 安装

1. 依赖于 element-plus。

`npm install element-plus @element-plus/icons-vue -s`

2. 确保你的项目 vue 版本 >= 3.3。

`npm install element-plus-crx -s`

3. 源码为 ts 编写，未做编译打包处理，若你的项目不是 ts 项目，需要额外添加 ts 支持。

`npm install typescript -d`

在 vite.config.js 添加 ts 默认扩展名称。

```js
// vite.config.js
export default defineConfig({
  resolve: {
    extensions: ['.js', '.vue', '.ts'],
  }
})
```

4. 为了事半功倍的开发体验，强烈建议引入 jsx [可选]

`npm install @vitejs/plugin-vue-jsx -d`

```js
// vite.config.js
import vueJsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
  plugins: [
    vueJsx(),
  ]
})
```

## 全局引用

全局引入，省事。

```js
import Vue from "vue";
import ElementPlus from "element-plus";
import ElementPlusCrx from "element-plus-crx";
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

app.use(ElementPlus);
app.use(ElementPlusCrx);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
```

## 按需引用

`ElLoading` 是必须的， 建议其他类似 `ElDatePicker` 等表单组件也全局注册，便于配置表单。

```js
import { ElLoading, /* ...ElDatePicker 等其它全局组件 */ } from 'element-plus'
import { AgelFormGrid, AgelTable } from "element-plus-crx";
import 'element-plus/dist/index.css'

app.component(AgelFormGrid.name, AgelFormGrid);
app.component(AgelTable.name, AgelTable);
app.use(ElLoading)
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
