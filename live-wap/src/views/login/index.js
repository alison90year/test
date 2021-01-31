import { NavBar, Toast, Field, CellGroup, Cell, Button, Icon, Col, Row, Form, Dialog, Popup } from 'vant';
import { APIs } from '../../http';
import { encodePass } from '@/utils/tool';
import { isPhone, isCode, isPassword, isEmail } from '@/utils/validate';
export default {
  name: 'Login',
  components: {
    telephone: () =>
      import ('./components/telephone.vue'),
    [NavBar.name]: NavBar,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Col.name]: Col,
    [Row.name]: Row,
    [Form.name]: Form,
    [Dialog.name]: Dialog,
    [Popup.name]: Popup,
  },
  data() {
    return {
      form: {
        phoneCountryCode: '086',
        phoneNum: '',
        password: '',
        code: ''
      },
      status: 1,
      imgcode: '',
      validateCodeGuid: '',
      salt: '',
      passmiss: false,
      pwdShow: false,
      passwordType: 'password',
      popupIsShow: false,
      isAuto:false
    };
  },
  mounted() {},
  methods: {
    // 注册
    goToReg() {
      this.checkReg();
      APIs.getSalt().then(res => {
        let params = Object.assign({}, this.form, {
          userPass: encodePass(this.form.password, res.data)
        });
        APIs.user_reg(params).then(res => {
          const token = res.data.token;
          localStorage.setItem('token', JSON.stringify(token));
          sessionStorage.setItem('token', JSON.stringify(token));
          Toast.success('注册成功');
          this.status = 1;
        }, err => { Toast('注册失败'); });
      });
    },

    // 登录
    toLogin() {

      if (this.status === 2) { // 验证码登录
        this.checkCode();
        let params = Object.assign({}, this.form, { loginType: 1 });
        this.toLoginFun(params);
      } else { // 账号密码登录
        this.checkPhone();
        APIs.getSalt().then(res => {
          let params = Object.assign({}, this.form, {
            loginType: 3,
            validateCodeGuid: this.validateCodeGuid,
            salt: res.data,
            password: encodePass(this.form.password, res.data)
          });
          this.toLoginFun(params);
        });

      }
    },
    // 登录方法
    toLoginFun(params) {
      APIs.phoneLogin(params).then(res => {
        if (res.code === '200') {
          this.passmiss = false;
          const token = res.data;
          localStorage.setItem('token', JSON.stringify(token));
          sessionStorage.setItem('token', JSON.stringify(token));
          this.$store.commit('user/SET_USERINFO', token);
          this.$store.dispatch('user/getUserInfo', { userId: token.userId });
          Toast.success('登录成功');
          this.$router.push('/home');
        }
      }).catch(err => {
        if (err.data.code === '2011') {
          this.passmiss = true;
          this.getImgCode();
        }
        if (err.data.code === '2003' && err.data.message === 'USER ACCOUNT OR PASSWORD IS WRONG!') {
          Toast('帐号或密码错误!');
        }
        if (err.data.code === '500' && err.data.message === 'this user not exist!') {
          Toast('用户未注册!');
          Dialog.confirm({
            title: '提示',
            message: '该用户暂未注册，是否立即注册？',
          })
            .then(() => {
              this.status = 3;
            })
            .catch(() => {
              return;
            });
        }
      });
    },
    // 密码可见不可见
    switchPasswordType() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    },
    // 修改密码
    goToComplete() {
      APIs.getSalt().then(res => {
        let params = Object.assign({}, this.form, {
          userPass: encodePass(this.form.password, res.data)
        });
        APIs.forgetPass(params).then(res => {
          this.status = 1;
          Toast.success('修改成功');
        }, err => {
          Toast('修改失败');
        });
      });
    },
    // 获取手机验证码  num 1-登录,2注册，3-找回密码,
    getCode(num) {
      if (this.form.phoneNum === '') {
        Toast('手机号不能为空');
        return;
      }
      if (!/(1[7358]\d{9}\s*,\s*)*(1[7358]\d{9})/.test(this.form.phoneNum)) {
        Toast('手机号码格式不正确');
      } 
      
      this.getPhoneCode(num);
    },
    getPhoneCode(num) {
      APIs.phoncode({
        phoneNum: this.form.phoneNum,
        phoneCountryCode: this.form.phoneCountryCode,
        codeType: num
      }).then(
        res => {
          Toast.success('验证码已发送');
        }, err => {
          if (err.data.code === '2001') {
            Toast('该号码不可用');
            if (err.data.message === 'USER_NOT_EXIST phone has been register!') {
              Dialog.confirm({
                title: '提示',
                message: '该用户已经存在，是否立即登录？',
              })
                .then(() => {
                  this.status = 1;
                })
                .catch(() => {
                  return;
                });
            }
          }
          // Toast('验证码发送失败');
        }
      );
    },
    // 获取图片验证码
    getImgCode() {
      if (this.form.phoneNum === '' || this.form.phoneCountryCode === '') {
        Toast('手机号或密码不能为空');
        return;
      }
      APIs.getImage().then(
        res => {
          this.imgcode = '';
          this.$nextTick(() => {
            this.imgcode = res.data.img;
            this.validateCodeGuid = res.data.validateCodeGuid;
          });
        },
        err => {
          Toast(err.data.message);
        }
      );
    },
    nextStep() {
      if (this.form.code === '') {
        Toast('验证码不能为空');
        return;
      } else {
        this.pwdShow = true;
      }

    },
    checkPhone() {
      if (this.form.phoneNum === '' || this.form.password === '') {
        Toast('手机号或密码不能为空');
      } else {
        if (!/(1[7358]\d{9}\s*,\s*)*(1[7358]\d{9})/.test(this.form.phoneNum)) {
          Toast('手机号码格式不正确');
        } else {
          return;
        }
      }
    },
    checkCode() {
      if (this.form.phoneNum === '' || this.form.code === '') {
        Toast('手机号或验证码不能为空');
      } else {
        if (!/(1[7358]\d{9}\s*,\s*)*(1[7358]\d{9})/.test(this.form.phoneNum)) {
          Toast('手机号码格式不正确');
        } else {
          return;
        }
      }
    },
    checkReg() {
      if (this.form.phoneNum === '' || this.form.password === '' || this.form.code === '') {
        Toast('填写有误选项不能为空');
      } else {
        if (!/(1[7358]\d{9}\s*,\s*)*(1[7358]\d{9})/.test(this.form.phoneNum)) {
          Toast('手机号码格式不正确');
        } else {
          if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/.test(this.form.password)) {
            Toast('手机密码格式不正确');
          }
        }
      }
    },
    // 区号选择
    getChangeArea(num) {
      this.form.phoneCountryCode = num;
      this.popupIsShow = false;
    },
    showPopup() {
      this.popupIsShow = true;
    },
    // 账号密码登录
    goToAcuntLog() {
      this.status = 1;
      this.isAuto = false;
    },

    // 验证码登录
    goToCodeLog() {
      this.status = 2;
      this.isAuto = false;
    },

    // 注册
    goToRegister() {
      this.status = 3;
      this.isAuto = true;
    },
    // 修改密码
    resetPass() {
      this.status = 4;
      this.isAuto = false;
    },
    // 返回
    onClickBack() {
      this.$router.back();
    },
  }
};