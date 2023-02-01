<template>
  <div class="demo">
    <ElConfigProvider :locale="language == 'zhCn' ? zhCn : en">
      <ElRadioGroup v-model="language" style="margin:0px 20px 20px 0px">
        <ElRadioButton label="en">英文</ElRadioButton>
        <ElRadioButton label="zhCn">中文</ElRadioButton>
      </ElRadioGroup>

      <AgelUpload :model-value="[]" action="/xx/xx" :limit-size="1"></AgelUpload>
    </ElConfigProvider>
  </div>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { ref } from 'vue'

const language = ref('en')

</script>