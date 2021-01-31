import { Search, Tab, Tabs, Icon  } from 'vant';
import { Image as VanImage } from 'vant';
import { APIs } from '../../http';
import liveItem from '@/components/live-item/index.vue';
export default {
  name: 'home',
  components: {
    [Search.name]:Search,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Icon.name]:Icon,
    VanImage,
    liveItem,
  },
  data() {
    return {
      value: '',
      hotList:[], // 搜索热门
      historyList:[], // 历史记录
      status: 1, // 搜索页以哪种状态展示
      video: [], // 搜索出来的视频
      live: [],  // 搜索出来的直播
      host:[], // 搜索出来的主播
      allList:[], // 所以结果汇总
      active: 0
    };
  },
  mounted() {
    let historyListStr = window.sessionStorage.getItem('seaech_history');
    this.historyList = historyListStr ? JSON.parse(historyListStr) : [];
    this.getrank();
  },
  methods: {
    // 搜索所有数据
    getSearchList(params) {
      let api1 = APIs.getvideos({ keyword: params}).then(res => {
        this.video = res.data.list;
      });
      let api2 = APIs.getlives({ keyword: params}).then(res => {
        this.live = res.data.list;
      });
      let api3 = APIs.gethosts({ keyword: params}).then(res => {
        this.host = res.data.list;
      });
      return Promise.all([api1,api2,api3]).then(()=>{});
    },
    // 输入框文字发生变化
    inputChange(params) {
      if (!params) {
        this.allList = [];
        return;
      }
      this.getSearchList(params).then(() => {
        this.allList = [...this.video, ...this.live, ...this.host];
      });
    },
    // 输入搜索
    search(e) {
      if(e.target.nodeName.toLowerCase() === 'li') {
        this.getSearchList(e.target.dataset.text);
        this.historyList.push(e.target.dataset.text);
        this.historyList = Array.from(new Set(this.historyList));
        window.sessionStorage.setItem('seaech_history',JSON.stringify(this.historyList));
        this.status = 3;
        this.active = 0;
        this.value = e.target.dataset.text;
      }
    },
    // 清除搜索记录
    clearHistory() {
      this.historyList = [];
      window.sessionStorage.removeItem('seaech_history');
    },
    // 取消按钮
    cancel() {
      if(this.status === 1) {
        this.$router.push({ path: 'home' });
      }else {
        this.status = 1;
        this.value = '';
      }
    },
    // 获取热搜
    getrank() {
      APIs.getrank().then(res => {
        this.hotList = res.data;
      }).catch();
      
    },
    // 输入框获得焦点事件
    changeStatus(status) {
      this.status = status;
      this.inputChange(this.value);
    },
    // 点击查看全部主播/视频/直播
    activeChange(val) {
      this.active = val;
    }
  },
};
