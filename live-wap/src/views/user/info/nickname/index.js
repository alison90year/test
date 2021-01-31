import { Field, Toast } from 'vant';
import { APIs } from '@/http';
import { debounce} from '@/utils/tool';
import { mapGetters } from 'vuex';
export default {
  components:{
    headerNav: () => import('@/views/user/components/header'),
    [Field.name]: Field,
    [Toast.name]: Toast
  },
  computed:{
    ...mapGetters(['userinfo'])
  },
  data() {
    return {
      nickName:'',
    };
  },
  created() {
    this.nickName = this.userinfo.nickname;
  },
  methods: {
    // 昵称内容变化时触发 修改用户昵称 防抖
    setNickName:debounce(function () {
      let userId = this.userinfo.userId;
      let nickname = this.nickName;
      APIs.ueditName({userId,nickname}).then(res => {
        if(res.code === '200') {
          Toast('修改成功');
          let userinfo = this.userinfo;
          userinfo.nickname = nickname;
          this.$store.commit('user/SET_USERINFO',userinfo);
          this.$router.push('/user/info');
        }else{
          Toast(res.message);
        }
      });
    },2000),
  },
};