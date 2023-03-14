<template>
  <div class="demo">
    <AgelCountTo :from="10" :to="6666.66" :precision="2" suffix="元" ref="count" style="font-size: 30px;"></AgelCountTo>
    <div style="margin-top: 20px;">
      <ElButton @click="() => count.start()" size="small">开始</ElButton>
      <ElButton @click="() => count.reset()" size="small">重置</ElButton>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const count = ref()
</script>

<style scoped></style>