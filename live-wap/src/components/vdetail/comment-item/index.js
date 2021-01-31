import {  Image as VanImage  } from 'vant';
export default {
  name: 'comment-item',
  components: {
    [VanImage.name]: VanImage,
  },
  props:{
    data: {
      type: Object,
      default:{},
    }
  },
  data() {
    return {
      showMore: false // 是否显示展开按钮
    };
  },
  created() {
    this.$nextTick(() => {
      
    });
  },
  methods: {
    
  },
};
