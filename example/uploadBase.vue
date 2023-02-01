<template>
  <div class="demo">
    <p><b>默认样式</b></p>
    <AgelUpload v-model="value" action="/xx/upload" tip="最大只能上传1kb" :limit-size="1"> </AgelUpload>
    <p><b>拖拽样式</b></p>
    <AgelUpload v-model="value2" action="/xx/upload" drag> </AgelUpload>
    <p><b>列表缩略图样式</b></p>
    <AgelUpload v-model="value2" action="/xx/upload" list-type="picture"> </AgelUpload>
    <p><b>照片墙样式</b></p>
    <AgelUpload v-model="value2" action="/xx/upload" list-type="picture-card" :limit="2" limit-hide> </AgelUpload>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const value = ref([
  {
    name: "这是一个图片文件.jpeg",
    url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
  },
  {
    name: "这是一个视频文件.mp4",
    url: "https://www.runoob.com/try/demo_source/movie.mp4",
  },
  {
    name: "这是一个音频文件.mp3",
    url: "https://www.runoob.com/try/demo_source/horse.mp3",
  },
  {
    name: "这是一个docx文件.docx",
    url: "https://view.xdocin.com/doc/preview.docx",
  },
])

const value2 = ref([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])
</script>
