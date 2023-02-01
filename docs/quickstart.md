# 快速开始

## 安装

`npm install element-plus-crx -s` 


## 全局引用

```js
import Vue from 'vue'
import ElementPlus from 'element-plus'
import ElementPlusCrx from 'element-plus-crx'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

app.use(ElementUI)
app.use(ElementPlusCrx)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```

## 按需引用

每个组件有对应依赖的组件，需按照文档全局注册。

```js
import { AgelFormItem, AgelFormGrid, AgelTable } from 'element-plus-crx'

app.component(AgelFormItem.name, AgelFormItem)
app.component(AgelFormGrid.name, AgelFormGrid)
app.component(AgelTable.name, AgelTable)
```

完整组件列表如下：

```js
  const components = [
    AgelFormItem,
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
    AgelIcon,
  ]
```
### Typescript 支持

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
组件源码是用 Typescript 编写，如果你用的不是官方 vite 脚手架创建的vue3 项目，则需要考虑添加 typescript 支持。
:::
