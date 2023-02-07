<template>
  <ElForm :model="model" class="demo">
    <AgelFormTableditor ref="tablediorRef" model-prop="list" :items="items" border @selection-change="selectionChange">
    </AgelFormTableditor>
  </ElForm>
</template>

<script setup lang='tsx'>
import { reactive, ref } from 'vue'
import { ElMessage, type TableInstance } from 'element-plus'

const tablediorRef = ref()

const model = reactive({
  list: Array.from({ length: 5 }).map((v, i) => {
    return {
      name: '小王' + (i + 1),
      date: '',
      address: 'No. 189, Grove St, Los Angeles',
      checked: false,
      _view_: false,
    }
  })
})

const items = reactive([
  { label: '#', type: 'selection', width: 50, align: 'center', },
  { label: '#', type: 'index', width: 50, align: 'center', },
  {
    label: '动态表单',
    prop: 'name',
    headerAlign: 'center',
    children: [
      {
        label: '名称',
        prop: 'name',
      },
      {
        label: '日期',
        prop: 'date',
        slot: 'el-date-picker',
        required: true,
        attrs: {
          valueFormat: 'YYYY-MM-DD',
        }
      },
      {
        label: '地址',
        prop: 'address',
        showOverflowTooltip: true,
      },
      {
        label: 'switch',
        prop: 'checked',
        width: 90,
        slot: 'el-switch',
        viewFormat: ({ rowData }: any) => {
          return <el-tag>{rowData.checked ? '已禁用' : '未禁用'}</el-tag>
        }
      },
    ]
  },
  {
    width: 120,
    viewModel: false,
    align: 'center',
    label: () => {
      return (
        <div class='flex-center'>
          <span>操作</span>
          <el-link type="primary" class='ml-1' icon='Plus' onClick={() => addRow()}>
          </el-link>
        </div>
      )
    },
    slot: ({ rowData, rowIndex }: any) => {
      return (
        <div>
          <el-button link type='primary' onClick={() => saveRow(rowIndex,)} >
            {rowData._view_ ? '编辑' : '保存'}
          </el-button>
          <el-divider direction="vertical" />
          <el-button link type='primary' onClick={() => delRow(rowIndex)} >
            删除
          </el-button>
        </div>
      )
    }
  }
])

function saveRow(index: number) {
  tablediorRef.value.validateRow(index).then(() => {
    model.list[index]._view_ = !model.list[index]._view_
  })
}

function delRow(index: number) {
  model.list.splice(index, 1)
}

function addRow() {
  model.list.push({ date: '', name: '小王' + (model.list.length + 1), address: '', checked: false, _view_: false })
}

function selectionChange() {
  const names = tablediorRef.value?.getRef('elTable').getSelectionRows().map((v: any) => v.name).join()
  names.length > 0 && ElMessage.success('选中：' + names)
}
</script>