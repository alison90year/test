<template>
  <div class="search-view">
    <van-search v-model="value" show-action  placeholder="搜索主播/直播/视频" maxlength="20" @input="inputChange" @search="search" @focus="changeStatus(2)" @cancel="cancel"/>
    <!-- 搜索历史板块 -->
    <div v-if="historyList.length !== 0 && status === 1">
      <div class="search-history-box">
        <div class="searh-history-text">搜索历史</div>
        <div class="searh-history-empty" @click="clearHistory"><img src="@/assets/images/search/icon_ss_qk@2x.png"/>清空</div>
      </div>
      <ul class="search-details" @click="search">
        <li class="search-details-text" v-for="(item, index) in historyList" :key="index + item"  :data-text="item" >{{item}}</li>
      </ul>
    </div>
    <!-- 热搜榜板块 -->
    <div v-if="status === 1">
      <div class="search-hot-title">热搜榜</div>
      <ul class="search-hot-box"  @click="search">
        <li class="search-hot-text" v-for="(item, index) in hotList" :key="index" :data-text="item.search_text"><span>{{index + 1}}</span>{{item.search_text}}</li>
      </ul>
    </div>
    <!-- 搜索中状态 -->
    <ul class="search-list-box" v-if="status === 2" @click="search">
      <li class="search-list-item" v-for="item in allList" :key="item.id" :data-text="item.videotitle ? item.videotitle : item.livetitle ? item.livetitle : item.nickname">{{item.videotitle ? item.videotitle : item.livetitle ? item.livetitle : item.nickname}}</li>
    </ul>
    <!-- 已搜索状态 -->
    <div v-if="status === 3">
      <van-tabs v-model="active" class="search-tabs">
        <van-tab title="全部">
          <div>
            <div class="cell-title" @click="activeChange(1)"><span>相关主播</span><van-icon name="arrow"/></div>
            <ul class="search-host-box">
              <li v-for="item in host.slice(0, 4)" :key="item.id" class="search-host-item">
                <van-image  class="search-host-logo" round :src="item.headicon"/>
                <span class="search-host-nickname">{{item.nickname}}</span>
              </li>
            </ul>
          </div>
          <div>
            <div class="cell-title" @click="activeChange(2)"><span>相关直播</span><van-icon name="arrow"/></div>
            <live-item v-for="(item, index) in live.slice(0, 4)" :key="item.id" :index="index" type="live" :corve="item.coverimg" :name="item.ctgname"  :bottomTitle="item.livetitle" :hot="item.hot" />
          </div>
          <div>
            <div class="cell-title" @click="activeChange(3)"><span>相关视频</span><van-icon name="arrow"/></div>
            <live-item v-for="(item, index) in video.slice(0, 4)" :key="item.id" :index="index" type="video" :corve="item.coverimg"  :bottomTitle="item.videotitle" :comments="item.ctgid" :count="item.hot" :time="item.videoduration"/>
          </div>
        </van-tab>
        <van-tab title="主播">
          <ul class="all-host-list">
            <li class="all-host-item" v-for="item in host" :key="item.id">
              <van-image class="all-host-logo" round :src="item.headicon"/>
              <div class="all-host-nickname">{{item.nickname}}</div>
              <div class="all-host-followers">{{item.roomid}}人关注</div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="直播">
          <live-item v-for="(item, index) in live" :key="item.id" :index="index" type="live" :corve="item.coverimg" :name="item.ctgname"  :bottomTitle="item.livetitle" :hot="item.hot" />
        </van-tab>
        <van-tab title="视频">
           <live-item v-for="(item, index) in video" :key="item.id" :index="index" type="video" :corve="item.coverimg"  :bottomTitle="item.videotitle" :comments="item.ctgid" :count="item.hot" :time="item.videoduration"/>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import main from './index.js';
export default main;
</script>
<style lang="stylus">
@import './index.styl'
</style>
