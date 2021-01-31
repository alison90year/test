<template>
  <div class="hot-video-item" @click="toPlay">
    <div class="left" :style="{backgroundImage: 'url(' + data.coverImg + ')',backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}">
      <div class="time">{{data.videoDuration | timeFormat}}</div>
    </div>
    <div class="right">
      <div class="title van-multi-ellipsis--l2">{{data.title}}</div>
      <div class="icon">
        <div class="icon-box"> <img :src="require('../../../assets/images/video/icon_bfl@2x.png')"><span>{{data.videoId}}</span></div>
        <div class="icon-box"> <img :src="require('../../../assets/images/video/icon_lys@2x.png')"><span>{{data.videoId}}</span></div>
      </div>
      <div class="name">{{data.hostNickName}}</div>
    </div>
  </div>
</template>
<script>
import hotVideo from './index';
export default hotVideo;
</script>

<style lang="stylus">
@import './index.styl';
</style>