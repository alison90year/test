<template>
  <div class="login-pages" :class="{footStyl:isAuto}">
    <div class="header">
      <van-nav-bar @click-left="onClickBack" :border="false">
        <template #left v-if="status!==1">
          <img class="nav-left" src="../../assets/images/login/icon_ckfh@2x.png" width="33%">
        </template>
        <template #title>
        </template>
        <template #right v-if="status===1 || status===2">
          <div class="nav-title" @click="goToRegister">注册</div>
        </template>
      </van-nav-bar>
    </div>
    <div class="main_content">
      <div class="title" v-if="status!==4">
        <div class="pic_box">
          <img src="../../assets/images/login/title.png" width="100%">
        </div>
      </div>
      <!-- 账号登录 -->
      <div class="parcel" v-if="status===1">
        <van-cell-group :border="false">
          <van-field clearable placeholder="请输入手机号" v-model="form.phoneNum" maxlength="11">
            <template #left-icon>
              <van-cell @click="showPopup" :border="false">
                <span class="area">{{form.phoneCountryCode}}</span>
                <img src="../../assets/images/login/icon_xl@2x.png" class="user-cell-right-icon">
                <span style="padding-left:0.25rem">
                </span>
              </van-cell>
              <van-popup v-model="popupIsShow" round position="bottom" closeable :style="{ height: '100%' }">
                <telephone @getChangeArea="getChangeArea"></telephone>
              </van-popup>
            </template>
          </van-field>
        </van-cell-group>
        <van-cell-group :border="false">
          <van-field placeholder="请输入密码" type="password" v-model="form.password">
          </van-field>
        </van-cell-group>
        <van-cell-group :border="false" v-if="passmiss">
          <van-field placeholder="请输入验证码" v-model="form.code">
            <template #right-icon>
              <img :src="imgcode" alt="" v-if="imgcode !== ''" class="user-cell-right-icon"
                style="width:2.5rem;float: right" @click="getImgCode">
            </template>
          </van-field>
        </van-cell-group>
        <van-cell-group :border="false">
          <van-button type="primary" round block @click="toLogin">登录</van-button>
        </van-cell-group>
        <van-row type="flex" justify="space-between">
          <van-col span="9"> <span @click="goToCodeLog">验证码登录</span>
          </van-col>
          <van-col span="9" style="text-align: right;"> <span @click="resetPass"> 忘记密码</span>
          </van-col>
        </van-row>
      </div>
      <!-- 验证码登录 -->
      <div class="parcel" v-if="status===2">
        <van-cell-group :border="false">
          <van-field clearable placeholder="请输入手机号" v-model="form.phoneNum" maxlength="11">
            <template #left-icon>
              <van-cell @click="showPopup" :border="false">
                <span class="area">{{form.phoneCountryCode}}</span>
                <img src="../../assets/images/login/icon_xl@2x.png" class="user-cell-right-icon">
                <span style="padding-left:0.25rem">
                </span>
              </van-cell>
              <van-popup v-model="popupIsShow" round position="bottom" closeable :style="{ height: '100%' }">
                <telephone @getChangeArea="getChangeArea"></telephone>
              </van-popup>
            </template>
          </van-field>
        </van-cell-group>
        <van-cell-group :border="false">
          <van-field placeholder="请输入验证码" v-model="form.code">
            <template #button v-if="status===2">
              <van-button size="small" type="primary" @click="getCode(1)">获取</van-button>
            </template>
          </van-field>
        </van-cell-group>
        <van-cell-group :border="false">
          <van-button type="primary" @click="toLogin">验证码登录</van-button>
        </van-cell-group>
        <van-row type="flex" justify="space-between">
          <van-col span="9"> <span @click="goToAcuntLog">账号密码登录</span>
          </van-col>
          <van-col span="9" style="text-align: right;"> <span @click="resetPass"> 忘记密码</span>
          </van-col>
        </van-row>
      </div>
      <!-- 注册 -->
      <div class="parcel" v-if="status===3">
        <van-cell-group :border="false">
          <van-field clearable placeholder="请输入手机号" v-model="form.phoneNum" maxlength="11">
            <template #left-icon>
              <van-cell @click="showPopup" :border="false">
                <span class="area">{{form.phoneCountryCode}}</span>
                <img src="../../assets/images/login/icon_xl@2x.png" class="user-cell-right-icon">
                <span style="padding-left:0.25rem">
                </span>
              </van-cell>
              <van-popup v-model="popupIsShow" round position="bottom" closeable :style="{ height: '100%' }">
                <telephone @getChangeArea="getChangeArea"></telephone>
              </van-popup>
            </template>
          </van-field>
        </van-cell-group>
        <van-cell-group :border="false">
          <van-field placeholder="密码6-10数字和字母" v-model="form.password" :type="passwordType">
            <template #right-icon v-if="status===3">
              <img
                :src="require(passwordType==='password'?'../../assets/images/login/icon_ycmm@2x.png':'../../assets/images/login/icon_xsmm@2x.png')"
                class="pwd" @click.stop="switchPasswordType">
            </template>
          </van-field>
        </van-cell-group>
        <van-cell-group :border="false">
          <van-field placeholder="请输入验证码" v-model="form.code">
            <template #button>
              <van-button size="small" type="primary" @click="getCode(2)">获取</van-button>
            </template>
          </van-field>
        </van-cell-group>
        <van-cell-group :border="false">
          <van-button type="primary" @click="goToReg">提交</van-button>
        </van-cell-group>
        <van-row type="flex" justify="space-between">
          <van-col span="9"> <span @click="goToAcuntLog">账号密码登录</span>
          </van-col>
          <van-col span="9" style="text-align: right;"> <span @click="resetPass"> 忘记密码</span>
          </van-col>
        </van-row>
      </div>
      <!-- 修改密码 -->
      <div class="parcel" v-if="status===4">
        <div class="updatePastitle">
          忘记密码
        </div>
        <van-cell-group :border="false">
          <van-field clearable placeholder="请输入手机号" v-model="form.phoneNum" maxlength="11">
            <template #left-icon>
              <van-cell @click="showPopup" :border="false">
                <span class="area">{{form.phoneCountryCode}}</span>
                <img src="../../assets/images/login/icon_xl@2x.png" class="user-cell-right-icon">
                <span style="padding-left:0.25rem">
                </span>
              </van-cell>
              <van-popup v-model="popupIsShow" round position="bottom" closeable :style="{ height: '100%' }">
                <telephone @getChangeArea="getChangeArea"></telephone>
              </van-popup>
            </template>
          </van-field>
        </van-cell-group>
        <van-cell-group :border="false">
          <van-field placeholder="请输入验证码" v-model="form.code">
            <template #button>
              <van-button size="small" type="primary" @click="getCode(3)">获取</van-button>
            </template>
          </van-field>
        </van-cell-group>
        <van-cell-group :border="false">
          <van-button type="primary" @click="nextStep">下一步</van-button>
        </van-cell-group>
        <div v-show="pwdShow">
          <van-cell-group :border="false">
            <van-field placeholder="新密码为6-10数字和字母" v-model="form.password" :type="passwordType">
              <template #right-icon>
                <img
                  :src="require(passwordType==='password'?'../../assets/images/login/icon_ycmm@2x.png':'../../assets/images/login/icon_xsmm@2x.png')"
                  class="pwd" @click.stop="switchPasswordType">
              </template>
            </van-field>
          </van-cell-group>
          <van-cell-group :border="false">
            <van-button type="primary" @click="goToComplete">完成</van-button>
          </van-cell-group>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="foot_text">登录即代表您同意 《注册协议》 《隐私权政策》 </div>
    </div>
  </div>
</template>

<script>
import login from './index.js';
export default login;
</script>

<style lang="stylus" scoped>
@import './index.styl'
</style>