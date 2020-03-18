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
          icon: require('@img/jingDongChaoShi.png'),
          title: '京东超市'
        },
        {
          id: '2',
          icon: require('@img/haiTunQuanQiu.png'),
          title: '海屯全球'
        },
        {
          id: '3',
          icon: require('@img/jingDongFuShi.png'),
          title: '京东服饰'
        },
        {
          id: '4',
          icon: require('@img/jingDongShengXian.png'),
          title: '京东生鲜'
        },
        {
          id: '5',
          icon: require('@img/jingDongDaoJia.png'),
          title: '京东到家'
        },
        {
          id: '6',
          icon: require('@img/chongZhiJiaoFei.png'),
          title: '充值缴费'
        },
        {
          id: '7',
          icon: require('@img/jingDongPinGou.png'),
          title: '9.9元拼'
        },
        {
          id: '8',
          icon: require('@img/lingJuan.png'),
          title: '领劵'
        },
        {
          id: '9',
          icon: require('@img/zhuanQian.png'),
          title: '赚钱'
        },
        {
          id: '10',
          icon: require('@img/quanBu.png'),
          title: '全部'
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
    padding-bottom: px2rem(10);
    .item{
      text-align: center;
      width: 20%;
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
