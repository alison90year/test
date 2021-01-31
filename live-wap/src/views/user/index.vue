<template>
  <div class="user-page">
    <div :class="['user-header','flex',userinfo ? 'login' : 'logout']">
        <div class="user-avatar">
          <van-image v-if="userinfo" width="100%" height="100%" lazy-load :src="userinfo.headicon" round fit="cover"/>
          <van-image v-else width="100%" height="100%" :src="require('@/assets/images/user/icon_mrtx.png')" round fit="cover"/>
          <img v-if="userinfo" :src="userinfo.userGradle.gradleSettings.image" class="user-avatar-level-icon pos-a" alt="">
        </div>
        <div class="user-info">
          <template v-if="userinfo">
            <span class="user-info-txt">{{userinfo.nickname}}</span>
            <div class="user-info-coin flex jc-c ai-c">
              <img src="../../assets/images/user/icon_ye.png" alt="">
              <span>{{coins}}龙币</span>
            </div>
          </template>
          <template v-else>
            <router-link to="/login" class="go-login">登录/注册</router-link>
            <p>点击登录享受更多精彩功能</p>
          </template>
        </div>
    </div>
    <div class="user-cell flex ai-c fdr-c">
      <div class="user-cell-box ovhide" v-for="(item,key) in userNav" :key="key">
        <van-cell v-for="cellItem of item" :key="cellItem.icon" :title="cellItem.title" clickable :to="cellItem.target">
          <template #icon>
            <img :src="require(`../../assets/images/user/${cellItem.icon}`)" class="user-cell-icon">
          </template>
          <template #right-icon>
            <img src="../../assets/images/user/icon_dh_jr.png" class="user-cell-right-icon">
          </template>
        </van-cell>
      </div>
    </div>
  </div>
</template>
<script>
import userpage from './index.js';
export default userpage;
</script>
<style lang="stylus" scoped>
@import './index.styl'
</style>