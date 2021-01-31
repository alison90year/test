<template>
  <div class="nickname-page">
    <header-nav :title="$route.meta.title">
    </header-nav>
    <div class="nickname-input-box">
      <van-field v-model="nickName" @input="setNickName" placeholder="请输入用户名" />
    </div>
  </div>
</template>
<script>
import nicknamePage from './index';
export default nicknamePage;
</script>
<style lang="stylus">
@import './index.styl'
</style>