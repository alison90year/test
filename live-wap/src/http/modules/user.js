import http from '../core';

const user_reg = (data = {}) => http.post(`/user/f/register.api`, data);
const phoneLogin = (data = {}) => http.post(`/user/login/f/login.api`, data);
const phoncode = (data = {}) =>
  http.post(`/user/sms/f/send-login-sms.api`, data);
const getSalt = (data = {}) =>
  http.post(`/user/common/f/get-salt-str.api`, data);
const getImage = (data = {}) =>
  http.post(`/user/common/f/get-validate-code.api`, data);
// 个人中心 我的信息
const ugetUser = (data = {}) => http.post(`/user/f/get-user.api`, data);
// 个人中心  获取主播信息
const ugetVlog = (data = {}) => http.post(`/user/f/get-anchor.api`, data);
// 个人中心 修改昵称
const ueditName = (data = {}) => http.post(`/user/f/update-nickname.api`, data);
// 个人中心 修改头像
const ueditPro = (data = {}) => http.post(`/user/f/update-head-pic.api`, data);
// 个人中心 修改密码 --验证手机
const uPassVerify = (data = {}) =>
  http.post(`/user/f/reset-pwd/vaididate-phone.api`, data);
// 个人中心 修改密码
const ueditPass = (data = {}) => http.post(`/user/f/update-pwd.api`, data);
// 登录注册 忘记密码
const forgetPass = (data = {}) =>
  http.post(`/user/f/update-pwd-by-find.api`, data);
// 个人中心 绑定邮箱接口
const ueditEmail = (data = {}) => http.post(`/user/f/bind-email.api`, data);
// 个人中心 邮件验证码发送
const usendEmail = (data = {}) =>
  http.post(`/user/email/f/send-login-email.api`, data);
// 个人中心 头像上传
const uuploadImg = (data = {}, config = {}) =>
  http.post(`/upload/f/upload.api`, data, config);
// 个人中心 头像上传
const uuploadImg2 = (data = {}, config = {}) =>
  http.post(`/upload/f/upload-for-object.api`, data, config);
// 个人中心 站内信
const uLetter = (data = {}) => http.post(`/user/f/sitemessage/all`, data);
// 个人中心 关注列表
const uGetFallow = (data = {}) =>
  http.post(`/user/f/attention/queryAttentionList.api`, data);
// 个人中心 取消关注接口
const setAttention = (data = {}) =>
  http.post(`/user/f/attention/doAttentionUser.api`, data);
// 个人中心 消费记录 - 列表展示
const ugetCList = (params = {}) =>
  http.get(`/mall/f/account-flow/find-api-consume-record-list.api`, {
    params
  });
// 个人中心-我的特权 房间管理-操作记录
const roomMyTileRecord = (params = {}) =>
  http.get(`/live/f/manager/query-forbid-speaking.api`, {
    params
  });
// 个人中心-我的特权 房间管理-列表展示
const roomMyTileList = (params = {}) =>
  http.get(`/live/f/manager/room-manager-list.api`, {
    params
  });
// 个人中心 绑定手机接口
const uBindPhone = (data = {}) => http.post(`/user/f/bind-phone.api`, data);
// 个人中心  请求任务列表
const getTasklist = (data = {}) =>
  http.post(`/task/f/task/query_task_details.api`, data);
// 个人中心 领取任务奖励
const getTaskStatus = (data = {}) =>
  http.post(`/task/f/task/receive_task_rewards.api`, data);
// 个人中心 完成任务(前端调用)
const doTask = (data = {}) => http.post(`/task/f/task/complete-task.api`, data);
// 发起提现-收益
const getrevenueinfo = (params = {}) =>
  http.get(`/mall/f/settle/query-revenue.api`, {
    params
  });
// 发起提现-收益
const getrevenue = (data = {}) =>
  http.post(`/mall/f/settle/approve-revenue.api`, data);
// 充值接口
const charge = (data = {}, config = {}) =>
  http.post(`/mall/f/pay/order.api`, data, config);
// 个人中心-充值中心信息查询
const getpayinfo = (data = {}) =>
  http.post(`mall/f/personal/query-pay-info.api`, data);
// 主播中心-直播收益 查询当前用户银行卡
const uvgetBank = (params = {}) =>
  http.get(`/mall/f/bank-card/card.api`, {
    params
  });
// 主播中心-直播收益 礼物记录展示
const vgetClosureRecord = (params = {}) =>
  http.get(`/mall/f/settle/host-settle-record/page.api`, {
    params
  });
const vgetGiftRecord = (params = {}) =>
  http.get(`/live/f/gift/get-gift-list.api`, {
    params
  });
// 主播中心-我的房管 房管列表展示
const vMyRoomMList = (data = {}) =>
  http.post(`/live/f/manager/host-room-Manager-list.api`, data);
// 主播中心-我的房管 操作记录展示
const vMyRoomOMList = (data = {}) =>
  http.post(`/live/f/manager/host-room-Manager-OprateRecord.api`, data);
// 主播中心-我的房管-添加房管
const addManager = (data = {}) =>
  http.post(`/live/f/manager/add-room-manager.api`, data);
// 主播中心-我的房管 房间管理-卸任
const roomMyTileCancel = (data = {}) =>
  http.post(`/live/f/manager/cancel-room-manager.api`, data);
// 主播中心-我的房管 房间管理-操作记录-撤销禁言
const roomRmoveForbid = (data = {}) =>
  http.post(`/live/f/manager/cancel-forbid-speaking.api`, data);
// 主播中心-直播收益 用户绑定银行卡
const uvBindBank = (data = {}) => http.post(`/mall/f/bank-card/bind.api`, data);
// 主播中心-主播申请直播认证
const uvVerify = (data = {}) =>
  http.post(`/user/f/update/host-apply-live.api`, data);
// 主播中心-主播申请直播认证 - 手机验证码认证
const uvVerphone = (data = {}) =>
  http.post(`/user/f/sms/host-apply-live.api`, data);
// 主播中心-直播数据 直播时长展示/查询
const getLiveData = (data = {}) =>
  http.post(`/live/f/live/time-record.api`, data);
// 主播中心-直播数据 龙币收益展示/查询
const getXBData = (params = {}) =>
  http.get(`/live/f/gift/day-revenue.api`, {
    params
  });
// 主播中心-直播数据 龙币收益展示/查询
const getFanData = (data = {}) => http.post(`/live/f/live/dayFans.api`, data);
// 主播中心-直播设置 保存开播设置
const vSetting = (data = {}) => http.post(`/live/f/live/setting.api`, data);
// 主播中心-直播设置-开播状态
const anchorStatus = (data = {}) => http.post(`/live/f/live/status.api`, data);
// 转移图片至正式库
const movePic = (params = {}) =>
  http.get(`/upload/f/update-pic.api`, {
    params
  });
// 主播中心-直播设置 -房间设置-原有配置展示
const getSetting = (params = {}) =>
  http.get(`/live/f/live/setting-record.api`, {
    params
  });
// 直播设置 -保存房间设置
const setRoom = (data = {}) =>
  http.post(`/live/f/room/update-room-setting.api`, data);
// 直播设置-结束直播
const endRoom = (data = {}) => http.post(`/live/f/live/endLive.api`, data);
// 直播监控 - 提交解禁申请
const toQueyForbid = (data = {}) =>
  http.put(`/live/f/monitor/enable-apply.api`, data);
// 主播中心-直播设置 -房间设置-原有配置展示
const getPull = (params = {}) =>
  http.get(`/live/f/room/push-url.api`, {
    params
  });

export default {
  movePic,
  ugetVlog,
  getPull,
  toQueyForbid,
  endRoom,
  user_reg,
  phoneLogin,
  phoncode,
  getSalt,
  getImage,
  uvgetBank,
  uvBindBank,
  ugetUser,
  ueditName,
  ueditPro,
  ueditPass,
  ueditEmail,
  usendEmail,
  uuploadImg,
  uuploadImg2,
  uvVerify,
  uvVerphone,
  uLetter,
  ugetCList,
  uGetFallow,
  setAttention,
  uBindPhone,
  uPassVerify,
  getLiveData,
  getXBData,
  getFanData,
  vMyRoomMList,
  vSetting,
  getSetting,
  vgetClosureRecord,
  vgetGiftRecord,
  vMyRoomOMList,
  setRoom,
  addManager,
  roomMyTileCancel,
  roomRmoveForbid,
  roomMyTileRecord,
  roomMyTileList,
  charge,
  getpayinfo,
  getTaskStatus,
  doTask,
  getrevenue,
  getrevenueinfo,
  forgetPass,
  anchorStatus,
  getTasklist
};