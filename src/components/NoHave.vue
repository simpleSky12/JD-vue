<template>
    <span class="no-have">缺货</span>
</template>

<script>
export default {
  name: 'NoHave'
}
</script>

<style lang="scss">
  @import "../assets/css/base";
  .no-have {
    font-size: $infoSize;
    background-color: $hintColor;
    padding: 0 px2rem(4);
    color: #ffffff;
    border-radius: px2rem(2);
    margin-right: px2rem(4);
  }
</style>
