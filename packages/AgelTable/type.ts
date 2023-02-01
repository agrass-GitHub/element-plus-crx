import type { TableProps, ElTableColumn, PaginationProps, RenderRowData, TableColumnCtx, Sort } from "element-plus"
import type { FilterMethods } from "element-plus/es/components/table/src/table-column/defaults"
import type { VNodeChild } from "vue"


type CellEvent<T> = (row: T, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: MouseEvent) => void
type RowEvent<T> = (row: T, column: TableColumnCtx<T>, event: MouseEvent) => void
type HeaderEvent<T> = (column: TableColumnCtx<T>, event?: MouseEvent) => void

type ElColumnProps = Omit<InstanceType<typeof ElTableColumn>["$props"], 'label'>

export type SortParams = Sort & { column: TableColumnCtx<any> }

export type PageProps = { sortProp?: string, sortOrder?: string | null } & Partial<PaginationProps>

export type MergeProps = { keys: string[], direction: string } // 'vertical' | 'horizontal'

export interface ColumnProps extends ElColumnProps {
  label?: string | (() => VNodeChild),
  slot?: string | ((scope: RenderRowData<any>) => VNodeChild),
  hidden?: boolean,
  children?: ColumnProps[],
}

export interface TableEmits<T> {
  onSelect?: (selection: T[], row: T) => void,
  onSelectAll?: (selection: T[]) => void,
  onSelectionChange?: (selection: T[]) => void,
  onCellMouseEnter?: CellEvent<T>,
  onCellMouseLeave?: CellEvent<T>,
  onCellClick?: CellEvent<T>,
  onCellDbClick?: CellEvent<T>,
  onCellContextMenu?: CellEvent<T>,
  onRowClick?: RowEvent<T>,
  onRowContextMenu?: RowEvent<T>,
  onRowDbClick?: RowEvent<T>,
  onHeaderClick?: HeaderEvent<T>,
  onHeaderContextMenu?: HeaderEvent<T>,
  onSortChange?: (params: SortParams) => void,
  onFilterChange?: FilterMethods<T>,
  onCurrentChange?: (currentRow: T, oldCurrentRow: T) => void,
  onHeaderDragend?: (newWidth: number, oldWidth: number, column: TableColumnCtx<T>, event: MouseEvent) => void
  onExpandChange?: (row: T, rowsOrExpand: T[] | boolean) => void,
}


