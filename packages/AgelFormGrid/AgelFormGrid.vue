<template>
  <ElRow ref="rowRef" class="agel-form-grid" v-bind="$attrs" :gutter="gutter">
    <slot name="prepend"></slot>
    <ElCol v-for="(item, index) in formItems" :key="index" v-bind="getIncludeAttrs(ColPropKeys, item)"
      :span="getSpan(item.span)">
      <AgelFormItem v-bind="getFormItemProps(item)" />
    </ElCol>
    <slot name="append"></slot>
  </ElRow>
</template>

<script lang='ts'>
export default { name: 'AgelFormGrid', inheritAttrs: false }
</script>

<script setup lang='ts'>
import AgelFormItem, { type AgelFormItemProps } from "../AgelFormItem"
import { ref, onMounted, onBeforeUnmount } from "vue"
import { getIncludeAttrs } from "../utils/utils"
import useFormItems from "../utils/useFormItems"
import type { ColProps, RowProps } from "element-plus"

const ColPropKeys = ['span', 'push', 'pull', 'offset']
type PickColProps = Partial<Pick<ColProps, 'span' | 'push' | 'pull' | 'offset'>>
type ItemProps = AgelFormItemProps & PickColProps & { display?: boolean }

interface Props extends Partial<RowProps> {
  // 表单配置项
  items: ItemProps[],
  modelProp?: string,
  viewModel?: boolean,
  scope?: Record<string, any>,
  gutter?: number,
  span?: number,
  responsive?: boolean,
  responsiveMethod?: (width: number) => number,
}

const props = withDefaults(defineProps<Props>(), {
  gutter: 18,
  span: 24,
})

const { formItems, getFormItemProps, getRef, validate, resetFields, } = useFormItems<ItemProps>(props)
const rowRef = ref()
const resizeSpan = ref(24)
const resizeObserver = new ResizeObserver(function () {
  const el = rowRef.value.$el
  if (!el) return
  const width = el.clientWidth - props.gutter
  if (!props.responsive || width == 0) return
  resizeSpan.value = props.responsiveMethod ? props.responsiveMethod(width) : responsiveMethod(width)
})

function getSpan(span?: number) {
  if (typeof span == 'number') return span
  if (props.responsive) return resizeSpan.value
  return props.span
}

function responsiveMethod(width: number) {
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

defineExpose({ getRef, validate, resetFields, })
</script>


<style>
/** 避免在 内联 form ，grid 显示不正常 */
.el-form--inline .agel-form-grid .el-form-item {
  display: flex;
  margin-right: 0px
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