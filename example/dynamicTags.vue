<template>
  <div class="demo">
    <AgelDynamicTags v-model="value" :custom-tag-prop="customTagProp" button-text="+ 创建"></AgelDynamicTags>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(['不可关闭', '自定义样式', '标签1', '标签2'])

function customTagProp(tag: string, index: number) {
  if (index == 0) {
    return { closable: false }
  }
  if (index == 1) {
    return { type: 'success', effect: 'plain' }
  }
}
</script>

<style scoped></style>
