<template>
  <div class="change-page">
    <header-nav :title="initObj.title"></header-nav>
    <div class="change-container form-container">

      <!-- 修改密码 -->
      <template v-if="type === 'password'">
        <van-field  placeholder="输入手机号" disabled :value="`${phoneCountryCode} ${phoneNum.substring(0,3)}****${phoneNum.substring(7)}`" />
        <van-field  placeholder="密码为6-10位字母和数字" type="password"/>
        <van-field  placeholder="请再次输入密码" type="password"/>
      </template>

      <!-- 修改邮箱 -->
      <template v-else-if="type === 'email'">
        <van-field  placeholder="请输入新邮箱地址" v-model="email" />
      </template>

      <!-- 修改手机号 -->
      <template v-else-if="type === 'phone'">
        <van-field placeholder="输入手机号" v-model="phoneNum"> 
          <template #left-icon>
            <span class="area">{{phoneCountryCode}}</span>
            <img src="@/assets/images/user/icon_dlxl_huise.png" class="phone-left-arrow">
          </template>
        </van-field>
      </template>

      <!-- 公共部分 -->
      <van-field  v-model="code" placeholder="输入验证码" type="number">
        <template #button>
          <van-button block @click="tapGetCodeButton" :disabled="isCountDown ? true : (email || phoneNum) ? false : true">
            <van-count-down ref="countDown" :auto-start="false" @finish="countDownFinished" v-show="isCountDown" :time="time" format="sss"/>
            <span v-show="!isCountDown">获取</span>
          </van-button>
        </template>
      </van-field>
      <van-button round block class="submit-button" @click="tapSubmitButton">确定</van-button>
    </div>
  </div>
</template>

<script>
import changepage from './index';
export default changepage;
</script>

<style lang="stylus">
@import '../../../common'
</style>