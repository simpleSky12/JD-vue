<template>
    <div class="second-count">
      <span class="end-time">{{endHour}}点场</span>
      <span class="seconds">{{status | filterTime}}</span>
    </div>
</template>

<script>
/*
* 倒计时组件应该具备的能力：
* 外部父组件传入一个活动 的 开始时间，
* 倒计时组件便根据这个时间开始计算差值秒数
*
* 倒计时的判断情况：
* 1. 活动未开始时展示距离活动开始的 倒计时秒数
* 2. 活动时间到了，则显示活动进行中
* 3. 活动时间结束，则显示活动已结束
*
* */
export default {
  name: 'SecondCount',
  props: {
    // 活动开始时间
    endHour: {
      type: Number,
      require: true,
      default: 0
    }
  },
  data () {
    return {
      status: '', // 秒杀活动的状态
      diffSeconds: 0, // 倒计时的秒数
      interval: undefined // 倒计时自动-1 的定时器
    }
  },
  created () {
    this.computedSeconds()
  },
  methods: {

    computedSeconds () {
      // 开始时重置定时器
      if (this.interval) {
        clearInterval(this.interval)
      }
      // 当前时间
      const date = new Date()
      /*
      * 通过对传入的活动开始时间，与当前时间进行对比
      * */
      if (date.getHours() > this.endHour) {
        this.status = '活动已结束'
        return
      }
      if (date.getHours() === this.endHour) {
        this.status = '活动进行中'
        return
      }
      // 开始计算 时间差值的秒数，首先计算出小时和分钟然后加上秒数得到总秒数
      // 例如： 活动开始时间 16：00 ， 现在时间 12：00， 倒计时为 3:59:59
      const diffHours = this.endHour - date.getHours() - 1
      const diffMinutes = 60 - date.getMinutes() - 1
      const diffSeconds = 60 - date.getSeconds()
      // 将时间差转换成 总秒数
      this.diffSeconds = diffHours * 3600 + diffMinutes * 60 + diffSeconds
      // 定时器每秒将时间差 -1
      this.interval = setInterval(() => {
        this.diffSeconds -= 1
      }, 1000)
    }
  },
  watch: {
    /*
    * 监听 当前秒数的差值 diffSeconds
    * 当值发生变化时，回调当前方法，
    * 将秒数转化成时间格式： 时：分：秒
    * */
    diffSeconds (newValue) {
      // 向下取整
      const hour = Math.floor(newValue / 3600)
      // 对 60 取模
      const minute = Math.floor(newValue / 60) % 60
      const second = newValue % 60

      this.status = hour + ':' + minute + ':' + second

      // 时间不变动时，重新加载计算时间的方法
      if (newValue === 0) {
        this.computedSeconds()
      }
    },

    // 监听活动开始时间，防止其修改后倒计时秒数未重新计算
    endHour () {
      this.computedSeconds()
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/css/config";
  .second-count{
    display: inline-block;
    font-size: $infoSize;
    margin-left: $marginSize;
    span{
      display: inline-block;
      padding: px2rem(2) px2rem(4);
    }
    .end-time{
      background-color: $mainColor;
      border-top-left-radius: $radiusSize;
      border-bottom-left-radius: $radiusSize;
      border: px2rem(1) solid $mainColor;
      color: #ffffff;
    }
    .seconds{
      background-color: #ffffff;
      border-top-right-radius: $radiusSize;
      border-bottom-right-radius: $radiusSize;
      border: px2rem(1) solid $mainColor;
      color: $mainColor;
    }
  }
</style>
