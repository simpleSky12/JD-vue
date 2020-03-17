<template>
  <div class="swiper">
    <!--
    1配置swiper， :options 绑定数据
    2. 配置滑动模块 swiperSlide
    3. 分页器配置：使用slot 插槽
    -->
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item,index) in swiperImgs" :key="index">
        <img class="swiperImg"
             :style="{height: height}"
             :src="item.icon" alt="">
      </swiper-slide>
      <template v-slot:pagination>
        <div class="swiper-pagination"></div>
      </template>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'MySwiper',
  props: {
    // slide 高度
    height: {
      type: String,
      default: 'auto'
    },
    // 轮播图，图片的来源
    swiperImgs: {
      type: Array,
      require: true,
      default: function () {
        return []
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      // swiper 配置
      swiperOptions: {
        autoPlay: true,
        loop: true,
        autoHeight: true, // swiper的高度由slide决定
        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          // 为分页器内的元素添加类名，方便修改样式
          bulletClass: 'custom-bullet-class'
        }
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/css/base";
  .swiper {
    .custom-bullet-class {
      box-sizing: border-box;
      border-radius: 50%;
      height: px2rem(8);
      width: px2rem(8);
      border: px2rem(1) solid #fff;
      margin: 0 px2rem(4);
      display: inline-block;
      opacity: 1;
      &.swiper-pagination-bullet-active{
        background-color: #fff;
      }
    }
    img{
      width: 100%;
      display: flex;
    }
  }
</style>
