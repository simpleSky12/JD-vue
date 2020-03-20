<template>
  <!--
    能力：
      1. 默认展示效果： 左边后退按钮，中间页面名称，右边空白
      2. 可以通过插槽来自定义，左中右三个位置的内容
      3. 可以通过父组件传值来确定 navigation 的 样式style
  -->
    <div class="navigation-bar z-index-max"
         :class="{'bottom-line': pageName}"
         :style="navBarStyle">
      <div class="left">
        <img v-if="isShowBack" src="../assets/img/back.svg" alt="">
        <slot name="nav-left"></slot>
      </div>
      <div class="center">
        <p v-if="pageName">{{pageName}}</p>
        <slot name="nav-center"></slot>
      </div>
      <div class="right">
        <slot name="nav-right"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
    // 页面标题
    pageName: {
      type: String,
      default: ''
    },
    // 是否显示返回按钮
    isShowBack: {
      type: Boolean,
      default: false
    },
    // 头部导航组件整体样式
    navBarStyle: {
      type: Object,
      default () {
        return {
          backgroundColor: '#fff'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/base";
.navigation-bar {
  width: 100%;
  height: px2rem(44);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left, .right {
    height: 100%;
    width: px2rem(26);
    padding: 0 $marginSize;
    img{
      width: 100%;
    }
  }
  .center {
    width: 100%;
    text-align: center;
    font-size: $titleSize;
  }
}
.bottom-line {
  border-bottom: 1px solid $lineColor;
}
</style>
