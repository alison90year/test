import { Icon  } from 'vant';

export default {
  name: 'liveItem',
  components: {
  
  },
  props: {
    index:{ // 在左边还是右边
      default:0,
      required:true
    },
    type:{ // 类型是直播还是视频
      type:String,
      default:'live',
      required:true
    },
    corve: { // 封面地址
      type:String,
      default:'',
      required:true
    },
    bottomTitle: { // 底部标题
      type:String,
      default:'',
      required:true
    },
    hot: { // 热度
      default:0,
    },
    name: { // 直播名称
      type:String,
      default:'',
    },
    count: { // 播放次数
      default:0,
    },
    comments:{
      default:0, // 评论数
    },
    time: {
      default:0, // 播放时长
    }
  },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    toPlay() {
      this.$emit('toPlay');
    }
  },
};
