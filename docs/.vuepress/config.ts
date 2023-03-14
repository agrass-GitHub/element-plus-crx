import { defineUserConfig, defaultTheme } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { viteBundler } from '@vuepress/bundler-vite'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import vueJsx from '@vitejs/plugin-vue-jsx'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  dest: './distdocs',
  base: '/element-plus-crx/',
  title: 'Element Plus Crx',
  description: '一个基于 ElementPlus 的扩展组件库',
  head: [
    [ 'link', { rel: 'icon', href: 'https://element-plus.org/images/element-plus-logo-small.svg' } ]
  ],
  theme: defaultTheme({
    logo: 'https://element-plus.gitee.io/images/element-plus-logo-small.svg',
    navbar: [
      {
        text: '文档',
        link: '/quickstart.md',
      },
      {
        text: '更新',
        link: '/updatelog.md',
      },
      {
        text: '赞助',
        link: '/sponsor.md',
      },
      {
        text: 'Github',
        children: [
          {
            text: "element-plus-crx",
            link: 'https://github.com/agrass-GitHub/element-plus-crx',
          },
          {
            text: "agel-admin",
            link: 'https://github.com/agrass-GitHub/agel-admin',
          },
        ],
      },
    ],
    sidebarDepth: 1,
    sidebar: [
      {
        text: 'Guide 使用指南',
        children: [
          '/quickstart.md',
          '/language.md',
          '/globalconfig.md',
        ],
      },
      {
        text: 'Form 表单组件',
        children: [
          '/component/formItems.md',
          '/component/formGrid.md',
          '/component/formDesc.md',
          '/component/formTableditor.md',
          '/component/checkbox.md',
          '/component/radio.md',
          '/component/select.md',
          '/component/upload.md',
          '/component/dynamicTags.md',
          '/component/mapInput.md',
        ]
      },
      {
        text: 'Data 数据展示',
        children: [
          '/component/table.md',
          '/component/countTo.md',
          '/component/ellipsis.md',
        ]
      },
      {
        text: 'Navigation 导航',
        children: [
          '/component/menu.md',
          '/component/contextMenu.md',
          '/component/navTabs.md'
        ]
      },
    ]
  }),
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@example/, path.resolve(__dirname, '../../example/')),
    },
  },
  bundler: viteBundler({
    viteOptions: {
      plugins: [
        vueJsx(),
      ],
    },
    vuePluginOptions: {},
  }),
  plugins: [
    backToTopPlugin(),
    nprogressPlugin(),
  ],
})