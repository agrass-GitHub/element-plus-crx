<template>
  <AgelFormItem v-for="item, i in formItems" v-bind="getFormItemProps(item)" :key="i"></AgelFormItem>
</template>

<script lang='ts'>
export default { name: 'AgelFormItems', inheritAttrs: false }
</script>

<script setup lang='ts'>
import AgelFormItem, { type AgelFormItemProps } from "../AgelFormItem"
import useFormItems from "../utils/useFormItems"

interface Props {
  items: AgelFormItemProps[],
  modelProp?: string,
  viewModel?: boolean,
  scope?: Record<string, any>,
}
const props = withDefaults(defineProps<Props>(), {})

const { formItems, getFormItemProps, getRef, validate, resetFields, } = useFormItems(props)

defineExpose({ getRef, validate, resetFields, })
</script>