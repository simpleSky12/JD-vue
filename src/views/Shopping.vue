<template>
    <div>
      <navigation-bar :page-name="'购物车'"></navigation-bar>
    </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar'
export default {
  name: 'Shopping',
  created () {
    console.log('shoping')
  },
  components: {
    NavigationBar
  }
}
</script>

<style lang="scss">

</style>
