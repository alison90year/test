import { chatServer, sendThis, setPlayer, regester } from '@/utils/chat/index.js';
import {CanvasBarrage} from '../../utils/canvasDamu';
import { Tab, Tabs, Button, Image as VanImage, Field, Icon, ShareSheet  } from 'vant';
import Cookies from 'js-cookie';
import { APIs } from '../../http';
import palyControl from '../../components/play-control/index';
export default {
  name: 'live',
  components:{
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Button.name]: Button,
    [VanImage.name]: VanImage,
    [Field.name]: Field,
    [Icon.name]: Icon,
    [ShareSheet.name]: ShareSheet,
    palyControl
  },
  data() {
    return {
      player: null, // 播放器对象
      active: 0, // tab切换
      liveInfo: {// 直播信息
        room:{
          notice:''
        }
      },  
      isData: false, // 有数据了
      msgValue: '', // 输入框消息
      barrage: null, // 弹幕对象
      msgList: [], // 消息列表
      userinfo:{}, // 用户信息
      balance: 0, // 余额
      allNotice:'', // 房间通知
      isReward: false, // 是否打开礼物页面
      giftNum: 1, // 礼物数量
      rewardLsit: [], // 礼物列表
      isSele: false, // 是否显示选择礼物数量
      giftInfo: {}, // 选择礼物的信息
      msgauth: false, // 是否禁言
      isAttention: 2, // 是否关注 2 未关注
      isLivepage: true,
      scaleWrapStyle: 'transform: rotate(0); -webkit-transform: rotate(0)'
      // showShare: false, //展开分享面板
      // options: [
      //   {name: 'QQ空间', icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png'},
      //   {name: 'QQ', icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png'},
      //   {name: '微博', icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png'},
      //   {name: '朋友圈', icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png'},
      //   {name: '微信', icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png'},
      //   {name: '复制链接', icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png'},
      // ],
    };
  },
  created() {
    this.getLiveInfo(this.$route.params.id);
    sendThis(this);
    this.userinfo = JSON.parse(sessionStorage.getItem('token'));
    if(this.userinfo !== 0) {
      this.getAcount();
      this.checkUserStatus();
    }
    this.getNotice();
  },
  methods: {
    // 查看余额
    getAcount() {
      APIs.getBalance().then(res => {
        this.balance = res.data;
      });
    },
    // 进入/离开房间
    firstRoom(params) {
      this.msgList.push({ type: 'presence', name: params });
      setTimeout(() => {
        document.querySelector(`#w${params}`) &&
          document
            .querySelector('.msglist')
            .removeChild(document.querySelector(`#w${params}`).parentNode);
      }, 10000);
    },
    // 获取拉流地址
    getPullAd(id) {
      setPlayer.initPlayer('player', this.liveInfo.pullUrl);
    },
    // 获取直播信息
    getLiveInfo(roomId) {
      APIs.getliveInfo({roomId}).then(res =>{
        if (res.data.code === '520') {
          this.$toast('该用户已经被禁播了哦~~~');
          return false;
        }
        if (res.data.code === '521') {
          this.$toast('该房间不存在哦~~~');
          return false;
        }
        // this.treeList = res.data.treeList;
        // this.treeList !== null ? this.getRecommend({ ctgId: this.treeList.ctgId }) : this.getRecommend({ ctgName: '体育' });
        this.isData = true;
        this.liveInfo = res.data;
        if(this.userinfo !== 0) {
          this.checkAtt();
        }
        if (this.liveInfo.living) {
          this.getPullAd(roomId);
        }
        this.initChats();
      });
    },
    // 查看用户是否被禁言 同时处理用户的权限
    checkUserStatus() {
      APIs.checkIfmsgAllowed({roomId: this.$route.params.id, userId: this.userinfo.userId}).then(res => {
        this.msgauth = res.data;
      });
    },
    // 初始化聊天室
    initChats() {
      APIs.getChatAddre().then(res => {
        // regester.regDefault(res.data + '/http-bind/');
        if (this.userinfo.phoneNum) {
          chatServer.initChat(
            { name: this.userinfo.phoneNum },
            this.$route.params.id,
            this.liveInfo.living ? this.liveInfo.live.liveId : null,
            res.data
          );
        } else {
          chatServer.initDefault(
            { name: Cookies.get('defaultAccount') },
            this.$route.params.id,
            res.data
          );
        }
      });
    },
    // 初始化弹幕
    initdanmu() {
      let canvasEle = document.querySelector('canvas');
      var dataBarrage = [{ value: '', time: 1 }];
      this.barrage = new CanvasBarrage(canvasEle, this.player.video, {
        data: dataBarrage
      });
    },
    // 监听收到消息
    onListenMsg(params) {
      console.log(this.player.controls);
      if(!this.player.fullscreen) {
        this.barrage && this.barrage.add({ value: params.content, time: 5 });
      }     
      this.msgList.push({
        level: params.level,
        name: params.name,
        content: params.content,
        role: params.role,
        id: params.id
      });
    },
    // 获取房间通知
    getNotice() {
      APIs.allnotice().then(res => {
        this.allNotice = res.data.substring(5);
      });
    },
    // 设置/取消关注
    setAtt() {
      if (this.userinfo === 0) {
        this.toLogin();
        return;
      }
      if (this.userinfo.userId === this.liveInfo.room.belongHost) {
        return this.$toast('不可以关注自己哦');
      }
      APIs.setAttention({
        userId: this.userinfo.userId,
        attentionUser: this.liveInfo.room.belongHost
      }).then(res => {
        // this.getInfo();
        this.checkAtt();
        this.isAttention = res.data;
      });
    },
    // 查看关注状态
    checkAtt() {
      if (this.userinfo === 0) return;
      APIs.checkAttention({
        userId: this.userinfo.userId,
        attentionUser: this.liveInfo.room.belongHost
      }).then(res => {
        this.isAttention = res.data;
      });
    },
    // 发言
    sendMsg() {
      if(this.userinfo === 0 && !this.userinfo.phoneNum) {
        this.toLogin();
        return;
      }
      if (this.msgValue.trim() === '') return;
      if (this.msgauth || this.liveInfo.room.speaking) {
        this.msgValue = '';
        // return this.$message({
        //   content: this.msgauth ? '您已经被禁言' : '全体禁言中'
        // });
      }
      let level = (this.userinfo.userGradle && this.userinfo.userGradle.gradle) ||  this.userinfo.gradle ||  0;
      chatServer.onSendMsg(
        this.msgValue,
        this.userRole ? 1 : 2,
        this.userinfo.userId,
        level.toString()
      );
      // setHot({ liveId: this.liveInfo.live.liveId, type: 2, count: 1 }).then( res => { this.hotNumber = res.data.data; } );
      this.msgValue = '';
    },
    // 分享功能
    toShare () {
      console.log(2222);
    },
    // 打开礼物列表组件
    reward() {
      this.isReward = !this.isReward;
      if(this.isReward) {
        this.getRewardList();
        this.seleGiftInfo = {};
      }
    },
    // 查询礼物列表
    getRewardList() {
      APIs.getRewardList({page: 1, size: 500}).then(res => {
        this.rewardLsit = res.data;
      });
    },
    // 选择礼物
    seleGift(val) {
      this.isSele = false;
      this.giftNum = val;
    },
    // 发送礼物
    sendGift() {
      this.isSele = false;
      if(this.balance < this.giftInfo.price) {
        this.$dialog.confirm({ title: '余额不足', message: '当前余额不足，是否去充值？'}).then(() => {
          this.toRechargePage(); 
        });
        return;
      }
      this.isReward = false;
      let params = { propId: this.giftInfo.propId, count: this.giftNum, liveId: this.liveInfo.live.liveId,  deviceCode: 'wap' };
      APIs.sendGiftapi(params).then(() => {
        this.getAcount();
        chatServer.onSendGiftintoGroup(this.giftInfo.propId, this.giftNum, this.giftInfo.duration, this.giftInfo.showType.toString());
      });
    },
    // 广播收到送礼物消息
    onSendgift(data) {
      console.log(data);
    },
    // 前往充值页面
    toRechargePage() {

    },
    // 前往登录页面
    toLogin() {

    },
    // 关闭所有弹框
    close() {
      this.isReward = false;
      this.giftInfo = {};
      this.isSele = false;
    }
  },
};