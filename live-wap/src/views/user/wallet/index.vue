<template>
  <div class="wallet-page flex fdr-c">
    <header-nav :title="$route.meta.title">
      <router-link to="/user/wallet/transactions" class="wallet-header-right-button">帐户明细</router-link>
    </header-nav>
    <div class="wallet-page-container pd-top-13">
      <van-tabs class="wallet-page-tabs flex fdr-c h100" v-model="tabActive" swipeable animated lazy-render>
        <van-tab title="充值" class="pd-top-13">
          <div class="wallet-top-up-box">
            <div class="wallet-balance">余额：120龙币</div>
            <div class="wallet-top-up">
              <p class="wallet-top-up-title">请选择充值金额</p>
              <div class="wallet-top-up-amount flex fw-w jc-sb">
                <div :class="['amount-item','flex','jc-sb',amountActive === key ? 'active' : '']" @click="tapAmount(item,key)" v-for="(item,key) in amountList" :key="item.amount+key">
                  <span class="left-amount">￥{{item.amount}}</span>
                  <span class="right-coin">{{item.coin}}龙币</span>
                </div>
                <div :class="['amount-item','flex','amount-item-input','ai-c','jc-sb',amountActive === 3 ? 'active' : '']" @click.stop="tapAmountInput()" >
                  <span>{{ amountActive === 3 ? '￥' + topUpAmount : '其他金额'}}</span>
                  <span v-show="amountActive === 3" class="right-coin">{{topUpAmount * 10}}龙币</span>
                </div>
              </div>
              <div class="wallet-top-up-button flex jc-c">
                <van-button round type="info">立即充值</van-button>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="提现" class="pd-top-13">
          <div class="withdraw-box">
              <p>当前星币余额：3123</p>
              <p>当前可兑换星币：3000</p>
              <p>可兑换人民币：300</p>
              <div class="flex jc-c">
                <van-button round type="info">申请提现</van-button>
              </div>
          </div>
        </van-tab>
      </van-tabs>
      
      <!-- 金额输入键盘 -->
      <van-number-keyboard
        :show="numberKeyBoardShow"
        close-button-text="完成"
        v-model="topUpAmount"
        @blur="numberKeyBoardShow = false"
      />
    </div>
  </div>
</template>

<script>
import walletpage from './index';
export default walletpage;
</script>
<style lang="stylus">
@import './index.styl';
</style>