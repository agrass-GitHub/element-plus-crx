<template>
  <ElDescriptions v-bind="$attrs" border :direction="direction" :size="size"
    :class="['agel-form-decs __hidelabel __inlinemsg __fullwidth __fixed-clearable ', { 'desc-hide-border': !border }]">
    <slot name="prepend"></slot>
    <ElDescriptionsItem v-for="(item, index) in formItems" :key="index" v-bind="getDescrItem(item)">
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
import { computed, h } from "vue"
import { getIncludeAttrs } from "../utils/utils"
import type { ElDescriptions, ElDescriptionsItem, } from "element-plus"

const DescItemPropKeys = ['span', 'className', 'labelClassName']
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

const { formContext, formItems, getFormItemProps, getRequiredAsteriskClass } = useFormItems<ItemProps>(props)

const direction = computed(() => {
  return formContext?.labelPosition == 'top' ? 'vertical' : 'horizontal'
})

const size = computed(() => {
  return formContext?.size || 'default'
})

const DescItemLabel = function (item: ItemProps) {
  const label = typeof item.label == 'function' ? item.label() : h('span', item.label)
  const attrs = {
    style: getLabelStyle(item),
    class: getRequiredAsteriskClass(item)
  }
  return h('div', attrs, [label])
}


function getLabelStyle(item: ItemProps) {
  let labelWidth = item.labelWidth || formContext?.labelWidth || 'auto'
  let labelPosition = formContext?.labelPosition || 'left'
  if (typeof labelWidth == 'string' && labelWidth.indexOf('px') !== -1) {
    labelWidth = Number(labelWidth.replace('px', ''))
  }
  if (typeof labelWidth == 'number') {
    let labelPadding = 0
    switch (size.value) {
      case 'large':
        labelPadding = 15
        break;
      case 'default':
        labelPadding = 11
        break;

      case 'small':
        labelPadding = 7
        break;
    }
    labelWidth = labelWidth - labelPadding * 2 - (props.border ? 1 : 0) + 'px'
  }

  return {
    width: labelWidth,
    textAlign: labelPosition == 'top' ? 'left' : labelPosition,
    display: 'inline-block',
    whiteSpace: labelWidth == 'auto' ? 'nowrap' : '',
  }
}


function getDescrItem(item: ItemProps) {
  let labelPosition = formContext?.labelPosition
  return { ...getIncludeAttrs(DescItemPropKeys, item), labelAlign: labelPosition == 'right' ? 'right' : '', }
}

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