<template>
  <div class="mode-options">
    <div class="item" v-for="(item,index) in dataSource" :key="index">
      <img :src="item.icon" alt="" class="icon">
      <p class="title">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModeOptions',
  data () {
    return {
      // 数据源
      dataSource: [
        {
          id: '1',
          icon: require('../assets/img/jingDongChaoShi.png'),
          title: '京东超市'
        },
        {
          id: '1',
          icon: require('../assets/img/jingDongChaoShi.png'),
          title: '京东超市'
        },
        {
          id: '1',
          icon: require('../assets/img/jingDongChaoShi.png'),
          title: '京东超市'
        },
        {
          id: '1',
          icon: require('../assets/img/jingDongChaoShi.png'),
          title: '京东超市'
        },
        {
          id: '1',
          icon: require('../assets/img/jingDongChaoShi.png'),
          title: '京东超市'
        },
        {
          id: '1',
          icon: require('../assets/img/jingDongChaoShi.png'),
          title: '京东超市'
        },
        {
          id: '1',
          icon: require('../assets/img/jingDongChaoShi.png'),
          title: '京东超市'
        },
        {
          id: '1',
          icon: require('../assets/img/jingDongChaoShi.png'),
          title: '京东超市'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/css/base";
  .mode-options{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background-color: #fff;
    .item{
      text-align: center;
      width: 25%;
      margin-top: px2rem(10);
      .icon{
        width: px2rem(40);
        height: px2rem(40);
      }
      .title {
        font-size: px2rem(12);
        margin-top: px2rem(6);
      }
    }
  }
</style>
