import { Field, Area, ActionSheet, Cell, Button, Toast} from 'vant';
import areaList from './area';
import bankList from './bankList';
import {APIs} from '@/http';
import { isPhone, isBankCard } from '@/utils/validate';
import { formTrim } from '@/utils/tool';


export default {
  components:{
    headerNav: () => import('@/views/user/components/header'),
    indexBar: () => import('@/components/index-bar/index.vue'),
    [Field.name]: Field,
    [Area.name]: Area,
    [ActionSheet.name]: ActionSheet,
    [Cell.name]: Cell,
    [Button.name]: Button
  },
  data() {
    return {
      areaList: areaList,
      areaActhionSheet: false,
      bankActhionSheet: false,
      bankList: bankList,
      accountName:'',  // 判断是修改还是新绑定状态
      isLoading: false,
      bankinfo:{
        id:'',
        accountName:'',
        bank:'',
        bankCard:'',
        province:'',
        city:'',
        subbranch:'',
        bankPhone:''
      }
    };
  },
  created() {
    this.bankinfo = {...this.bankinfo,...this.$store.getters.bankinfo};
    if(this.bankinfo.accountName) {
      this.accountName = this.bankinfo.accountName;
    }
    this.getUserBank();
  },
  methods: {
    searchResult() {

    },
    getUserBank() {
      APIs.uvgetBank().then(res => {
        if(res.code === '200' && res.data) {
          this.$store.commit('user/SET_BANKINFO', res.data);
          this.bankinfo = res.data;
          this.accountName = this.bankinfo.accountName;
        }
      });
    },

    // 地址选择框点击右上方完成按钮触发
    areaActionSheetConfirm(arr) {
      this.areaActhionSheet = false;
      this.bankinfo.province = arr[0].name;
      this.bankinfo.city = arr[1].name;
    },

    // 点击银行卡时候回调
    getBankValue(value) { 
      this.closeBankIndexBar();
      this.bankinfo.bank = value.title;
    },
    closeBankIndexBar() {
      this.bankActhionSheet = false;
    },

    // 绑定银行卡
    bindBankCard() {
      let { bankPhone, bankCard } = this.bankinfo; 
      if(!isPhone(bankPhone)) {
        Toast('请输入正确的手机号');
        return;
      }
      if(bankCard.indexOf('****') === -1) {
        if(!isBankCard(bankCard)) {
          Toast('请输入8到19位银行卡号');
          return;
        }
      }
      this.isLoading = true;
      let params = formTrim(this.bankinfo,['id','province','city','bank','bankPhone','bankCard']);
      APIs.uvBindBank(params).then(res => {
        if(res.code === '200') {
          Toast('保存成功');
          this.$router.push('/user/info');
        }else {
          Toast('保存失败');
        }
        this.isLoading = false;
      });
    }
  },
};