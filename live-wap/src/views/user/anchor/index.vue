<template>
  <div class="anchor-page">

    <!-- 已经是主播 -->
    <template v-if="userInfo.userType === 2">
      <!-- 头部及头部背景 -->
      <div class="anchor-page-header">
        <div class="anchor-header">
          <div class="left-back-button" @click="$router.push('/user')">
            <img src="@/assets/images/user/icon_dh_fh_b.png" alt="">
          </div>
          <p class="anchor-header-title">主播中心</p>
        </div>
      </div>

      <!-- 主播信息卡 -->
      <div class="anchor-info-card flex jc-c">
        <div class="info-card flex fdr-c jc-sa ai-c w100">
          <div class="flex jc-s w100">
            <div class="anchor-avatar">
              <img src="@/assets/images/user/icon_mrtx.png" alt="">
            </div>
            <div class="anchor-info flex fdr-c jc-sa">
              <p class="anchor-nickname">可可西里</p>
              <p class="anchor-room-fans flex">
                <span>房间号：123344</span>
                <span class="anchor-separator-symbol h100"></span>
                <span>粉丝：1444</span>
              </p>
            </div>
          </div>
          <div class="flex jc-sb ai-c w100">
            <span class="anchor-level">LV103</span>
            <div class="anchor-progress">
              <van-progress :show-pivot="false" :percentage="30/320*100" />
              <span class="anchor-progress-pivot-text">30/320</span> 
            </div>
            <span class="anchor-level">LV104</span>
          </div>
        </div>
      </div>

      <div class="anchor-cell">
        <van-cell title="直播公告" class="ai-c base-cell" clickable to="/user/anchor/notice">
          <template #right-icon>
            <img src="@/assets/images/user/icon_dh_jr.png" class="info-cell-right-icon">
          </template>
        </van-cell>
      </div>
    </template>

    <!-- 还不是主播 -->
    <template v-else>
      <header-nav :title="$route.meta.title"></header-nav>
      <p class="no-apply-anchor">完成主播认证后即可轻松开播</p>
      <van-empty :image="require('@/assets/images/user/ytj.png')" description="审核中请等待" />
      <van-empty :image="require('@/assets/images/user/cxrz.png')" description="认证失败，清联系客服或继续申请" />
      <van-button round block to="/user/anchor/apply">申请主播</van-button>
    </template>
  </div>
</template>

<script>
import { Progress, Cell, Empty, Button } from 'vant';
export default {
  components:{
    headerNav: () => import('@/views/user/components/header'),
    [Progress.name]: Progress,
    [Cell.name]: Cell,
    [Empty.name]: Empty,
    [Button.name]: Button
  },

  data() {
    return {
      userInfo:{
        userType:2,
        hostApply:null
      }
    };
  },

  created() {
    


  },
  methods:{

  }
};
</script>
<style lang="stylus">
@import './index.styl';
@import '../common.styl';
</style>