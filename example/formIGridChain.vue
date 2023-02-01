<template>
  <ElForm :model="model" label-width="auto" class="demo">
    <AgelFormGrid :items="items"></AgelFormGrid>
  </ElForm>
</template>

<script lang="tsx" setup>
import { reactive, ref, computed } from 'vue'

const model = reactive({
  grade: '很棒'
})

const options = ref<string[]>([])

const items = ref([
  {
    label: '打分',
    prop: 'grade',
    slot: 'agel-radio',
    attrs: {
      options: ['很棒', '很糟糕']
    }
  },
  {
    label: '分数',
    prop: 'number',
    loading: computed(() => options.value.length == 0),
    slot: 'agel-select',
    attrs: {
      options: computed(() => options.value)
    }
  },
  {
    label: '好评',
    prop: 'good',
    hidden: computed(() => model.grade == '很糟糕'),
  },
  {
    label: '差评',
    prop: 'good',
    hidden: computed(() => model.grade == '很棒'),
    attrs: {
      disabled: computed(() => model.grade == '很糟糕'),
    }
  },
  {
    slot: 'ElButton',
    slots: () => '获取分数',
    attrs: {
      type: 'primary',
      onClick: getOption
    },
  }
])


function getOption() {
  // 模拟接口
  options.value = []
  setTimeout(() => {
    options.value = Array.from({ length: 10 }).map((v, i) => (i + 1) + '分')
  }, 2000);
}

getOption()
</script>