<template>
  <div class="message-page ">
    <header-nav :title="$route.meta.title"></header-nav>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" style="flex:1">
      <template v-if="!list.length">
        <van-empty description="暂无数据" />
      </template>
      <template v-else>
        <van-list v-model="loading" :finished="finished" @load="onLoad">
          <van-cell v-for="(item,index) in list" :key="index" is-link :label="item.content" @click="toDetail(item)">
            <template #title>
              <div class="flex jc-sb ai-c">
                <span class="van-cell-left-title">{{item.title}}</span>
                <span class="van-cell-right-title">{{item.sendTime}}</span>
              </div>
            </template>
            <template #right-icon>
              <img src="@/assets/images/user/icon_dh_jr.png" class="user-cell-right-icon">
            </template>
          </van-cell>
        </van-list>
      </template>
    </van-pull-refresh>
  </div>
</template>

<script>
import { PullRefresh, List, Cell, Empty, Collapse, CollapseItem } from 'vant';
import { APIs } from '../../../http';
import { mapGetters } from 'vuex';
export default {
  components: {
    headerNav: () => import('@/views/user/components/header'),
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    [Cell.name]: Cell,
    [Empty.name]: Empty,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
  },
  data () {
    return {
      refreshing: false,
      loading: false,
      finished: false,
      activeIndex: null,
      list: [],
      msg: '显示',
      height: 0,
      query: {
        page: 1,
        size: 1000
      },
      total: 0
    };
  },
  mounted () {
    this.getList();
  },
  methods: {
    getList () {
      APIs.uLetter({
        userId: this.userinfo.userId,
        ...this.query
      }).then(res => {
        this.list = res.data.list;
        this.total = res.data.total;
      });
    },
    // 下拉刷新
    onRefresh () {
      setTimeout(() => {
        this.refreshing = false;
      }, 1000);
    },

    // 上拉加载
    onLoad () {
      this.finished = true;
    },

    // 跳转到详情页
    toDetail (item) {
      window.localStorage.setItem('message', JSON.stringify(item));
      this.$router.push('/user/message/detail');
    }

  },
  computed: {
    ...mapGetters(['userinfo'])
  }
};
</script>
<style lang="stylus">
@import './index.styl'
</style>