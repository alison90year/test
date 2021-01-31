<template>
  <div class="live-play-box" @click.stop="close()">
    <div class="player-box posre" :style="liveInfo.living ? '' : 'padding-top: 56.25%;'">
        <div class="playerbox wh100" id="player">
          <paly-control v-if="isData" :liveInfo="liveInfo" :player="player" @toShare="toShare"/>
        </div>
      </div>
    <div class="tab-box">
      <van-tabs v-model="active" class="live-tabs">
        <van-tab title="聊天"></van-tab>
        <van-tab title="主播"></van-tab>
      </van-tabs>
      <div :class="['tab-attention-btn', isAttention === 1 ? 'attention' : '']" @click="setAtt">
        <span class="btn-text">{{ isAttention === 2 ? '+关注' : '已关注'}} </span>
        <span class="btn-count">4.3万</span>
      </div>
    </div>
    <div class="van-hairline--top"></div>
    <div class="chat-box" v-if="active === 0">
      <div class="system-chat">
        <img class="logo" :src="require('../../assets/images/live/icon_xtxx@2x.png')">
        <span class="title">系统消息：</span>
        <span class="text">{{allNotice}}</span>
      </div>
      <div class="user-chat" v-for="(item, index) in msgList" :key="item.name + index">
        <img class="logo" src="sss">
        <span class="username">{{item.name}}</span>
        <span class="usertext">{{item.content}}</span>
      </div>
      <div v-show="!isReward" class="bottom-btn-box">
        <van-field class="inp-box" v-model="msgValue" :disabled="msgauth" center placeholder="发个弹幕吧~" maxlength="30">
          <template #button>
            <van-button size="small" type="primary" @click.stop="sendMsg">发送</van-button>
          </template>
        </van-field>
        <div class="icon-btn" @click.stop="reward">
          <img :src="require('../../assets/images/live/icon_lwtb@2x.png')">
        </div>
      </div>
      <div v-show="isReward" class="reward-box" @click.stop="() => {}">
        <div class="top">赠送一个小礼物，助力主播挣榜~</div>
        <div class="gift-box van-hairline--top-bottom">
          <div class="gift-position">
            <div class="gift-item" v-for="item in rewardLsit" :key="item.propId">
              <div :class="['giftIcon-box', giftInfo.propId === item.propId ? '' : 'giftInfo']" :style="{backgroundImage: 'url(' + item.giftIcon + ')',backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}"  @click.stop="giftInfo=item"></div>
              <div class="propName">{{item.propName}}</div>
              <div class="price">{{item.price}}龙币</div>
            </div>
          </div>
        </div>
        <div class="bottom-box">
          <div class="balance">
            <div class="count">
              <img class="icon" :src="require('../../assets/images/user/icon_ye.png')">
              <span class="text">{{balance}}</span>
            </div>
            <div class="recharge" @click="toRechargePage">充值</div>
          </div>
          <div class="btn-box">
            <div class="sele-box" @click.stop="isSele = !isSele">
              <span class="giftNum">{{giftNum}}</span>
              <img class="arrow-icon" :src="require(isSele ?`../../assets/images/live/lwxl_shouqi@2x.png` : '../../assets/images/live/lwxl_zhankai@2x.png')">
            </div>
            <div class="send-btn" @click.stop="sendGift">发送</div>
            <div class="arrow-sele" v-show="isSele">
              <div @click.stop="seleGift(1)" :class="['arrow-sele-item', 'van-hairline--top' ,giftNum === 1 ? 'arrow-sele-active' : '']">1</div>
              <div @click.stop="seleGift(10)" :class="['arrow-sele-item', 'van-hairline--top' ,giftNum === 10 ? 'arrow-sele-active' : '']">10</div>
              <div @click.stop="seleGift(66)" :class="['arrow-sele-item', 'van-hairline--top' ,giftNum === 66 ? 'arrow-sele-active' : '']">66</div>
              <div @click.stop="seleGift(99)" :class="['arrow-sele-item', giftNum === 99 ? 'arrow-sele-active' : '']">99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="host-info" v-if="active === 1">
      <div class="host-info-top">
        <div class="left">
          <van-image class="logo" round :src="liveInfo.hostHeadPicUrl" />
          <div class="text">
            <div class="name"> <span class="nick">{{liveInfo.hostNickName}}</span><img class="icon" :src="liveInfo.hostHeadPicUrl"> </div>
            <div class="count">粉丝数：{{'665万'}}</div>
          </div>
        </div>
        <div :class="['right', isAttention === 1 ? 'attentionRight' : '']" @click="setAtt">{{ isAttention === 2 ? '+关注' : '已关注'}}</div>
      </div>
      <div class="host-info-bottom">
        <div class="title">主播公告</div>
        <div class="text">{{liveInfo.room.notice}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import live from './index.js';
export default live;
</script>
<style lang="stylus">
@import "./index.styl";
</style>