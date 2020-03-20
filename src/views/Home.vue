<template>
<div class="home" @scroll="onScrollChange">
  <div class="content">
    <!--顶部搜索框-->
    <navigation-bar :nav-bar-style="navBarStyle">
      <template v-slot:nav-left>
        <img :src="navBarCurrentStyle.leftIcon" alt="">
      </template>
      <template v-slot:nav-center>
        <search :bg-color="navBarCurrentStyle.search.bgColor"
                :icon="navBarCurrentStyle.search.icon"
                :hint-color="navBarCurrentStyle.search.hintColor">
        </search>
      </template>
      <template v-slot:nav-right>
        <img :src="navBarCurrentStyle.rightIcon" alt="">
      </template>
    </navigation-bar>
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
import NavigationBar from '../components/NavigationBar'
import Search from '../components/Search'

export default {
  name: 'Home',
  components: {
    MySwiper,
    Activity,
    ModeOptions,
    SecondKill,
    Goods,
    NavigationBar,
    Search
  },
  data () {
    return {
      swiperImgs: [],
      swiperHeight: '184px',
      activityData: [],
      secondKill: [],
      // navBar 插槽样式数据
      navBarSlotStyle: {
        // 默认样式
        normal: {
          leftIcon: require('../assets/img/more-white.svg'),
          search: {
            bgColor: '#fff',
            hintColor: '#999',
            icon: require('../assets/img/search.svg')
          },
          rightIcon: require('../assets/img/message-white.svg')
        },
        // 页面滑动到锚定点的样式
        highLight: {
          leftIcon: require('../assets/img/more.svg'),
          search: {
            bgColor: '#d7d7d7',
            hintColor: '#fff',
            icon: require('../assets/img/search-white.svg')
          },
          rightIcon: require('../assets/img/message.svg')
        }
      },
      // navBar 当前使用的样式
      navBarCurrentStyle: {},
      // navBar 的定制样式
      navBarStyle: {
        position: 'fixed',
        backgroundColor: ''
      },
      // 记录页面垂直方向上的滚动值
      scrollTopValue: -1,
      // 滑动的锚点值
      ANCHOR: 160
    }
  },
  created () {
    this.initHomeData()
    this.navBarCurrentStyle = this.navBarSlotStyle.normal
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
    },
    /* 检测页面的滚动
    * 1. 获取当前页面的滚动距离
    * 2. 计算navBar 背景颜色（透明度）
    *     当前滚动的距离 / 锚点值 = 透明度（opacity）
    * 3. 判断是否超过锚点
    *   opacity>1, 滚动距离超过了锚点值， navBar为高亮样式
    *   否则 navBar 为默认样式
    * */
    onScrollChange ($event) {
      // 获取滚动距离
      this.scrollTopValue = $event.target.scrollTop
      // 计算 navBar 背景透明度
      const opacity = this.scrollTopValue / this.ANCHOR
      // 指定navBar 插槽样式
      if (opacity > 1) {
        this.navBarCurrentStyle = this.navBarSlotStyle.highLight
      } else {
        this.navBarCurrentStyle = this.navBarSlotStyle.normal
      }
      // 根据透明度设置 navBar 背景色
      this.navBarStyle.backgroundColor = 'rgba(255,255,255,' + opacity + ')'
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/css/base";

  .home{
    padding-bottom: px2rem(50);
    background-color: $bgColor;
    height: 100%;
    overflow-y: auto;

    .content{
      height: 100%;
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
