<template>
  <div class="apply-page">
    <header-nav :title="$route.meta.title"></header-nav>
    <div class="apply-container">
      <div class="apply-item">
        <p class="apply-title">*姓名</p>
        <van-field placeholder="请输入姓名"></van-field>
      </div>
      <div class="apply-item">
        <p class="apply-title">*身份证号码</p>
        <van-field placeholder="请输入身份证号码"></van-field>
      </div>
      <div class="apply-item flex fdr-c">
        <p class="apply-title">*身份证正面</p>
        <van-uploader v-model="fileList.idImgFront" :max-count="1" :after-read="afterRead" :max-size="2097152" accept="image/png, image/jpg">
          <template #default >
            <img src="@/assets/images/user/sfzzm.png" alt="">
          </template>
        </van-uploader>
      </div>
      <div class="apply-item flex fdr-c">
        <p class="apply-title">*身份证背面</p>
        <van-uploader v-model="fileList.idImgBack" :max-count="1">
          <template #default >
            <img src="@/assets/images/user/sfzbm.png" alt="">
          </template>
        </van-uploader>
      </div>
      <div class="apply-item flex fdr-c">
        <p class="apply-title">*手持身份证</p>
        <van-uploader v-model="fileList.idImgHand" :max-count="1">
          <template #default >
            <img src="@/assets/images/user/scsfz.png" alt="">
          </template>
        </van-uploader>
      </div>
      <div class="apply-tips">
        <p>1.支持JPG,PNG格式，2M以内</p>
        <p>2.非大陆用户清使用当地的相关证件照</p>
      </div>
      <van-button round block>保存修改</van-button>
    </div>
  </div>
</template>

<script>
import { Field, Uploader, Button } from 'vant';
export default {
  components:{
    headerNav: () => import('@/views/user/components/header'),
    [Field.name]: Field,
    [Uploader.name]: Uploader,
    [Button.name]: Button
  },

  data() {
    return {
      fileList:{
        idImgFront:[],
        idImgBack:[],
        idImgHand:[]
      }
    };
  },

  created() {
  
  },
  methods:{
    afterRead(file) {
      file.status = 'uploading';
      file.message = '上传中...';
    }
  }
};
</script>
<style lang="stylus">
.apply-page{
  .apply-container{
    padding:40px 76px 140px;
    .apply-title{
      font-size: 26px;
      color: #999999;  
      margin-bottom: 24px;
    }
    .apply-item:nth-child(1){
      margin-bottom:40px;
    }
    .apply-item:nth-child(2){
      margin-bottom:53px;
    }
    .apply-item:nth-child(3),.apply-item:nth-child(4){
      margin-bottom:28px;
    }    
  }
  .van-uploader__preview-image{
    height: 271px;
    width: 479px;
  }
  .van-uploader{
    align-self: center;
    height: 271px;
    width: 479px;  
  }
  .apply-tips{
    font-size: 23px;
    color: #F67C37;
    margin-top: 68px;
  }
  .van-button--default{
    margin: 0 auto;
    width: 590px;
    height: 83px;
    background: #F67C37;
    font-size: 38px;
    color: #FFFFFF;
    margin-top: 42px;
  }
}
</style>