import http from '../core';

// 视频页 - 热门视频列表/播放量统计
const vgetlist = (params = {}) =>
  http.get(`/live/f/videos/find-hot-video-list.api`, {
    params
  });
// 视频页 - 获取视频分类对象
const vgetType = (params = {}) =>
  http.get(`/live/f/videos/find-category-video-list.api`, {
    params
  });
// 视频页 -  足球/篮球/电竞/其他综合视频查询
const vgetTypelist = (params = {}) =>
  http.get(`/live/f/videos/find-video-list.api`, {
    params
  });
// 视频页   日榜 周榜  视频信息
const vgetrank = (params = {}) =>
  http.get(`/live/f/videos/find-day-or-week-list.api`, {
    params
  });
//  视频页 - 更多视频分页 - 最新上传/播放最多
const vgetMore = (params = {}) =>
  http.get(`/live/f/videos/find-more-video-list.api`, {
    params
  });
//  视频页 - 添加视频播放记录
const vpostview = (data = {}) =>
  http.post(`/live/f/play-record/add-play-record.api`, data);
//  视频页 -  视频详情页 - 相关/热门视频
const vgetHot = (params = {}) =>
  http.get(`/live/f/videos/find-about-or-hot-video-list.api`, {
    params
  });
// 视频页 -  视频详情页 获取一级评论
const vgetFComments = (params = {}) =>
  http.get(`/live/f/comments/find-comment.api`, {
    params
  });
//  视频页 -  视频详情页 - 获取二级级评论
const vgetSComments = (params = {}) =>
  http.get(`/live/f/comments/find-second-comments.api`, {
    params
  });
//  视频页 -  视频详情页 -  发布评论
const vsetComment = (data = {}) =>
  http.put(`/live/f/comments/post-comment.api`, data);
// 视频页 -  视频详情页- 根据视频ID查询视频信息
const vgetVinfo = (params = {}) =>
  http.get(`/live/f/videos/find-video-by-video-id.api`, {
    params
  });
// 查看是否关注
const checkAttention = (data = {}) =>
  http.post(`/user/f/attention/queryAttention.api`, data);
//   用户关注接口
const setAttention = (data = {}) =>
  http.post(`/user/f/attention/userAdd.api`, data);
//   用户取消关注接口
const unsetAttention = (data = {}) =>
  http.post(`/user/f/attention/attentionDel.api`, data);
// 快龙  热门主播
const xxgetHot = (params = {}) =>
  http.get(`/user/f/query/hot-host-list.api`, {
    params
  });
// 快龙 快龙首页 直播推荐
const xxgetRec = (params = {}) =>
  http.get(`/live/f/room/recommend.api`, {
    params
  });
// 快龙 快龙首页 快龙直播全部即分类查询
const xxgetType = (params = {}) =>
  http.get(`/live/f/room/page.api`, {
    params
  });
// 快龙 快龙首页 快龙直播全部即分类查询
const xxgetTypes = (params = {}) =>
  http.get(`/live/f/category/children.api`, {
    params
  });
// 快龙 快龙首页 快龙直播全部即分类查询
const xxgetRank = (params = {}) =>
  http.get(`/live/f/gift/host/top.api`, {
    params
  });
// 首页 节目预告
const hgetAnnoce = (params = {}) =>
  http.get(`/live/f/notice/query-show-list.api`, {
    params
  });
// 首页 直播分类-列表展示
const getSportType = (params = {}) =>
  http.get(`/live/b/category/manage-list.api`, {
    params
  });
// 资讯页 -list
const newsGetlist = (params = {}) =>
  http.get(`/content/f/article/list.api`, {
    params
  });
// 资讯页 - 24小时热榜接口
const newsHotlist = (params = {}) =>
  http.get(`/content/f/hot/list.api`, {
    params
  });
// 资讯页 - 资讯详情接口
const eGetSwiper = (params = {}) =>
  http.get(`/live/f/monitor/api/get-live-monitor-list.api`, {
    params
  });
// 资讯页 - 资讯详情接口
const getnewdetail = (params = {}) =>
  http.get(`/content/f/article/detail/${params}.api`);
// 记录文章阅读次数
const newsincrease = (params = {}) =>
  http.get(`content/f/hot/increase.api`, {
    params
  });
// 体育- 条件查询赛事列表
const sGetSwiper = (params = {}) =>
  http.get(`/live/f/match/list.api`, {
    params
  });
// 体育- 赛事中心-menu
const sGetmenu = (params = {}) =>
  http.get(`/live/f/category/manage-list.api`, {
    params
  });
// 根据用户ID查询预告ID以及预告名称
const getNoticeList = (params = {}) =>
  http.get(`/live/f/notice/query-notice-id-and-title.api`, {
    params
  });
// 获取热度 ，头像 ，礼物列表 房间表信息 直播表信息 可用余额
const getliveInfo = (params = {}) =>
  http.get(`/live/f/live/enter-room.api`, {
    params
  });
// 直播热度值修改
const setHot = (data = {}) =>
  http.post(`/live/f/live/update_live_hot.api`, data);
// 视频页轮播图
const getVSpics = (params = {}) =>
  http.get(`/content/f/image/carousel.api`, {
    params
  });
// 获取账户余额
const getBalance = (params = {}) =>
  http.get(`/mall/f/account-flow/get-coin-balance-by-user-id.api`, {
    params
  });
// 搜索主播
const gethosts = (params = {}) =>
  http.get(`/search/f/search-for-hosts.api`, {
    params
  });
//  搜索直播
const getlives = (params = {}) =>
  http.get(`/search/f/search-for-lives.api`, {
    params
  });
//  搜索视频
const getvideos = (params = {}) =>
  http.get(`/search/f/search-for-videos.api`, {
    params
  });
// 搜索热门
const getrank = (params = {}) =>
  http.get(`/search/f/get-day-rank.api`, {
    params
  });
// 搜索热门
const gethotnum = (data = {}) =>
  http.post(`/live/f/live/query_live_hot.api`, data);
// 查询是否禁言
const checkIfmsgAllowed = (data = {}) =>
  http.post(`/live/f/manager/forbid-user-status.api`, data);
// 直播页-禁言
const setmsgNotAllowed = (data = {}) =>
  http.post(`/live/f/manager/forbid-user.api`, data);
// 直播页-直播间礼物打赏
const sendGiftapi = (data = {}) =>
  http.post(`/mall/f/account-flow/reward-anchor.api`, data);
// 直播页-拉流地址
const getStream = (params = {}) =>
  http.get(`/live/f/room/pull-url.api`, {
    params
  });
// 用户举报
const importvlog = (data = {}) =>
  http.post(`/live/f/tipoff/apply-tipoff.api`, data);
// 举报类型
const reporttype = (params = {}) =>
  http.get(`/live/f/tifoffSetting/simple-list.api`, {
    params
  });
const getTop = (params = {}) =>
  http.get(`/live/f/room/top.api`, {
    params
  });
// 用户举报
const allnotice = (data = {}) => http.post(`/live/f/roomNotice/query-system-notice.api`, data);
// 首页直播推荐
const getHomeLive = (params = {}) => http.get(`/content/f/positions/recommend.api`, { params });
// 查询热门视频
const getHotVideo = (params = {}) => http.get(`/live/f/videos/find-hot-video-list.api`, { params });
// 评论 / 回复 / 点赞 / 点踩
const findVideo = (data = {}) => http.put(`/live/f/videos/find-hot-video-list.api`, data);

// 获取聊天室地址
const getChatAddre = (params = {}) => http.get(`/live/f/protocol/query-last-protocol.api`, { params});
// 获取聊天室地址
const downTool = (params = {}) => http.get(`/live/f/host/down-tool-url`, { params });
// 获取礼物列表
const getRewardList = (params = {}) => http.get(`/live/f/gift/get-props.api`, { params });


export default {
  allnotice,
  getTop,
  reporttype,
  importvlog,
  setHot,
  getStream,
  sendGiftapi,
  setmsgNotAllowed,
  checkIfmsgAllowed,
  vgetlist,
  vgetTypelist,
  vgetType,
  vgetrank,
  vgetMore,
  vpostview,
  vgetHot,
  vgetFComments,
  vgetSComments,
  vsetComment,
  vgetVinfo,
  xxgetHot,
  xxgetRec,
  xxgetTypes,
  xxgetType,
  xxgetRank,
  hgetAnnoce,
  newsGetlist,
  newsHotlist,
  getSportType,
  sGetSwiper,
  sGetmenu,
  checkAttention,
  setAttention,
  unsetAttention,
  eGetSwiper,
  getnewdetail,
  getNoticeList,
  getliveInfo,
  getVSpics,
  getBalance,
  getvideos,
  getlives,
  gethosts,
  getrank,
  gethotnum,
  newsincrease,
  getHomeLive,
  getHotVideo,
  findVideo,
  getChatAddre,
  downTool,
  getRewardList
};