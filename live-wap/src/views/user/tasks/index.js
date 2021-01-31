import { PullRefresh, Cell, Button, Toast, Empty } from 'vant';
import { APIs } from '@/http';
export default {
  components:{
    headerNav: () => import('@/views/user/components/header'),
    [PullRefresh.name]: PullRefresh,
    [Cell.name]: Cell,
    [Button.name]: Button,
    [Empty.name]: Empty
  },
  data() {
    return {
      isLoading: false,
      page:1,
      size:10,
      tasksList: [],
      height:50
    };
  },
  created() {
    this.queryTasks(1,10);
  },
  methods: {
    // 初始化任务
    queryTasks(page,size) {
      APIs.getTasklist({page,size}).then((res) => {
        if(res.code === '200') {
          this.tasksList = res.data;
        }
        this.isLoading = false;
      });
    },
    // 下拉刷新
    onRefresh() {
      this.isLoading = true;
      this.queryTasks(1,10);
    },
    // getTaskStatus
    getExp(taskId) {
      APIs.getTaskStatus({taskId}).then(res => {
        if(res.code === '200') {
          Toast('领取成功');
        }else{
          Toast('领取失败');
        }
      });
    }
  },
};