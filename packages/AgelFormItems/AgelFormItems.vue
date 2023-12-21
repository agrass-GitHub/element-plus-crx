<template>
  <div class="agel-form-items">
    <AgelFormItem v-for="(item, i) in formItems" v-bind="getFormItemProps(item)" :key="i"></AgelFormItem>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'AgelFormItems' })

import AgelFormItem, { type AgelFormItemProps } from '../AgelFormItem'
import useFormItems from '../utils/useFormItems'

interface Props {
  items: AgelFormItemProps[]
  modelProp?: string
  viewModel?: boolean
  scope?: Record<string, any>
}
const props = withDefaults(defineProps<Props>(), {})

const { formItems, getFormItemProps, getRef, validate, resetFields } = useFormItems(props)

defineExpose({ getRef, validate, resetFields })
</script>
