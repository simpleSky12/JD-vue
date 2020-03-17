<template>
  <div class="activity">
    <!--提供一个可以存放活动内容的空间-->
    <!--插槽展示活动内容-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Activity'
}
</script>

<style lang="scss">
  @import "../assets/css/base";

  .activity{
    max-height: px2rem(160);

  }
</style>
