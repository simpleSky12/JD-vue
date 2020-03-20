<template>
    <div>
      <navigation-bar :page-name="'个人中心'"></navigation-bar>
    </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar'
export default {
  name: 'My',
  created () {
    console.log('my')
  },
  components: {
    NavigationBar
  }
}
</script>

<style lang="scss">

</style>
