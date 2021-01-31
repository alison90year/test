<template>
  <div class="barrage-page">
    <header-nav :title="$route.meta.title"></header-nav>
    <div class="barrage-container pd-top-13">
      <div class="cell-box">
        <van-cell title="弹幕开关" class="ai-c base-cell" >
          <template #default>
            <van-switch size="0.6rem" v-model="checked" />
          </template>
        </van-cell>
      </div>
      <div class="cell-box">
        <van-cell title="弹幕透明度" class="ai-c base-cell">
          <template #default>
            <div class="w100 flex ai-c">
              <div class="slider-value">{{sliderValue}}%</div>
              <van-slider v-model="sliderValue" :disabled="!checked" @change="onChange" />
            </div>
          </template>
        </van-cell>
        <van-cell title="弹幕大小" class="ai-c base-cell">
          <template #default>
            <div class="w100 flex ai-c jc-e">
              <van-icon v-for="item in barrageSizeList" :key="item.value" size="1.22rem" 
              @click="tapBarrageButton('barrageSize',item.value)"
              :name="barrageSize === item.value && checked
              ? require(`@/assets/images/user/${item.activeIcon}`) 
              : require(`@/assets/images/user/${item.icon}`)" />
            </div>
          </template>
        </van-cell>
        <van-cell title="弹幕位置" class="ai-c base-cell">
          <template #default>
            <div class="w100 flex ai-c jc-e">
              <van-icon v-for="item in barragePositionList" :key="item.value" size="1.22rem" 
              @click="tapBarrageButton('barragePostion',item.value)"
              :name="barragePostion === item.value && checked
              ? require(`@/assets/images/user/${item.activeIcon}`) 
              : require(`@/assets/images/user/${item.icon}`)" />
            </div>
          </template>
        </van-cell>
      </div>
    </div>
  </div>
</template>

<script>
import { Cell, Switch, Slider, Icon } from 'vant';
export default {
  components:{
    headerNav: () => import('@/views/user/components/header'),
    [Cell.name]: Cell,
    [Switch.name]: Switch,
    [Slider.name]: Slider,
    [Icon.name]: Icon
  },

  data() {
    return {
      checked:true,
      sliderValue:50,
      barrageSize:2,
      barrageSizeList:[
        {value:1,icon:'icon_dazihao_mr.png',activeIcon:'icon_dazihao.png'},
        {value:2,icon:'icon_zhongzihao_mr.png',activeIcon:'icon_zhongzihao.png'},
        {value:3,icon:'icon_xiaozihao_mr.png',activeIcon:'icon_xiaozihao.png'}
      ],
      barragePostion:'full',
      barragePositionList:[
        {value:'top',icon:'icon_dingbu_mr.png',activeIcon:'icon_dingbu.png'},
        {value:'full',icon:'icon_quanping_mr.png',activeIcon:'icon_quanping.png'},
        {value:'bottom',icon:'icon_dibu_mr.png',activeIcon:'icon_dibu.png'}
      ],
    };
  },

  created() {
    

  },
  methods:{
    onChange() {

    },
    tapBarrageButton(key,value) {
      if(this.checked) {
        this[key] = value;
      }
    }
  }
};
</script>
<style lang="stylus">
@import '../../common';
  .barrage-page{
    .cell-box{
      margin-bottom: 19px;
    }
    .van-cell__value{
      display:flex;
      justify-content:flex-end;
      overflow: visible;
      flex: 1.5;
    }
    .van-switch--on{
      background-color: $theme-txt-color5;
    }
    .van-slider__button{
      background-color: $theme-txt-color5;
      width: 38px;
      height: 38px;
    }
    .van-slider__bar{
      background-color: $theme-txt-color5;
    }
    .slider-value{
      margin-right: 26px;
      font-size: 32px;
      color: $theme-txt-color;   
    }
    .van-icon{
      margin-left: 31px;  
    }
  }
</style>
