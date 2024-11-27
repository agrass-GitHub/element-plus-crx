<template>
  <ElDescriptions
    border
    :title="title"
    :extra="extra"
    :column="column"
    :direction="direction"
    :size="size"
    :id="styleId"
    :class="['agel-form-decs __hidelabel __inlinemsg __fullwidth __fixed-clearable ', { 'desc-hide-border': !border }]"
  >
    <slot name="prepend"></slot>
    <ElDescriptionsItem v-for="(item, index) in formItems" :key="index" v-bind="getDescrItem(item)">
      <template #label>
        <DescItemLabel v-bind="item"></DescItemLabel>
      </template>
      <AgelFormItem v-bind="getFormItemProps(item)" label-width="0px" />
    </ElDescriptionsItem>
    <slot name="append"></slot>

    <template #extra v-if="$slots.extra">
      <slot name="extra"></slot>
    </template>
    <template #title v-if="$slots.title">
      <slot name="title"></slot>
    </template>
  </ElDescriptions>
</template>

<script setup lang="ts">
defineOptions({ name: 'AgelFormDesc' })

import { computed, h, onBeforeUnmount, watchEffect } from 'vue'
import { ElDescriptions, ElDescriptionsItem } from 'element-plus'
import AgelFormItem, { type AgelFormItemProps } from '../AgelFormItem'
import useFormItems from '../utils/useFormItems'
import { dynamicStyleRule, guid } from '../utils/utils'

interface ItemProps extends AgelFormItemProps {
  span?: number
  contentWidth?: string | number
  className?: string
  labelClassName?: string
}

interface Props {
  labelWidth?: string | number
  contentWidth?: string | number
  items: ItemProps[]
  modelProp?: string
  scope?: { [k: string]: any }
  viewModel?: boolean
  border?: boolean
  title?: string
  extra?: string
  column?: number
}

const props = withDefaults(defineProps<Props>(), {
  border: true
})

const styleId = 'decs-' + guid()

const { formContext, formItems, getFormItemProps, getRequiredAsteriskClass, getRef, validate, resetFields } =
  useFormItems<ItemProps>(props)

const direction = computed(() => {
  return formContext?.labelPosition == 'top' ? 'vertical' : 'horizontal'
})

const size = computed(() => {
  return formContext?.size || 'default'
})

const DescItemLabel = function (item: ItemProps) {
  const label = typeof item.label == 'function' ? item.label() : h('span', item.label)
  const attrs = {
    class: getRequiredAsteriskClass(item)
  }
  return h('div', attrs, [label])
}

function getLabelWidth(item: ItemProps) {
  let labelW = item.labelWidth || props.labelWidth || formContext?.labelWidth || 'auto'
  let contentW = item.contentWidth || props.contentWidth || 'auto'
  let labelWidth = typeof labelW === 'number' ? labelW + 'px' : labelW
  let contentWidth = typeof contentW === 'number' ? contentW + 'px' : contentW
  let labelClassName = '__label-width-' + labelWidth
  return { labelClassName, labelWidth, contentWidth }
}

function getDescrItem(item: ItemProps) {
  let labelPosition = formContext?.labelPosition
  return {
    span: item.span,
    class: item.className,
    labelAlign: labelPosition == 'right' ? 'right' : 'left',
    labelClassName: getLabelWidth(item).labelClassName + ' ' + (item.labelClassName || '')
  }
}

function getLabelStyleRule() {
  let styleRules = ''
  let classNames: (string | number)[] = []
  formItems.value.forEach((item) => {
    let { labelClassName, labelWidth, contentWidth } = getLabelWidth(item)
    if (!classNames.includes(labelClassName)) {
      classNames.push(labelClassName)
      styleRules += `
        #${styleId} .${labelClassName} {
          width:${labelWidth} !important; 
        }  
        #${styleId} .${labelClassName}+td{
          min-width:${contentWidth};  
        }  
        `
    }
  })
  return styleRules
}

watchEffect(() => {
  dynamicStyleRule(styleId, getLabelStyleRule())
})

onBeforeUnmount(() => {
  dynamicStyleRule(styleId, null)
})

defineExpose({ getRef, validate, resetFields })
</script>

<style>
/** 兼容没有 border 样式 */
.desc-hide-border .el-descriptions__label.el-descriptions__cell.is-bordered-label {
  background: inherit;
}

.desc-hide-border .el-descriptions__body .el-descriptions__table.is-bordered .el-descriptions__cell {
  border: 0px;
}
</style>
