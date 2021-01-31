<template>
  <div class="info-page">
    <header-nav :title="$route.meta.title" back="/user"></header-nav>
    <div class="info-page-container pd-top-13">
      <van-cell title="头像" clickable class="base-cell" @click="tapAvatarCell">
        <template #right-icon>
          <div class="info-page-avatar flex jc-c ai-c">
            <van-image width="100%" v-if="!isUploadAvatarImg" fit="cover" round lazy-load height="100%" :src="userinfo.headicon"></van-image>
            <van-loading v-else type="spinner"/>
          </div>
        </template>
      </van-cell>
      <van-cell title="昵称" :value="userinfo.nickname" class="ai-c base-cell" clickable to="/user/info/nickname">
        <template #right-icon>
          <img src="../../../assets/images/user/icon_dh_jr.png" class="info-cell-right-icon">
        </template>
      </van-cell>
      <van-cell title="账号与安全" class="ai-c base-cell" clickable to="/user/info/safe">
        <template #right-icon>
          <img src="../../../assets/images/user/icon_dh_jr.png" class="info-cell-right-icon">
        </template>
      </van-cell>
      <van-cell title="银行卡" :value="bankinfo ? bankinfo.bankCard : '未绑定'" class="ai-c base-cell" clickable to="/user/info/bankcard">
        <template #right-icon>
          <img src="../../../assets/images/user/icon_dh_jr.png" class="info-cell-right-icon">
        </template>
      </van-cell>
    </div>
    <van-action-sheet v-model="actionSheetShow" cancel-text="取消" close-on-click-action>
      <div class="content-item">
        <van-uploader class="w100 h100" :disabled="isUploadAvatarImg" :after-read="afterRead" max-count="1" capture="camera" accept="image/*">拍照</van-uploader>
      </div>
      <div class="content-item">
        <van-uploader class="w100 h100" :disabled="isUploadAvatarImg" :after-read="afterRead" max-count="1" accept="image/*">手机相册</van-uploader>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import infopage from './index';
export default infopage;
</script>

<style lang="stylus">
@import './index.styl';
</style>