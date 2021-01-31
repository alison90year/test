<template>
  <div class="main-page" style="height:100%">
    <router-view />
    <van-tabbar v-model="navPage" @change="navChange" >
      <van-tabbar-item name="/home">
        <span>首页</span>
        <template #icon="props">
          <img :src="require(props.active ? '../../assets/images/nav/home_active@2x.png' : '../../assets/images/nav/home@2x.png')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="/video">
        <span>视频</span>
        <template #icon="props">
          <img :src="require(props.active ? '../../assets/images/nav/video_active@2x.png' : '../../assets/images/nav/video@2x.png')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="/match">
        <span>赛事</span>
        <template #icon="props">
          <img :src="require(props.active ? '../../assets/images/nav/sai_active@2x.png' : '../../assets/images/nav/sai@2x.png')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="/user">
        <span>我的</span>
        <template #icon="props">
          <img :src="require(props.active ? '../../assets/images/nav/me_active@2x.png' : '../../assets/images/nav/me@2x.png')" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {
      navPage: '/home'
    };
  },
  created() {
    this.navPage = this.$route.path;
  },
  methods: {
    navChange(path) {
      this.$router.push({path: path});
    }
  }
};
</script>
<style lang="stylus">
@import './index.styl'
</style>