<template>
  <div class="agel-table agel-table-resize">
    <ElTable
      class="agel-table-resize"
      ref="elTableRef"
      v-loading="loading"
      v-bind="elTablePorps"
      :span-method="spanMethod"
      :default-sort="defaultSort"
      @sortChange="sortChange"
    >
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
    <ElPagination
      v-if="showPagination"
      layout="->,total,prev, pager, next, sizes"
      :disabled="loading"
      v-bind="elPaginationProps"
      @update:current-page="currentPageChange"
      @update:page-size="pageSizeChange"
    >
    </ElPagination>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'AgelTable' })

import { h, ref, computed, useSlots, nextTick, watch, type FunctionalComponent } from 'vue'
import { ElTable, ElTableColumn, ElPagination, type TableProps, type TableInstance, type Sort } from 'element-plus'
import { getExcludeAttrs, getFlatArray } from '../utils/utils'
import useAutoMerge from './autoMerge'
import useCrxGlobalConfig from '../utils/useCrxGlobalConfig'
import type { ColumnProps, TableEmits, MergeProps, PageProps, SortParams } from './type'

interface Props extends Omit<TableProps<any>, 'default-sort'>, TableEmits<any> {
  columns?: ColumnProps[]
  page?: PageProps
  merge?: MergeProps
  loading?: boolean
  request?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  fit: true,
  showHeader: true,
  selectOnIndeterminate: true,
  data: () => [],
  columns: () => []
})

const emits = defineEmits(['update:page'])
const slots = useSlots()

const elTableConfig = useCrxGlobalConfig().AgelTable?.ElTable || {}
const elTableColumnConfig = useCrxGlobalConfig().AgelTable?.ElTableColumn || {}
const elPaginationConfig = useCrxGlobalConfig().AgelTable?.ElPagination || {}
const elTableRef = ref<TableInstance>()
const elTablePorps = computed(() => {
  const omitColumnPropKeys = ['columns', 'page', 'merge', 'loading', 'request']
  return {
    ...elTableConfig,
    ...getExcludeAttrs(omitColumnPropKeys, props)
  }
})
const elPaginationProps = computed(() => {
  return { ...elPaginationConfig, ...props.page }
})

const showPagination = computed(() => {
  if (!props.page) return false
  const { currentPage, pageSize, total, pageCount } = props.page
  return (
    typeof currentPage == 'number' &&
    typeof pageSize == 'number' &&
    (typeof total == 'number' || typeof pageCount == 'number')
  )
})

const defaultSort = computed(() => {
  if (!props.page) return
  return {
    prop: props.page.sortProp,
    order: props.page.sortOrder
  } as Sort
})

const spanMethod = props.merge ? useAutoMerge(props) : props.spanMethod

const AgelTableColumns: FunctionalComponent<{ columns: ColumnProps[] }> = ({ columns }) => {
  return columns
    .filter((v) => v.hidden !== true)
    .map((column) => {
      const extendPropKeys = ['hidden', 'children', 'slot']
      const columnProps = {
        ...elTableColumnConfig,
        ...getExcludeAttrs(extendPropKeys, column)
      }
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
      return h(ElTableColumn, columnProps, columnlots)
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
  if (typeof column.sortable === 'string') {
    emits('update:page', {
      ...props.page,
      currentPage: 1,
      sortProp: prop,
      sortOrder: order
    })
    props.request?.()
  }
}

function getRef() {
  return elTableRef.value
}

function sortTable() {
  nextTick(() => {
    if (elTableRef.value && props.data.length > 1) {
      const prop = defaultSort.value?.prop
      const order = defaultSort.value?.order
      const sortColumn = getFlatArray<ColumnProps>(props.columns).find((v) => v.prop === prop)
      if (prop && order && typeof sortColumn?.sortable === 'boolean') {
        elTableRef.value.sort(prop, order)
      }
    }
  })
}

// patch: invalid default-srot
// https://github.com/element-plus/element-plus/issues/10077
watch(() => props.data, sortTable)

defineExpose({ getRef })
</script>

<style>
.agel-table-resize {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.agel-table .el-table__empty-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.agel-table + .el-pagination {
  margin-top: 10px;
}
</style>
