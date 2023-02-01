import { computed } from "vue"
import { getFlatArray } from '../utils/utils'

export default function (props: any) {
  const propKeys = props.merge.keys || []

  const mergeArr = computed(() => {
    return getFlatArray(props.columns)
      .map((v: any, index) => {
        return { name: v.prop, index: index, }
      })
      .filter((v: any) => props.merge.keys.includes(v.name))
  })

  const mergeData = computed(() => {
    // 遍历表格中需要合并的所有单元格
    const tableData = props.data
    const direction = props.merge.direction || 'vertical'
    const mergeColumns = mergeArr.value
    const mergeData: { [k: string]: [number, number] } = {}

    if (mergeColumns.length > 0 && tableData.length > 0) {
      for (let i = 0; i < tableData.length; i++) {
        for (let j = 0; j < mergeColumns.length; j++) {
          // 初始化行、列坐标信息
          let rowIndex = 1
          let columnIndex = 1

          if (direction === 'vertical') {
            // 比较纵坐标上方的第一个元素
            if (i > 0 && tableData[i][mergeColumns[j]['name']] === tableData[i - 1][mergeColumns[j]['name']]) {
              rowIndex = 0
            }
            // 比较纵坐标下方元素
            if (rowIndex > 0) {
              rowIndex = calculateRowIndex(tableData, i, i + 1, 1, mergeColumns[j]['name'])
            }
          }

          if (direction === 'horizontal') {
            // 比较横坐标左方的第一个元素
            if (j > 0 && tableData[i][mergeColumns[j]['name']] === tableData[i][mergeColumns[j - 1]['name']]) {
              columnIndex = 0
            }
            // 比较横坐标右方元素
            if (columnIndex > 0) {
              columnIndex = calculateColumnIndex(tableData[i], j, j + 1, 1, mergeColumns.length)
            }
          }

          const key = mergeColumns[j]['index'] + '_' + i
          mergeData[key] = [rowIndex, columnIndex]
        }
      }
    }
    return mergeData
  })

  function calculateColumnIndex(data: any, index: number, nextIndex: number, count: number, maxLength: number): number {
    if (nextIndex < maxLength && data[propKeys[index]] === data[propKeys[nextIndex]]) {
      return calculateColumnIndex(data, index, ++nextIndex, ++count, maxLength)
    }
    return count
  }

  function calculateRowIndex(data: any, index: number, nextIndex: number, count: number, name: string): number {
    if (nextIndex < data.length && data[index][name] === data[nextIndex][name]) {
      return calculateRowIndex(data, index, ++nextIndex, ++count, name)
    }
    return count
  }

  function spanMethod({ rowIndex, columnIndex }: { rowIndex: number, columnIndex: number }) {
    return mergeData.value[columnIndex + '_' + rowIndex]
  }
  return spanMethod
}
