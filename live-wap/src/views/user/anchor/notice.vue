<template>
  <div class="notice-page">
    <header-nav :title="$route.meta.title"></header-nav>
    <div class="notice-container pd-top-13">
      <div class="pos-r">
        <van-field v-model="notice" type="textarea" rows="10" maxlength="100" placeholder="不超过100字符~"/>
        <div class="maxlength-tip pos-a">{{notice.length}}/100</div>
      </div>
      <van-button round block>保存修改</van-button>
    </div>
  </div>
</template>

<script>
import { Field, Button } from 'vant';
export default {
  components:{
    headerNav: () => import('@/views/user/components/header'),
    [Field.name]: Field,
    [Button.name]: Button
  },

  data() {
    return {
      notice:''
    };
  },

  created() {
    
  
  },
  methods:{

  }
};
</script>
<style lang="stylus">
.notice-page{
  .notice-container{
    padding: 13px 31px 0;
  }
  .maxlength-tip{
    bottom: 16px;
    right: 21px;
    color: #CCCCCC;
  }
  .van-button--default{
    margin: 0 auto;
    width: 590px;
    height: 83px;
    background: #F67C37;
    font-size: 38px;
    color: #FFFFFF;
    margin-top: 23px;
  }
}
</style>