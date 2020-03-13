<template>
    <div class="main">
      <!--动态组件-->
      <component :is="currentComponent"></component>
      <tool-bar @changeMenu="changeMenu"></tool-bar>
    </div>
</template>

<script>
import ToolBar from '../components/ToolBar'

export default {
  name: 'Main',
  data () {
    return {
      currentComponent: 'Home'
    }
  },
  components: {
    ToolBar,
    // 组件的异步引入
    Home: () => import('./Home'),
    Shopping: () => import('./Shopping'),
    My: () => import('./My')
  },
  methods: {
    changeMenu (e) {
      this.currentComponent = e
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/css/base";
  .main{
  }
</style>
