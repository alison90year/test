<template>
  <div :class="['play-control-component',liveInfo.living ? '' : 'play-control-component-holder', fullscreen? 'fullscreen' : '']" @click.stop="switchMenu" :style="isVideo ? '' : 'background:#000'">
    <div class="top-box">
      <div class="top-left-box">
        <div class="icon-back" @click="goBack"><img :src="require('../../assets/images/live/icon_ckfh@2x.png')"></div>
        <div class="text-box" v-show="isShowMenu">
          <div class="nickname">{{liveInfo.hostNickName}}</div>
          <div class="hot-info-box">
            <img class="icon-hot" :src="require('../../assets/images/live/icon_rdz@2x.png')">
            <span class="hot-num">396.8万</span>
            <span class="room-text">房间号：{{liveInfo.room.roomId}}</span>
          </div>
        </div>  
      </div>
      <div class="top-right-box" v-show="liveInfo.living && isShowMenu">
        <div class="menu-box" @click.stop="modeMenu = !modeMenu"><img :src="require('../../assets/images/live/icon_ck_xl@2x.png')"></div>
        <div class="share-box" @click.stop="share"><img :src="require('../../assets/images/live/icon_ck_fx@2x.png')"></div>
        <div class="cutover-menu-box" v-if="modeMenu">
          <div class="play-mode van-hairline--bottom" @click.stop="isVideo = !isVideo"><img :src="require('../../assets/images/live/icon_ypbf@2x.png')"><span>{{isVideo?'仅音频播放':'打开画面'}}</span></div>
          <div class="play-mode" @click.stop="toReportPage"><img :src="require('../../assets/images/live/icon_jb@2x.png')"><span>举报此房间</span></div>
        </div>
      </div>
    </div>
    <div class="bottom-box" v-show="liveInfo.living && isShowMenu">
      <div class="play-icon" @click.stop="play"><img :src="require(isPlay?'../../assets/images/live/icon_zt@2x.png' : '../../assets/images/live/full_play_btn@2x.png')"></div>
      <div class="full-icon" @click.stop="full"><img :src="require('../../assets/images/live/icon_qp@2x.png')"></div>
    </div>
    <div class="audio-mode" v-if="liveInfo.living && !isVideo">
      <img :src="require('../../assets/images/live/ypms@2x.png')">
      <div class="open-screen" @click.stop="isVideo = true">打开画面</div>
    </div>
    <div class="hot-not" v-if="!liveInfo.living">主播暂时不在播</div>
  </div>
</template>
<script>
import telephoneVue from '../../views/login/components/telephone.vue';
export default {
  name: 'palyControl',
  props:{
    liveInfo:{ // 直播信息
      require:true,
      type:Object
    },
    player:{ // 播放器对象
      require:true,
      type:Object
    },
  },
  data() {
    return {
      modeMenu: false, // 切换音频视频播放菜单
      isPlay: false,  // 是否正在播放
      isShowMenu: true, // 是否显示控制菜单
      isVideo: true, // 是否视频模式
      fullscreen: false
    };
  },
  methods: {
    // 控制器显示和隐藏
    switchMenu() {
      this.isShowMenu = !this.isShowMenu;
      this.modeMenu = false;
    },
    // 播放和暂停
    play() {
      if(this.player.paused) {
        this.isPlay = true;
        this.player.play();
      } else {
        this.isPlay = false;
        this.player.pause();
      }
    },
    // 全屏
    full() {
      if(this.player.fullscreen) {
        this.fullscreen = false;
        // this.player.gexitCssFullscreen();
        this.player.exitFullscreen(this.player.root);
      } else {
        this.fullscreen = true;
        this.player.getFullscreen(this.player.root);
      }
      // this.player.rotate(true,true,1);
    },
    // 前往举报页面
    toReportPage() {

    },
    // 分享功能
    share() {
      this.$emit('toShare');
    },
    // 后退
    goBack() {
      this.$router.back();
    }
  }
};
</script>
<style lang="stylus">
@import './index.styl'
</style>
