<template>
  <ElTable ref="elTable" class="agel-table" v-loading="loading" :data="data" :span-method="autoMerage"
    :default-sort="defaultSort" @sortChange="sortChange" v-bind="{...ElTableConfig,...$attrs}" style="width: 100%;">
    <slot name="prepend"></slot>
    <slot>
      <AgelTableColumns :columns="columns"></AgelTableColumns>
    </slot>
    <slot name="append"></slot>

    <template #empty>
      <slot name="empty"></slot>
    </template>
    <template #append>
      <slot name="append-row"></slot>
    </template>

  </ElTable>
  <ElPagination v-if="showPagination" layout="->,total,prev, pager, next, sizes"
    @update:current-page="currentPageChange" @update:page-size="pageSizeChange" :disabled="loading"
    v-bind="{ ...ElPaginationConfig, ...page }">
  </ElPagination>
</template>

<script lang='ts'>
export default { name: 'AgelTable', inheritAttrs: false }
</script>

<script setup lang='ts'>
import { h, ref, computed, resolveComponent, useSlots, type FunctionalComponent } from 'vue'
import { getExcludeAttrs } from '../utils/utils'
import useAutoMerge from "./autoMerge"
import useCrxGlobalConfig from "../utils/useCrxGlobalConfig"
import type { TableProps, TableInstance } from "element-plus"
import type { ColumnProps, TableEmits, MergeProps, PageProps, SortParams } from "./type"

interface Props extends Omit<TableProps<any>, 'default-sort'>, TableEmits<any> {
  data: any[],
  columns?: ColumnProps[],
  page?: PageProps,
  merge?: MergeProps,
  loading?: boolean,
  request?: () => void,
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  columns: () => []
})
const emits = defineEmits(['update:page'])
const slots = useSlots()
const elTable = ref<TableInstance>()
const ElTableConfig = useCrxGlobalConfig().AgelTable?.ElTable || {}
const ElPaginationConfig = useCrxGlobalConfig().AgelTable?.ElPagination || {}

const showPagination = computed(() => {
  if (!props.page) return false
  const { currentPage, pageSize, total, pageCount } = props.page
  return typeof currentPage == 'number' && typeof pageSize == 'number' && (typeof total == 'number' || typeof pageCount == 'number')
})

const defaultSort = computed(() => {
  if (!props.page) return
  return {
    prop: props.page.sortProp,
    order: props.page.sortOrder,
  }
})

const autoMerage = props.merge ? useAutoMerge(props) : undefined

const AgelTableColumns: FunctionalComponent<{ columns: ColumnProps[] }> = ({ columns }) => {
  return columns.filter(v => v.hidden !== true).map((column, key) => {
    const extendPropKeys = ['hidden', 'children', 'slot']
    const columnProps = getExcludeAttrs(extendPropKeys, column)
    const columnlots = {} as any
    if (typeof column.label === 'function') {
      columnlots.header = column.label
      columnProps.label = ''
    }
    if (column.children && column.children.length > 0) {
      columnlots.default = () => h(AgelTableColumns as any, { columns: column.children })
    } else if (typeof column.slot === 'function') {
      columnlots.default = column.slot
    } else if (typeof column.slot === 'string' && column.slot.indexOf('slot-') === 0 && slots[column.slot]) {
      columnlots.default = slots[column.slot]
    }
    return h(resolveComponent('ElTableColumn') as any, columnProps, columnlots)
  })
}

function currentPageChange(val: number) {
  emits('update:page', { ...props.page, currentPage: val })
  props.request?.()
}

function pageSizeChange(val: number) {
  emits('update:page', { ...props.page, currentPage: 1, pageSize: val })
  props.request?.()
}

function sortChange({ column, prop, order }: SortParams) {
  if (column.sortable == 'custom') {
    emits('update:page', { ...props.page, currentPage: 1, sortProp: prop, sortOrder: order })
    props.request?.()
  }
}

function getRef() {
  return elTable.value
}

defineExpose({  getRef })
</script>

<style >
.agel-table {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1;
}

.agel-table .el-table__empty-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.agel-table+.el-pagination {
  margin-top: 10px;
}
</style>