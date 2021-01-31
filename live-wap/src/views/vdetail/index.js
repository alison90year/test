import { Tab, Tabs, Button, Image as VanImage, Field  } from 'vant';
import hotVideo from '@/components/vdetail/hot-video/index.vue';
import commentItem from '@/components/vdetail/comment-item/index.vue';
import { APIs } from '@/http';
import { setPlayer, sendThis } from '@/utils/chat';
// sendThis
export default {
  name: 'vdetail',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Button.name]: Button,
    [VanImage.name]: VanImage,
    [Field.name]: Field,
    hotVideo,
    commentItem,
  },
  data() {
    return {
      player: null,
      videoinfo: {}, // 视频信息
      active: 0, // 简介和评论tab
      hotList: [], // 相关视频
      commentVal: '' // 评论输入框
    };
  },
  created() {
    this.getInfo(this.$route.params.id);
    sendThis(this);
  },
  methods: {
    // 获取视频信息
    getInfo(videoId) {
      APIs.vgetVinfo({ videoId }).then(res => {
        this.videoinfo = res.data;
        let ctgId = res.data.ctgIdList.pop();
        this.vgetHot({ listType: 1, ctgId, size: 6, page: 1 });
        this.$nextTick(() => {
          // if (this.player) this.player.destroy();
          setPlayer.initMp4Player('playerbox', res.data.url);
        });
      });
    },
    // 查询相关视频
    vgetHot(parms) {
      APIs.vgetHot(parms).then(res => {
        this.hotList = res.data.items;
      });
    },
    // tab变化
    activeChange(val) {
      this.active = val;
      this.vgetFComments();
    },
    // 获取评论
    vgetFComments() {
      let params = {
        contentType: 3, 
        page:1, 
        size:1000, 
        targetId:this.videoinfo.videoId, 
        actionType:4
      };
      APIs.vgetFComments(params).then(res => {
        console.log(res);
      });
    },
    // 评论 / 回复 / 点赞 / 点踩
    findVideo() {
      APIs.vgetHot({}).then(res => {
      });
    }
  },
};
