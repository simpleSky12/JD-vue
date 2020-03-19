<template>
  <!--
    瀑布流布局：
    1.让商品 item 相对于 goods 进行排列，即利用position进行位置布局
    2.生成不同高度的图片，撑起不同高度的 item
    3.计算 item 的高度，来达到 根据高度调整item的排列顺序
  -->
    <div class="goods" :style="{height: waterfallHeight}">
      <div class="goods-item" ref="waterfallItem"
           v-for="(item,index) in goods" :key="index"
           :style="waterfallStyles[index]">
        <img class="goods-item-img" :src="item.img"
             :style="imgHeightStyle[index]" alt="">
        <div class="goods-item-desc">
          <!--TODO 判断是否缺货，是否为直营-->
          <p class="name text-line-2">{{item.name}}</p>
          <div class="data">
            <p class="price">￥{{item.price | priceVlue}}</p>
            <p class="volume">销量:{{item.volume}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Goods',
  data () {
    return {
      goods: [],
      MAX_IMG_HEIGHT: 230,
      MIN_IMG_HEIGHT: 150,
      MARGIN_SIZE: 8,
      imgHeightStyle: [], // 商品图片高度的样式
      waterfallStyles: [], // 瀑布流中所有元素的样式
      waterfallHeight: 0 // 瀑布流组件的总高度
    }
  },
  async created () {
    this.initGoods()
  },
  methods: {
    initGoods () {
      this.$http.get('/goods')
        .then(res => {
          this.goods = res.list
          this.initImgStyle()
          // 调用瀑布流的方法需要等到 dom 元素渲染完成之后
          this.$nextTick(() => {
            this.initWaterfall()
          })
        })
    },
    // 获取图片的随机高度
    getImgHeight () {
      // math.random() * 高度区间 + 最低图片高度
      const imgHeight = Math.floor(Math.random() * (this.MAX_IMG_HEIGHT - this.MIN_IMG_HEIGHT) + this.MIN_IMG_HEIGHT) + 'px'
      return imgHeight
    },
    // 根据图片的随机高度，生成对应的图片高度样式
    initImgStyle () {
      this.goods.forEach(item => {
        const imgHeight = this.getImgHeight()
        this.imgHeightStyle.push({ height: imgHeight })
      })
    },
    /*
    * 瀑布流布局
    * 1. 获取到所有瀑布流中的item元素
    * 2. 遍历 所有 item 元素， 得到每个item元素高度，计算响应的maring值
    * 3. 创建两个变量： leftHeightTotal， rightHeightTotal，分别表示位于左右两侧的item距离顶部的高度
    * 4. 保存计算出的item的所有样式，配置到item上
    * 5. item配置完成后，对比leftHeightTotal 与 rightHeightTotal中的最大值，这就是瀑布流组件的整体高度
    * */
    initWaterfall () {
      // 获取所有的 item 元素
      const $waterfall = this.$refs.waterfallItem
      if (!$waterfall) return
      // 左右两侧元素距离顶部的高度
      let leftHeightTotal = 0; let rightHeightTotal = 0
      $waterfall.forEach(($el, index) => {
        // 存储单个元素的样式
        let itemStyles = {}
        // 计算每个item元素的实际高度
        const elHeight = $el.clientHeight + this.MARGIN_SIZE
        if (leftHeightTotal <= rightHeightTotal) {
          itemStyles = {
            top: leftHeightTotal + 'px',
            left: '4px'
          }
          // 更新元素的 顶部高度
          leftHeightTotal += elHeight
        } else {
          itemStyles = {
            top: rightHeightTotal + 'px',
            right: '4px'
          }
          // 更新元素的 顶部高度
          rightHeightTotal += elHeight
        }
        this.waterfallStyles.push(itemStyles)
      })
      // 比较左右两侧距离顶部的高度，计算瀑布流组件的总体高度
      const totalHeight = leftHeightTotal > rightHeightTotal
        ? leftHeightTotal : rightHeightTotal
      this.waterfallHeight = totalHeight + 'px'
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/css/base";
  .goods{
    margin-top: px2rem(10);
    background-color: $bgColor;
    font-size: $infoSize;
    position: relative;
    &-item{
      position: absolute;
      width: 48%;
      border-radius: $radiusSize;
      background-color: #ffffff;
      padding: $marginSize;
      box-sizing: border-box;
      margin-bottom: $marginSize;
      &-img{
        display: block;
        width: 100%;
        object-fit: contain;
      }
      &-desc{
        width: 100%;
        .name{
          line-height: px2rem(18);
        }
        .data{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: $marginSize;
          .price{
            color: $mainColor;
            font-size: $titleSize;
            font-weight: 500;
          }
        }
      }
    }
  }
</style>
