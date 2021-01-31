<template>
  <div class="top-tab-box">
    <div class="parent-tab-box">
      <van-tabs v-model="parentActive" class="parent-tabs" @change="parentChange">
        <van-tab v-if="type === 'home'" title="全部" name="全部"></van-tab>
        <van-tab title="热门" name="热门"></van-tab>
        <van-tab title="篮球" name="篮球"></van-tab>
        <van-tab title="足球" name="足球"></van-tab>
        <van-tab title="电竞" name="电竞"></van-tab>
        <van-tab title="综合" name="综合"></van-tab>
      </van-tabs>
    </div>
    <div class="child-tab-box" v-show="childList.length !== 0" >
      <van-tabs v-model="childActive" class="child-tabs" type="card" @click="childChange">
        <van-tab title="全部" :name="parentId"></van-tab>
        <van-tab v-for="item in childList" :key="item.ctgId" :title="item.ctgName" :name="item.ctgId"></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
export default {
  name: 'top-tab',
  props: {
    type: {
      default: 'home',
      type: String
    },
    parentId: {
      default: 0,
      type: Number
    },
    childList: {
      type: Array
    },
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {
      parentActive: '热门',
      childActive: 0,
    };
  },
  methods: {
    // 父组件Tab变化
    parentChange(val) {
      this.$emit('parentChange',{val});
    },
    // 子组件tab变化
    childChange(val) {
      this.$emit('childChange',{val});
    }
  }
};
</script>
<style lang="stylus">
@import './index.styl'
</style>