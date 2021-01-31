<template>
  <div class="following-page flex fdr-c h100">
    <header-nav :title="$route.meta.title"></header-nav>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" style="flex:1">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :title="item.nickName" :label="`粉丝数：${item.fansNum}`" :key="item.attentionUser">
          <template #icon>
            <div class="avatar-img">
              <van-image :src="item.headIcon" lazy-load />
            </div>
          </template>
          <template #default>
            <van-button round @click="getActionSheetShow(item)">已关注</van-button>
          </template>
        </van-cell>
      </van-list>
    </van-pull-refresh>
    <van-action-sheet v-model="actionSheetShow" :actions="actions" cancel-text="取消" close-on-click-action
      @cancel="onCancel" @select="onSelect" />
  </div>
</template>

<script>
import { PullRefresh, List, Cell, Button, ActionSheet, Lazyload, Image as VanImage, Toast } from 'vant';
import { APIs } from '../../../http';
import { mapGetters } from 'vuex';
export default {
  components: {
    headerNav: () => import('@/views/user/components/header'),
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    [Cell.name]: Cell,
    [Button.name]: Button,
    [ActionSheet.name]: ActionSheet,
    [Lazyload.name]: Lazyload,
    [VanImage.name]: VanImage
  },
  data () {
    return {
      refreshing: false,
      loading: false,
      finished: false,
      actionSheetShow: false,
      attentionUser: '',
      query: {
        page: 1,
        size: 1000
      },
      total: 0,
      list: [
      ],
      actions: [{ name: '取消关注' }]
    };
  },
  created () {
    this.getList();
  },
  methods: {
    getList () {
      APIs.uGetFallow({
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

    // 弹出框关闭实时触发
    onCancel () {
      console.log('关闭');
    },
    getActionSheetShow (item) {
      this.attentionUser = item.attentionUser;
      this.actionSheetShow = true;
    },
    // 取消关注
    onSelect () {
      this.actionSheetShow = false;
      APIs.setAttention({
        userId: this.userinfo.userId,
        attentionUser: this.attentionUser
      }).then(res => {
        this.getList();
        Toast('已取消关注该主播');
      }).catch(err => {
        Toast('操作失败');
      });
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