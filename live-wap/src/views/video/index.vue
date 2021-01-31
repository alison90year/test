<template>
  <div class="video-view">
    <top-tab :type="'video'" :childList="childList" :parentId="parentId" @parentChange="parentChange" @childChange="childChange" />
    <div class="live-item-box" style="height:100%" :key="childId">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="height:100%">
        <van-list offset="100" :immediate-check="false"  v-model="isLoading" :finished="finished" finished-text="没有更多了" :error.sync="error" error-text="请求失败，点击重新加载" @load="onLoad" > 
            <live-item v-for="(item, index) in video" @toPlay="toPlay(item.videoId)" :key="item.videoId" :index="index" type="video" :corve="item.coverImg" :comments="item.title"  :time="item.videoId" :bottomTitle="item.title" :count="item.playNum" />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import video from './index.js';
export default video;
</script>
<style lang="stylus">
@import './index.styl'
</style>