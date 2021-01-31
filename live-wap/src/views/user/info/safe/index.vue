<template>
  <div class="safe-page">
    <header-nav :title="$route.meta.title" back="/user/info"></header-nav>
    <div class="safe-page-container pd-top-13">
      <van-cell title="密码" class="ai-c base-cell" clickable :to="{path:'/user/info/safe/change',query:{type:'password'}}">
        <template #right-icon>
          <img src="@/assets/images/user/icon_dh_jr.png" class="info-cell-right-icon">
        </template>
      </van-cell>
      <van-cell title="更换手机号码" :value="`${userinfo.phoneNum.substring(0,3)}****${userinfo.phoneNum.substring(7)}`" class="ai-c base-cell" clickable :to="{path:'/user/info/safe/change',query:{type:'phone'}}">
        <template #right-icon>
          <img src="@/assets/images/user/icon_dh_jr.png" class="info-cell-right-icon">
        </template>
      </van-cell>
      <van-cell title="修改邮箱" :value="userinfo.email ? userinfo.email : '未绑定'" class="ai-c base-cell" clickable :to="{path:'/user/info/safe/change',query:{type:'email'}}">
        <template #right-icon>
          <img src="@/assets/images/user/icon_dh_jr.png" class="info-cell-right-icon">
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import safepage from './index';
export default safepage;
</script>

<style lang="stylus">
@import './index.styl';
</style>