<template>
<div class="bank-index-bar">
  <van-sticky>
    <div class="bank-index-bar-title w100 pos-r" :style="{'height':`${height}px`,'line-height':`${height}px`}">
      <van-icon name="cross" class="close-button pos-a" @click="tapLeftButton"/>
      <div class="title">{{title}}</div>
    </div>
  </van-sticky>
  <van-index-bar :index-list="indexList" :sticky="true" :sticky-offset-top="height">
    <template v-for="item in list">
      <van-index-anchor :index="item.index" :key="item.index">{{item.index}}</van-index-anchor>
      <van-cell v-for="listItem in item.list" clickable :key="listItem.title" @click="tapItem(listItem)">
        <template #title>
          <div class="item-title">{{listItem.title}}</div>
          <div class="item-value" v-if="listItem.value">{{listItem.value}}</div>
        </template>
      </van-cell>
    </template>
  </van-index-bar>
</div>
</template>
<script>
import { IndexBar, IndexAnchor, Cell, Sticky, Icon} from 'vant';
export default {
  components:{
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
    [Cell.name]: Cell,
    [Sticky.name]: Sticky,
    [Icon.name]: Icon
  },
  props:{
    list: Array,
    tapItem: Function, // 获取点击参数回调
    tapLeftButton: Function, // 关闭窗口回调
    title: String
  },
  data() {
    return {
      indexList:[],
      height:136
    };
  },
  created() {
    this.height = window.screen.availHeight * 0.18;
    //  自定义index字段
    this.list.forEach(item => {
      this.indexList.push(item.index);
    });
  }
};
</script>
<style lang="stylus">
.bank-index-bar{
  .bank-index-bar-title{
    font-size: 38px;
    font-weight: 500;
    color: $theme-txt-color;
    text-align: center;
    background: $theme-bg-color;
    .close-button{
      top: 50%;
      transform: translateY(-50%);
      left: 5%;
    }
    .close-button:active{
      opacity: .8;
    }
  }
  .van-index-anchor{
    background-color:$theme-bg-color3;
    width: 90%;
    color: $theme-txt-white;
    font-size: 32px;
    transition: width 0.1s;
  }
  .van-index-bar__index--active{
    color: $c-theme-txt-color4;
  }
  .van-cell__title{
    font-size: 32px;
    font-weight: 500;
    color: $theme-txt-color; 
    display: flex;
    .item-title,.item-value{
      flex: 1;
    }
  }
  .van-index-bar__index{
    font-size: 23px;
  }
}
</style>