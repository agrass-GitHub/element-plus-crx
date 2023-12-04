<template>
  <ElTable
    :ref="(v) => (formRefs.elTable = v)"
    class="agel-form-table __hidelabel __inlinemsg __fullwidth"
    v-bind="getExcludeAttrs(OmitTablePropKeys, props)"
    :data="tableData"
  >
    <slot name="prepend"></slot>
    <slot>
      <AgelFormColumns :columns="items" />
    </slot>
    <slot name="append"></slot>
    <template #empty>
      <slot name="empty"></slot>
    </template>
    <template #append>
      <slot name="append-row"></slot>
    </template>
  </ElTable>
</template>

<script setup lang="ts">
import { h, resolveComponent, computed, type FunctionalComponent } from 'vue'
import AgelFormItem, { type AgelFormItemProps } from '../AgelFormItem'
import useFormItems from '../utils/useFormItems'
import { getIncludeAttrs, getExcludeAttrs, getFlatArray } from '../utils/utils'
import { getProp } from 'element-plus/es/utils/objects'
import type { TableProps, ElTableColumn } from 'element-plus'
import type { TableEmits } from '../AgelTable/type'

defineOptions({ name: 'AgelFormTableditor' })

type TableColumnProps = Pick<
  InstanceType<typeof ElTableColumn>['$props'],
  'type' | 'index' | 'align' | 'headerAlign' | 'width' | 'minWidth' | 'fixed' | 'showOverflowTooltip'
>

interface ItemProps extends AgelFormItemProps, TableColumnProps {
  children?: ItemProps[]
  hidden?: boolean
}

interface Props extends Omit<TableProps<any>, 'data'>, TableEmits<any> {
  items: ItemProps[]
  modelProp: string
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  fit: true,
  showHeader: true,
  selectOnIndeterminate: true,
  items: () => []
})

const PickColumnPropKeys = [
  'type',
  'index',
  'align',
  'headerAlign',
  'width',
  'minWidth',
  'fixed',
  'showOverflowTooltip'
]

const OmitTablePropKeys = ['items', 'modelProp']

const { formContext, formRefs, getRequiredAsteriskClass, getRef } = useFormItems<ItemProps>(props)

const tableData = computed(() => {
  return formContext.model ? getProp(formContext.model, props.modelProp, []).value : []
})

const AgelFormColumns: FunctionalComponent<{ columns: ItemProps[] }> = ({ columns }) => {
  return columns
    .filter((v) => v.hidden !== true)
    .map((column) => {
      const headerRender = () => {
        const label = typeof column.label === 'function' ? column.label() : h('span', column.label)
        const attrs = {
          class: getRequiredAsteriskClass(column as AgelFormItemProps)
        }
        return h('div', attrs, [label])
      }

      const cellReneder = ({ $index, row }: any) => {
        if (column.type) {
          return null
        }
        if (column.children && column.children.length > 0) {
          return h(AgelFormColumns, { columns: column.children })
        }
        const prop = getFormItemProp(column.prop, $index)
        const scope = { rowData: row, rowIndex: $index }
        const viewModel = typeof column.viewModel == 'boolean' ? column.viewModel : row._view_
        return h(AgelFormItem, { ...scope, ...column, prop, viewModel })
      }

      const columnProps = getIncludeAttrs(PickColumnPropKeys, column)
      const columnSlots = { header: headerRender, default: cellReneder }

      return h(resolveComponent('ElTableColumn') as any, columnProps, columnSlots)
    })
}

function getFormItemProp(prop = '', rowIndex: number) {
  return prop ? `${props.modelProp}.${rowIndex}.${prop}` : ''
}

function validateRow(rowIndex: number, callback?: any) {
  const propKeys = getFlatArray<ItemProps>(props.items)
    .map((v) => getFormItemProp(v.prop, rowIndex))
    .filter((v) => v)
  return formContext.validateField(propKeys, callback)
}

defineExpose({ getRef, validateRow })
</script>
