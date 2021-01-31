import {Cell, Image as VanImage, Uploader, ActionSheet, Button, Loading, Toast} from 'vant';
import { APIs } from '@/http';
import md5 from 'js-md5';
import { mapGetters } from 'vuex';

export default {
  components:{
    headerNav: () => import('../components/header'),
    [Cell.name]: Cell,
    [VanImage.name]: VanImage,
    [Uploader.name]: Uploader,
    [ActionSheet.name]: ActionSheet,
    [Button.name]: Button,
    [Loading.name]: Loading,
    [Toast.name]: Toast
  },
  computed:{
    ...mapGetters(['userinfo','bankinfo'])
  },
  data() {
    return {
      actionSheetShow: false,
      isUploadAvatarImg: false
    };
  },
  created() {
    this.getUserBank();
  },
  methods: {

    // uvgetBank 获取用户绑定银行卡
    getUserBank() {
      APIs.uvgetBank().then(res => {
        if(res.code === '200') {
          this.$store.commit('user/SET_BANKINFO', res.data);
        }
      });
    },

    // 文件读取完成后的回调函数
    afterRead(file) {
      this.actionSheetShow = false;
      let userId = this.userinfo.userId;
      let form = new FormData();
      let byte = 2 * 1024 * 1024; // 上传限制大小2M

      // 此处判断上传文件的大小 
      if(file.file.size > byte) {
        Toast('头像图片大小超过限制');
        return;
      }

      // 设置头部信息
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data;',
          'x-uid': userId
        }
      };

      form.append('file', file.file);
      let fr = new FileReader();
      fr.readAsArrayBuffer(file.file,'UTF-8'); // 将文件读成二进制流
      let that = this;
      fr.onload =  function(e) {
        let urlData = md5(this.result);
        form.append('md5', urlData);
        that.isUploadAvatarImg = true;
        APIs.uuploadImg(form, config).then(res => {
          APIs.ueditPro({userId, picGuid: res.data}).then(res => {
            that.userinfo.headicon = res.data;
            that.$store.commit('user/SET_USERINFO',that.userinfo);
            Toast('头像修改成功');
            that.isUploadAvatarImg = false;
          });
        },err => {
          Toast('头像修改失败');
          that.isUploadAvatarImg = false;
        });
      };
    },

    // 点击头像Cell时触发
    tapAvatarCell() {
      if(!this.isUploadAvatarImg) { // 显示弹出选项，当图片正在上传时不弹出
        this.actionSheetShow = true;
      }
    }
  },
};