<template>
    <div class="main">
      <home></home>
      <tool-bar @changeMenu="changeMenu"></tool-bar>
    </div>
</template>

<script>
import ToolBar from '../components/ToolBar'
import Home from './Home'
import router from '../router'

export default {
  name: 'main',
  components: {
    ToolBar,
    Home
  },
  methods: {
    changeMenu (e) {
      console.log(e)
      router.push(e)
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/css/base";
  span{
    font-size: $fontSize;
  }
</style>
