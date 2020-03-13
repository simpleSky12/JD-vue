<template>
    <div class="tool-bar">
        <div class="item"
             v-for="(item,index) in toolBarData"
             :key="index" @click="changeMenu(index,item)">
          <!--当选中下标和 index 相等时，高亮显示图标和文字-->
          <img class="icon"
               :src="[index === selectItemIndex ? item.hIcon : item.nIcon]"
               alt="" />
          <p class="name" :class="{'name-h': index === selectItemIndex}">{{item.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ToolBar',
  data () {
    return {
      toolBarData: [
        {
          nIcon: require('@img/home-n.svg'),
          hIcon: require('@img/home-h.svg'),
          name: '首页',
          componentName: 'Home'
        },
        {
          nIcon: require('@img/shopping-n.svg'),
          hIcon: require('@img/shopping-h.svg'),
          name: '购物车',
          componentName: 'Shopping'
        },
        {
          nIcon: require('@img/my-n.svg'),
          hIcon: require('@img/my-h.svg'),
          name: '我的',
          componentName: 'My'
        }
      ],
      selectItemIndex: 0
    }
  },
  methods: {
    changeMenu (index, item) {
      this.selectItemIndex = index
      this.$emit('changeMenu', item.componentName)
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/css/base";
  .tool-bar {
    display: flex;
    height: px2rem(46);
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 0 px2rem(12) 0 rgba(0, 0, 0, .2);
    border-top: 1px solid $lineColor;
    background-color: #fff;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      img {
        width: px2rem(22);
        height: px2rem(22);
      }

      .name {
        font-size: $fontSize;
        margin-top: px2rem(4);
        &.name-h{
          color: $mainColor;
        }
      }
    }
  }
</style>
