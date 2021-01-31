<template>
  <div class="vdetail-box">
    <div class="playerbox" id="playerbox"></div>
    <van-tabs v-model="active" class="vdetail-tabs">
      <van-tab><span slot="title" class="vdetail-tab-title">简介</span></van-tab>
      <van-tab><span slot="title" class="vdetail-tab-title">评论</span></van-tab>
    </van-tabs>
    <!-- 分割线 -->
    <div class="vdetail-line"></div>
    <!-- 简介页面信息 -->
    <div class="vdetail-introduction-box" v-if="active === 0">
      <!-- 主播信息和视频简介 -->
      <div class="vdetail-introduction-info">
        <!-- 主播信息 -->
        <div class="anchor-box">
          <div class="anchor-box-info">
            <van-image class="anchor-logo" round :src="videoinfo.hostAvatar"/>
            <div class="anchor-text-box">
              <div class="anchor-nickname">{{videoinfo.hostNickName}}</div>
              <div class="anchor-count">粉丝数：{{videoinfo.fansNumberOfCurUser}}粉丝</div>
            </div>
          </div>
          <van-button class="anchor-btn" type="primary" round size="mini">+关注</van-button>
        </div>
        <!-- 视频简介 -->
        <div class="vdetail-introduction-remark">{{videoinfo.title}}</div>
        <!-- 点赞数评论数和分享次数 -->
        <div class="vdetail-introduction-count">
          <div class="icon-box"><img :src="(require('../../assets/images/video/icon_dhl_dz@2x.png'))"><span>{{"876"}}</span></div>
          <div class="icon-box" @click="activeChange(1)"><img :src="(require('../../assets/images/video/icon_dhl_pl@2x.png'))"><span>{{"876"}}</span></div>
          <div class="icon-box"><img :src="(require('../../assets/images/video/icon_dhl_fx@2x.png'))"><span>{{"876"}}</span></div>
        </div>
      </div>
        <!-- 推荐视频 -->
      <div class="related-box">
        <div class="related-box-title">相关视频</div>
        <ul class="related-item-box">
          <li v-for="item in hotList" :key="item.videoId">
            <hot-video :data="item"/>
          </li>
        </ul>
      </div>
    </div>
    <!-- 评论页面信息 -->
    <div class="vdetail-comment-box" v-if="active === 1">
      <comment-item :data="{}" />
      <div class="inp-box">
        <van-field  v-model="commentVal" center placeholder="发个弹幕吧~" maxlength="200" >
          <template #button>
            <van-button size="small" type="primary" @click="findVideo(4)">发送</van-button>
          </template>
        </van-field>
      </div>
    </div>
  </div>
</template>

<script>
import vdetail from './index';
export default vdetail;
</script>

<style lang="stylus">
@import './index.styl';
</style>