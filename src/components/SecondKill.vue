<template>
  <div class="second-kill">
    <div class="header">
      <p class="title">京东秒杀</p>
      <!--倒计时组件-->
      <second-count :endHour="24"></second-count>
    </div>
    <div class="content">
      <div class="item" v-for="(item,index) in dataSource" :key="index">
        <img :src="item.icon" alt="" class="icon">
        <p class="price">￥{{item.price | priceVlue}}</p>
        <p class="oldPrice">￥{{item.oldPrice | priceVlue}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import SecondCount from './SecondCount'
export default {
  name: 'SecondKill',
  props: {
    dataSource: Array
  },
  components: {
    SecondCount
  }
}
</script>

<style lang="scss">
  @import "../assets/css/base";
  .second-kill {
    background-color: #ffffff;
    border-radius: $radiusSize;
    margin: $marginSize;

    .header{
      display: flex;
      padding: $marginSize;
      .title{
        font-size: $titleSize;
        display: inline-block;
      }
    }
    .content{
      display: flex;
      overflow-x: scroll;
      .item{
        font-size: $fontSize;
        text-align: center;
        padding: px2rem(12);
        .icon{
          display: block;
          width: px2rem(66);
          height: px2rem(66);
          object-fit: contain;
        }
        .price{
          color: $mainColor;
          margin-top: $marginSize;
          font-size: $titleSize;
        }
        .oldPrice {
          font-size: $infoSize;
          color: $hintColor;
          margin-top: $marginSize;
          text-decoration: line-through;
        }
      }
    }
  }
</style>
