<template>
<div class="home">
  <div class="content">
    <!--swiper 组件-->
    <my-swiper :swiper-imgs="swiperImgs" :height="swiperHeight"></my-swiper>
    <!--活动组件-->
    <activity>
      <div class="activity-520">
        <img v-for="(item,index) in activityData"
             :key="index" :src="item.icon" alt="">
      </div>
    </activity>
    <!--八宫格菜单-->
    <mode-options></mode-options>
    <!--秒杀商品-->
    <second-kill :dataSource="secondKill"></second-kill>
    <!--拼购节-->
    <activity>
      <div class="pin-gou">
        <img src="@img/pinGouJie.gif" alt="">
      </div>
    </activity>
    <!--商品瀑布流-->
    <goods></goods>
  </div>
</div>
</template>

<script>
import MySwiper from '../components/MySwiper'
import Activity from '../components/Activity'
import ModeOptions from '../components/ModeOptions'
import SecondKill from '../components/SecondKill'
import Goods from '../components/Goods'

export default {
  name: 'Home',
  components: {
    MySwiper,
    Activity,
    ModeOptions,
    SecondKill,
    Goods
  },
  data () {
    return {
      swiperImgs: [],
      swiperHeight: '184px',
      activityData: [],
      secondKill: []
    }
  },
  created () {
    this.initHomeData()
  },
  methods: {
    /* // 获取轮播图数据
    initSwiper () {
      this.$http.get('/swiper')
        .then(res => {
          const list = res.list
          this.swiperImgs = list.map(item => item.icon)
        }).catch(error => {
          console.log(error)
        })
    }, */

    // axios 并发多个请求，获取首页数据
    initHomeData () {
      this.$http.all([
        this.$http.get('/swiper'),
        this.$http.get('/activitys'),
        this.$http.get('/seconds')
      ]).then(this.$http.spread((swiperImgs, activityData, secondKill) => {
        this.swiperImgs = swiperImgs.list
        this.activityData = activityData.list
        this.secondKill = secondKill.list
      }))
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/css/base";

  .home{
    padding-bottom: px2rem(50);
    background-color: $bgColor;

    .content{

      .activity-520 {
        position: relative;
        z-index: 2;
        margin-top: px2rem(-8);
        border-top-left-radius: px2rem(8);
        border-top-right-radius: px2rem(8);
        img{
          width: 33.3%;
          display: inline-block;
        }
      }
      .pin-gou{
        background-color: #ffffff;
        img{
          display: flex;
          width: 100%;
        }
      }
    }
  }
</style>
