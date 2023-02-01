<template>
  <div class="demo">
    <ElRow type="flex" style="margin-bottom:10px;">
      <ElCol :span="4">经纬度地址：</ElCol>
      <AgelMapInput v-model="lnglat" editable></AgelMapInput>
    </ElRow>
    <ElRow type="flex">
      <ElCol :span="4">纯文本地址：</ElCol>
      <AgelMapInput v-model="address"></AgelMapInput>
    </ElRow>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const lnglat = ref(["重庆市洪崖洞民俗风貌区", 106.579125, 29.562283])
const address = ref('重庆市洪崖洞民俗风貌区')
</script>

<style scoped>

</style>