import { defineClientConfig } from '@vuepress/client'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import ElementPlusCrx from "../../packages"
const exampleComponents = (import.meta as any).globEager("../../example/*.vue");

import './style.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    
    app.use(ElementPlus)
    app.use(ElementPlusCrx)
    // icon
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    // 演示
    for (const key in exampleComponents) {
      const component = exampleComponents[key];
      const name = key.replace("../../example/", "").replace(".vue", "");
      app.component(name, component.default);
    }
  },
  setup() {},
  rootComponents: [],
})