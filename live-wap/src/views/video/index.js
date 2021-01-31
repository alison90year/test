// import SearchBar from '../../components/search-bar';
import { Search, PullRefresh } from 'vant';
import { APIs } from '../../http';
import liveItem from '@/components/live-item/index.vue';
import topTab from '@/components/top-tab/index.vue';
export default {
  name: 'home',
  components: {
    [Search.name]: Search,
    [PullRefresh.name]: PullRefresh,
    liveItem,
    topTab
  },
  data() {
    return {
      parentName: '热门',
      isLoading: false, // 加载中
      video: [], // 首页直播数据
      error: false, // 是否已加载完
      finished: false,
      refreshing: false,
      page: 1, 
      parentId: 0,
      childList: [],
      childId: 0,
    };
  },
  mounted() {
    this.getVideoData();
  },
  methods: {
    // 父tab变化
    parentChange(data) {
      this.page = 1;
      this.video = [];
      this.parentName = data.val;
      this.childId = data.val;
      if(data.val === '热门') {
        this.childList = [];
        this.parentId = 0;
        this.getVideoData();
      }else {
        APIs.vgetType({ctgName:data.val}).then(res => {
          this.childId = this.parentId = res.data[0].ctgId;
          this.childList = res.data[0].child;
          this.vgetTypelist({page: this.page, size: 10, ctgId: this.parentId, listType: 2});
        });
      }
    },
    // 子tab变化
    childChange(data) {
      this.video = [];
      this.childId = data.val;
      let params = {
        ctgId: data.val,
        page: 1,
        size: 10
      };
      if(data.val === this.parentId) {
        params.listType = 2;
      }
      this.vgetTypelist(params);
      
    },
    // 上拉加载
    onLoad(type) {
      console.log('上拉加载');
      if(this.parentName === '热门') {
        this.getVideoData();
        return;
      }
      let params = {
        page: this.page,
        size: 10,
        ctgId: this.childId 
      };
      if(type) { // 下拉刷新
        params.page = 1;
        this.video = [];
      }
      if(this.childId === this.parentId) {
        params.listType = 2;
      }
      this.vgetTypelist(params);
    },
    // 查询热门视频数据
    getVideoData() {
      APIs.getHotVideo({ totalRecord: 20}).then(res => {
        this.video = res.data;
        this.finished = true;
        this.isLoading = false;
        this.refreshing = false;
      }).catch(() => {
        this.error = true;
        this.isLoading = false;
        this.refreshing = false;
      });
    },
    // 查询指定分类数据
    vgetTypelist(params) {
      this.finished = false;
      APIs.vgetTypelist(params).then(res => {
        this.video.push.apply(this.video,res.data.items);
        this.page = res.data.page + 1;

        this.isLoading = false;
        this.refreshing = false;
        if(res.data.items.length < 10) {
          this.finished = true;
        }
        
      }).catch(() =>{
        this.error = true;
        this.isLoading = false;
        this.refreshing = false;
      });
    },
    // 下拉刷新
    onRefresh() {
      this.page = 1;
      this.onLoad('....');
      // this.page = 1;
      // if(this.parentName === '热门') {
      //   this.getVideoData();
      // }else{
      //   let params = {
      //     page: this.page, 
      //     size: 10, 
      //   }
      //   if(this.childId === this.parentId){
      //     params.ctgId = this.parentId;
      //     params.listType = 2;
      //   }else {
      //     params.ctgId = this.childId;
      //   }
      //   this.video = [];
      //   this.vgetTypelist(params);
      // }
    },
    // 前往视频详情
    toPlay(id) {
      this.$router.push({path:`/vdetail/${id}`});
    },
  },
};
