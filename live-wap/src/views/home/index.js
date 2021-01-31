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
    topTab,
  },
  data() {
    return {
      value: '',
      isLoading: false, // 加载中
      live: [], // 首页直播数据
      childList:[],
      childId: 0,
      parentId: 0,
      finished: false,
      error: false,
      page: 1,
      parentName: '热门'
    };
  },
  mounted() {
    // this.getHomeData();
  },
  methods: {
    // 前往搜索页面
    toSearch() {
      this.$router.push({ path: 'search' });
    },
    parentChange(data) {
      this.page = 1;
      this.live = [];
      this.parentName = data.val;
      this.childId = data.val;
      if(data.val === '热门') {
        this.childList = [];
        this.parentId = 0;
        this.getHotData();
      }else {
        APIs.vgetType({ctgName:data.val}).then(res => {
          this.childId = this.parentId = res.data[0].ctgId;
          this.childList = res.data[0].child;
          this.getHomeData({page:1, ctgId:this.parentId});
        });
      }
    },
    childChange(data) {
      this.live = [];
      this.childId = data.val;
      this.getHomeData({ctgId:data.val});
    },
    onLoad() {
      this.getHomeData({page:this.page, ctgId:this.parentId});
    },
    // 查询热门数据
    getHotData() {
      this.getHomeData({page:1, size:20, ctgName:'综合'});
    },
    // 查询全部数据
    getAllData() {
    },
    // 根据分类查询数据
    getHomeData(params) {
      APIs.xxgetType(params).then(res => {
        this.live.push.apply(this.live,res.data.items);
        this.isLoading = false;
        this.page = res.data.page + 1;
        if(res.data.items.length < 10) {
          this.finished = true;
        }
      }).catch(() => {
        this.isLoading = false;
        this.error = true;
      });
    },
    // 下拉刷新
    onRefresh() {
      this.getHomeData({ctgId:this.childId});
    },
    // 查看更多跳转全部
    activeChange() {
      this.active = 0;
    },
    toLive(id) {
      this.$router.push({path:`/live/${id}`});
    }
  },
};
