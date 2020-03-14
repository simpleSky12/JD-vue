<template>
<div class="home">
  <div class="content">
    <my-swiper :swiper-imgs="swiperImgs" :height="swiperHeight"></my-swiper>
  </div>
</div>
</template>

<script>
import MySwiper from '../components/MySwiper'

export default {
  name: 'Home',
  components: {
    MySwiper
  },
  data () {
    return {
      swiperImgs: [],
      swiperHeight: '184px'
    }
  },
  created () {
    this.initSwiper()
  },
  methods: {
    initSwiper () {
      this.$http.get('/swiper')
        .then(res => {
          const list = res.data.list
          this.swiperImgs = list.map(item => item.icon)
        }).catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss">

</style>
