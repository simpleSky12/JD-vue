<template>
    <div class="search" :style="{ backgroundColor: bgColor }">
      <img :src="icon" alt="">
      <input :style="{ color: hintColor, backgroundColor: bgColor}"
             placeholder="京东混合开发" />
    </div>
</template>

<script>
/*
* 搜索框中搜索图标以及字体颜色需要由父组件传入
* */
export default {
  name: 'Search',
  props: {
    icon: {
      type: String,
      default: require('../assets/img/search.svg')
    },
    hintColor: {
      type: String,
      default: '#99999'
    },
    bgColor: {
      type: String,
      default: '#ffffff'
    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/base";
.search {
  display: flex;
  flex-grow: 1;
  align-items: center;
  margin: px2rem(6);
  border-radius: px2rem(22);
  img{
    margin-left: $marginSize;
    width: px2rem(16);
  }
  input{
    display: block;
    margin-left: $marginSize;
    width: 75%;
    height: px2rem(32);
    line-height: 100%;
    border-style: none;
    font-size: $fontSize;
  }
}
</style>
