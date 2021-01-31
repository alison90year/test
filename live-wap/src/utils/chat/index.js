import  'strophe.js';
let Strophe = require('strophe.js').Strophe;
let meStrophe = require('strophe.js');
let $iq = meStrophe.$iq;
let $msg = meStrophe.$msg;
let $pres = meStrophe.$pres;
import 'strophejs-plugin-register';
import Cookies from 'js-cookie';
import DPlayer from 'dplayer';
import 'xgplayer';
import FlvJsPlayer from 'xgplayer-flv.js';
let vm = null;
const sendThis = _this => {
  vm = _this;
};
let chatServer = {
  // XMPP服务器BOSH地址
  BOSH_SERVICE: '',
  // 房间JID
  affix: '@conference.izt4nhwkjw59e9rlelmoprz',
  ROOM_JID: '',
  // XMPP连接
  connection: null,
  // 当前状态是否连接
  connected: false,
  // 当前登录的JID
  jid: '',
  defaultJid: 'pt-usd2@conference.izt4nhwkjw59e9rlelmoprz',
  defaultConnection: null,
  username: '',
  level: 0,
  isOnline: false,
  useraccount: '',
  linkTimer: null,
  linkTimerStatus: false,
  // 连接状态改变的事件
  onConnect(status) {
    if (status == Strophe.Status.CONNFAIL) {
      console.log('连接失败！');
      if (vm.isLivepage) {
        vm.linkstatus = false;
      }
    } else if (status == Strophe.Status.AUTHFAIL) {
      console.log('登录失败！');
      // 账户授权失败处理
      if (vm.isLivepage) {
        vm.linkstatus = false;
      }
      regester.username = chatServer.useraccount;
      regester.initReg(chatServer.BOSH_SERVICE);
    } else if (status == Strophe.Status.CONNECTING) {
      console.log('正在连接！1111');
      chatServer.linkTimer = setTimeout(() => {
        if (!chatServer.linkTimerStatus) {
          chatServer.connected = false;
          if (vm.isLivepage) {
            vm.linkstatus = false;
          }
        }
      }, 5000);
    } else if (status == Strophe.Status.DISCONNECTED) {
      console.log('连接断开！');
      chatServer.connected = false;
      if (vm.isLivepage) {
        vm.linkstatus = false;
      }
    } else if (status == Strophe.Status.CONNECTED) {
      console.log('连接成功，可以开始聊天了！');
      chatServer.linkTimerStatus = true;
      if (vm.isLivepage) {
        vm.linkstatus = true;
      }
      chatServer.connected = true;
      if (chatServer.defaultConnection) {
        // console.log('发现还有默认账号登录，需要将其登出，因为真正的账号上线啦');
        chatServer.exitsRoom(); // 登录后退出默认账户
      }
      if (!vm.isSetting) {
        chatServer.username = vm.userinfo.nickname
          ? vm.userinfo.nickname
          : vm.userinfo.phoneNum;
        chatServer.level = vm.userinfo.level ? vm.userinfo.level : 1;
      }
      // 当接收到<message>节，调用onMessage回调函数
      this.addHandler(chatServer.onMessage, null, 'message', null, null, null);
      // 首先要发送一个<presence>给服务器（initial presence）
      this.addHandler(chatServer.onPresence, null, 'presence');
      this.send($pres().tree());
      // 发送<presence>元素，加入房间
      chatServer.jid = this.jid;
      var pres = $pres({
        from: chatServer.jid,
        to:
          chatServer.ROOM_JID +
          '/' +
          chatServer.jid.substring(0, chatServer.jid.indexOf('@'))
      })
        .c('x', { xmlns: 'http://jabber.org/protocol/muc' })
        .tree();
      this.sendPresence(pres, chatServer.joinRoom, chatServer.errJoinRoom);
      // connection.sendIQ(pres);// 获取房间列表
      // 房间成员信息
      chatServer.roomItemInfo();
    }
  },
  // 默认游客连接改变的事件
  onDefaultConnect(status) {
    if (status == Strophe.Status.CONNFAIL) {
      console.log('连接失败！');
      if (vm.isLivepage) {
        vm.linkstatus = false;
      }
    } else if (status == Strophe.Status.AUTHFAIL) {
      console.log('登录失败！');
      if (vm.isLivepage) {
        vm.linkstatus = false;
      }
      regester.regDefault(chatServer.BOSH_SERVICE);
    } else if (status == Strophe.Status.DISCONNECTED) {
      console.log('连接断开！');
      chatServer.connected = false;
      if (vm.isLivepage) {
        vm.linkstatus = false;
      }
    } else if (status == Strophe.Status.CONNECTING) {
      console.log('正在连接！1111');
    } else if (status == Strophe.Status.CONNECTED || status === undefined) {
      console.log('连接成功2222，可以开始聊天了！');
      if (vm.isLivepage) {
        vm.linkstatus = true;
      }
      chatServer.defaultJid = this.jid;
      this.addHandler(chatServer.onMessage, null, 'message', null, null, null);
      this.addHandler(
        chatServer.onPresence,
        null,
        'presence',
        null,
        null,
        null
      );
      this.send($pres().tree());
      this.sendPresence(
        $pres({
          from: chatServer.defaultJid,
          to:
            chatServer.ROOM_JID +
            '/' +
            chatServer.defaultJid.substring(
              0,
              chatServer.defaultJid.indexOf('@')
            ) +
            'nick'
        })
          .c('x', { xmlns: 'http://jabber.org/protocol/muc' })
          .tree(),
        chatServer.joinRoom,
        chatServer.errJoinRoom
      );
    }
    // 房间成员信息
    // chatServer.roomItemInfo();
  },
  // 接收到<message>
  onMessage(msg) {
    if (vm.isSetting) return true; // 如果是在直播设置页，结束函数执行
    // 解析出<message>的from、type属性，以及body子元素
    let from = msg && msg.getAttribute('from');
    let type = msg && msg.getAttribute('type');
    let to = msg && msg.getAttribute('to');
    let livestatus = msg.getElementsByTagName('start');
    let body = msg.getElementsByTagName('body');
    let level = msg.getElementsByTagName('level')[0];
    let name = msg.getElementsByTagName('name')[0];
    let giftid = msg.getElementsByTagName('giftid')[0];
    let jinyan = msg.getElementsByTagName('jinyan')[0];
    let setnewtitle = msg.getElementsByTagName('setnewtitle')[0];
    let subject = msg.getElementsByTagName('subject')[0];
    if (type === 'groupchat' && subject) {
      // vm.firstRoom(to.split('@')[0] + '进入房间');
    }
    if (type === 'groupchat' && livestatus.length > 0) {
      vm.onLiveToggle(Strophe.getText(livestatus[0]));
    }
    if (type === 'groupchat' && giftid) {
      let num = msg.getElementsByTagName('num')[0];
      let dur = msg.getElementsByTagName('dur')[0];
      let showtype = msg.getElementsByTagName('show')[0];
      let data = {
        type: 'gift',
        giftid: Strophe.getText(giftid),
        level: Strophe.getText(level),
        num: Strophe.getText(num),
        name: Strophe.getText(name),
        duration: Strophe.getText(dur),
        showtype: Strophe.getText(showtype)
      };
      vm.onSendgift(data);
    }
    if (type === 'groupchat' && jinyan) {
      vm.onForbid(Strophe.getText(jinyan));
    }
    if (type === 'groupchat' && setnewtitle) {
      vm.onSetNewTile(Strophe.getText(setnewtitle));
    }
    if (type === 'groupchat' && body.length > 0) {
      let role = msg.getElementsByTagName('role')[0];
      let id = msg.getElementsByTagName('id')[0];
      let data = {
        type: 'msg',
        content: Strophe.getText(body[0]),
        level: Strophe.getText(level),
        name: Strophe.getText(name),
        role: Strophe.getText(role),
        id: Strophe.getText(id)
      };
      vm.onListenMsg(data);
    }
    return true;
  },
  //
  onPresence(presence) {
    if (!vm.isLivepage) return true;
    let items = presence.getElementsByTagName('item');
    let status = presence.getElementsByTagName('status');
    let type = presence.getAttribute('type');
    if (type && type == 'unavailable') {
      if (!items[0]) return true;
      var jidUser = items[0].getAttribute('jid');
      vm.firstRoom(jidUser.split('@')[0] + '离开房间');
    } else if (items.length > 0 && status.length == 0) {
      var username = items[0].getAttribute('jid');
      vm.firstRoom('欢迎' + username.split('@')[0] + '进入房间');
    }
    return true;
  },
  initChat(params, roomid, liveid, url) {
    this.BOSH_SERVICE = `${url}/http-bind/`;
    if (!this.connected) {
      this.useraccount = params.name;
      this.ROOM_JID = roomid + chatServer.affix;
      this.connection = new Strophe.Connection(this.BOSH_SERVICE);
      console.log(this.connection, `${params.name}${this.affix}/${liveid}`);
      this.connection.connect(
        `${params.name}${this.affix}/${liveid}`,
        '123456',
        this.onConnect
      );
    }
    return;
  },
  // 创建默认
  initDefault(params, roomid, url) {
    this.BOSH_SERVICE = `${url}/http-bind/`;
    this.ROOM_JID = roomid + chatServer.affix;
    this.defaultConnection = new Strophe.Connection(this.BOSH_SERVICE);
    this.defaultConnection.connect(
      `${params.name}${this.affix}`,
      '123456',
      this.onDefaultConnect
    );
    return;
  },
  // 开播
  onLiveStart() {
    if (chatServer.connected) {
      let msg = $msg({
        to: this.ROOM_JID,
        from: this.jid,
        type: 'groupchat'
      })
        .c('start', '1')
        .up();
      var c = this.getConnection();
      c.send(msg.tree());
    }
  },
  // 关播
  onLiveEnd() {
    if (chatServer.connected) {
      let msg = $msg({
        to: this.ROOM_JID,
        from: this.jid,
        type: 'groupchat'
      })
        .c('start', '0')
        .up();
      var c = this.getConnection();
      c.send(msg.tree());
    }
  },
  // 修改标题
  onLiveSet() {
    if (chatServer.connected) {
      let msg = $msg({
        to: this.ROOM_JID,
        from: this.jid,
        type: 'groupchat'
      })
        .c('setnewtitle', '1')
        .up();
      var c = this.getConnection();
      c.send(msg.tree());
    }
  },
  // 发送消息
  onSendMsg(params, user, id, level) {
    if (chatServer.connected) {
      let msg = $msg({
        to: this.ROOM_JID,
        from: this.jid,
        type: 'groupchat'
      })
        .c('body', null, params)
        .c('name', this.username)
        .up()
        .c('level', level)
        .up()
        .c('role', user)
        .up()
        .c('id', id)
        .up();
      var c = this.getConnection();
      c.send(msg.tree());
    }
  },
  // 禁言
  forBiduser(id) {
    if (chatServer.connected) {
      let msg = $msg({
        to: this.ROOM_JID,
        from: this.jid,
        type: 'groupchat'
      })
        .c('jinyan', null, id)
        .up();
      var c = this.getConnection();
      c.send(msg.tree());
    }
  },
  // 发送礼物
  onSendGiftintoGroup(id, num, dur, showtype) {
    if (chatServer.connected) {
      let msg = $msg({
        to: this.ROOM_JID,
        from: this.jid,
        type: 'groupchat'
      })
        .c('giftid', null, id)
        .c('name', this.username)
        .up()
        .c('level', this.level)
        .up()
        .c('dur', dur)
        .up()
        .c('num', num)
        .up()
        .c('show', showtype)
        .up();
      var c = this.getConnection();
      c.send(msg.tree());
    }
  },
  getConnection() {
    var c = this.connection || this.defaultConnection;
    if (this.jid === this.defaultJid) {
      c = this.defaultConnection;
    }
    return c;
  },
  // 退出房间
  exitsRoom(isLogin) {
    if (isLogin) {
      this.defaultConnection.send(
        $pres({
          from: this.defaultJid,
          to:
            this.ROOM_JID +
            '/' +
            this.defaultJid.substring(0, this.defaultJid.indexOf('@')) +
            'nick',
          type: 'unavailable'
        })
      );
    } else {
      this.connection.send(
        $pres({
          from: this.jid,
          to:
            this.ROOM_JID +
            '/' +
            this.jid.substring(0, this.jid.indexOf('@')) +
            'nick',
          type: 'unavailable'
        })
      );
    }
  },
  joinRoom(presence) {
    var items = presence.getElementsByTagName('item');
    var role = items[0].getAttribute('role');
    if (role == 'moderator') {
      console.log('房间猪脚');
      // 创建房间
      chatServer.createRoom();
    }
  },
  errJoinRoom(presence) {
    console.log(presence);
    var conflict = presence.getElementsByTagName('conflict');
    if (conflict.length > 0) {
      console.log('用户昵称已存在');
    }
  },
  createRoom() {
    var roomInfoIq = $iq({
      to: this.ROOM_JID,
      from: this.jid,
      type: 'set',
      id: 'create'
    })
      .c('query', { xmlns: 'http://jabber.org/protocol/muc#owner' })
      .c('x', { xmlns: 'jabber:x:data', type: 'submit' })
      .c('field', { var: 'muc#roomconfig_maxusers' })
      .c('value', null, 10000);
    var c = this.getConnection();
    c.sendIQ(
      roomInfoIq.tree(),
      function(iq) {
        console.info(iq);
        if (!iq || iq.length == 0) return;
      },
      function(err) {
        console.log('创建房间失败！' + err);
        console.info(err);
      }
    );
  },
  // 离开页面断开连接
  closeLink() {
    if (
      (this.defaultConnection && this.defaultConnection.connected) ||
      (this.connection && this.connection.connected)
    ) {
      this.connection &&
        (this.connection.disconnect(), (this.connection = null));
      this.defaultConnection &&
        (this.defaultConnection.disconnect(), (this.defaultConnection = null));
    }
  },
  // 房间人数统计
  roomItemInfo() {
    var roomUsersInfoIq = $iq({
      to: this.ROOM_JID,
      from: this.jid,
      type: 'get'
    }).c('query', { xmlns: Strophe.NS.DISCO_ITEMS });
    var c = this.getConnection();
    c.sendIQ(
      roomUsersInfoIq.tree(),
      function(iq) {
        if (!iq || iq.length == 0) return;
        var items = iq.getElementsByTagName('item');
      },
      function(err) {
        console.log('获取房间用户信息失败！' + err);
      }
    );
  }
};
// 注册版块儿
let regester = {
  connection: null,
  username: '',
  getdefault(status) {
    if (status === Strophe.Status.REGISTER) {
      regester.connection.register.fields.username = regester.username = new Date().getTime();
      regester.connection.register.fields.name = new Date().getTime();
      regester.connection.register.fields.password = '123456';
      regester.connection.register.submit();
    } else if (status === Strophe.Status.REGISTERED) {
      Cookies.set('defaultAccount', regester.username);
      console.log('为游客注册对应账号，现在注册默认账号，并存进cookie');
      // regester.connection.authenticate();
      // console.log(regester.connection.register);
      vm.isReged = true;
    }
    // else if (status === Strophe.Status.CONNECTED) {
    //     console.log("logged in!");
    //     console.log(regester.connection);
    // }
  },
  callback(status) {
    if (status === Strophe.Status.REGISTER) {
      regester.connection.register.fields.username = regester.username;
      regester.connection.register.fields.name = new Date().getTime();
      regester.connection.register.fields.password = '123456';
      regester.connection.register.submit();
    } else if (status === Strophe.Status.REGISTERED) {
      console.log('registered!');
    }
  },
  // 注册
  initReg(url) {
    regester.connection = new Strophe.Connection(`${url}`);
    regester.connection.register.connect(
      'conference.izt4nhwkjw59e9rlelmoprz',
      this.callback,
      60,
      1
    );
  },
  // 注册默认账号
  regDefault(url) {
    regester.connection = new Strophe.Connection(`${url}`);
    regester.connection.register.connect(
      'conference.izt4nhwkjw59e9rlelmoprz',
      this.getdefault,
      60,
      1
    );
  }
};
let setPlayer = {
  initHomePlayer(id, url) {
    vm.player = new FlvJsPlayer({
      id: id,
      autoplay: true,
      fluid: true,
      isLive: true,
      url,
      flvOptionalConfig: {
        type: 'flv'
      }
    });
    setPlayer.checkDom();
  },
  checkDom() {
    let timer1 = null,
      htmls = 1;
    document.querySelector('.xgplayer-enter-spinner').innerHTML = '';
    timer1 = setInterval(() => {
      if (document.querySelector('.xgplayer-loading')) {
        document.querySelector('.xgplayer-loading').innerHTML = '';
        htmls = 3;
      }
      if (htmls === 3) {
        clearInterval(timer1);
        timer1 = null;
      }
    }, 1000);
  },
  initPlayer(params, url) {
    vm.player = new FlvJsPlayer({
      id: params,
      autoplay: true,
      fluid: true,
      isLive: true,
      lang: 'zh-cn',
      danmu: { closeDefaultBtn: true },
      controls: false,
      url,
      flvOptionalConfig: {
        type: 'flv'
      }
    });
    // setPlayer.checkDom();
    vm.player.on('error', function(err) {
      vm.player.destroy();
      vm.$toast('流地址请求错误，请刷新试试');
    });
    let canvas = document.createElement('canvas');
    canvas.id = 'canvasBarrage';
    document.getElementById(params).appendChild(canvas);
    vm.initdanmu();
    let timer2 = null;
    timer2 = setInterval(() => {
      if (document.querySelector('.danmu-switch')) {
        document.querySelector('.danmu-switch').onclick = e => {
          if (
            document
              .querySelector('.danmu-switch')
              .classList.contains('danmu-switch-active')
          ) {
            document.querySelector('#canvasBarrage').style.display = 'block';
          } else {
            document.querySelector('#canvasBarrage').style.display = 'none';
          }
        };
        clearInterval(timer2);
        timer2 = null;
      }
    }, 1000);
  },
  initMp4Player(params, url) {
    vm.player = new DPlayer({
      container: document.getElementById(params),
      autoplay: true,
      video: {
        url: url,
        type: 'mp4'
      }
    });
  }
};
export { chatServer, sendThis, regester, setPlayer };
