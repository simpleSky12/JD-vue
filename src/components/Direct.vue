<template>
    <span class="direct">
      直营
    </span>
</template>

<script>
export default {
  name: 'Direct'
}
</script>

<style lang="scss">
  @import "../assets/css/base";
  .direct {
    color: #ffffff;
    background-color: $mainColor;
    font-size: $infoSize;
    padding: 0 px2rem(4);
    border-radius: px2rem(2);
    margin-right: px2rem(4);
  }
</style>
