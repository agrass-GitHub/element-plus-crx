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
  description: '一个基于 element plus 的扩展组件库',
  theme: defaultTheme({
    navbar: [
      {
        text: '文档',
        link: '/quickstart.md',
      },
      {
        text: '更新日志',
        link: '/updaelog.md',
      },
      {
        text: 'Github',
        link: 'https://github.com/agrass-GitHub/element-plus-crx',
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
          '/component/formItem.md',
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
        ]
      },
      {
        text: 'Navigation 导航',
        children: [
          '/component/menu.md',
          '/component/navTabs.md'
        ]
      },
      // '/component/table.md',

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