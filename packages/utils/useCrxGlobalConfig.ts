import { useGlobalConfig } from 'element-plus'
import type { PaginationProps, TableProps, ElTableColumn } from 'element-plus'
type ElTableColumnProps = InstanceType<typeof ElTableColumn>["$props"]

export interface ElementPlusCrxConfig {
  AgelTable?: {
    ElTable?: Partial<TableProps<any>>,
    ElTableColumn?: Partial<ElTableColumnProps>,
    ElPagination?: Partial<PaginationProps>,
  },
  AgelFormItem?: {
    [ComponentName: string]: (ComponentProps: any) => { [ComponentProp: string]: any }
  }
}

export function useCrxGlobalConfig(): ElementPlusCrxConfig {
  const config = useGlobalConfig().value as any
  if (config && config.experimentalFeatures && config.experimentalFeatures.ElementPlusCrx) {
    return config.experimentalFeatures.ElementPlusCrx
  }

  return {
    AgelFormItem: {},
    AgelTable: {}
  }
}

export default useCrxGlobalConfig