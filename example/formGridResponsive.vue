<template>
  <div class="demo">
    <ElSlider v-model="width" :step="50" show-stops :min="400" :max="1600" :format-tooltip="(v) => `容器宽度：${v}px`">
    </ElSlider>
    <div style="overflow: auto;">
      <ElForm label-width="auto" :model="form.model" :style="{ width: width + 'px' }" class="demo" >
        <AgelFormGrid :items="form.items" responsive> </AgelFormGrid>
      </ElForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const width = ref(600)
const form = reactive({
  model: {},
  items: [
    { label: '珊格0', prop: 'name0', span: 24, },
    ...Array.from({ length: 12 }).map((v, i) => {
      return { label: '珊格珊格', prop: 'name' + String(i + 1), }
    })
  ]
})
</script>

