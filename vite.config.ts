import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: 'packages/index.ts', // 你的入口文件路径
      name: 'ElementPlusCrx', // 你的库名称
      formats: ['es'],
    },
    rollupOptions: {
      // 确保外部化处理那些不应该被打包的依赖
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  }
})