<template>
  <ElDescriptions v-bind="$attrs" border :direction="direction" :size="size" :id="styleId"
    :class="['agel-form-decs __hidelabel __inlinemsg __fullwidth __fixed-clearable ', { 'desc-hide-border': !border }]">
    <slot name="prepend"></slot>
    <ElDescriptionsItem v-for="(item, index) in formItems" :key="index" v-bind="getDescrItem(item, index)">
      <template #label>
        <DescItemLabel v-bind="item"></DescItemLabel>
      </template>
      <AgelFormItem v-bind="getFormItemProps(item)" label-width="0px" />
    </ElDescriptionsItem>
    <slot name="append"></slot>

    <template #extra>
      <slot name="extra"></slot>
    </template>
    <template #title>
      <slot name="title"></slot>
    </template>
  </ElDescriptions>
</template>

<script lang='ts'>
export default { name: 'AgelFormDesc', inheritAttrs: false }
</script>

<script setup lang='ts'>
import AgelFormItem, { type AgelFormItemProps } from "../AgelFormItem"
import useFormItems from "../utils/useFormItems"
import { computed, h, onBeforeUnmount, watchEffect } from "vue"
import { dynamicStyleRule, guid } from "../utils/utils"
import type { ElDescriptions, ElDescriptionsItem, } from "element-plus"

type DescItemProps = Pick<InstanceType<typeof ElDescriptionsItem>["$props"], 'span' | 'className' | 'labelClassName'>
type ItemProps = AgelFormItemProps & DescItemProps
type DescProps = Omit<InstanceType<typeof ElDescriptions>["$props"], 'column' | 'title' | 'extra'>

interface Props extends Partial<DescProps> {
  items: ItemProps[],
  modelProp?: string,
  scope?: { [k: string]: any },
  viewModel?: boolean,
  border?: boolean, // 是否显示边框
}

const props = withDefaults(defineProps<Props>(), {
  border: true
})

const styleId = 'decs-' + guid()

const { formContext, formItems, getFormItemProps, getRequiredAsteriskClass, getRef, validate, resetFields, } = useFormItems<ItemProps>(props)

const direction = computed(() => {
  return formContext?.labelPosition == 'top' ? 'vertical' : 'horizontal'
})

const size = computed(() => {
  return formContext?.size || 'default'
})

const DescItemLabel = function (item: ItemProps) {
  const label = typeof item.label == 'function' ? item.label() : h('span', item.label)
  const attrs = {
    class: getRequiredAsteriskClass(item),
  }
  return h('div', attrs, [label])
}

function getLabelWidth(item: ItemProps) {
  let width = item.labelWidth || formContext?.labelWidth || 'auto'
  let labelWidth = typeof width === 'number' ? width + 'px' : width
  let labelClassName = '__label-width-' + labelWidth
  return { labelClassName, labelWidth }
}

function getDescrItem(item: ItemProps, i: number) {
  let labelPosition = formContext?.labelPosition
  return {
    span: item.span,
    class: item.className,
    labelAlign: labelPosition == 'right' ? 'right' : 'left',
    labelClassName: getLabelWidth(item).labelClassName + ' ' + (item.labelClassName || '')
  }
}

function getLabelStyleRule() {
  let styleRules = ""
  let classNames: (string | number)[] = []
  formItems.value.forEach((item, i) => {
    let { labelClassName, labelWidth } = getLabelWidth(item)
    if (!classNames.includes(labelClassName)) {
      classNames.push(labelClassName)
      styleRules += `
        #${styleId} .${labelClassName} {
          width:${labelWidth} 
        }  `
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

defineExpose({ getRef, validate, resetFields, })
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