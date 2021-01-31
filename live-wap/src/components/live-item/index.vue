<template>
  <div :class="[{ 'left-live': index % 2 === 0}, 'live-item-componet']" @click="toPlay">
    <div class="liev-item-box" :style="{backgroundImage: 'url(' + corve + ')',backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}">
      <div v-if="type === 'live'" class="live-bottom-info">
        <div class="live-bottom-name">{{name}}</div>
        <div class="live-bottom-hot"> <img src="@/assets/images/live/rd_icon@2x.png">{{hot}}</div>
      </div>
      <div v-if="type === 'video'" class="live-bottom-info">
        <div class="info-box">
          <div class="live-bottom-count"><img src="@/assets/images/live/icon_bfl@2x.png">{{count}}</div>
          <div class="live-bottom-comments"><img src="@/assets/images/live/icon_lys@2x.png">{{comments}}</div>
        </div>
        <div class="live-bottom-time">{{time | timeFormat}}</div>
      </div>
    </div>
    <div class="liev-item-title">{{bottomTitle}}</div>
  </div>
</template>

<script>
import liveItem from './index.js';
export default liveItem;
</script>
<style lang="stylus">
@import './index.styl'
</style>
