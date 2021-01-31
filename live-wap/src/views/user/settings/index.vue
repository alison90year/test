<template>
  <div class="settings-page flex fdr-c h100">
    <header-nav :title="$route.meta.title"></header-nav>
    <div class="cell-box">
      <van-cell title="弹幕设置" class="ai-c base-cell" clickable to="/user/settings/barrage">
        <template #right-icon>
          <img src="@/assets/images/user/icon_dh_jr.png" class="info-cell-right-icon">
        </template>
      </van-cell>
    </div>
    <div class="cell-box">
      <van-cell title="界面模式" value="跟随系统" class="ai-c base-cell" clickable>
        <template #right-icon>
          <img src="@/assets/images/user/icon_dh_jr.png" class="info-cell-right-icon">
        </template>
      </van-cell>
      <van-cell title="关于我们" class="ai-c base-cell" clickable to="/user/settings/aboutus">
        <template #right-icon>
          <img src="@/assets/images/user/icon_dh_jr.png" class="info-cell-right-icon">
        </template>
      </van-cell>
      <van-cell title="用户协议" class="ai-c base-cell" clickable to="">
        <template #right-icon>
          <img src="@/assets/images/user/icon_dh_jr.png" class="info-cell-right-icon">
        </template>
      </van-cell>
      <van-cell title="隐私政策" class="ai-c base-cell" clickable to="">
        <template #right-icon>
          <img src="@/assets/images/user/icon_dh_jr.png" class="info-cell-right-icon">
        </template>
      </van-cell>
    </div>
    <van-cell v-if="userinfo" title="退出登录" @click="logOut" class="ai-c base-cell cell-logout" clickable />
  </div>
</template>

<script>
import { Cell, Dialog, Toast } from 'vant';
import { mapGetters } from 'vuex';
export default {
  components:{
    headerNav: () => import('@/views/user/components/header'),
    [Cell.name]: Cell,
    [Toast.name]: Toast
  },
  computed:{
    ...mapGetters(['userinfo'])
  },
  methods: {

    // 退出登录
    logOut() {
      Dialog.confirm({
        title:'确认退出',
        confirmButtonText:'退出'
      }).then(() => {
        this.$store.commit('user/DEL_USERINFO');
        Toast('退出登录成功');
        this.$router.push('/user');
      });
    }
  },
};
</script>
<style lang="stylus">
@import './index.styl';
@import '../common.styl';
</style>