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
      swiperImgs: [
        require('../assets/img/swiper-1.jpg'),
        require('../assets/img/swiper-2.jpg'),
        require('../assets/img/swiper-3.jpg'),
        require('../assets/img/swiper-4.jpg'),
        require('../assets/img/swiper-5.jpg'),
        require('../assets/img/swiper-6.jpg'),
        require('../assets/img/swiper-7.jpg'),
        require('../assets/img/swiper-8.jpg')
      ],
      swiperHeight: '184px'
    }
  }
}
</script>

<style lang="scss">

</style>
