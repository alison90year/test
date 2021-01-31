<template>
  <van-nav-bar fixed placeholder @click-left="clickLeft">
    <template #left>
      <img class="nav-left" src="../../../assets/images/user/icon_dh_fh_h.png" alt="">
    </template>
    <template #title>
      <div class="nav-title">{{title}}</div>
    </template>
    <template #right>
      <slot></slot>
    </template>
  </van-nav-bar>
</template>
<script>
import {NavBar} from 'vant';
export default {
  props:{
    title:String,
    back:String
  },
  components:{
    [NavBar.name]: NavBar
  },
  methods:{
    clickLeft() {
      if(this.back) {
        this.$router.push(this.back);
      }else{
        this.$router.back();
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.nav-title{
  font-weight: 500;
  color: $theme-txt-color1;
  font-size: 38px;
}
.nav-left{
  width: 34.62px;
}
</style>