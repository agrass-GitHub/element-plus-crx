import { useGlobalConfig } from 'element-plus'
import type { PaginationProps, TableProps } from 'element-plus'

export interface ElementPlusCrxConfig {
  AgelTable?: {
    ElTable?: Pick<
      TableProps<any>,
      'border' | 'height' | 'maxHeight' | 'stripe' | 'size' | 'highlightCurrentRow' | 'emptyText' | 'tooltipEffect' | 'tooltipOptions' | 'sumText' | 'indent' | 'scrollbarAlwaysOn' | 'tableLayout' | 'flexible'
    >,
    ElPagination?: Partial<Pick<
      PaginationProps,
      'small' | 'background' | 'layout' | 'pageSizes' | 'popperClass' | 'prevIcon' | 'nextIcon' | 'prevText' | 'nextText' | 'hideOnSinglePage'
    >>
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