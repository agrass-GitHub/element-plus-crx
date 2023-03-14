<template>
  <div class="demo" style="width: 500px;">
    <AgelEllipsis :line-clamp="2">{{ str }}</AgelEllipsis>
    <ElButton @click="start">添加</ElButton>

    <AgelEllipsis :word-clamp="50">
      <div><span><a>{{ str }}</a></span></div>
    </AgelEllipsis>

  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'


const count = ref()
const str = ref('以上2种方案都可以实现判断文本是否溢出，虽然思想有所不同，但其实本质是一样的：都是通过对比文本实际的宽度和显示省略号时的宽度，所以可以从这一点出发，再多多思考有没有其他解决方案。这里要注意一点，此方案中元素不能为block，因为这样eleCopy的宽度会为父元素的100%，而不是由内容撑开的宽度；也不能为inline，因为这样没有width，无法比较；因此将元素设为inline-block 以上2种方案都可以实现判断文本是否溢出，虽然思想有所不同，但其实本质是一样的：都是通过对比文本实际的宽度和显示省略号时的宽度，所以可以从这一点出发，再多多思考有没有其他解决方案。这里要注意一点，此方案中元素不能为block，因为这样eleCopy的宽度会为父元素的100%，而不是由内容撑开的宽度；也不能为inline，因为这样没有width，无法比较；因此将元素设为inline-block')

function start() {

  str.value = '这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点这里要注意一点'
}

</script>

<style ></style>