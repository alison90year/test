<template>
  <div>
    <van-index-bar>
      <div class="title">
        <span>选择国家或地区</span>
      </div>
      <van-index-anchor index="热门" />
      <van-cell>
        <van-row gutter="20" @click="getArea" class="areaNum">
          <van-col span="12">中国</van-col>
          <van-col span="12"> 086</van-col>
        </van-row>
      </van-cell>
    </van-index-bar>
  </div>
</template>
<script>
import { IndexBar, IndexAnchor, Cell, Col, Row } from 'vant';
export default {
  props: {

  },
  components: {
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
    [Cell.name]: Cell,
    [Col.name]: Col,
    [Row.name]: Row,
  },
  data () {
    return {

    };
  },
  methods: {
    getArea () {
      let areaNum = document.querySelector('.areaNum');
      let number = areaNum.children[1].innerHTML;
      this.$emit('getChangeArea', number);
    }
  }
};
</script>
<style lang="stylus" scoped>
.title
  text-align center
  color #333
  font-size 38px
  font-weight 550
  margin 100px 0 40px 0
>>> .van-index-anchor
  background #F67C37
  margin-right 50px
  color #fff
  font-size 32px
  font-weight 500
>>> .van-index-bar__sidebar
  top 60%
>>> .van-index-bar__index
  color #333
  font-size 32px
  font-weight 500
  margin-top 10px
>>> .van-cell__value
  font-size 36px
  font-family Noto Sans S Chinese
  font-weight 550
  color #333333
.van-row
  padding 15px 0
</style>