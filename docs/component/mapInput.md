# MapInput 地图选择器

一个地图选择器，从高德地图选地点，常用于搭配表单。

依赖组件： `ElInput` `ElDialog` `ElAutocomplete` `ElButton`，需先全局注册，依赖高德地图插件：`AMap` `AMap.PlaceSearch` `AMap.Autocomplete` `AMap.Geocoder`，[高德地图 JSAPI 的加载](https://developer.amap.com/api/jsapi-v2/guide/abc/load)。

## 使用

`value` 支持 `array` `string` 两种类型，区别在于是否包含经纬度信息。

<ClientOnly><mapInputWrap/></ClientOnly>


::: details 点击查看代码
@[code](@example/mapInputBase.vue)
:::

:::tip
不管是使用 JSAPI Loader 还是 CDN 方式，首先要确认 `AMap` 及对应的插件正确的被引用，组件默认是取 `Window.AMap`，若你想按需加载高德地图，可使用 `AMap` 属性。

若使用的是高德地图v.2.0，则需要把 `AMap.Autocomplete` 修改为 `AMap.AutoComplete`。
:::


```vue
<template>
  <AgelMapInput :AMap="mapLoader"></AgelMapInput>
</template>
 
<script>
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  methods: {
    mapLoader(reslove) {
      AMapLoader.load({
        key: "xxxxxxxx",    // map key
        plugins:["AMap.PlaceSearch", "AMap.Autocomplete", "AMap.Geocoder"],   // 所需要插件列表
      }).then((AMap) => reslove(AMap));
    },
  },
};
</script>
```


## 属性

| 属性         | 类型            |  默认值  | 说明                                 | 
| ------------ | ------------    | ------ | ------------------------------------ | 
| value        | array / string    | []     | 绑定值                |  
| AMap         | function        | (cb)=> cb(Window.AMap)      | AMap Loader       |
| keyword-search| boolean         | true   | 是否可关键字检索            |  
| clearable    | boolean         | false  | 是否可清空                |  
| editable     | boolean         | false  | 是否可编辑                |  
| destroy-dialog-on-close| boolean  | false  | dialog 关闭时是否销毁     |
| ......       | -  | - | [ElInput 属性](https://element-plus.gitee.io/zh-CN/component/input.html)

