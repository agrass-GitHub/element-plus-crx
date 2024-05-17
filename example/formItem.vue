<template>
  <ElForm :model="form.model" label-width="auto" class="demo">
    <AgelFormItems ref="formLayoutRef" :items="form.items"></AgelFormItems>
  </ElForm>
</template>

<script lang="tsx" setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const formLayoutRef = ref()
const form = reactive({
  model: {},
  items: [
    {
      prop: 'name',
      label: 'Activity name',
      required: true
    },
    {
      prop: 'zone',
      label: 'Activity zone',
      slot: 'agel-select',
      attrs: {
        options: [
          { label: 'Zone one', value: 'shanghai' },
          { label: 'Zone two', value: 'beijing' }
        ],
        onChange: (v: string) => {
          ElMessage({
            message: `change ${v}`,
            type: 'success'
          })
        }
      }
    },
    {
      prop: 'date',
      label: 'Activity date',
      slot: 'el-date-picker'
    },
    {
      prop: 'delivery',
      label: 'Instant delivery',
      slot: 'el-switch'
    },
    {
      prop: 'type',
      label: 'Activity type',
      slot: 'agel-checkbox',
      attrs: {
        options: ['Online activities', 'Promotion activities', 'Offline activities', 'Simple brand exposure']
      }
    },
    {
      prop: 'resources',
      label: 'Resources',
      slot: 'agel-radio',
      attrs: { options: ['Sponsor', 'Venue'] }
    },
    {
      prop: 'decs',
      label: 'Activity Form',
      attrs: { type: 'textarea' }
    },
    {
      slot: 'ElButton',
      slots: () => 'Create',
      attrs: {
        type: 'primary',
        onClick: () => {
          formLayoutRef.value?.validate()
          formLayoutRef.value?.getRef('zone').focus()
        }
      }
    }
  ]
})
</script>
