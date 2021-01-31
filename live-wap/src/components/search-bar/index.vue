<template>
  <div class="search-bar-view">
    <input type="text" placeholder="搜索主播/直播/视频" maxlength="50" />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="stylus">
.search-bar-view {
  height: 58px;
  background: $theme-bg-color1;
  border-radius: 9px;
  input {
    height: 100%;
    border: none;
    background: $theme-bg-color1;
  }
}
</style>
