import { Button, CountDown, Field, Toast} from 'vant';
import { APIs } from '@/http';
import { mapGetters } from 'vuex';
import { isPhone, isCode, isPassword, isEmail } from '@/utils/validate';

export default {
  components:{
    headerNav: () => import('@/views/user/components/header'),
    [Field.name]: Field,
    [Button.name]: Button,
    [CountDown.name]: CountDown
  },
  computed:{
    ...mapGetters(['userinfo'])
  },
  data() {
    return {
      initObj:null,
      type: this.$route.query.type,
      time: 60000,
      isCountDown: false,
      phoneCountryCode: '086',
      phoneNum: '',
      code: '',
      userPass: '',
      conUserPass: '',
      oldPwd: '',
      email:''
    };
  },

  created() {
    
    // 初始化title显示
    this.initObj = this.initData(this.type);

    if(this.type === 'password') {
      this.phoneCountryCode = this.userinfo.phoneCountryCode;
      this.phoneNum = this.userinfo.phoneNum;
    }

  },
  methods:{

    // 根据路由传过来的TYPE变更title显示及初始化方法数据
    initData(type) {
      const typeFormat = {
        'password':{
          title: '修改密码',
          codeType: 5,
          getCodeFn: this.getPhoneCode,
          updateFn: null
        },
        'phone':{
          title:'修改手机号码',
          codeType: 6,
          getCodeFn: APIs.phoncode,
          updateFn: APIs.uBindPhone
        },
        'email':{
          title: this.userinfo.email ? '修改邮箱' : '绑定邮箱',
          codeType: 4,
          getCodeFn: APIs.usendEmail,
          updateFn: APIs.ueditEmail
        }
      };
      return typeFormat[type];
    },

    // 点击获取按钮时触发
    tapGetCodeButton() {
      let params = {};
      params.codeType = this.initObj.codeType;
      if(this.type === 'email') {
        if(!isEmail(this.email)) {
          Toast('请输入正确的邮箱');
          return;
        }
        params.email = this.email;
      }else{
        if(!isPhone(this.phoneNum)) {
          Toast('请输入正确的手机号码');
          return;
        }
        params.phoneNum = this.phoneNum;
        params.phoneCountryCode = this.phoneCountryCode;
      }
      this.initObj.getCodeFn(params).then(res => {
        if(res.code === '200') {
          this.isCountDown = true;
          this.$refs.countDown.start();
        }else {
          Toast('获取验证码失败');
        }
      });
    },

    // 验证码倒计时结束时触发
    countDownFinished() {
      this.isCountDown = false;  // 重置倒计时状态
      this.$refs.countDown.reset(); // 初始化倒计时组件
    },

    // 修改密码前验证手机号码
    validatePhone() {
      return new Promise((resolve,reject)=>{
        APIs.uPassVerify({
          phoneCountryCode:this.phoneCountryCode,
          code: this.code,
          phoneNum: this.phoneNum
        }).then(res => {
          if(res.code === '200') {
            resolve();
          }else{
            reject();
          }
        });
      });
    },

    // 点击提交按钮触发
    tapSubmitButton() {

      // 参数确定，以及验证所有值
      let params = {};
      params.userId = this.userinfo.userId;
      params.code = this.code;
      if(this.type === 'email') {
        if(!isEmail(this.email)) {
          Toast('请输入正确的邮箱');
          return;
        }
        params.email = this.email;
      }else if(this.type === 'phone') {
        if(!isPhone(this.phoneNum)) {
          Toast('请输入正确的手机号码');
          return;
        }
        params.phoneNum = this.phoneNum;
        params.phoneCountryCode = this.phoneCountryCode;
      }else{
        params.userPass = this.userPass;
      }
      if(!isCode(this.code)) {
        Toast('请输入正确的验证码');
        return;
      }
      
      // update 函数
      this.initObj.updateFn(params).then(res => {
        if(res.code === '200') {
          Toast(`${this.initObj.title}成功`);
        }else {
          Toast(`${this.initObj.title}失败`);
        }
        this.$router.push('/user/info/safe');
      });
    }
  }
};