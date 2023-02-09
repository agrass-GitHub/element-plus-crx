<template>
  <div class="agel-map-input">
    <ElInput :model-value="proxyValue" :prefixIcon="prefixIcon" v-bind="$attrs" @clear="clear" @click.stop="loadDialog">
      <template v-slot:prefix>
        <slot name="prefix"></slot>
      </template>
      <template v-slot:suffix>
        <slot name="suffix"></slot>
      </template>
      <template v-slot:prepend v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </template>
      <template v-slot:append v-if="$slots.append">
        <slot name="append"></slot>
      </template>
    </ElInput>
    <!-- 地图选择器 -->
    <ElDialog v-if="dialog" width="800px" :title="locale.title" v-model="open" append-to-body
      class="agel-map-input-dialog" :close-on-press-escape="false" @opened="loadMapInstance" @closed="dialogClosed">
      <div class="ag-dialog-body">
        <div class="addr-row">
          <div class="addr-label">{{ locale.address }}</div>
          <ElInput v-model="address" :readonly="!editable">
            <template #append  v-if="Array.isArray(modelValue)">
              <span>
                {{ lnglat? lnglat.lng + ' , ' + lnglat.lat: locale.nolnglat }}
              </span>
            </template>
          </ElInput>
          <div v-if="error" class="addr-error">{{ error }}</div>
        </div>
        <div class="addr-row">
          <div class="addr-label">{{ locale.keyword }}</div>
          <ElAutocomplete style="width:100%" v-model="search" popper-class="agel-map-input-popper"
            :fetch-suggestions="autocompleteFetch" :placeholder="locale.keywordPlaceholder" value-key="name" clearable
            @select="autocompleteSelected" @clear="drawMarker">
            <template #default="{ item }">
              <span><i :class="item.location ? 'el-icon-location-information' : 'el-icon-search'"></i></span>
              <span class="name">{{ item.name }}</span>
              <span class="addr">{{ item.district + item.address }}</span>
            </template>
          </ElAutocomplete>
        </div>
        <div class="agel-map-box" v-loading="loading" style="width:100%;height:400px;position:relative">
          <div :id="'map-' + map.id" style="width:100%;height:100%"></div>
          <div :id="'panel-' + map.id" class="agel-map-panel"></div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <ElButton type="primary" @click="confrim">{{ locale.confrim }}</ElButton>
        </span>
      </template>
    </ElDialog>
  </div>
</template>

<script lang='ts'>
export default { name: 'AgelMapInput', inheritAttrs: false }
</script>

<script setup lang='ts'>
import type { InputProps, } from "element-plus"
import { ref, computed, nextTick } from "vue"
import useLocale from "../utils/useLocale"

type mapInputProps = Partial<Pick<InputProps, 'placeholder' | 'disabled' | 'readonly' | 'clearable' | 'suffixIcon' | 'size' | 'validateEvent'>>

type resloveAMap = (AMap: any) => void
interface Props extends mapInputProps {
  modelValue: string | (string | number)[],
  editable?: boolean,
  keywordSearch?: boolean,
  destroyDialogOnClose?: boolean,
  AMap?: (reslove: resloveAMap, plugins: string[]) => void,
  prefixIcon?: InputProps['prefixIcon'],
}

const props = withDefaults(defineProps<Props>(), {
  prefixIcon: 'MapLocation',
  keywordSearch: true,
  AMap: (reslove: resloveAMap) => reslove((window as any).AMap)
})

const emits = defineEmits(['update:modelValue'])

const error = ref('')
const dialog = ref(false)
const open = ref(false)
const loading = ref(false)
const search = ref('')
const address = ref('')
const lnglat = ref()

const map = {
  id: 'map-' + Math.random(),
  Instance: null as any,
  AMap: null as any,
  Marker: null as any,
  PlaceSearch: null as any,
  Autocomplete: null as any,
  Geocoder: null as any,
}

const proxyValue = computed(() => {
  return Array.isArray(props.modelValue) ? props.modelValue[0] || '' : props.modelValue
})

const locale = useLocale({
  'zh-cn': {
    title: '地图选择器',
    address: '已选中地址',
    nolnglat: '无经纬度',
    error: '请先选择地点',
    keyword: '关键字检索',
    keywordPlaceholder: '请输入关键字检索地址',
    confrim: '确 定',
  },
  'en': {
    title: 'Map selector',
    address: 'Address',
    keyword: 'Keyword',
    nolnglat: 'No latitude and longitude',
    error: 'Please select the location first',
    keywordPlaceholder: 'Please input keyword search',
    confrim: 'Confrim',
  }
})

function loadDialog() {
  dialog.value = true
  nextTick(() => open.value = true)
}

function loadMapInstance() {
  if (map.AMap !== null) {
    loadMap()
    return
  }
  const plugins = [
    "AMap.PlaceSearch",
    "AMap.Autocomplete",
    "AMap.Geocoder",
  ]
  loading.value = true
  props.AMap((AMap) => {
    loading.value = false
    if (AMap && AMap.Map) {
      map.AMap = AMap
      loadMap()
    } else {
      console.error("Error:AMap is not valid", AMap)
    }
  }, plugins)
}

function loadMap() {
  if (map.Instance) {
    valueSelected()
    return
  }
  map.Instance = new map.AMap.Map('map-' + map.id, { zoom: 12 })
  map.Geocoder = new map.AMap.Geocoder()
  map.Autocomplete = new map.AMap.Autocomplete()
  map.PlaceSearch = new map.AMap.PlaceSearch({
    map: map.Instance,
    pageSize: 5,
    pageIndex: 1,
    panel: "panel-" + map.id,
    autoFitView: true,
  })

  map.PlaceSearch.on("selectChanged", placeSearchSelected)
  map.Instance.on("click", mapSelected)
  valueSelected()
}

function dialogClosed() {
  lnglat.value = null
  address.value = ""
  search.value = ""
  error.value = ""
  map.PlaceSearch && map.PlaceSearch.clear()
  drawMarker(false)
  if (props.destroyDialogOnClose) {
    map.Instance.destroy()
    map.Instance = null
    map.id = 'map-' + Math.random()
    dialog.value = false
  }
}

function autocompleteFetch(query: string, cb: (arr: []) => void) {
  if (!query || query.trim() == "") return cb([])
  map.Autocomplete.search(query, (status: string, result: any) => {
    cb(status == "complete" ? result.tips : [])
  })
}


function valueSelected() {
  const value = props.modelValue
  if (typeof proxyValue.value == 'string') address.value = proxyValue.value
  if (Array.isArray(value) && value[1] && value[2]) {
    lnglat.value = new map.AMap.LngLat(value[1], value[2])
    map.Instance.setZoomAndCenter(12, lnglat.value)
    drawMarker()
  } else {
    lnglat.value = null
    drawMarker(false)
  }
}

function mapSelected(e: any) {
  map.Geocoder.getAddress(e.lnglat, (status: string, result: any) => {
    if (status === "complete" && result.regeocode) {
      search.value = ""
      error.value = ""
      address.value = result.regeocode.formattedAddress
      lnglat.value = e.lnglat
      drawMarker()
    }
  })
}

function autocompleteSelected(item: any) {
  if (item == undefined) return
  if (item.location) {
    address.value = item.name
    lnglat.value = item.location
    error.value = ""
  }
  drawMarker(false)
  map.PlaceSearch.search(item.district + item.name)
}

function placeSearchSelected(e: any) {
  address.value = e.selected.data.name
  lnglat.value = e.selected.data.location
  error.value = ""
  drawMarker(false)
}


function drawMarker(draw = true) {
  if (map.Marker) {
    map.Instance.remove(map.Marker)
    map.Marker = null
  }
  if (draw && lnglat.value && address.value) {
    map.PlaceSearch && map.PlaceSearch.clear()
    map.Marker = new map.AMap.Marker({
      position: lnglat.value,
      label: {
        direction: "bottom",
        content: address.value,
      },
    })
    map.Instance.add(map.Marker)
  }
}

function confrim() {
  const value = props.modelValue
  if (address.value && lnglat.value) {
    error.value = ""
    if (Array.isArray(value)) {
      emits("update:modelValue", [address.value, lnglat.value.lng, lnglat.value.lat])
    } else {
      emits("update:modelValue", address.value)
    }
    open.value = false
  } else {
    error.value = locale.value.error
  }
}

function clear() {
  emits('update:modelValue', Array.isArray(props.modelValue) ? [] : "")
}

</script>

<style >
.agel-map-input-dialog .amap-marker-label {
  background: #409eff;
  border: 1px solid white;
  color: white;
}

.agel-map-input-dialog .amap-logo,
.agel-map-input-dialog .amap-copyright {
  display: none !important;
}

.agel-map-input-dialog .addr-row {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  white-space: nowrap;
  position: relative;
}

.agel-map-input-dialog .addr-label {
  width: 90px;
}

.agel-map-input-dialog .addr-error {
  position: absolute;
  top: 100%;
  color: #f56c6c;
  left: 80px;
  font-size: 12px;
}

.agel-map-input-popper .addr {
  margin-left: 5px;
  font-size: 80%;
  color: #999;
}

.agel-map-panel {
  position: absolute;
  background-color: white;
  max-height: 90%;
  overflow-y: auto;
  top: 10px;
  left: 10px;
  width: 280px;
}

.agel-map-panel .poi-tel,
.agel-map-panel .poi-more {
  display: none;
}

.agel-map-panel .pageLink {
  color: #409eff;
}
</style>