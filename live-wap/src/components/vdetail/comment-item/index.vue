<template>
  <div class="comment-item-box">
    <van-image class="logo" round src="https://img.yzcdn.cn/vant/cat.jpeg"/>
    <div class="right-box">
      <div class="top">
        <div class="info-box">
          <span class="nick-name">大魔王</span>
          <span class="del-btn">删除</span>
        </div>
        <div class="comment-text-box intro-content">
          <div class="comment-text" ref="text">物矩物矩评论抽两个老宝贝宝贝送礼物物矩评论抽两个老宝贝宝贝送礼物物矩评论抽两个老宝贝宝贝送礼物评论抽两个老宝贝宝贝送礼物</div>
          <div class="showMore" style="display:none">展开</div>
        </div>
      </div>
      <div class="bottom">
        <div class="time">11-16 18:01</div>
        <div class="icon">
          <img :src="require('@/assets/images/video/icon_dz@2x.png')">
          <span class="count">14</span>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import commentItem from './index';
export default commentItem;
</script>

<style lang="stylus">
@import './index.styl';
</style>