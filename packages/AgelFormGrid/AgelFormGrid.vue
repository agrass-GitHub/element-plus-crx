<template>
  <ElRow ref="rowRef" class="agel-form-grid" :gutter="gutter" :justify="justify" :align="align" :tag="tag">
    <slot name="prepend"></slot>
    <ElCol
      v-for="(item, index) in formItems"
      :key="index"
      :span="getSpan(item.span)"
      :push="item.push"
      :pull="item.pull"
      :offset="item.offset"
    >
      <AgelFormItem v-bind="getFormItemProps(item)" />
    </ElCol>
    <slot name="append"></slot>
  </ElRow>
</template>

<script setup lang="ts">
import AgelFormItem, { type AgelFormItemProps } from '../AgelFormItem'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import useFormItems from '../utils/useFormItems'
import type { RowProps } from 'element-plus'

defineOptions({ name: 'AgelFormGrid' })

interface ItemProps extends AgelFormItemProps {
  span?: number
  push?: number
  pull?: number
  offset?: number
}

interface Props extends Partial<RowProps> {
  items: ItemProps[]
  modelProp?: string
  viewModel?: boolean
  scope?: Record<string, any>
  span?: number
  responsive?: boolean
  responsiveMethod?: (width: number) => number
}

const props = withDefaults(defineProps<Props>(), {
  gutter: 18,
  span: 24
})

const { formItems, getFormItemProps, getRef, validate, resetFields } = useFormItems<ItemProps>(props)
const rowRef = ref()
const resizeSpan = ref(24)
const resizeObserver = new ResizeObserver(function () {
  const el = rowRef.value.$el
  if (!el) return
  const width = el.clientWidth - props.gutter
  if (!props.responsive || width == 0) return
  resizeSpan.value = props.responsiveMethod ? props.responsiveMethod(width) : defaultResponsiveMethod(width)
})

function getSpan(span?: number) {
  if (typeof span == 'number') return span
  if (props.responsive) return resizeSpan.value
  return props.span
}

function defaultResponsiveMethod(width: number) {
  let span = 24
  if (width >= 500 && width < 800) span = 12
  if (width >= 800 && width < 1200) span = 8
  if (width >= 1200 && width < 1600) span = 6
  if (width >= 1600) span = 4
  return span
}

onMounted(() => {
  props.responsive && resizeObserver.observe(rowRef.value.$el)
})

onBeforeUnmount(() => {
  props.responsive && resizeObserver.unobserve(rowRef.value.$el)
})

defineExpose({ getRef, validate, resetFields })
</script>

<style>
/** 避免在 内联 form ，grid 显示不正常 */
.el-form--inline .agel-form-grid .el-form-item {
  display: flex;
  margin-right: 0px;
}

.agel-form-grid .el-date-editor.el-input,
.agel-form-grid .el-date-editor.el-input__inner,
.agel-form-grid .el-select,
.agel-form-grid .el-cascader,
.agel-form-grid .el-input-number,
.agel-form-grid .el-autocomplete {
  width: 100%;
}
</style>
