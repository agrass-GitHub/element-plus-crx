<template>
  <div class="demo" style="width: 300px;">
    <AgelEllipsis :line-clamp="2">{{ str }}</AgelEllipsis>
  </div>
  <div class="demo" style="width: 300px;">
    <AgelEllipsis :word-clamp="30">{{ str }}</AgelEllipsis>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const str = ref('这是一段非常长非常长非常长非常长非常长非常长的文本，超出的话可以显示省略号')

</script>
