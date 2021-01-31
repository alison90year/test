<template>
  <div class="bank-card-page">
      <header-nav :title="$route.meta.title" back="/user/info"></header-nav>
      <div class="bank-card-container form-container">
        <van-field  placeholder="开户人姓名" v-model="bankinfo.accountName" :disabled="accountName !== ''" maxlength="20"/>
        <van-field  placeholder="银行预留手机号码" type="number" v-model="bankinfo.bankPhone"/>
        <van-field  placeholder="银行卡号" v-model="bankinfo.bankCard" maxlength="19"/>
        <van-cell 
          :title="bankinfo.bank 
          ? bankinfo.bank 
          : '选择开户行银行'" 
          arrow-direction="down" 
          is-link 
          clickable 
          @click="bankActhionSheet = true"
        />
        <van-cell 
          :title="bankinfo.province && bankinfo.city 
          ? `${bankinfo.province} / ${bankinfo.city}` 
          : '选择省 / 市'" 
          arrow-direction="down" 
          is-link 
          clickable
          @click="areaActhionSheet = true"
        />
        <van-field  placeholder="请您正确填写开户支行信息" v-model="bankinfo.subbranch" maxlength="50"/>
        <div class="tips">
          <p>1.银行卡信息/开户人必须与主播认证的真实姓名一致</p>
          <p> 2.请确保开户行支行信息填写正确</p>
        </div>
        <van-button round block class="submit-button" :loading="isLoading" loading-text="加载中..." @click="bindBankCard" :disabled="$isFormReady(bankinfo,['id']) || isLoading">确定</van-button>
      </div>
      <van-action-sheet v-model="areaActhionSheet">
        <van-area title="选择省 / 市" @cancel="areaActhionSheet = false" @confirm="areaActionSheetConfirm" :area-list="areaList" :columns-num="2" item-height="1rem"/>
      </van-action-sheet>
      <van-action-sheet v-model="bankActhionSheet">
        <index-bar :list="bankList" title="选择银行卡" :tapItem="getBankValue" :tapLeftButton="closeBankIndexBar"></index-bar>
      </van-action-sheet>
  </div>
</template>
<script>
import bankCardPage from './index';
export default bankCardPage;
</script>
<style lang="stylus">
@import './index'
@import '../../common'
</style>