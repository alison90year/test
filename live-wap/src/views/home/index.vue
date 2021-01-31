<template>
  <div class="home-view">
    <van-search class="home-seaech" v-model="value" placeholder="搜索主播/直播/视频" @focus="toSearch"/>
    <top-tab :type="'home'" :childList="childList" :parentId="parentId" @parentChange="parentChange" @childChange="childChange" />
     <div class="live-item-box" style="height:100%" :key="childId">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="height:100%">
          <van-list offset="10" :immediate-check="false"  v-model="isLoading" :finished="finished" finished-text="没有更多了" :error.sync="error" error-text="请求失败，点击重新加载" @load="onLoad" > 
            <live-item v-for="(item, index) in live" @toPlay="toLive(item.roomId)" :key="item.roomId" :index="index" type="live" :corve="item.coverImg" :name="item.ctgName"  :bottomTitle="item.liveTitle" :hot="item.hot" />
          </van-list>  
        </van-pull-refresh>
      </div>
      <!-- <div class="more-btn" @click="activeChange(0)">查看更多</div> -->
  </div>
</template>

<script>
import home from './index.js';
export default home;
</script>
<style lang="stylus">
@import './index.styl'
</style>